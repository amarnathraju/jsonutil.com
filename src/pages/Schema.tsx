import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import RelatedContent from '@/components/RelatedContent';

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
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          Generate JSON Schema from sample data with intelligent type inference. Our schema generator automatically creates JSON Schema Draft 7 compliant schemas from your JSON data, perfect for API documentation, data validation, and code generation.
        </p>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Key Features:</h3>
          <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
            <li>• Automatic type detection and inference</li>
            <li>• Support for nested objects and arrays</li>
            <li>• String format recognition (email, URL, date-time)</li>
            <li>• Required property identification</li>
            <li>• JSON Schema Draft 7 compliance</li>
          </ul>
        </div>
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

          {/* Comprehensive Schema Guide */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>📚 Complete JSON Schema Guide</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <h3>What is JSON Schema?</h3>
              <p>
                JSON Schema is a vocabulary that allows you to annotate and validate JSON documents. It provides a contract for what JSON data is required for a given application and how it should be structured. JSON Schema is used for data validation, documentation, and code generation.
              </p>

              <h3>Why Use JSON Schema?</h3>
              <p><strong>Data Validation:</strong> Ensure incoming data meets your requirements before processing. Validate API requests, form submissions, and configuration files automatically.</p>
              <p><strong>Documentation:</strong> Schemas serve as living documentation for your data structures in a machine-readable format.</p>
              <p><strong>Code Generation:</strong> Generate TypeScript interfaces, validation functions, and mock data from schemas for consistency.</p>
              <p><strong>API Contracts:</strong> Define clear contracts between API producers and consumers to prevent integration issues.</p>

              <h3>Core Schema Types</h3>
              <p><strong>Primitive Types:</strong> string, number, integer, boolean, and null are the basic building blocks with their own validation rules.</p>
              <p><strong>Object Type:</strong> Represents a JSON object with defined properties, required fields, and additional property rules.</p>
              <p><strong>Array Type:</strong> Represents arrays with item type definitions, size constraints, and uniqueness requirements.</p>
              <p><strong>String Formats:</strong> Specify common formats like email, uri, date-time, ipv4, ipv6 for specialized validation.</p>

              <h3>Schema Generation Process</h3>
              <p>Our generator analyzes your sample JSON through these steps: Type Detection identifies JavaScript types, Format Recognition detects email/URL/date patterns, Structure Analysis maps nested objects and arrays, Requirement Inference marks present properties as required, and Array Handling determines consistent item schemas.</p>

              <h3>Common Use Cases</h3>
              <p><strong>API Development:</strong> Generate schemas for request/response bodies and use them in OpenAPI specifications.</p>
              <p><strong>Form Validation:</strong> Create schemas for form data validation in web applications.</p>
              <p><strong>Configuration Validation:</strong> Validate application configuration files to catch errors early.</p>
              <p><strong>Database Migration:</strong> Document database schema changes and compare versions.</p>
              <p><strong>Testing:</strong> Generate mock data based on schemas for comprehensive testing coverage.</p>

              <h3>Best Practices</h3>
              <ul>
                <li>Use representative sample data that includes all possible fields and edge cases</li>
                <li>Review and adjust required properties - not all sample fields may be required</li>
                <li>Add descriptions and titles to your schema for better documentation</li>
                <li>Use specific formats (email, uri, date-time) for better validation</li>
                <li>Set appropriate minimum and maximum values for numbers</li>
                <li>Add examples to your schema for documentation purposes</li>
                <li>Version your schemas as your data model evolves</li>
                <li>Test schemas against various valid and invalid data samples</li>
                <li>Consider using definitions for reusable schema components</li>
                <li>Use additionalProperties: false to strictly validate object shapes</li>
              </ul>
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

      {/* Related Content */}
      <RelatedContent currentPage="schema" />
    </div>
  );
};

export default Schema;
