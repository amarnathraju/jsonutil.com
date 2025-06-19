
import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, XCircle, AlertTriangle, Info, Copy, FileText, Zap, Shield } from 'lucide-react';
import { validator } from '@/utils/jsonProcessors/validator';
import { Link } from 'react-router-dom';

const EnhancedValidator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isValidating, setIsValidating] = useState(false);

  const validateJSON = useCallback(async () => {
    if (!input.trim()) {
      setError('Please enter JSON data to validate');
      setResult(null);
      return;
    }

    setIsValidating(true);
    try {
      const validationResult = validator.validate(input);
      setResult(validationResult);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown validation error');
      setResult(null);
    } finally {
      setIsValidating(false);
    }
  }, [input]);

  const clearAll = () => {
    setInput('');
    setResult(null);
    setError(null);
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const loadExample = (exampleData: string) => {
    setInput(exampleData);
    setResult(null);
    setError(null);
  };

  const examples = [
    {
      name: 'Valid JSON',
      description: 'Well-formed JSON with various data types',
      data: `{
  "user": {
    "id": 12345,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "active": true,
    "roles": ["admin", "user"],
    "profile": {
      "age": 30,
      "city": "New York",
      "interests": ["coding", "music", "travel"]
    },
    "metadata": null
  }
}`
    },
    {
      name: 'Invalid JSON - Syntax Error',
      description: 'Common syntax errors for learning',
      data: `{
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com",
  "skills": ["JavaScript", "Python",]
}`
    },
    {
      name: 'Complex Nested Structure',
      description: 'Multi-level nested objects and arrays',
      data: `{
  "company": {
    "name": "TechCorp",
    "departments": [
      {
        "name": "Engineering",
        "employees": [
          {
            "id": 1,
            "name": "Alice",
            "skills": ["React", "Node.js"],
            "projects": [
              {"name": "Project A", "status": "active"},
              {"name": "Project B", "status": "completed"}
            ]
          }
        ]
      }
    ]
  }
}`
    }
  ];

  const commonErrors = [
    {
      error: "Trailing comma",
      example: '{"name": "John",}',
      fix: '{"name": "John"}',
      description: "Remove the comma after the last property"
    },
    {
      error: "Single quotes",
      example: "{'name': 'John'}",
      fix: '{"name": "John"}',
      description: "Use double quotes for strings and property names"
    },
    {
      error: "Unescaped quotes",
      example: '{"message": "He said "Hello""}',
      fix: '{"message": "He said \\"Hello\\""}',
      description: "Escape quotes inside strings with backslash"
    },
    {
      error: "Missing quotes",
      example: '{name: "John"}',
      fix: '{"name": "John"}',
      description: "Property names must be enclosed in double quotes"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
          JSON Validator
        </h1>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          Validate JSON syntax with detailed error reporting, structural analysis, and real-time feedback. 
          Our validator helps you identify and fix JSON syntax errors quickly and efficiently.
        </p>
        
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Why Use Our JSON Validator?
          </h3>
          <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
            <li>• <strong>Detailed Error Messages:</strong> Pinpoint exact error locations with line and column numbers</li>
            <li>• <strong>Security First:</strong> All validation happens in your browser - data never leaves your device</li>
            <li>• <strong>Comprehensive Analysis:</strong> Structure statistics, depth analysis, and type breakdown</li>
            <li>• <strong>Educational Features:</strong> Learn from common errors with examples and fixes</li>
            <li>• <strong>Fast Performance:</strong> Instant validation for files up to 10MB</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <Tabs defaultValue="validator" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="validator">Validator</TabsTrigger>
              <TabsTrigger value="guide">Error Guide</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
            </TabsList>

            <TabsContent value="validator" className="space-y-6">
              {/* Controls */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    JSON Validation Tool
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3 justify-center mb-4">
                    <Button 
                      onClick={validateJSON}
                      disabled={isValidating}
                      size="lg"
                      className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-8"
                    >
                      {isValidating ? 'Validating...' : 'Validate JSON'}
                    </Button>
                    <Button variant="outline" onClick={clearAll} size="lg">
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
                      Paste your JSON data here for validation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Enter your JSON data here..."
                      className="min-h-96 font-mono text-sm"
                    />
                    <div className="mt-2 text-xs text-slate-500">
                      Characters: {input.length} | Lines: {input.split('\n').length}
                    </div>
                  </CardContent>
                </Card>

                {/* Results Section */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Validation Results
                      {result?.valid && (
                        <Button size="sm" variant="outline" onClick={() => copyToClipboard(input)}>
                          <Copy className="w-4 h-4 mr-2" />
                          Copy
                        </Button>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {error ? (
                      <Alert variant="destructive">
                        <XCircle className="h-4 w-4" />
                        <AlertDescription>
                          {error}
                        </AlertDescription>
                      </Alert>
                    ) : result ? (
                      <div className="space-y-4">
                        {result.valid ? (
                          <>
                            <Alert>
                              <CheckCircle className="h-4 w-4" />
                              <AlertDescription className="text-green-700 dark:text-green-300">
                                ✅ Valid JSON! Your JSON syntax is correct and well-formed.
                              </AlertDescription>
                            </Alert>

                            {/* Structure Analysis */}
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">Structure Analysis</h4>
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <span className="text-slate-600 dark:text-slate-400">Objects:</span>
                                  <span className="ml-2 font-medium">{result.stats?.objects || 0}</span>
                                </div>
                                <div>
                                  <span className="text-slate-600 dark:text-slate-400">Arrays:</span>
                                  <span className="ml-2 font-medium">{result.stats?.arrays || 0}</span>
                                </div>
                                <div>
                                  <span className="text-slate-600 dark:text-slate-400">Properties:</span>
                                  <span className="ml-2 font-medium">{result.stats?.properties || 0}</span>
                                </div>
                                <div>
                                  <span className="text-slate-600 dark:text-slate-400">Max Depth:</span>
                                  <span className="ml-2 font-medium">{result.stats?.maxDepth || 0}</span>
                                </div>
                              </div>
                              
                              {result.stats?.types && (
                                <div className="mt-3">
                                  <span className="text-slate-600 dark:text-slate-400 block mb-2">Data Types:</span>
                                  <div className="flex flex-wrap gap-1">
                                    {Object.entries(result.stats.types).map(([type, count]) => (
                                      <Badge key={type} variant="outline" className="text-xs">
                                        {type}: {count as number}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Size Information */}
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <span className="text-slate-600 dark:text-slate-400">Size:</span>
                                  <span className="ml-2 font-medium">{result.size} bytes</span>
                                </div>
                                <div>
                                  <span className="text-slate-600 dark:text-slate-400">Formatted:</span>
                                  <span className="ml-2 font-medium">{result.formattedSize} bytes</span>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <Alert variant="destructive">
                            <XCircle className="h-4 w-4" />
                            <AlertDescription>
                              <div className="space-y-2">
                                <div className="font-medium">❌ Invalid JSON</div>
                                <div>{result.error}</div>
                                {result.line && (
                                  <div className="text-sm">
                                    Error at line {result.line}, column {result.column}
                                  </div>
                                )}
                              </div>
                            </AlertDescription>
                          </Alert>
                        )}
                      </div>
                    ) : (
                      <div className="text-center text-slate-500 py-8">
                        <FileText className="w-8 h-8 mx-auto mb-2 opacity-50" />
                        <p>Enter JSON data and click "Validate JSON" to see results</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="guide" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Common JSON Errors & Solutions
                  </CardTitle>
                  <CardDescription>
                    Learn to identify and fix the most common JSON syntax errors
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {commonErrors.map((item, index) => (
                      <div key={index} className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <XCircle className="w-4 h-4 text-red-500" />
                          {item.error}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{item.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm font-medium text-red-600 dark:text-red-400 mb-1">❌ Incorrect:</p>
                            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-2 rounded">
                              <code className="text-sm">{item.example}</code>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-green-600 dark:text-green-400 mb-1">✅ Correct:</p>
                            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-2 rounded">
                              <code className="text-sm">{item.fix}</code>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* JSON Syntax Rules */}
              <Card>
                <CardHeader>
                  <CardTitle>JSON Syntax Rules</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3 text-green-600 dark:text-green-400">✅ Valid JSON Rules:</h4>
                      <ul className="text-sm space-y-2">
                        <li>• Use double quotes for strings and property names</li>
                        <li>• Separate data with commas</li>
                        <li>• Objects enclosed in curly braces { }</li>
                        <li>• Arrays enclosed in square brackets [ ]</li>
                        <li>• Escape special characters with backslash</li>
                        <li>• No trailing commas allowed</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 text-red-600 dark:text-red-400">❌ Invalid JSON:</h4>
                      <ul className="text-sm space-y-2">
                        <li>• Single quotes for strings</li>
                        <li>• Unquoted property names</li>
                        <li>• Trailing commas</li>
                        <li>• Comments (// or /* */)</li>
                        <li>• Undefined or function values</li>
                        <li>• Unescaped control characters</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="examples" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Example JSON Data</CardTitle>
                  <CardDescription>
                    Click any example to load it into the validator
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {examples.map((example, index) => (
                      <div
                        key={index}
                        className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 cursor-pointer hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                        onClick={() => loadExample(example.data)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{example.name}</h4>
                          <Badge variant="outline">Click to load</Badge>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{example.description}</p>
                        <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded overflow-x-auto">
                          <pre className="text-xs text-slate-600 dark:text-slate-400">
                            {example.data.substring(0, 200)}...
                          </pre>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Additional Resources */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>📚 Learn More About JSON Validation</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <h3>Why JSON Validation is Critical</h3>
              <p>
                JSON validation is the first line of defense against data corruption, application crashes, 
                and security vulnerabilities. Invalid JSON can cause:
              </p>
              <ul>
                <li>Runtime errors in applications</li>
                <li>API failures and poor user experience</li>
                <li>Data corruption in databases</li>
                <li>Security vulnerabilities from malformed input</li>
              </ul>
              
              <h3>Best Practices for JSON Validation</h3>
              <ul>
                <li><strong>Validate Early:</strong> Check JSON syntax before processing data</li>
                <li><strong>Use Schema Validation:</strong> Implement JSON Schema for structure validation</li>
                <li><strong>Provide Clear Errors:</strong> Give users specific, actionable error messages</li>
                <li><strong>Test Edge Cases:</strong> Validate with empty objects, large files, and malformed data</li>
                <li><strong>Security First:</strong> Never trust external JSON without validation</li>
              </ul>

              <h3>Integration with Development Workflow</h3>
              <p>
                Integrate JSON validation into your development process:
              </p>
              <ul>
                <li>Use pre-commit hooks to validate JSON files</li>
                <li>Implement API endpoint validation</li>
                <li>Add validation to your CI/CD pipeline</li>
                <li>Use IDE extensions for real-time validation</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full justify-start" 
                onClick={() => loadExample(examples[0].data)}
              >
                Load Valid Example
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full justify-start"
                onClick={() => loadExample(examples[1].data)}
              >
                Load Invalid Example
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full justify-start"
                onClick={() => loadExample(examples[2].data)}
              >
                Load Complex Example
              </Button>
              <Separator />
              <div className="text-xs text-slate-500">
                <p className="mb-2"><strong>Keyboard Shortcuts:</strong></p>
                <p>• Ctrl+Enter: Validate</p>
                <p>• Ctrl+L: Clear All</p>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">🔗 Related Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link to="/formatter" className="block text-blue-600 dark:text-blue-400 hover:underline text-sm">
                → JSON Formatter
              </Link>
              <Link to="/schema" className="block text-blue-600 dark:text-blue-400 hover:underline text-sm">
                → Schema Generator
              </Link>
              <Link to="/converter" className="block text-blue-600 dark:text-blue-400 hover:underline text-sm">
                → JSON Converter
              </Link>
              <Link to="/diff" className="block text-blue-600 dark:text-blue-400 hover:underline text-sm">
                → JSON Diff Tool
              </Link>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">💡 Pro Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <strong>Large Files:</strong> For files over 5MB, consider validating smaller sections first.
              </div>
              <div>
                <strong>Error Location:</strong> Pay attention to line and column numbers in error messages.
              </div>
              <div>
                <strong>Copy-Paste:</strong> Use Ctrl+A to select all text quickly.
              </div>
              <div>
                <strong>Browser Cache:</strong> Your preferences are saved locally for future visits.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EnhancedValidator;
