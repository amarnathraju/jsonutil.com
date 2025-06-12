import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';

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
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
          JSONPath Query
        </h1>
        <p className="text-slate-600 dark:text-slate-300">
          Execute JSONPath expressions and extract data from complex JSON structures.
        </p>
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
    </div>
  );
};

export default Path;
