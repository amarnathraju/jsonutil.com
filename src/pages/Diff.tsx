import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Diff = () => {
  const [leftInput, setLeftInput] = useState('');
  const [rightInput, setRightInput] = useState('');
  const [differences, setDifferences] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const findDifferences = (obj1: any, obj2: any, path = ''): any[] => {
    const diffs: any[] = [];

    const keys = new Set([...Object.keys(obj1 || {}), ...Object.keys(obj2 || {})]);

    for (const key of keys) {
      const newPath = path ? `${path}.${key}` : key;
      const val1 = obj1?.[key];
      const val2 = obj2?.[key];

      if (!(key in (obj1 || {}))) {
        diffs.push({
          type: 'added',
          path: newPath,
          value: val2
        });
      } else if (!(key in (obj2 || {}))) {
        diffs.push({
          type: 'removed',
          path: newPath,
          value: val1
        });
      } else if (typeof val1 === 'object' && typeof val2 === 'object' && val1 !== null && val2 !== null) {
        diffs.push(...findDifferences(val1, val2, newPath));
      } else if (val1 !== val2) {
        diffs.push({
          type: 'modified',
          path: newPath,
          oldValue: val1,
          newValue: val2
        });
      }
    }

    return diffs;
  };

  const compareJSON = () => {
    try {
      setError(null);
      const obj1 = JSON.parse(leftInput);
      const obj2 = JSON.parse(rightInput);
      
      const diffs = findDifferences(obj1, obj2);
      setDifferences(diffs);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid JSON in one or both inputs');
      setDifferences([]);
    }
  };

  const loadExample = () => {
    const example1 = {
      "name": "John Doe",
      "age": 30,
      "email": "john@example.com",
      "skills": ["JavaScript", "React"],
      "address": {
        "city": "New York",
        "country": "USA"
      }
    };

    const example2 = {
      "name": "John Doe",
      "age": 31,
      "email": "john.doe@example.com",
      "skills": ["JavaScript", "React", "Node.js"],
      "address": {
        "city": "San Francisco",
        "country": "USA"
      },
      "phone": "+1-555-0123"
    };

    setLeftInput(JSON.stringify(example1, null, 2));
    setRightInput(JSON.stringify(example2, null, 2));
  };

  const clearAll = () => {
    setLeftInput('');
    setRightInput('');
    setDifferences([]);
    setError(null);
  };

  const getDiffBadgeVariant = (type: string) => {
    switch (type) {
      case 'added': return 'default';
      case 'removed': return 'destructive';
      case 'modified': return 'secondary';
      default: return 'outline';
    }
  };

  const getDiffIcon = (type: string) => {
    switch (type) {
      case 'added': return '➕';
      case 'removed': return '➖';
      case 'modified': return '🔄';
      default: return '❓';
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
          JSON Diff
        </h1>
        <p className="text-slate-600 dark:text-slate-300">
          Compare JSON objects and visualize differences with detailed analysis.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Controls */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Comparison Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Button onClick={compareJSON}>
                  Compare
                </Button>
                <Button variant="outline" onClick={loadExample}>
                  Load Example
                </Button>
                <Button variant="outline" onClick={clearAll}>
                  Clear All
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Left Input */}
            <Card>
              <CardHeader>
                <CardTitle>Original JSON</CardTitle>
                <CardDescription>
                  The first JSON object to compare
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={leftInput}
                  onChange={(e) => setLeftInput(e.target.value)}
                  placeholder="Enter original JSON..."
                  className="min-h-80 font-mono text-sm"
                />
              </CardContent>
            </Card>

            {/* Right Input */}
            <Card>
              <CardHeader>
                <CardTitle>Modified JSON</CardTitle>
                <CardDescription>
                  The second JSON object to compare
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={rightInput}
                  onChange={(e) => setRightInput(e.target.value)}
                  placeholder="Enter modified JSON..."
                  className="min-h-80 font-mono text-sm"
                />
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Differences Found
                {differences.length > 0 && (
                  <Badge variant="outline">
                    {differences.length} change{differences.length !== 1 ? 's' : ''}
                  </Badge>
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
              ) : differences.length > 0 ? (
                <div className="space-y-3">
                  {differences.map((diff, index) => (
                    <div
                      key={index}
                      className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">{getDiffIcon(diff.type)}</span>
                        <Badge variant={getDiffBadgeVariant(diff.type)}>
                          {diff.type.toUpperCase()}
                        </Badge>
                        <code className="text-sm bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                          {diff.path}
                        </code>
                      </div>
                      
                      {diff.type === 'modified' ? (
                        <div className="space-y-2">
                          <div>
                            <span className="text-sm text-slate-500">Old value:</span>
                            <code className="block text-sm bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 px-2 py-1 rounded mt-1">
                              {JSON.stringify(diff.oldValue)}
                            </code>
                          </div>
                          <div>
                            <span className="text-sm text-slate-500">New value:</span>
                            <code className="block text-sm bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 px-2 py-1 rounded mt-1">
                              {JSON.stringify(diff.newValue)}
                            </code>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <span className="text-sm text-slate-500">Value:</span>
                          <code className="block text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-1 rounded mt-1">
                            {JSON.stringify(diff.value)}
                          </code>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-slate-500 py-8">
                  {leftInput && rightInput ? 
                    "No differences found - the JSON objects are identical!" :
                    "Enter JSON data in both fields and click 'Compare' to see differences"
                  }
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">🔍 How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <strong>Deep Comparison:</strong> Compares nested objects and arrays recursively.
              </div>
              <div>
                <strong>Change Types:</strong> Identifies additions, deletions, and modifications.
              </div>
              <div>
                <strong>Path Tracking:</strong> Shows exactly where each change occurred.
              </div>
              <div>
                <strong>Visual Highlighting:</strong> Color-coded changes for easy identification.
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">📊 Legend</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span>➕</span>
                <Badge variant="default" className="text-xs">ADDED</Badge>
                <span>New properties</span>
              </div>
              <div className="flex items-center gap-2">
                <span>➖</span>
                <Badge variant="destructive" className="text-xs">REMOVED</Badge>
                <span>Deleted properties</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🔄</span>
                <Badge variant="secondary" className="text-xs">MODIFIED</Badge>
                <span>Changed values</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Diff;
