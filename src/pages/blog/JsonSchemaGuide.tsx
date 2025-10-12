import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const JsonSchemaGuide = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/blog">
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>
      </Link>

      <article className="prose prose-slate dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Understanding JSON Schema: A Complete Guide
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Published on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <Card className="mb-8 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
          <CardContent className="pt-6">
            <p className="text-slate-700 dark:text-slate-300">
              JSON Schema is a powerful tool for validating the structure of JSON data. This comprehensive guide will teach you everything you need to know about creating, using, and implementing JSON Schema in your applications.
            </p>
          </CardContent>
        </Card>

        <h2>What is JSON Schema?</h2>
        <p>
          JSON Schema is a declarative language that allows you to annotate and validate JSON documents. It describes your existing data format with clear, human and machine-readable documentation for complete structural validation.
        </p>

        <h2>Why Use JSON Schema?</h2>

        <h3>1. Data Validation</h3>
        <p>
          The primary use of JSON Schema is to validate data. Whether you're building an API that accepts JSON input, processing configuration files, or working with data from external sources, JSON Schema ensures that your data matches the expected structure and types before your application processes it.
        </p>

        <h3>2. Documentation</h3>
        <p>
          JSON Schema serves as self-documenting code. Instead of maintaining separate documentation that can become outdated, your schema IS the documentation. It precisely defines what data your API expects or returns, making it invaluable for both developers and API consumers.
        </p>

        <h3>3. Code Generation</h3>
        <p>
          Many tools can generate code from JSON Schema. You can automatically create TypeScript interfaces, validation functions, mock data generators, and even entire API clients. This ensures consistency between your data model and your implementation.
        </p>

        <h2>Basic Schema Structure</h2>
        <p>
          Every JSON Schema is itself a JSON object. At its most basic, a schema might look like this:
        </p>

        <Card className="my-6">
          <CardContent className="pt-6">
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
{`{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "age": {
      "type": "integer",
      "minimum": 0
    }
  },
  "required": ["name"]
}`}
            </pre>
          </CardContent>
        </Card>

        <h2>Core Data Types</h2>

        <h3>String</h3>
        <p>
          The string type is used for textual data. You can add constraints like minLength, maxLength, and pattern (for regex validation). JSON Schema also supports common string formats like email, uri, date-time, uuid, and more.
        </p>

        <h3>Number and Integer</h3>
        <p>
          Use number for floating-point values and integer for whole numbers. You can specify minimum, maximum, multipleOf, and exclusive boundaries to constrain numeric values precisely.
        </p>

        <h3>Boolean</h3>
        <p>
          The boolean type accepts only true or false values. It's straightforward but essential for flags and toggles in your data.
        </p>

        <h3>Array</h3>
        <p>
          Arrays are ordered lists of items. You can define the type of items in the array, set minimum and maximum lengths, require unique items, and even specify different schemas for different positions (tuple validation).
        </p>

        <h3>Object</h3>
        <p>
          Objects are key-value pairs. You define properties with their own schemas, specify which properties are required, and control whether additional properties are allowed.
        </p>

        <h2>Advanced Features</h2>

        <h3>Required Properties</h3>
        <p>
          Use the "required" keyword to specify which properties must be present in an object. This ensures critical data isn't missing from your JSON documents.
        </p>

        <h3>Enum Values</h3>
        <p>
          The enum keyword restricts a value to a fixed set of options. Perfect for status fields, categories, or any field with a limited set of valid values.
        </p>

        <h3>Conditional Schemas</h3>
        <p>
          JSON Schema supports conditional validation with if, then, and else keywords. This allows you to apply different validation rules based on the presence or value of other properties.
        </p>

        <h3>Schema Composition</h3>
        <p>
          Combine schemas using allOf, anyOf, and oneOf keywords. This is powerful for creating complex validation rules and reusing schema definitions.
        </p>

        <h2>Common Use Cases</h2>

        <h3>API Validation</h3>
        <p>
          Use JSON Schema to validate API request bodies and query parameters. Many frameworks like OpenAPI (Swagger) use JSON Schema for defining API contracts. This ensures clients send correctly formatted data before it reaches your business logic.
        </p>

        <h3>Configuration Files</h3>
        <p>
          Validate application configuration files against a schema to catch errors early. Many modern applications use JSON for configuration, and schema validation prevents deployment issues caused by misconfigured settings.
        </p>

        <h3>Form Validation</h3>
        <p>
          Several form libraries can generate forms from JSON Schema and validate user input automatically. This creates a single source of truth for your form structure and validation rules.
        </p>

        <h3>Database Schemas</h3>
        <p>
          Document your database structure using JSON Schema, especially for NoSQL databases that store JSON documents. This provides type safety and structure for typically schema-less databases.
        </p>

        <h2>Best Practices</h2>

        <h3>Start Simple</h3>
        <p>
          Begin with basic type validation and add constraints gradually. Don't try to capture every possible edge case in your first iteration. Evolve your schema as you learn more about your data patterns.
        </p>

        <h3>Use Definitions</h3>
        <p>
          Define reusable schema components using the definitions or $defs keyword. This keeps your schemas DRY (Don't Repeat Yourself) and makes maintenance easier.
        </p>

        <h3>Add Descriptions</h3>
        <p>
          Include description fields for your schema and properties. These become documentation that can be displayed in API documentation tools and IDE hints.
        </p>

        <h3>Version Your Schemas</h3>
        <p>
          As your data model evolves, maintain different versions of your schema. This is crucial for API versioning and maintaining backward compatibility with existing clients.
        </p>

        <h3>Test Your Schemas</h3>
        <p>
          Write tests for your schemas using both valid and invalid data samples. Ensure your schema catches the errors you expect and doesn't reject valid data.
        </p>

        <h2>Tools and Resources</h2>

        <h3>JSONUtil.com Schema Generator</h3>
        <p>
          Use our <Link to="/schema" className="text-blue-600 hover:underline">JSON Schema Generator</Link> to automatically create schemas from sample JSON data. It's perfect for getting started quickly and understanding how schemas work.
        </p>

        <h3>Validator</h3>
        <p>
          Our <Link to="/validator" className="text-blue-600 hover:underline">JSON Validator</Link> can help ensure your data is valid JSON before you validate it against a schema.
        </p>

        <h2>Common Pitfalls to Avoid</h2>

        <h3>Over-Constraining</h3>
        <p>
          Don't make your schema too restrictive. Allow for flexibility where appropriate. For example, avoid setting exact string lengths unless truly necessary.
        </p>

        <h3>Under-Constraining</h3>
        <p>
          Conversely, don't make your schema too permissive. Add appropriate constraints to catch errors. For instance, use format validation for emails and URLs rather than just accepting any string.
        </p>

        <h3>Forgetting About Null</h3>
        <p>
          Remember that null is a distinct type in JSON Schema. If a field can be null, you need to explicitly allow it with type arrays like ["string", "null"].
        </p>

        <h3>Ignoring Additional Properties</h3>
        <p>
          By default, objects can have properties not defined in your schema. Use "additionalProperties": false if you want strict validation that rejects unexpected properties.
        </p>

        <h2>Getting Started</h2>
        <p>
          The best way to learn JSON Schema is to start using it. Begin with simple schemas for your API endpoints or configuration files. Use our Schema Generator to create your first schema from sample data, then refine it as you learn more about the validation capabilities.
        </p>

        <p>
          Remember, JSON Schema is a tool to help you, not constrain you. Start simple, iterate based on your needs, and gradually add more sophisticated validation as your understanding grows.
        </p>

        <Card className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
          <CardHeader>
            <CardTitle>Try Our JSON Tools</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link to="/schema">
              <Button className="w-full" variant="outline">
                Schema Generator
              </Button>
            </Link>
            <Link to="/validator">
              <Button className="w-full" variant="outline">
                JSON Validator
              </Button>
            </Link>
            <Link to="/formatter">
              <Button className="w-full" variant="outline">
                JSON Formatter
              </Button>
            </Link>
          </CardContent>
        </Card>
      </article>
    </div>
  );
};

export default JsonSchemaGuide;
