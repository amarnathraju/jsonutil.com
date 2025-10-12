import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const JsonApiGuide = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/blog">
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>
      </Link>

      <article className="prose prose-slate dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
          JSON in APIs: Best Practices and Common Patterns
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Published on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <Card className="mb-8 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
          <CardContent className="pt-6">
            <p className="text-slate-700 dark:text-slate-300">
              JSON has become the de facto standard for API communication. This guide covers best practices, common patterns, and potential pitfalls when working with JSON APIs.
            </p>
          </CardContent>
        </Card>

        <h2>Why JSON for APIs?</h2>
        <p>
          JSON (JavaScript Object Notation) has dominated API design for good reasons. It's lightweight, human-readable, language-independent, and perfectly suited for representing hierarchical data structures. Most programming languages have built-in support for parsing and generating JSON, making it the obvious choice for modern APIs.
        </p>

        <h2>REST API Response Structure</h2>

        <h3>Standard Success Response</h3>
        <p>
          A well-structured successful API response should include the requested data and relevant metadata. Here's a common pattern:
        </p>

        <Card className="my-6">
          <CardContent className="pt-6">
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
{`{
  "status": "success",
  "data": {
    "id": 123,
    "name": "John Doe",
    "email": "john@example.com"
  },
  "metadata": {
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "1.0"
  }
}`}
            </pre>
          </CardContent>
        </Card>

        <h3>Error Response Pattern</h3>
        <p>
          Consistent error responses help clients handle failures gracefully. Include an error code, message, and optionally, details about the error:
        </p>

        <Card className="my-6">
          <CardContent className="pt-6">
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
{`{
  "status": "error",
  "error": {
    "code": "INVALID_INPUT",
    "message": "Email address is required",
    "field": "email",
    "details": {
      "constraint": "required",
      "provided": null
    }
  }
}`}
            </pre>
          </CardContent>
        </Card>

        <h2>Pagination Patterns</h2>

        <h3>Cursor-Based Pagination</h3>
        <p>
          For large datasets, cursor-based pagination is often more reliable than offset-based pagination. It prevents issues when data changes between requests:
        </p>

        <Card className="my-6">
          <CardContent className="pt-6">
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
{`{
  "data": [
    { "id": 1, "name": "Item 1" },
    { "id": 2, "name": "Item 2" }
  ],
  "pagination": {
    "next_cursor": "eyJpZCI6Mn0=",
    "has_more": true,
    "total_count": 150
  }
}`}
            </pre>
          </CardContent>
        </Card>

        <h3>Page-Based Pagination</h3>
        <p>
          For simpler use cases, page-based pagination is more intuitive:
        </p>

        <Card className="my-6">
          <CardContent className="pt-6">
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
{`{
  "data": [...],
  "pagination": {
    "page": 1,
    "per_page": 20,
    "total_pages": 5,
    "total_count": 95
  }
}`}
            </pre>
          </CardContent>
        </Card>

        <h2>Naming Conventions</h2>

        <h3>Use snake_case or camelCase Consistently</h3>
        <p>
          Choose one naming convention and stick with it throughout your API. JavaScript developers typically prefer camelCase, while Python and Ruby developers often use snake_case. Most importantly, be consistent.
        </p>

        <h3>Use Plural Nouns for Collections</h3>
        <p>
          RESTful APIs should use plural nouns for collection endpoints: /users, /products, /orders. This clearly indicates that the endpoint returns multiple items.
        </p>

        <h3>Descriptive Property Names</h3>
        <p>
          Use clear, descriptive names for properties. Avoid abbreviations unless they're widely understood. "user_id" is better than "uid", and "email_address" is clearer than "email_addr".
        </p>

        <h2>Data Types and Formats</h2>

        <h3>Dates and Times</h3>
        <p>
          Always use ISO 8601 format (YYYY-MM-DDTHH:mm:ssZ) for dates and times. This is unambiguous and supported by most libraries. Include timezone information, preferably in UTC.
        </p>

        <h3>Numbers</h3>
        <p>
          Be careful with large numbers in JSON. JavaScript's number type can lose precision for integers larger than 2^53. Consider using strings for very large integers, especially IDs from databases.
        </p>

        <h3>Booleans</h3>
        <p>
          Use actual boolean values (true/false) rather than strings ("true"/"false") or numbers (1/0). This maintains type safety and makes your API more predictable.
        </p>

        <h2>Versioning Strategies</h2>

        <h3>URL Versioning</h3>
        <p>
          Include the version in the URL path: /api/v1/users. This is explicit and easy to implement, though it can lead to URL duplication.
        </p>

        <h3>Header Versioning</h3>
        <p>
          Use custom headers for versioning: "API-Version: 1.0". This keeps URLs clean but may be less obvious to API consumers.
        </p>

        <h3>Content Negotiation</h3>
        <p>
          Use Accept headers: "Accept: application/vnd.yourapi.v1+json". This follows HTTP standards but is more complex to implement.
        </p>

        <h2>Security Considerations</h2>

        <h3>Never Include Sensitive Data</h3>
        <p>
          Never return passwords, API keys, or tokens in JSON responses unless absolutely necessary. When you must include sensitive data, ensure it's properly encrypted in transit using HTTPS.
        </p>

        <h3>Validate All Input</h3>
        <p>
          Always validate JSON input on the server side. Don't trust client data. Use JSON Schema or similar validation libraries to ensure data meets expectations before processing.
        </p>

        <h3>Rate Limiting Information</h3>
        <p>
          Include rate limiting information in responses to help clients manage their usage:
        </p>

        <Card className="my-6">
          <CardContent className="pt-6">
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
{`{
  "data": {...},
  "rate_limit": {
    "limit": 1000,
    "remaining": 987,
    "reset": "2024-01-15T11:00:00Z"
  }
}`}
            </pre>
          </CardContent>
        </Card>

        <h2>Performance Optimization</h2>

        <h3>Minimize Payload Size</h3>
        <p>
          Only return data that clients need. Consider supporting field selection (sparse fieldsets) where clients can specify which fields they want: /users?fields=id,name,email
        </p>

        <h3>Use Compression</h3>
        <p>
          Enable gzip compression on your API server. JSON compresses very well, often reducing response sizes by 70-90%.
        </p>

        <h3>Implement Caching</h3>
        <p>
          Use appropriate HTTP cache headers (ETag, Last-Modified, Cache-Control) to allow clients and proxies to cache responses effectively.
        </p>

        <h2>Testing API Responses</h2>

        <h3>Validate JSON Structure</h3>
        <p>
          Use our <Link to="/validator" className="text-blue-600 hover:underline">JSON Validator</Link> to ensure your API responses are valid JSON before testing further.
        </p>

        <h3>Compare Responses</h3>
        <p>
          Use our <Link to="/diff" className="text-blue-600 hover:underline">JSON Diff Tool</Link> to compare API responses across different versions or environments to identify unexpected changes.
        </p>

        <h3>Format for Readability</h3>
        <p>
          Use our <Link to="/formatter" className="text-blue-600 hover:underline">JSON Formatter</Link> to beautify API responses for easier debugging and code review.
        </p>

        <h2>Documentation Best Practices</h2>

        <h3>Provide Examples</h3>
        <p>
          Include example requests and responses in your documentation. Real examples are invaluable for understanding how to use your API.
        </p>

        <h3>Document Error Cases</h3>
        <p>
          Don't just document the happy path. Show what error responses look like and explain when each error code is returned.
        </p>

        <h3>Use OpenAPI/Swagger</h3>
        <p>
          Consider using OpenAPI (Swagger) specification to document your API. It uses JSON Schema for request/response validation and can generate interactive documentation.
        </p>

        <h2>Common Anti-Patterns to Avoid</h2>

        <h3>Inconsistent Data Types</h3>
        <p>
          Don't return different data types for the same field. If "user_id" is a number, it should always be a number, never sometimes a string.
        </p>

        <h3>Deeply Nested Structures</h3>
        <p>
          Avoid deeply nested JSON (more than 3-4 levels). It's hard to work with and often indicates poor data modeling.
        </p>

        <h3>Using HTTP 200 for Errors</h3>
        <p>
          Always use appropriate HTTP status codes. Don't return errors with HTTP 200 status. Use 4xx for client errors and 5xx for server errors.
        </p>

        <h3>Inconsistent Response Format</h3>
        <p>
          Maintain the same response structure across all endpoints. If you wrap data in a "data" property for one endpoint, do it for all endpoints.
        </p>

        <h2>Tools for API Development</h2>
        <p>
          JSONUtil.com provides several tools specifically useful for API development:
        </p>

        <Card className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
          <CardHeader>
            <CardTitle>Essential JSON API Tools</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link to="/validator">
              <Button className="w-full" variant="outline">
                Validate API Responses
              </Button>
            </Link>
            <Link to="/diff">
              <Button className="w-full" variant="outline">
                Compare API Versions
              </Button>
            </Link>
            <Link to="/schema">
              <Button className="w-full" variant="outline">
                Generate JSON Schema
              </Button>
            </Link>
            <Link to="/formatter">
              <Button className="w-full" variant="outline">
                Format API Responses
              </Button>
            </Link>
          </CardContent>
        </Card>
      </article>
    </div>
  );
};

export default JsonApiGuide;
