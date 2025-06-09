
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
import AdBanner from '@/components/ads/AdBanner';

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

  const loadExample = () => {
    const example = {
      "users": [
        {"id": 1, "name": "Alice Johnson", "email": "alice@example.com", "role": "admin", "settings": {"theme": "dark", "notifications": true}},
        {"id": 2, "name": "Bob Smith", "email": "bob@example.com", "role": "user", "settings": {"theme": "light", "notifications": false}}
      ],
      "metadata": {"total": 2, "page": 1, "limit": 10},
      "timestamp": "2024-01-15T10:30:00Z"
    };
    setInput(JSON.stringify(example));
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
          JSON Formatter
        </h1>
        <p className="text-slate-600 dark:text-slate-300">
          Beautify and format JSON with customizable indentation and sorting options.
        </p>
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
              <div className="flex flex-wrap items-center gap-6">
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

                <div className="flex gap-2">
                  <Button onClick={formatJSON}>
                    Format
                  </Button>
                  <Button variant="outline" onClick={minifyJSON}>
                    Minify
                  </Button>
                  <Button variant="outline" onClick={loadExample}>
                    Load Example
                  </Button>
                  <Button variant="outline" onClick={clearAll}>
                    Clear
                  </Button>
                </div>
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
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <AdBanner position="sidebar" />
          
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
    </div>
  );
};

export default Formatter;
