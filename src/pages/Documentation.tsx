
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const Documentation = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Documentation
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
          Complete guide to using JSONUtil.com tools and understanding JSON best practices. 
          Learn how to validate, format, convert, and manipulate JSON data effectively.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          {/* Getting Started */}
          <Card className="mb-8" id="getting-started">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                🚀 Getting Started with JSON
              </CardTitle>
              <CardDescription className="text-base">
                Learn the fundamentals of JSON and how to use our comprehensive toolkit
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-200">
                  What is JSON?
                </h3>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg mb-4">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    JSON (JavaScript Object Notation) is a lightweight, text-based data interchange format. 
                    Despite its name suggesting a connection to JavaScript, JSON is language-independent and 
                    widely used across different programming languages and platforms.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">✅ JSON Advantages</h4>
                    <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                      <li>• Human-readable and easy to understand</li>
                      <li>• Lightweight and fast to parse</li>
                      <li>• Widely supported across platforms</li>
                      <li>• Native JavaScript object syntax</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">🎯 Common Use Cases</h4>
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                      <li>• REST API requests and responses</li>
                      <li>• Configuration files</li>
                      <li>• Data storage and exchange</li>
                      <li>• Web application state management</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-200">
                  JSON Syntax Rules
                </h3>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2 text-slate-700 dark:text-slate-300">Basic Rules:</h4>
                      <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                        <li>• Data is in name/value pairs</li>
                        <li>• Data is separated by commas</li>
                        <li>• Curly braces hold objects</li>
                        <li>• Square brackets hold arrays</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-slate-700 dark:text-slate-300">String Rules:</h4>
                      <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                        <li>• Must use double quotes only</li>
                        <li>• Escape special characters</li>
                        <li>• No trailing commas allowed</li>
                        <li>• Case-sensitive property names</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-200">
                  Basic JSON Example
                </h3>
                <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm text-slate-100">
{`{
  "person": {
    "name": "John Doe",
    "age": 30,
    "city": "New York",
    "hobbies": ["reading", "swimming", "coding"],
    "married": true,
    "children": null,
    "address": {
      "street": "123 Main St",
      "zipCode": "10001"
    }
  }
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tool Guides */}
          <Card className="mb-8" id="tools">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                🛠️ Tool Guides
              </CardTitle>
              <CardDescription className="text-base">
                Comprehensive guides for each JSONUtil.com tool
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">✓</div>
                    <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">JSON Validator</h3>
                    <Badge variant="outline" className="text-green-600 border-green-600">Free</Badge>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-300 mb-4">
                    Validate JSON syntax and identify errors with detailed reporting and real-time feedback.
                  </p>
                  <div className="space-y-2 text-sm text-green-700 dark:text-green-300">
                    <h4 className="font-medium">How to use:</h4>
                    <ul className="space-y-1 pl-4">
                      <li>1. Paste JSON into the input area</li>
                      <li>2. Click "Validate JSON" to check syntax</li>
                      <li>3. Review error messages and suggestions</li>
                      <li>4. View structure statistics for valid JSON</li>
                    </ul>
                  </div>
                  <Link to="/validator" className="inline-block mt-4">
                    <Badge className="bg-green-600 hover:bg-green-700">Try Validator →</Badge>
                  </Link>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">{ }</div>
                    <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200">JSON Formatter</h3>
                    <Badge variant="outline" className="text-blue-600 border-blue-600">Free</Badge>
                  </div>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-4">
                    Format and beautify JSON for better readability with customizable options.
                  </p>
                  <div className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                    <h4 className="font-medium">How to use:</h4>
                    <ul className="space-y-1 pl-4">
                      <li>1. Input unformatted JSON</li>
                      <li>2. Choose indentation (2, 4, or 8 spaces)</li>
                      <li>3. Enable "Sort Keys" for alphabetical ordering</li>
                      <li>4. Use "Minify" to remove all whitespace</li>
                    </ul>
                  </div>
                  <Link to="/formatter" className="inline-block mt-4">
                    <Badge className="bg-blue-600 hover:bg-blue-700">Try Formatter →</Badge>
                  </Link>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">⇄</div>
                    <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200">JSON Converter</h3>
                    <Badge variant="outline" className="text-purple-600 border-purple-600">Free</Badge>
                  </div>
                  <p className="text-sm text-purple-700 dark:text-purple-300 mb-4">
                    Convert JSON to other formats like CSV, XML, YAML, and TypeScript interfaces.
                  </p>
                  <div className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
                    <h4 className="font-medium">How to use:</h4>
                    <ul className="space-y-1 pl-4">
                      <li>1. Select desired output format</li>
                      <li>2. Configure conversion options</li>
                      <li>3. Download or copy converted data</li>
                      <li>4. Use examples for different scenarios</li>
                    </ul>
                  </div>
                  <Link to="/converter" className="inline-block mt-4">
                    <Badge className="bg-purple-600 hover:bg-purple-700">Try Converter →</Badge>
                  </Link>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold">≠</div>
                    <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-200">JSON Diff</h3>
                    <Badge variant="outline" className="text-orange-600 border-orange-600">Free</Badge>
                  </div>
                  <p className="text-sm text-orange-700 dark:text-orange-300 mb-4">
                    Compare JSON objects and visualize differences with detailed analysis.
                  </p>
                  <div className="space-y-2 text-sm text-orange-700 dark:text-orange-300">
                    <h4 className="font-medium">How to use:</h4>
                    <ul className="space-y-1 pl-4">
                      <li>1. Paste two JSON objects to compare</li>
                      <li>2. Review highlighted differences</li>
                      <li>3. Export diff report if needed</li>
                      <li>4. Analyze added, removed, or modified values</li>
                    </ul>
                  </div>
                  <Link to="/diff" className="inline-block mt-4">
                    <Badge className="bg-orange-600 hover:bg-orange-700">Try Diff Tool →</Badge>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* JSON Best Practices */}
          <Card className="mb-8" id="best-practices">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                📚 JSON Best Practices
              </CardTitle>
              <CardDescription className="text-base">
                Professional guidelines for working with JSON data
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">⚡ Performance Considerations</h3>
                    <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span><strong>Flat Structure:</strong> Keep JSON structure as flat as possible for faster parsing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span><strong>Data Types:</strong> Use appropriate data types (numbers vs strings) for efficiency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span><strong>Nesting Depth:</strong> Minimize deeply nested objects for better performance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span><strong>Arrays:</strong> Consider using arrays for collections rather than numbered objects</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <h3 className="font-semibold text-red-800 dark:text-red-200 mb-3">🔒 Security Best Practices</h3>
                    <ul className="space-y-2 text-sm text-red-700 dark:text-red-300">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span><strong>Validation:</strong> Always validate JSON on both client and server sides</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span><strong>Sanitization:</strong> Sanitize data before processing to prevent injection attacks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span><strong>HTTPS:</strong> Use HTTPS for JSON data transmission over networks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span><strong>Error Handling:</strong> Implement proper error handling for malformed JSON</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-3">✨ Formatting Standards</h3>
                    <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span><strong>Consistent Indentation:</strong> Use 2 or 4 spaces consistently throughout</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span><strong>Key Naming:</strong> Use camelCase or snake_case consistently</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span><strong>Documentation:</strong> Include schema documentation for complex structures</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span><strong>Versioning:</strong> Consider versioning for API JSON responses</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">🎯 Common Use Cases</h3>
                    <ul className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span><strong>APIs:</strong> REST API requests and responses for data exchange</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span><strong>Configuration:</strong> Application settings and configuration files</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span><strong>Data Storage:</strong> NoSQL databases and data interchange</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span><strong>Web Development:</strong> AJAX requests and browser local storage</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card className="mb-8" id="faq">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                ❓ Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold mb-2 text-slate-800 dark:text-slate-200">
                    Is my data secure when using JSONUtil.com?
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Absolutely! All processing happens entirely in your browser using client-side JavaScript. 
                    Your JSON data never leaves your device or gets sent to our servers. This ensures complete 
                    privacy and security for your sensitive information.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold mb-2 text-slate-800 dark:text-slate-200">
                    What's the maximum file size I can process?
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Our tools can handle files up to 10MB efficiently. For larger files, we recommend breaking 
                    them into smaller chunks or using our tools for specific sections of your data.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold mb-2 text-slate-800 dark:text-slate-200">
                    Can I use these tools offline?
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Yes! After your first visit, the site works offline for all core functionality. The tools 
                    are cached in your browser and will work without an internet connection.
                  </p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold mb-2 text-slate-800 dark:text-slate-200">
                    Do you support JSONC (JSON with comments)?
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Our validator can identify JSONC format, but most tools work with standard JSON. 
                    Use the formatter to remove comments if you need to convert JSONC to standard JSON.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card className="mt-6 sticky top-6">
            <CardHeader>
              <CardTitle className="text-lg">🔗 Quick Navigation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2 text-sm">
                <Link to="/validator" className="block text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  → JSON Validator
                </Link>
                <Link to="/formatter" className="block text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  → JSON Formatter
                </Link>
                <Link to="/converter" className="block text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  → JSON Converter
                </Link>
                <Link to="/diff" className="block text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  → JSON Diff
                </Link>
                <Link to="/path" className="block text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  → JSONPath Query
                </Link>
                <Link to="/schema" className="block text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  → Schema Generator
                </Link>
              </div>
              
              <Separator />
              
              <div className="space-y-2 text-sm">
                <Link to="/docs#getting-started" className="block text-slate-600 dark:text-slate-400 hover:underline">Getting Started</Link>
                <Link to="/docs#tools" className="block text-slate-600 dark:text-slate-400 hover:underline">Tool Guides</Link>
                <Link to="/docs#best-practices" className="block text-slate-600 dark:text-slate-400 hover:underline">Best Practices</Link>
                <Link to="/docs#faq" className="block text-slate-600 dark:text-slate-400 hover:underline">FAQ</Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
