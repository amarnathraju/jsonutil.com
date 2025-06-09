
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp } from 'lucide-react';
import AdBanner from '@/components/ads/AdBanner';

const Converter = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [outputFormat, setOutputFormat] = useState('csv');
  const [error, setError] = useState<string | null>(null);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);

  const convertToCSV = (jsonData: any): string => {
    if (Array.isArray(jsonData) && jsonData.length > 0) {
      const headers = Object.keys(jsonData[0]);
      const csvHeaders = headers.join(',');
      const csvRows = jsonData.map(row => 
        headers.map(header => {
          const value = row[header];
          // Handle objects and arrays properly
          if (typeof value === 'object' && value !== null) {
            const stringValue = JSON.stringify(value);
            return `"${stringValue.replace(/"/g, '""')}"`;
          }
          if (typeof value === 'string' && (value.includes(',') || value.includes('"') || value.includes('\n'))) {
            return `"${value.replace(/"/g, '""')}"`;
          }
          return value;
        }).join(',')
      );
      return [csvHeaders, ...csvRows].join('\n');
    } else if (typeof jsonData === 'object' && jsonData !== null) {
      const entries = Object.entries(jsonData);
      return entries.map(([key, value]) => {
        if (typeof value === 'object' && value !== null) {
          return `${key},"${JSON.stringify(value).replace(/"/g, '""')}"`;
        }
        return `${key},${value}`;
      }).join('\n');
    }
    return 'Cannot convert to CSV: Data must be an array of objects or a simple object';
  };

  const convertToXML = (jsonData: any, rootElement = 'root'): string => {
    const toXML = (obj: any, name: string): string => {
      if (Array.isArray(obj)) {
        return obj.map(item => toXML(item, name)).join('');
      } else if (typeof obj === 'object' && obj !== null) {
        const content = Object.entries(obj)
          .map(([key, value]) => toXML(value, key))
          .join('');
        return `<${name}>${content}</${name}>`;
      } else {
        return `<${name}>${obj}</${name}>`;
      }
    };
    return `<?xml version="1.0" encoding="UTF-8"?>\n${toXML(jsonData, rootElement)}`;
  };

  const convertToYAML = (jsonData: any, indent = 0): string => {
    const spaces = '  '.repeat(indent);
    
    if (Array.isArray(jsonData)) {
      return jsonData.map(item => {
        if (typeof item === 'object' && item !== null) {
          return `${spaces}- ${convertToYAML(item, indent + 1).trim()}`;
        }
        return `${spaces}- ${item}`;
      }).join('\n');
    } else if (typeof jsonData === 'object' && jsonData !== null) {
      return Object.entries(jsonData).map(([key, value]) => {
        if (typeof value === 'object' && value !== null) {
          return `${spaces}${key}:\n${convertToYAML(value, indent + 1)}`;
        }
        return `${spaces}${key}: ${value}`;
      }).join('\n');
    }
    return String(jsonData);
  };

  const convertToTypeScript = (jsonData: any, interfaceName = 'JsonData'): string => {
    const getType = (value: any): string => {
      if (Array.isArray(value)) {
        if (value.length > 0) {
          return `${getType(value[0])}[]`;
        }
        return 'any[]';
      } else if (typeof value === 'object' && value !== null) {
        const properties = Object.entries(value)
          .map(([key, val]) => `  ${key}: ${getType(val)};`)
          .join('\n');
        return `{\n${properties}\n}`;
      } else if (typeof value === 'string') {
        return 'string';
      } else if (typeof value === 'number') {
        return 'number';
      } else if (typeof value === 'boolean') {
        return 'boolean';
      } else if (value === null) {
        return 'null';
      }
      return 'any';
    };

    return `export interface ${interfaceName} ${getType(jsonData)}`;
  };

  const convert = () => {
    try {
      setError(null);
      const jsonData = JSON.parse(input);
      
      let converted = '';
      switch (outputFormat) {
        case 'csv':
          converted = convertToCSV(jsonData);
          break;
        case 'xml':
          converted = convertToXML(jsonData);
          break;
        case 'yaml':
          converted = convertToYAML(jsonData);
          break;
        case 'typescript':
          converted = convertToTypeScript(jsonData);
          break;
        default:
          converted = 'Unsupported format';
      }
      
      setOutput(converted);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid JSON');
      setOutput('');
    }
  };

  const loadExample = () => {
    const example = {
      "users": [
        {
          "id": 1,
          "name": "Alice Johnson",
          "email": "alice@example.com",
          "age": 28,
          "active": true,
          "address": {
            "street": "123 Main St",
            "city": "New York",
            "zip": "10001"
          }
        },
        {
          "id": 2,
          "name": "Bob Smith", 
          "email": "bob@example.com",
          "age": 35,
          "active": false,
          "address": {
            "street": "456 Oak Ave",
            "city": "Los Angeles", 
            "zip": "90210"
          }
        }
      ]
    };
    setInput(JSON.stringify(example, null, 2));
  };

  const copyOutput = async () => {
    try {
      await navigator.clipboard.writeText(output);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          JSON Converter
        </h1>
        <p className="text-slate-600 dark:text-slate-300">
          Convert JSON to CSV, XML, YAML, TypeScript interfaces, and more formats.
        </p>
      </div>

      {/* Features Section */}
      <Card className="mb-6">
        <Collapsible open={featuresOpen} onOpenChange={setFeaturesOpen}>
          <CollapsibleTrigger asChild>
            <CardHeader className="cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  🔄 Converter Features
                </CardTitle>
                {featuresOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </div>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400">CSV Conversion</h4>
                  <ul className="space-y-1 text-slate-600 dark:text-slate-400">
                    <li>• Convert arrays of objects to CSV format</li>
                    <li>• Automatic header generation from object keys</li>
                    <li>• Proper escaping of special characters</li>
                    <li>• Nested object flattening support</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-green-600 dark:text-green-400">XML Conversion</h4>
                  <ul className="space-y-1 text-slate-600 dark:text-slate-400">
                    <li>• Generate valid XML with proper structure</li>
                    <li>• Custom root element naming</li>
                    <li>• Nested object to element conversion</li>
                    <li>• Array handling with repeated elements</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-yellow-600 dark:text-yellow-400">YAML Conversion</h4>
                  <ul className="space-y-1 text-slate-600 dark:text-slate-400">
                    <li>• Human-readable YAML output</li>
                    <li>• Proper indentation and structure</li>
                    <li>• Type preservation where possible</li>
                    <li>• List and dictionary formatting</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-purple-600 dark:text-purple-400">TypeScript Interfaces</h4>
                  <ul className="space-y-1 text-slate-600 dark:text-slate-400">
                    <li>• Type-safe interface generation</li>
                    <li>• Intelligent type inference</li>
                    <li>• Nested interface definitions</li>
                    <li>• Export-ready TypeScript code</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>

      {/* Guides Section */}
      <Card className="mb-6">
        <Collapsible open={guidesOpen} onOpenChange={setGuidesOpen}>
          <CollapsibleTrigger asChild>
            <CardHeader className="cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  📚 Conversion Guides
                </CardTitle>
                {guidesOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </div>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent className="pt-0">
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-lg mb-2">CSV Conversion Best Practices</h3>
                  <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <p><strong>Optimal Structure:</strong> Use an array of objects where each object has the same keys for consistent CSV headers.</p>
                    <p><strong>Nested Data:</strong> Complex nested objects will be stringified. Consider flattening your data structure first for better CSV output.</p>
                    <p><strong>Data Types:</strong> All values are converted to strings in CSV. Boolean and numeric types are preserved as text.</p>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-lg mb-2">XML Conversion Guidelines</h3>
                  <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <p><strong>Element Names:</strong> Object keys become XML element names. Ensure they follow XML naming conventions.</p>
                    <p><strong>Arrays:</strong> Array items are converted to repeated elements with the same tag name.</p>
                    <p><strong>Root Element:</strong> The converter automatically wraps your data in a root element for valid XML structure.</p>
                  </div>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="font-semibold text-lg mb-2">YAML Conversion Tips</h3>
                  <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <p><strong>Indentation:</strong> YAML uses spaces for indentation. The converter uses 2-space indentation by default.</p>
                    <p><strong>Data Types:</strong> YAML supports native data types. Strings, numbers, and booleans are preserved appropriately.</p>
                    <p><strong>Structure:</strong> Complex nested objects maintain their hierarchy in YAML format.</p>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-lg mb-2">TypeScript Interface Generation</h3>
                  <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <p><strong>Type Inference:</strong> The generator analyzes your JSON structure to create accurate TypeScript types.</p>
                    <p><strong>Nested Interfaces:</strong> Complex objects become nested interface definitions for type safety.</p>
                    <p><strong>Arrays:</strong> Array types are inferred from the first element and marked with [] notation.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Controls */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Conversion Options</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-center gap-6 mb-4">
                <div className="flex items-center space-x-2">
                  <label htmlFor="output-format" className="text-sm font-medium">
                    Convert to:
                  </label>
                  <Select value={outputFormat} onValueChange={setOutputFormat}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="csv">CSV</SelectItem>
                      <SelectItem value="xml">XML</SelectItem>
                      <SelectItem value="yaml">YAML</SelectItem>
                      <SelectItem value="typescript">TypeScript</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Main Action Button */}
              <div className="flex justify-center mb-4">
                <Button 
                  onClick={convert}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8"
                >
                  Convert to {outputFormat.toUpperCase()}
                </Button>
              </div>

              {/* Secondary Actions */}
              <div className="flex gap-2 justify-center">
                <Button variant="outline" size="sm" onClick={loadExample}>
                  Load Example
                </Button>
                <Button variant="outline" size="sm" onClick={() => { setInput(''); setOutput(''); setError(null); }}>
                  Clear
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Input Section */}
            <Card>
              <CardHeader>
                <CardTitle>JSON Input</CardTitle>
                <CardDescription>
                  Paste your JSON data here
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter JSON data..."
                  className="min-h-96 font-mono text-sm"
                />
              </CardContent>
            </Card>

            {/* Output Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {outputFormat.toUpperCase()} Output
                  {output && (
                    <Button size="sm" variant="outline" onClick={copyOutput}>
                      Copy
                    </Button>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {error ? (
                  <Alert variant="destructive">
                    <AlertDescription>
                      {error}
                    </AlertDescription>
                  </Alert>
                ) : (
                  <Textarea
                    value={output}
                    readOnly
                    placeholder={`Converted ${outputFormat.toUpperCase()} will appear here...`}
                    className="min-h-96 font-mono text-sm"
                  />
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <AdBanner position="sidebar" />
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">🔄 Supported Formats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <strong>CSV:</strong> Perfect for spreadsheet import/export. Handles arrays of objects.
              </div>
              <div>
                <strong>XML:</strong> Structured markup with custom root elements and proper escaping.
              </div>
              <div>
                <strong>YAML:</strong> Human-readable data serialization with proper indentation.
              </div>
              <div>
                <strong>TypeScript:</strong> Generate type-safe interfaces from your JSON structure.
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">💡 Conversion Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <strong>CSV:</strong> Works best with arrays of objects with consistent properties.
              </div>
              <div>
                <strong>XML:</strong> Nested objects become nested XML elements automatically.
              </div>
              <div>
                <strong>YAML:</strong> Maintains data types and nested structure beautifully.
              </div>
              <div>
                <strong>TypeScript:</strong> Infers types from your data structure for type safety.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Converter;
