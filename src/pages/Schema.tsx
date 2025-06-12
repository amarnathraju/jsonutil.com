import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Schema = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [schema, setSchema] = useState('');
  const [error, setError] = useState<string | null>(null);

  const generateSchema = (data: any): any => {
    const getType = (value: any): any => {
      if (value === null) {
        return { type: 'null' };
      }
      
      if (Array.isArray(value)) {
        if (value.length === 0) {
          return { type: 'array', items: {} };
        }
        
        // Analyze all items to determine schema
        const itemSchemas = value.map(item => getType(item));
        const firstSchema = itemSchemas[0];
        
        // Check if all items have the same schema
        const allSame = itemSchemas.every(schema => 
          JSON.stringify(schema) === JSON.stringify(firstSchema)
        );
        
        return {
          type: 'array',
          items: allSame ? firstSchema : { anyOf: itemSchemas }
        };
      }
      
      if (typeof value === 'object') {
        const properties: any = {};
        const required: string[] = [];
        
        for (const [key, val] of Object.entries(value)) {
          properties[key] = getType(val);
          required.push(key);
        }
        
        return {
          type: 'object',
          properties,
          required: required.length > 0 ? required : undefined
        };
      }
      
      switch (typeof value) {
        case 'string':
          // Check for common string formats
          if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(value)) {
            return { type: 'string', format: 'date-time' };
          }
          if (/^[\w-]+@[\w-]+(\.[\w-]+)+$/.test(value)) {
            return { type: 'string', format: 'email' };
          }
          if (/^https?:\/\//.test(value)) {
            return { type: 'string', format: 'uri' };
          }
          return { type: 'string' };
        
        case 'number':
          return Number.isInteger(value) ? { type: 'integer' } : { type: 'number' };
        
        case 'boolean':
          return { type: 'boolean' };
        
        default:
          return {};
      }
    };

    return {
      $schema: 'http://json-schema.org/draft-07/schema#',
      type: 'object',
      ...getType(data)
    };
  };

  const createSchema = () => {
    try {
      setError(null);
      const data = JSON.parse(jsonInput);
      const generatedSchema = generateSchema(data);
      setSchema(JSON.stringify(generatedSchema, null, 2));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid JSON');
      setSchema('');
    }
  };

  const loadExample = () => {
    const example = {
      "user": {
        "id": 123,
        "name": "John Doe",
        "email": "john@example.com",
        "isActive": true,
        "createdAt": "2024-01-15T10:30:00Z",
        "profile": {
          "age": 30,
          "website": "https://johndoe.com",
          "skills": ["JavaScript", "React", "Node.js"]
        },
        "addresses": [
          {
            "type": "home",
            "street": "123 Main St",
            "city": "New York",
            "zipCode": "10001"
          }
        ]
      }
    };
    
    setJsonInput(JSON.stringify(example, null, 2));
  };

  const copySchema = async () => {
    try {
      await navigator.clipboard.writeText(schema);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-4">
          JSON Schema Generator
        </h1>
        <p className="text-slate-600 dark:text-slate-300">
          Generate JSON Schema from sample data with intelligent type inference.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Controls */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Schema Generation</CardTitle>
              <CardDescription>
                Generate a JSON Schema Draft 7 from your sample JSON data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Button onClick={createSchema}>
                  Generate Schema
                </Button>
                <Button variant="outline" onClick={loadExample}>
                  Load Example
                </Button>
                <Button variant="outline" onClick={() => { setJsonInput(''); setSchema(''); setError(null); }}>
                  Clear
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* JSON Input */}
            <Card>
              <CardHeader>
                <CardTitle>Sample JSON Data</CardTitle>
                <CardDescription>
                  Paste your JSON data to generate a schema
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={jsonInput}
                  onChange={(e) => setJsonInput(e.target.value)}
                  placeholder="Enter sample JSON data..."
                  className="min-h-96 font-mono text-sm"
                />
              </CardContent>
            </Card>

            {/* Schema Output */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Generated JSON Schema
                  {schema && (
                    <Button size="sm" variant="outline" onClick={copySchema}>
                      Copy Schema
                    </Button>
                  )}
                </CardTitle>
                <CardDescription>
                  JSON Schema Draft 7 specification
                </CardDescription>
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
                    value={schema}
                    readOnly
                    placeholder="Generated schema will appear here..."
                    className="min-h-96 font-mono text-sm"
                  />
                )}
              </CardContent>
            </Card>
          </div>

          {/* Schema Features */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>✨ Schema Features</CardTitle>
              <CardDescription>
                What this generator can detect and include in your schema
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                  <h4 className="font-semibold mb-2">📊 Data Types</h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <li>• String, Number, Boolean</li>
                    <li>• Integer vs Float detection</li>
                    <li>• Array and Object types</li>
                    <li>• Null value handling</li>
                  </ul>
                </div>
                
                <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                  <h4 className="font-semibold mb-2">🎯 String Formats</h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <li>• Email addresses</li>
                    <li>• Date-time strings</li>
                    <li>• URI/URL formats</li>
                    <li>• Custom patterns</li>
                  </ul>
                </div>
                
                <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                  <h4 className="font-semibold mb-2">🏗️ Structure</h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <li>• Required properties</li>
                    <li>• Nested objects</li>
                    <li>• Array item schemas</li>
                    <li>• Complex nesting</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">🔧 How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <strong>Type Inference:</strong> Analyzes your data to determine the most appropriate JSON Schema types.
              </div>
              <div>
                <strong>Format Detection:</strong> Recognizes common string formats like emails, dates, and URLs.
              </div>
              <div>
                <strong>Structure Analysis:</strong> Maps object properties and array structures accurately.
              </div>
              <div>
                <strong>Draft 7 Compliant:</strong> Generates schemas following JSON Schema Draft 7 specification.
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">💡 Use Cases</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <strong>API Documentation:</strong> Create schemas for your API request/response formats.
              </div>
              <div>
                <strong>Data Validation:</strong> Validate incoming data against generated schemas.
              </div>
              <div>
                <strong>Code Generation:</strong> Use schemas to generate types for TypeScript, etc.
              </div>
              <div>
                <strong>Documentation:</strong> Document your data structures clearly and precisely.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Schema;
