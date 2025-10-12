import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { formatter } from '@/utils/jsonProcessors/formatter';
import RelatedContent from '@/components/RelatedContent';

const Formatter = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [indent, setIndent] = useState(2);
  const [sortKeys, setSortKeys] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const formatJSON = useCallback(() => {
    try {
      const formatterResult = formatter.format(input, { indent, sortKeys, preserveOrder: !sortKeys });
      setOutput(formatterResult.formatted);
      setResult(formatterResult);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      setOutput('');
      setResult(null);
    }
  }, [input, indent, sortKeys]);

  const minifyJSON = useCallback(() => {
    try {
      const formatterResult = formatter.minify(input);
      setOutput(formatterResult.formatted);
      setResult(formatterResult);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      setOutput('');
      setResult(null);
    }
  }, [input]);

  const clearAll = () => {
    setInput('');
    setOutput('');
    setResult(null);
    setError(null);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(output);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const loadExample = (exampleData: string) => {
    setInput(exampleData);
    setOutput('');
    setResult(null);
    setError(null);
  };

  const examples = [
    {
      name: 'API Response',
      description: 'Typical REST API response',
      data: `{"users":[{"id":1,"name":"Alice Johnson","email":"alice@example.com","role":"admin","settings":{"theme":"dark","notifications":true}},{"id":2,"name":"Bob Smith","email":"bob@example.com","role":"user","settings":{"theme":"light","notifications":false}}],"metadata":{"total":2,"page":1,"limit":10},"timestamp":"2024-01-15T10:30:00Z"}`
    },
    {
      name: 'Configuration File',
      description: 'Application configuration',
      data: `{"app":{"name":"MyApp","version":"1.0.0","debug":true},"database":{"host":"localhost","port":5432,"name":"mydb"},"features":{"auth":true,"analytics":false,"cache":{"enabled":true,"ttl":3600}}}`
    },
    {
      name: 'E-commerce Data',
      description: 'Product catalog entry',
      data: `{"product":{"id":"prod-123","title":"Wireless Headphones","price":99.99,"currency":"USD","categories":["electronics","audio"],"specs":{"battery":"20h","weight":"250g","color":"black"},"reviews":{"average":4.5,"count":128}}}`
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
          JSON Formatter
        </h1>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          Beautify and format JSON with customizable indentation and sorting options. Our formatter helps you make JSON readable and properly structured for development and debugging.
        </p>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Features:</h3>
          <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
            <li>• Format with 2, 4, or 8 space indentation</li>
            <li>• Minify JSON to reduce file size</li>
            <li>• Sort object keys alphabetically</li>
            <li>• Real-time size comparison</li>
            <li>• Copy formatted output to clipboard</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Controls */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Formatting Options</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-center gap-6 mb-4">
                <div className="flex items-center space-x-2">
                  <Label htmlFor="indent">Indentation:</Label>
                  <Select value={indent.toString()} onValueChange={(value) => setIndent(parseInt(value))}>
                    <SelectTrigger className="w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="8">8</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="sort-keys"
                    checked={sortKeys}
                    onCheckedChange={setSortKeys}
                  />
                  <Label htmlFor="sort-keys">Sort Keys</Label>
                </div>
              </div>
              
              {/* Main Action Buttons */}
              <div className="flex gap-3 justify-center mb-4">
                <Button 
                  onClick={formatJSON}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8"
                >
                  Format JSON
                </Button>
                <Button 
                  variant="outline" 
                  onClick={minifyJSON}
                  size="lg"
                  className="px-8"
                >
                  Minify JSON
                </Button>
              </div>
              
              {/* Secondary Actions */}
              <div className="flex gap-2 justify-center">
                <Button variant="outline" size="sm" onClick={clearAll}>
                  Clear All
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
                  Formatted Output
                  {output && (
                    <Button size="sm" variant="outline" onClick={copyToClipboard}>
                      Copy
                    </Button>
                  )}
                </CardTitle>
                {result && (
                  <div className="flex gap-2 mt-2">
                    <Badge variant="outline">
                      Original: {result.originalSize} chars
                    </Badge>
                    <Badge variant="outline">
                      Formatted: {result.formattedSize} chars
                    </Badge>
                    <Badge variant={result.compressionRatio > 1 ? "destructive" : "default"}>
                      {result.compressionRatio > 1 ? '+' : ''}{((result.compressionRatio - 1) * 100).toFixed(1)}%
                    </Badge>
                  </div>
                )}
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
                    placeholder="Formatted JSON will appear here..."
                    className="min-h-96 font-mono text-sm"
                  />
                )}
              </CardContent>
            </Card>
          </div>

          {/* Examples Section */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Try These Examples</CardTitle>
              <CardDescription>
                Click any example to load it into the formatter
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {examples.map((example, index) => (
                  <div
                    key={index}
                    className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                    onClick={() => loadExample(example.data)}
                  >
                    <h4 className="font-medium mb-1">{example.name}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">{example.description}</p>
                    <div className="text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 p-2 rounded overflow-hidden">
                      {example.data.substring(0, 80)}...
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Documentation Section */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>📚 JSON Formatting Guide</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <h3>Why Format JSON?</h3>
              <p>Well-formatted JSON is essential for:</p>
              <ul>
                <li>Reading and debugging code</li>
                <li>Code reviews and collaboration</li>
                <li>API documentation</li>
                <li>Configuration file management</li>
              </ul>
              
              <h3>Formatting vs Minification</h3>
              <p><strong>Formatting</strong> adds indentation and line breaks for human readability. Use when:</p>
              <ul>
                <li>Debugging applications</li>
                <li>Creating documentation</li>
                <li>Code reviews</li>
              </ul>
              
              <p><strong>Minification</strong> removes all unnecessary whitespace to reduce file size. Use when:</p>
              <ul>
                <li>Deploying to production</li>
                <li>API responses</li>
                <li>Storing in databases</li>
              </ul>
              
              <h3>Best Practices</h3>
              <ul>
                <li>Use 2 or 4 spaces for consistent indentation</li>
                <li>Sort keys for better version control diffs</li>
                <li>Minify JSON for production environments</li>
                <li>Keep formatting consistent across your project</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">🎨 Formatting Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <strong>Indentation:</strong> Choose between 2, 4, or 8 spaces for better readability.
              </div>
              <div>
                <strong>Sort Keys:</strong> Alphabetically order object keys for consistency.
              </div>
              <div>
                <strong>Minify:</strong> Remove all whitespace to reduce file size.
              </div>
              <div>
                <strong>Size Analysis:</strong> See how formatting affects your JSON size.
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">⚡ Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" size="sm" className="w-full" onClick={() => setIndent(2)}>
                2 Space Indent
              </Button>
              <Button variant="outline" size="sm" className="w-full" onClick={() => setIndent(4)}>
                4 Space Indent  
              </Button>
              <Button variant="outline" size="sm" className="w-full" onClick={() => { setSortKeys(true); formatJSON(); }}>
                Sort & Format
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Related Content */}
      <RelatedContent currentPage="formatter" />
    </div>
  );
};

export default Formatter;
