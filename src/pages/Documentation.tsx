
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AdBanner from '@/components/ads/AdBanner';

const Documentation = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Documentation
        </h1>
        <p className="text-slate-600 dark:text-slate-300">
          Complete guide to using JSONUtil.com tools and understanding JSON best practices.
        </p>
      </div>

      <AdBanner position="in-content" />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          {/* Getting Started */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>🚀 Getting Started</CardTitle>
              <CardDescription>Learn the basics of JSON and how to use our tools</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <h3>What is JSON?</h3>
              <p>JSON (JavaScript Object Notation) is a lightweight, text-based data interchange format. It's easy for humans to read and write, and easy for machines to parse and generate.</p>
              
              <h3>JSON Syntax Rules</h3>
              <ul>
                <li>Data is in name/value pairs</li>
                <li>Data is separated by commas</li>
                <li>Curly braces hold objects</li>
                <li>Square brackets hold arrays</li>
                <li>Strings must use double quotes</li>
              </ul>
              
              <h3>Basic JSON Example</h3>
              <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
{`{
  "name": "John Doe",
  "age": 30,
  "city": "New York",
  "hobbies": ["reading", "swimming", "coding"],
  "married": true
}`}
              </pre>
            </CardContent>
          </Card>

          {/* Tool Guides */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>🛠️ Tool Guides</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  JSON Validator <Badge variant="outline">Free</Badge>
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  Validate JSON syntax and identify errors with detailed reporting.
                </p>
                <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                  <li>• Paste JSON into the input area</li>
                  <li>• Click "Validate JSON" to check syntax</li>
                  <li>• Review error messages and suggestions</li>
                  <li>• View structure statistics for valid JSON</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  JSON Formatter <Badge variant="outline">Free</Badge>
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  Format and beautify JSON for better readability.
                </p>
                <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                  <li>• Input unformatted JSON</li>
                  <li>• Choose indentation (2, 4, or 8 spaces)</li>
                  <li>• Enable "Sort Keys" for alphabetical ordering</li>
                  <li>• Use "Minify" to remove all whitespace</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  JSON Converter <Badge variant="outline">Free</Badge>
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  Convert JSON to other formats like CSV, XML, YAML.
                </p>
                <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                  <li>• Select output format</li>
                  <li>• Configure conversion options</li>
                  <li>• Download or copy converted data</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* API Reference */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>📚 JSON Best Practices</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <h3>Performance Considerations</h3>
              <ul>
                <li>Keep JSON structure as flat as possible</li>
                <li>Use appropriate data types (numbers vs strings)</li>
                <li>Minimize deeply nested objects</li>
                <li>Consider using arrays for collections</li>
              </ul>

              <h3>Security Best Practices</h3>
              <ul>
                <li>Validate JSON on both client and server</li>
                <li>Sanitize data before processing</li>
                <li>Use HTTPS for JSON data transmission</li>
                <li>Implement proper error handling</li>
              </ul>

              <h3>Common Use Cases</h3>
              <ul>
                <li><strong>APIs:</strong> REST API requests and responses</li>
                <li><strong>Configuration:</strong> Application settings and config files</li>
                <li><strong>Data Storage:</strong> NoSQL databases and data exchange</li>
                <li><strong>Web Development:</strong> AJAX requests and local storage</li>
              </ul>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>❓ Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Is my data secure when using JSONUtil.com?</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Yes! All processing happens entirely in your browser. Your JSON data never leaves your device or gets sent to our servers.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">What's the maximum file size I can process?</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Our tools can handle files up to 10MB. For larger files, consider breaking them into smaller chunks.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Can I use these tools offline?</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Yes! After your first visit, the site works offline for all core functionality.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Do you support JSONC (JSON with comments)?</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Our validator can identify JSONC, but most tools work with standard JSON. Use the formatter to remove comments if needed.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <AdBanner position="sidebar" />
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">🔗 Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <a href="#getting-started" className="block text-blue-600 dark:text-blue-400 hover:underline">Getting Started</a>
              <a href="#validator" className="block text-blue-600 dark:text-blue-400 hover:underline">JSON Validator</a>
              <a href="#formatter" className="block text-blue-600 dark:text-blue-400 hover:underline">JSON Formatter</a>
              <a href="#converter" className="block text-blue-600 dark:text-blue-400 hover:underline">JSON Converter</a>
              <a href="#best-practices" className="block text-blue-600 dark:text-blue-400 hover:underline">Best Practices</a>
              <a href="#faq" className="block text-blue-600 dark:text-blue-400 hover:underline">FAQ</a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
