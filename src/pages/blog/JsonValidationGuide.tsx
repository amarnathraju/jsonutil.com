
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, User, Calendar, AlertTriangle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const JsonValidationGuide = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
        
        <div className="mb-6">
          <Badge className="mb-4">Tutorial</Badge>
          <h1 className="text-4xl font-bold mb-4">Complete Guide to JSON Validation: Best Practices and Common Errors</h1>
          
          <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400 mb-6">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              JSONUtil Team
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              January 10, 2024
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              12 min read
            </div>
          </div>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            JSON validation is crucial for building robust applications. Learn how to validate JSON effectively, 
            understand common errors, and implement validation strategies that will save you hours of debugging.
          </p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Why JSON Validation Matters</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              JSON validation ensures that your data conforms to expected formats and structures before processing. 
              Without proper validation, malformed JSON can cause application crashes, security vulnerabilities, 
              and unpredictable behavior.
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-lg mb-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Common Problems Without Validation:</h4>
                  <ul className="list-disc pl-4 space-y-1 text-red-700 dark:text-red-300">
                    <li>Application crashes from malformed data</li>
                    <li>Security vulnerabilities from injection attacks</li>
                    <li>Data corruption in databases</li>
                    <li>API failures and poor user experience</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Benefits of Proper Validation:</h4>
                  <ul className="list-disc pl-4 space-y-1 text-green-700 dark:text-green-300">
                    <li>Prevents runtime errors and crashes</li>
                    <li>Improves data quality and consistency</li>
                    <li>Enhances security and prevents attacks</li>
                    <li>Provides better error messages for debugging</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>JSON Syntax Rules and Common Errors</CardTitle>
          </CardHeader>
          <CardContent>
            <h4 className="font-semibold mb-3">Essential JSON Syntax Rules:</h4>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Data must be in name/value pairs</li>
              <li>Data is separated by commas</li>
              <li>Objects are enclosed in curly braces { }</li>
              <li>Arrays are enclosed in square brackets [ ]</li>
              <li>Strings must use double quotes, not single quotes</li>
              <li>No trailing commas allowed</li>
              <li>No comments allowed in standard JSON</li>
            </ul>

            <h4 className="font-semibold mb-3">Most Common JSON Errors:</h4>
            
            <div className="space-y-6">
              <div>
                <h5 className="font-medium mb-2">1. Single Quotes Instead of Double Quotes</h5>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-red-600 dark:text-red-400 mb-2">❌ Incorrect:</p>
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-3 rounded">
                      <pre className="text-sm">{'{ \'name\': \'John\' }'}</pre>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-green-600 dark:text-green-400 mb-2">✅ Correct:</p>
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-3 rounded">
                      <pre className="text-sm">{'{ "name": "John" }'}</pre>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">2. Trailing Commas</h5>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-red-600 dark:text-red-400 mb-2">❌ Incorrect:</p>
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-3 rounded">
                      <pre className="text-sm">{`{
  "name": "John",
  "age": 30,
}`}</pre>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-green-600 dark:text-green-400 mb-2">✅ Correct:</p>
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-3 rounded">
                      <pre className="text-sm">{`{
  "name": "John",
  "age": 30
}`}</pre>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">3. Unescaped Special Characters</h5>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-red-600 dark:text-red-400 mb-2">❌ Incorrect:</p>
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-3 rounded">
                      <pre className="text-sm">{'{ "message": "He said "Hello"" }'}</pre>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-green-600 dark:text-green-400 mb-2">✅ Correct:</p>
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-3 rounded">
                      <pre className="text-sm">{'{ "message": "He said \\"Hello\\"" }'}</pre>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">4. Missing Closing Brackets</h5>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-red-600 dark:text-red-400 mb-2">❌ Incorrect:</p>
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-3 rounded">
                      <pre className="text-sm">{`{
  "users": [
    { "name": "John" },
    { "name": "Jane" }
  // Missing closing bracket
}`}</pre>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-green-600 dark:text-green-400 mb-2">✅ Correct:</p>
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-3 rounded">
                      <pre className="text-sm">{`{
  "users": [
    { "name": "John" },
    { "name": "Jane" }
  ]
}`}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>JSON Schema Validation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              JSON Schema provides a way to validate the structure, data types, and constraints of JSON data. 
              It's like a contract that defines what valid JSON should look like.
            </p>

            <h4 className="font-semibold mb-3">Basic JSON Schema Example:</h4>
            <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-lg overflow-x-auto mb-4">
              <pre className="text-sm text-slate-100">
{`{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 100
    },
    "email": {
      "type": "string",
      "format": "email"
    },
    "age": {
      "type": "integer",
      "minimum": 0,
      "maximum": 150
    },
    "preferences": {
      "type": "object",
      "properties": {
        "theme": {
          "type": "string",
          "enum": ["light", "dark", "auto"]
        },
        "notifications": {
          "type": "boolean"
        }
      },
      "required": ["theme"]
    }
  },
  "required": ["name", "email"]
}`}
              </pre>
            </div>

            <h4 className="font-semibold mb-3">Data That Matches This Schema:</h4>
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
              <pre className="text-sm">
{`{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30,
  "preferences": {
    "theme": "dark",
    "notifications": true
  }
}`}
              </pre>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Validation in Different Programming Languages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">JavaScript Validation</h4>
                <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm text-slate-100">
{`// Basic JSON parsing with error handling
function validateJSON(jsonString) {
  try {
    const parsed = JSON.parse(jsonString);
    return { valid: true, data: parsed };
  } catch (error) {
    return { 
      valid: false, 
      error: error.message,
      position: error.message.match(/position (\\d+)/)?.[1]
    };
  }
}

// Using a schema validation library (Ajv)
const Ajv = require('ajv');
const ajv = new Ajv();

const schema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    age: { type: 'number', minimum: 0 }
  },
  required: ['name']
};

const validate = ajv.compile(schema);
const isValid = validate(data);
if (!isValid) {
  console.log(validate.errors);
}`}
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Python Validation</h4>
                <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm text-slate-100">
{`import json
from jsonschema import validate, ValidationError

# Basic JSON validation
def validate_json_string(json_string):
    try:
        json.loads(json_string)
        return True, None
    except json.JSONDecodeError as e:
        return False, str(e)

# Schema validation
schema = {
    "type": "object",
    "properties": {
        "name": {"type": "string"},
        "age": {"type": "number", "minimum": 0}
    },
    "required": ["name"]
}

def validate_with_schema(data, schema):
    try:
        validate(instance=data, schema=schema)
        return True, None
    except ValidationError as e:
        return False, e.message`}
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Java Validation</h4>
                <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm text-slate-100">
{`import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.JsonNode;

public class JSONValidator {
    private static final ObjectMapper mapper = new ObjectMapper();
    
    public static boolean isValidJSON(String jsonString) {
        try {
            mapper.readTree(jsonString);
            return true;
        } catch (Exception e) {
            System.out.println("Invalid JSON: " + e.getMessage());
            return false;
        }
    }
    
    public static JsonNode parseJSON(String jsonString) 
        throws Exception {
        return mapper.readTree(jsonString);
    }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Best Practices for JSON Validation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">1. Validate Early and Often</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Validate JSON as soon as it enters your system</li>
                  <li>Don't wait until processing to discover format errors</li>
                  <li>Implement validation at API endpoints</li>
                  <li>Validate configuration files at startup</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">2. Use Schema Validation</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Define clear schemas for your JSON data structures</li>
                  <li>Use JSON Schema for formal validation</li>
                  <li>Version your schemas as your API evolves</li>
                  <li>Document your schemas for other developers</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">3. Provide Clear Error Messages</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Include line and column numbers in error messages</li>
                  <li>Explain what was expected vs. what was found</li>
                  <li>Provide examples of correct format</li>
                  <li>Make error messages user-friendly</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">4. Handle Edge Cases</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Test with empty objects and arrays</li>
                  <li>Validate null and undefined values</li>
                  <li>Handle very large JSON files appropriately</li>
                  <li>Consider maximum depth limits for nested objects</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">5. Security Considerations</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Set reasonable size limits for JSON input</li>
                  <li>Validate against injection attacks</li>
                  <li>Sanitize string values appropriately</li>
                  <li>Don't trust JSON from external sources without validation</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Testing Your JSON Validation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Comprehensive testing ensures your validation logic works correctly across all scenarios:
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Test Cases to Include:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Valid JSON with all required fields</li>
                  <li>Valid JSON with optional fields missing</li>
                  <li>Invalid JSON syntax (missing quotes, brackets, etc.)</li>
                  <li>Valid syntax but invalid data types</li>
                  <li>Values outside allowed ranges</li>
                  <li>Very large JSON files</li>
                  <li>Empty objects and arrays</li>
                  <li>Deeply nested structures</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Automated Testing Example:</h4>
                <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm text-slate-100">
{`// Jest test example
describe('JSON Validation', () => {
  test('should accept valid JSON', () => {
    const validJSON = '{"name": "John", "age": 30}';
    expect(validateJSON(validJSON).valid).toBe(true);
  });
  
  test('should reject invalid syntax', () => {
    const invalidJSON = '{"name": "John",}'; // trailing comma
    expect(validateJSON(invalidJSON).valid).toBe(false);
  });
  
  test('should reject missing required fields', () => {
    const incompleteJSON = '{"age": 30}'; // missing name
    const result = validateWithSchema(
      JSON.parse(incompleteJSON), 
      userSchema
    );
    expect(result.valid).toBe(false);
  });
});`}
                  </pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 bg-blue-50 dark:bg-blue-900/20">
          <CardHeader>
            <CardTitle>Conclusion</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Proper JSON validation is essential for building robust, secure applications. By understanding common 
              errors, implementing schema validation, and following best practices, you can prevent many issues 
              before they reach production.
            </p>
            <p>
              Remember to validate early, provide clear error messages, and test thoroughly. Your future self 
              (and your users) will thank you for the extra effort invested in proper validation.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Validate Your JSON Now</h3>
            <p className="mb-4">
              Ready to validate your JSON? Try our free online validator with detailed error reporting and schema validation:
            </p>
            <Link to="/validator">
              <Badge className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3">
                Use JSON Validator Tool →
              </Badge>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JsonValidationGuide;
