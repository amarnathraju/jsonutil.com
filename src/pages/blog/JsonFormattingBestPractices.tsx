
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, User, Calendar, Settings, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const JsonFormattingBestPractices = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
        
        <div className="mb-6">
          <Badge className="mb-4">Best Practices</Badge>
          <h1 className="text-4xl font-bold mb-4">JSON Formatting Best Practices for Developers</h1>
          
          <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400 mb-6">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              JSONUtil Team
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              January 8, 2024
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              6 min read
            </div>
          </div>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Master JSON formatting with industry best practices that improve code readability, maintainability, 
            and team collaboration. Learn when to format, when to minify, and how to establish consistent standards.
          </p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Why JSON Formatting Matters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Properly formatted JSON is crucial for developer productivity, code maintenance, and team collaboration. 
              Well-formatted JSON reduces errors, speeds up debugging, and makes code reviews more effective.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Benefits of Good Formatting:</h4>
                <ul className="list-disc pl-4 space-y-1 text-green-700 dark:text-green-300 text-sm">
                  <li>Easier to read and understand</li>
                  <li>Faster debugging and error detection</li>
                  <li>Better version control diffs</li>
                  <li>Improved code review process</li>
                  <li>Reduced syntax errors</li>
                </ul>
              </div>
              
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Problems with Poor Formatting:</h4>
                <ul className="list-disc pl-4 space-y-1 text-red-700 dark:text-red-300 text-sm">
                  <li>Hard to spot errors and typos</li>
                  <li>Difficult to understand structure</li>
                  <li>Slower development and debugging</li>
                  <li>Poor team collaboration</li>
                  <li>Inconsistent code style</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Indentation Standards</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Consistent indentation is the foundation of readable JSON. Choose a standard and stick to it across your entire project.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">2-Space Indentation (Recommended for most projects)</h4>
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                  <pre className="text-sm">
{`{
  "user": {
    "id": 123,
    "profile": {
      "name": "John Doe",
      "email": "john@example.com",
      "preferences": {
        "theme": "dark",
        "notifications": true
      }
    },
    "roles": ["admin", "user"]
  }
}`}
                  </pre>
                </div>
                <p className="text-sm text-green-700 dark:text-green-300 mt-2">
                  ✅ Best for web development, saves horizontal space, works well in most editors
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">4-Space Indentation</h4>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                  <pre className="text-sm">
{`{
    "user": {
        "id": 123,
        "profile": {
            "name": "John Doe",
            "email": "john@example.com"
        }
    }
}`}
                  </pre>
                </div>
                <p className="text-sm text-blue-700 dark:text-blue-300 mt-2">
                  ℹ️ Good for complex nested structures, more readable but uses more horizontal space
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Tab Indentation (Not Recommended)</h4>
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-lg">
                  <pre className="text-sm">
{`{
\t"user": {
\t\t"id": 123,
\t\t"name": "John"
\t}
}`}
                  </pre>
                </div>
                <p className="text-sm text-red-700 dark:text-red-300 mt-2">
                  ❌ Inconsistent rendering across different editors and platforms
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Key Naming Conventions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Consistent key naming makes JSON more predictable and easier to work with across different systems and programming languages.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">camelCase (Recommended for JavaScript projects)</h4>
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                  <pre className="text-sm">
{`{
  "firstName": "John",
  "lastName": "Doe",
  "emailAddress": "john@example.com",
  "userPreferences": {
    "defaultTheme": "dark",
    "enableNotifications": true
  },
  "accountCreatedAt": "2024-01-01T00:00:00Z"
}`}
                  </pre>
                </div>
                <p className="text-sm text-green-700 dark:text-green-300 mt-2">
                  ✅ Native JavaScript convention, no transformation needed in JS applications
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">snake_case (Common in Python/API projects)</h4>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                  <pre className="text-sm">
{`{
  "first_name": "John",
  "last_name": "Doe",
  "email_address": "john@example.com",
  "user_preferences": {
    "default_theme": "dark",
    "enable_notifications": true
  },
  "account_created_at": "2024-01-01T00:00:00Z"
}`}
                  </pre>
                </div>
                <p className="text-sm text-blue-700 dark:text-blue-300 mt-2">
                  ℹ️ Common in REST APIs, Python applications, and database-centric systems
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">kebab-case (Avoid for JSON)</h4>
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-lg">
                  <pre className="text-sm">
{`{
  "first-name": "John",
  "last-name": "Doe",
  "email-address": "john@example.com"
}`}
                  </pre>
                </div>
                <p className="text-sm text-red-700 dark:text-red-300 mt-2">
                  ❌ Requires quotes when accessing properties in JavaScript: obj["first-name"]
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              When to Format vs When to Minify
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">Use Formatted JSON When:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Development:</strong> Working on code, debugging, or testing</li>
                  <li><strong>Configuration:</strong> Application settings, environment configs</li>
                  <li><strong>Documentation:</strong> API examples, tutorials, guides</li>
                  <li><strong>Code Reviews:</strong> Sharing JSON for team review</li>
                  <li><strong>Version Control:</strong> Committing JSON files to Git</li>
                  <li><strong>Learning:</strong> Teaching or learning JSON concepts</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-purple-600 dark:text-purple-400">Use Minified JSON When:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Production APIs:</strong> Reducing bandwidth and response times</li>
                  <li><strong>Data Storage:</strong> Saving space in databases or files</li>
                  <li><strong>Caching:</strong> Storing JSON in Redis or memory caches</li>
                  <li><strong>Mobile Apps:</strong> Minimizing data usage on mobile networks</li>
                  <li><strong>CDN Delivery:</strong> Faster content delivery worldwide</li>
                  <li><strong>Build Processes:</strong> Automated production builds</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Pro Tip:</h4>
              <p className="text-yellow-700 dark:text-yellow-300">
                Use build tools to automatically minify JSON for production while keeping formatted versions 
                for development. Many bundlers like Webpack, Vite, and Rollup can handle this automatically.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Array and Object Formatting</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Small Arrays - Single Line</h4>
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                  <pre className="text-sm">
{`{
  "colors": ["red", "green", "blue"],
  "numbers": [1, 2, 3, 4, 5],
  "roles": ["admin", "user"]
}`}
                  </pre>
                </div>
                <p className="text-sm text-green-700 dark:text-green-300 mt-2">
                  ✅ Good for simple arrays with few, short items
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Large Arrays - Multi-line</h4>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                  <pre className="text-sm">
{`{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    },
    {
      "id": 2,
      "name": "Jane Smith", 
      "email": "jane@example.com"
    }
  ],
  "permissions": [
    "read",
    "write",
    "delete",
    "admin"
  ]
}`}
                  </pre>
                </div>
                <p className="text-sm text-blue-700 dark:text-blue-300 mt-2">
                  ℹ️ Better for complex objects or long lists
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Nested Objects Structure</h4>
                <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 p-4 rounded-lg">
                  <pre className="text-sm">
{`{
  "app": {
    "name": "MyApp",
    "version": "1.2.3",
    "config": {
      "database": {
        "host": "localhost",
        "port": 5432,
        "credentials": {
          "username": "admin",
          "passwordHash": "..."
        }
      },
      "cache": {
        "enabled": true,
        "ttl": 3600
      }
    }
  }
}`}
                  </pre>
                </div>
                <p className="text-sm text-purple-700 dark:text-purple-300 mt-2">
                  💡 Each nesting level gets consistent indentation
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Team Standards and Automation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Establishing Team Standards</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Document JSON formatting rules in your style guide</li>
                  <li>Choose consistent indentation (2 or 4 spaces)</li>
                  <li>Standardize key naming convention (camelCase or snake_case)</li>
                  <li>Define when to use single-line vs multi-line arrays</li>
                  <li>Set maximum line length guidelines</li>
                  <li>Establish sorting rules for object keys</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Automation Tools</h4>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Editor Plugins:</h5>
                  <ul className="list-disc pl-4 space-y-1 text-sm">
                    <li>VS Code: JSON Tools, Prettier</li>
                    <li>Sublime Text: Pretty JSON</li>
                    <li>Atom: Pretty JSON package</li>
                    <li>IntelliJ/WebStorm: Built-in JSON formatter</li>
                  </ul>
                  
                  <h5 className="font-medium mb-2 mt-4">Command Line Tools:</h5>
                  <ul className="list-disc pl-4 space-y-1 text-sm">
                    <li><code>jq</code> - Command-line JSON processor</li>
                    <li><code>python -m json.tool</code> - Python's built-in formatter</li>
                    <li><code>prettier --parser json</code> - Prettier formatter</li>
                    <li>Our <Link to="/formatter" className="text-blue-600 hover:underline">online JSON formatter</Link></li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Git Hooks and CI/CD</h4>
                <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm text-slate-100">
{`# Pre-commit hook to format JSON files
#!/bin/bash
for file in $(git diff --cached --name-only | grep -E '\\.(json)$'); do
  if [ -f "$file" ]; then
    prettier --write "$file"
    git add "$file"
  fi
done`}
                  </pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Security and Performance Considerations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Security Best Practices</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Never include sensitive data in formatted JSON committed to version control</li>
                  <li>Use environment variables for secrets in configuration files</li>
                  <li>Be cautious with JSON formatting in logs (may expose sensitive data)</li>
                  <li>Validate JSON structure before formatting to prevent injection attacks</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Performance Considerations</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Formatted JSON is 20-40% larger than minified JSON</li>
                  <li>Use compression (gzip) to reduce network transfer costs</li>
                  <li>Consider streaming parsers for very large JSON files</li>
                  <li>Cache formatted versions to avoid repeated processing</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">File Size Comparison Example:</h4>
                <div className="text-sm text-blue-700 dark:text-blue-300">
                  <p>• Original JSON: 1,250 bytes</p>
                  <p>• Formatted JSON: 1,750 bytes (+40%)</p>
                  <p>• Minified JSON: 890 bytes (-29%)</p>
                  <p>• Gzipped formatted: 680 bytes (-46%)</p>
                  <p>• Gzipped minified: 620 bytes (-50%)</p>
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
              Consistent JSON formatting is an investment in code quality that pays dividends in development speed, 
              team collaboration, and maintainability. By following these best practices, you'll create JSON that 
              is readable, maintainable, and professional.
            </p>
            
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border">
              <h4 className="font-semibold mb-2">Quick Checklist:</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>✅ Use consistent 2 or 4-space indentation</li>
                <li>✅ Choose camelCase or snake_case and stick to it</li>
                <li>✅ Format for development, minify for production</li>
                <li>✅ Use automation tools and editor plugins</li>
                <li>✅ Document your team's standards</li>
                <li>✅ Set up automated formatting in your build process</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Format Your JSON Now</h3>
            <p className="mb-4">
              Ready to format your JSON with these best practices? Try our free online formatter with customizable options:
            </p>
            <Link to="/formatter">
              <Badge className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3">
                Use JSON Formatter Tool →
              </Badge>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JsonFormattingBestPractices;
