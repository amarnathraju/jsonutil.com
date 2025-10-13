import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import RelatedContent from '@/components/RelatedContent';

const Path = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [pathQuery, setPathQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Basic JSONPath implementation
  const evaluateJSONPath = (data: any, path: string): any[] => {
    if (!path || path === '$') return [data];
    
    // Remove leading $ if present
    const cleanPath = path.replace(/^\$\.?/, '');
    if (!cleanPath) return [data];
    
    // Split path into segments
    const segments = cleanPath.split(/[\.\[\]]/g).filter(Boolean);
    
    let current = [data];
    
    for (const segment of segments) {
      const next: any[] = [];
      
      for (const item of current) {
        if (item === null || item === undefined) continue;
        
        if (segment === '*') {
          // Wildcard - get all values
          if (Array.isArray(item)) {
            next.push(...item);
          } else if (typeof item === 'object') {
            next.push(...Object.values(item));
          }
        } else if (segment.match(/^\d+$/)) {
          // Array index
          const index = parseInt(segment);
          if (Array.isArray(item) && index < item.length) {
            next.push(item[index]);
          }
        } else {
          // Object property
          if (typeof item === 'object' && item !== null && segment in item) {
            next.push(item[segment]);
          }
        }
      }
      
      current = next;
    }
    
    return current;
  };

  const executeQuery = () => {
    try {
      setError(null);
      const data = JSON.parse(jsonInput);
      const queryResults = evaluateJSONPath(data, pathQuery);
      setResults(queryResults);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid JSON or JSONPath query');
      setResults([]);
    }
  };

  const loadExample = () => {
    const exampleData = {
      "store": {
        "book": [
          {
            "category": "reference",
            "author": "Nigel Rees",
            "title": "Sayings of the Century",
            "price": 8.95
          },
          {
            "category": "fiction",
            "author": "Evelyn Waugh",
            "title": "Sword of Honour",
            "price": 12.99
          },
          {
            "category": "fiction",
            "author": "Herman Melville",
            "title": "Moby Dick",
            "price": 8.99
          }
        ],
        "bicycle": {
          "color": "red",
          "price": 19.95
        }
      }
    };
    
    setJsonInput(JSON.stringify(exampleData, null, 2));
    setPathQuery('$.store.book[*].title');
  };

  const quickQueries = [
    { label: 'All book titles', query: '$.store.book[*].title' },
    { label: 'First book', query: '$.store.book[0]' },
    { label: 'All prices', query: '$.store..*[price]' },
    { label: 'All items', query: '$.store.*' }
  ];

  return (
    <>
      <Helmet>
        <title>JSONPath Tester - Query & Extract Data from JSON | JSONUtil.com</title>
        <meta name="description" content="Free JSONPath tester and query tool. Extract data from complex JSON structures using JSONPath expressions. Test queries, view results instantly. Supports wildcards and nested paths." />
        <link rel="canonical" href="https://jsonutil.com/#/path" />
        <meta property="og:title" content="JSONPath Tester - Query JSON Data Online | JSONUtil.com" />
        <meta property="og:description" content="Free JSONPath tester. Extract data from complex JSON structures using JSONPath expressions with instant results." />
      </Helmet>
      <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
          JSONPath Query Tool
        </h1>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          Execute JSONPath expressions and extract data from complex JSON structures. Our JSONPath tester helps you query and navigate through nested JSON data efficiently, making it perfect for data extraction, API response parsing, and JSON data manipulation.
        </p>
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">Key Features:</h3>
          <ul className="text-sm text-indigo-700 dark:text-indigo-300 space-y-1">
            <li>• Support for standard JSONPath expressions</li>
            <li>• Wildcard and array index operations</li>
            <li>• Real-time query execution</li>
            <li>• Multiple result visualization</li>
            <li>• Quick query templates for common patterns</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Query Section */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>JSONPath Query</CardTitle>
              <CardDescription>
                Enter a JSONPath expression to query your JSON data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Input
                    value={pathQuery}
                    onChange={(e) => setPathQuery(e.target.value)}
                    placeholder="$.store.book[*].title"
                    className="font-mono"
                  />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Button onClick={executeQuery}>
                    Execute Query
                  </Button>
                  <Button variant="outline" onClick={loadExample}>
                    Load Example
                  </Button>
                  <Button variant="outline" onClick={() => { setJsonInput(''); setPathQuery(''); setResults([]); setError(null); }}>
                    Clear
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="text-sm text-slate-500">Quick queries:</span>
                  {quickQueries.map((query, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => setPathQuery(query.query)}
                    >
                      {query.label}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* JSON Input */}
            <Card>
              <CardHeader>
                <CardTitle>JSON Data</CardTitle>
                <CardDescription>
                  Your JSON data to query
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={jsonInput}
                  onChange={(e) => setJsonInput(e.target.value)}
                  placeholder="Enter JSON data..."
                  className="min-h-96 font-mono text-sm"
                />
              </CardContent>
            </Card>

            {/* Results */}
            <Card>
              <CardHeader>
                <CardTitle>Query Results</CardTitle>
                <CardDescription>
                  {results.length > 0 ? `Found ${results.length} result(s)` : 'No results'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {error ? (
                  <Alert variant="destructive">
                    <AlertDescription>
                      {error}
                    </AlertDescription>
                  </Alert>
                ) : results.length > 0 ? (
                  <div className="space-y-3">
                    {results.map((result, index) => (
                      <div
                        key={index}
                        className="p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg"
                      >
                        <div className="text-xs text-slate-500 mb-2">Result {index + 1}:</div>
                        <pre className="text-sm font-mono overflow-x-auto">
                          {JSON.stringify(result, null, 2)}
                        </pre>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-slate-500 py-8">
                    Enter JSON data and a JSONPath query, then click "Execute Query"
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Comprehensive JSONPath Guide */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>📚 Complete JSONPath Guide</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <h3>What is JSONPath?</h3>
              <p>
                JSONPath is a query language for JSON, similar to XPath for XML. It provides a simple way to extract and manipulate data from JSON documents. JSONPath expressions allow you to navigate through complex nested structures and retrieve specific values or collections of values efficiently.
              </p>

              <h3>Core Syntax Elements</h3>
              <p><strong>Root Operator ($):</strong> Represents the root object or array. All JSONPath expressions start with $ to indicate the root element of the JSON document.</p>
              <p><strong>Dot Notation (.):</strong> Access object properties using dot notation. For example, $.store.book accesses the book property within the store object.</p>
              <p><strong>Bracket Notation ([]):</strong> Access array elements or object properties. Can be used with numeric indices for arrays ($.books[0]) or property names for objects ($.store['book']).</p>
              <p><strong>Wildcard (*):</strong> Matches all elements. Use $.store.* to get all properties of the store object, or $.books[*] to get all elements from the books array.</p>
              <p><strong>Array Slice:</strong> Extract a range of array elements using slice notation. For example, $.books[0:3] returns the first three books.</p>

              <h3>Common JSONPath Patterns</h3>
              <p><strong>Get all property values:</strong> Use $.store.* to retrieve all values from an object's properties.</p>
              <p><strong>Get all array elements:</strong> Use $.books[*] to get every item in an array.</p>
              <p><strong>Get specific array index:</strong> Use $.books[0] to get the first element, or $.books[-1] for the last element.</p>
              <p><strong>Nested property access:</strong> Chain dot notation like $.store.book[0].title to access deeply nested properties.</p>
              <p><strong>Filter by value:</strong> More advanced implementations support filters like $.books[?(@.price &lt; 10)] to find books under $10.</p>

              <h3>Real-World Use Cases</h3>
              <p><strong>API Response Parsing:</strong> Extract specific fields from complex API responses without manually traversing the entire structure. For example, get all user emails from a paginated API response.</p>
              <p><strong>Configuration File Management:</strong> Query specific settings from large configuration JSON files. Access nested configurations like database credentials or feature flags quickly.</p>
              <p><strong>Data Transformation:</strong> Extract and reshape data from one JSON format to another. Useful in ETL processes and data migration tasks.</p>
              <p><strong>Testing and Validation:</strong> Verify that specific values exist in API responses during automated testing. Assert that deeply nested properties have expected values.</p>
              <p><strong>Log Analysis:</strong> Parse and extract relevant information from JSON-formatted log files. Find specific error messages or trace IDs in large log structures.</p>

              <h3>Best Practices</h3>
              <ul>
                <li>Start simple - test basic paths before building complex queries</li>
                <li>Use wildcards sparingly - they can return large result sets</li>
                <li>Validate your JSON structure first before querying</li>
                <li>Document complex queries with comments for maintainability</li>
                <li>Consider performance with very large JSON documents</li>
                <li>Test queries with sample data before production use</li>
                <li>Use specific paths when possible for better performance</li>
              </ul>

              <h3>Tips for Effective Querying</h3>
              <ul>
                <li>Always start your path with $ to indicate the root</li>
                <li>Use bracket notation when property names contain special characters or spaces</li>
                <li>Remember that array indices start at 0</li>
                <li>Combine dot and bracket notation as needed</li>
                <li>Use our quick query buttons to learn common patterns</li>
                <li>Test incrementally - build up complex queries step by step</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">📝 JSONPath Syntax</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">$</code> - Root element
              </div>
              <div>
                <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">.property</code> - Object property
              </div>
              <div>
                <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">[0]</code> - Array index
              </div>
              <div>
                <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">[*]</code> - All array elements
              </div>
              <div>
                <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">.*</code> - All object values
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">💡 Examples</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded block mb-1">
                  $.store.book[*].title
                </code>
                All book titles
              </div>
              <div>
                <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded block mb-1">
                  $.store.book[0]
                </code>
                First book object
              </div>
              <div>
                <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded block mb-1">
                  $..*
                </code>
                All values recursively
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Related Content */}
      <RelatedContent currentPage="path" />
    </div>
    </>
  );
};

export default Path;
