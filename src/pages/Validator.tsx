import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { validator } from '@/utils/jsonProcessors/validator';
import RelatedContent from '@/components/RelatedContent';

const Validator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<any>(null);
  const [stats, setStats] = useState<any>(null);

  const validateJSON = useCallback(() => {
    const validationResult = validator.validate(input);
    setResult(validationResult);
    
    if (validationResult.valid) {
      const statistics = validator.getStatistics(input);
      setStats(statistics);
    } else {
      setStats(null);
    }
  }, [input]);

  const clearInput = () => {
    setInput('');
    setResult(null);
    setStats(null);
  };

  const loadExample = (example: string) => {
    setInput(example);
    setResult(null);
    setStats(null);
  };

  const examples = [
    {
      name: 'Valid Object',
      data: `{
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com",
  "skills": ["JavaScript", "React", "Node.js"],
  "address": {
    "city": "New York",
    "country": "USA"
  }
}`
    },
    {
      name: 'Invalid - Missing Quotes',
      data: `{
  name: "John Doe",
  age: 30,
  email: "john@example.com"
}`
    },
    {
      name: 'Invalid - Trailing Comma',
      data: `{
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com",
}`
    }
  ];

  return (
    <>
      <Helmet>
        <title>JSON Validator - Free Online JSON Syntax Checker & Error Detector | JSONUtil.com</title>
        <meta name="description" content="Free JSON validator with detailed error reporting. Check JSON syntax, detect errors with line numbers, get fix suggestions, and analyze JSON structure. Fast, secure validation in your browser." />
        <link rel="canonical" href="https://jsonutil.com/#/validator" />
        <meta property="og:title" content="JSON Validator - Free Online JSON Syntax Checker | JSONUtil.com" />
        <meta property="og:description" content="Free JSON validator with detailed error reporting. Check JSON syntax, detect errors with line numbers, and get fix suggestions." />
      </Helmet>
      <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
          JSON Validator
        </h1>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          Validate JSON syntax with detailed error reporting and real-time feedback. Our JSON validator helps you identify and fix syntax errors in your JSON data with precise error messages and helpful suggestions.
        </p>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Features:</h3>
          <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
            <li>• Real-time JSON syntax validation</li>
            <li>• Detailed error reporting with line and column numbers</li>
            <li>• Statistical analysis of JSON structure</li>
            <li>• Helpful suggestions for common errors</li>
            <li>• Support for large JSON files</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Input Section */}
            <Card>
              <CardHeader>
                <CardTitle>JSON Input</CardTitle>
                <CardDescription>
                  Paste your JSON data here to validate
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter JSON data..."
                  className="min-h-96 font-mono text-sm"
                />
                
                {/* Main Action Button */}
                <div className="flex justify-center">
                  <Button 
                    size="lg" 
                    onClick={validateJSON}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-8"
                  >
                    Validate JSON
                  </Button>
                </div>
                
                {/* Secondary Actions */}
                <div className="flex gap-2 justify-center pt-2">
                  <Button variant="outline" size="sm" onClick={clearInput}>
                    Clear
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Results Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Validation Results
                  {result && (
                    <Badge variant={result.valid ? "default" : "destructive"}>
                      {result.valid ? "Valid" : "Invalid"}
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {result ? (
                  <div className="space-y-4">
                    {result.valid ? (
                      <Alert>
                        <AlertDescription>
                          ✅ Valid JSON! Your data is properly formatted.
                        </AlertDescription>
                      </Alert>
                    ) : (
                      <div className="space-y-3">
                        <Alert variant="destructive">
                          <AlertDescription>
                            ❌ {result.error}
                            {result.lineNumber && (
                              <div className="mt-2 text-sm">
                                Line {result.lineNumber}, Column {result.columnNumber}
                              </div>
                            )}
                          </AlertDescription>
                        </Alert>
                        
                        {result.suggestions && result.suggestions.length > 0 && (
                          <div>
                            <h4 className="font-medium mb-2">Suggestions:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 dark:text-slate-400">
                              {result.suggestions.map((suggestion, index) => (
                                <li key={index}>{suggestion}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                    {stats && (
                      <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                        <h4 className="font-medium mb-2">Statistics:</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>Max Depth: {stats.maxDepth}</div>
                          <div>Objects: {stats.objects}</div>
                          <div>Arrays: {stats.arrays}</div>
                          <div>Strings: {stats.strings}</div>
                          <div>Numbers: {stats.numbers}</div>
                          <div>Booleans: {stats.booleans}</div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center text-slate-500 py-8">
                    Enter JSON data and click "Validate JSON" to see results
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Examples Section */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Try These Examples</CardTitle>
              <CardDescription>
                Click any example to load it into the validator
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
                    <h4 className="font-medium mb-2">{example.name}</h4>
                    <pre className="text-xs text-slate-600 dark:text-slate-400 overflow-hidden">
                      {example.data.substring(0, 100)}...
                    </pre>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Documentation Section */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>📚 JSON Validation Guide</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <h3>What is JSON Validation?</h3>
              <p>JSON (JavaScript Object Notation) validation ensures your data follows the correct syntax rules. Valid JSON must have:</p>
              <ul>
                <li>Properly quoted strings (double quotes only)</li>
                <li>Correctly nested objects and arrays</li>
                <li>No trailing commas</li>
                <li>Proper escape sequences for special characters</li>
              </ul>
              
              <h3>Common JSON Errors</h3>
              <ul>
                <li><strong>Missing quotes:</strong> Property names must be in double quotes</li>
                <li><strong>Trailing commas:</strong> Remove commas after the last element</li>
                <li><strong>Single quotes:</strong> Use double quotes for strings</li>
                <li><strong>Unclosed brackets:</strong> Ensure all brackets and braces are properly closed</li>
              </ul>
              
              <h3>Best Practices</h3>
              <ul>
                <li>Use consistent indentation for readability</li>
                <li>Validate JSON before using it in applications</li>
                <li>Use meaningful property names</li>
                <li>Keep nesting levels reasonable for performance</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar with Ad */}
        <div className="lg:col-span-1">
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">💡 Pro Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <strong>Real-time validation:</strong> See errors as you type with instant feedback.
              </div>
              <div>
                <strong>Error suggestions:</strong> Get helpful hints to fix common JSON issues.
              </div>
              <div>
                <strong>Statistics:</strong> Analyze your JSON structure with detailed metrics.
              </div>
              <div>
                <strong>Privacy:</strong> All validation happens in your browser - your data never leaves your device.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Related Content */}
      <RelatedContent currentPage="validator" />
    </div>
    </>
  );
};

export default Validator;
