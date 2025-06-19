import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, User, Calendar, ArrowRight, Download, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';

const JsonConversionGuide = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
        
        <div className="mb-6">
          <Badge className="mb-4">Tutorial</Badge>
          <h1 className="text-4xl font-bold mb-4">Converting JSON to CSV, XML, and YAML: A Developer's Guide</h1>
          
          <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400 mb-6">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              JSONUtil Team
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              January 5, 2024
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              10 min read
            </div>
          </div>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Master the art of converting JSON to other popular data formats. Learn the best practices, 
            common pitfalls, and practical use cases for each conversion type.
          </p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              Why Convert JSON?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              While JSON is excellent for APIs and web applications, different systems and use cases often require 
              other data formats. Converting JSON allows you to integrate with legacy systems, create reports, 
              and work with specialized tools.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Common Conversion Scenarios:</h4>
                <ul className="list-disc pl-4 space-y-1 text-blue-700 dark:text-blue-300 text-sm">
                  <li>Exporting API data to spreadsheets</li>
                  <li>Migrating to legacy XML systems</li>
                  <li>Creating configuration files in YAML</li>
                  <li>Generating reports for business users</li>
                  <li>Data analysis and visualization</li>
                </ul>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Benefits of Format Conversion:</h4>
                <ul className="list-disc pl-4 space-y-1 text-green-700 dark:text-green-300 text-sm">
                  <li>Better compatibility with existing tools</li>
                  <li>Improved readability for non-technical users</li>
                  <li>Integration with specialized software</li>
                  <li>Meeting client or system requirements</li>
                  <li>Backup and archival purposes</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="w-5 h-5" />
              JSON to CSV Conversion
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              CSV (Comma-Separated Values) is perfect for tabular data and spreadsheet applications. 
              Converting JSON to CSV is ideal for data analysis, reporting, and integration with business tools.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Example: Converting User Data</h4>
                
                <div className="mb-4">
                  <h5 className="font-medium mb-2">Original JSON:</h5>
                  <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm text-slate-100">
{`{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "age": 30,
      "city": "New York",
      "active": true
    },
    {
      "id": 2,
      "name": "Jane Smith", 
      "email": "jane@example.com",
      "age": 25,
      "city": "San Francisco",
      "active": false
    },
    {
      "id": 3,
      "name": "Bob Johnson",
      "email": "bob@example.com", 
      "age": 35,
      "city": "Chicago",
      "active": true
    }
  ]
}`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium mb-2">Converted CSV:</h5>
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                    <pre className="text-sm">
{`id,name,email,age,city,active
1,"John Doe","john@example.com",30,"New York",true
2,"Jane Smith","jane@example.com",25,"San Francisco",false
3,"Bob Johnson","bob@example.com",35,"Chicago",true`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">CSV Conversion Considerations:</h4>
                <ul className="list-disc pl-4 space-y-1 text-yellow-700 dark:text-yellow-300 text-sm">
                  <li><strong>Flat Structure:</strong> CSV works best with flat, tabular data</li>
                  <li><strong>Nested Objects:</strong> May need to be flattened or serialized as strings</li>
                  <li><strong>Data Types:</strong> All values become strings in CSV</li>
                  <li><strong>Special Characters:</strong> Quotes and commas need proper escaping</li>
                  <li><strong>Arrays:</strong> May need to be converted to delimited strings</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Best Practices for JSON to CSV:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Ensure all objects have the same structure for consistent columns</li>
                  <li>Handle missing properties by providing default values</li>
                  <li>Flatten nested objects using dot notation (e.g., "address.city")</li>
                  <li>Convert arrays to delimited strings or separate columns</li>
                  <li>Use proper CSV escaping for special characters</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5" />
              JSON to XML Conversion
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              XML conversion is essential for legacy system integration, SOAP web services, and enterprise applications 
              that still rely on XML-based data exchange.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Example: Converting Product Data</h4>
                
                <div className="mb-4">
                  <h5 className="font-medium mb-2">Original JSON:</h5>
                  <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm text-slate-100">
{`{
  "product": {
    "id": 123,
    "name": "Laptop Computer",
    "category": "Electronics",
    "price": 999.99,
    "inStock": true,
    "tags": ["laptop", "computer", "electronics"],
    "specifications": {
      "cpu": "Intel i7",
      "memory": "16GB",
      "storage": "512GB SSD"
    }
  }
}`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium mb-2">Converted XML:</h5>
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                    <pre className="text-sm">
{`<?xml version="1.0" encoding="UTF-8"?>
<product>
  <id>123</id>
  <name>Laptop Computer</name>
  <category>Electronics</category>
  <price>999.99</price>
  <inStock>true</inStock>
  <tags>
    <tag>laptop</tag>
    <tag>computer</tag>
    <tag>electronics</tag>
  </tags>
  <specifications>
    <cpu>Intel i7</cpu>
    <memory>16GB</memory>
    <storage>512GB SSD</storage>
  </specifications>
</product>`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">XML Conversion Benefits:</h4>
                <ul className="list-disc pl-4 space-y-1 text-blue-700 dark:text-blue-300 text-sm">
                  <li><strong>Self-Describing:</strong> XML is more self-documenting than JSON</li>
                  <li><strong>Validation:</strong> Strong schema validation with XSD</li>
                  <li><strong>Namespaces:</strong> Better support for complex data organization</li>
                  <li><strong>Attributes:</strong> Can store metadata as element attributes</li>
                  <li><strong>Legacy Support:</strong> Wide support in enterprise systems</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">XML Conversion Strategies:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Array Handling:</strong> Convert JSON arrays to repeated XML elements</li>
                  <li><strong>Root Element:</strong> Wrap content in a root element for valid XML</li>
                  <li><strong>Attribute vs Element:</strong> Decide whether to use attributes or child elements</li>
                  <li><strong>Naming Conventions:</strong> Ensure XML element names are valid identifiers</li>
                  <li><strong>Type Information:</strong> Consider adding type attributes for data types</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>JSON to YAML Conversion</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              YAML (YAML Ain't Markup Language) is human-readable and perfect for configuration files, 
              documentation, and scenarios where readability is paramount.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Example: Converting Configuration Data</h4>
                
                <div className="mb-4">
                  <h5 className="font-medium mb-2">Original JSON:</h5>
                  <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm text-slate-100">
{`{
  "app": {
    "name": "MyApplication",
    "version": "1.2.3",
    "environment": "production"
  },
  "database": {
    "host": "localhost",
    "port": 5432,
    "name": "myapp_db",
    "ssl": true
  },
  "features": {
    "authentication": true,
    "analytics": false,
    "caching": {
      "enabled": true,
      "ttl": 3600,
      "providers": ["redis", "memory"]
    }
  }
}`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium mb-2">Converted YAML:</h5>
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                    <pre className="text-sm">
{`app:
  name: MyApplication
  version: 1.2.3
  environment: production

database:
  host: localhost
  port: 5432
  name: myapp_db
  ssl: true

features:
  authentication: true
  analytics: false
  caching:
    enabled: true
    ttl: 3600
    providers:
      - redis
      - memory`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">YAML Advantages:</h4>
                <ul className="list-disc pl-4 space-y-1 text-purple-700 dark:text-purple-300 text-sm">
                  <li><strong>Readability:</strong> Most human-readable data format</li>
                  <li><strong>Comments:</strong> Supports comments for documentation</li>
                  <li><strong>No Quotes:</strong> Strings don't require quotes in most cases</li>
                  <li><strong>Multi-line:</strong> Natural support for multi-line strings</li>
                  <li><strong>DevOps Friendly:</strong> Popular in CI/CD and configuration management</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">YAML Conversion Best Practices:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use consistent indentation (2 spaces recommended)</li>
                  <li>Be careful with special characters and reserved words</li>
                  <li>Consider adding comments for complex configurations</li>
                  <li>Use proper quoting for strings with special characters</li>
                  <li>Test the converted YAML for syntax validity</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Advanced Conversion Techniques</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Handling Complex Data Structures</h4>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Nested Arrays and Objects:</h5>
                  <ul className="list-disc pl-4 space-y-1 text-sm">
                    <li><strong>CSV:</strong> Flatten to dot notation or serialize as JSON strings</li>
                    <li><strong>XML:</strong> Create nested elements or use CDATA sections</li>
                    <li><strong>YAML:</strong> Preserves structure naturally with indentation</li>
                  </ul>
                  
                  <h5 className="font-medium mb-2 mt-4">Data Type Preservation:</h5>
                  <ul className="list-disc pl-4 space-y-1 text-sm">
                    <li><strong>Numbers:</strong> May become strings in CSV, preserved in XML/YAML</li>
                    <li><strong>Booleans:</strong> Convert to appropriate format for target system</li>
                    <li><strong>Null Values:</strong> Handle appropriately for each format</li>
                    <li><strong>Dates:</strong> Consider ISO 8601 format for consistency</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Batch Conversion Strategies</h4>
                <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm text-slate-100">
{`# Example: Batch conversion script
#!/bin/bash

# Convert all JSON files in a directory to CSV
for file in *.json; do
  base_name=$(basename "$file" .json)
  echo "Converting $file to ${base_name}.csv"
  # Use your preferred conversion tool here
  json2csv "$file" > "${base_name}.csv"
done

# Convert to XML with validation
for file in *.json; do
  base_name=$(basename "$file" .json)
  echo "Converting $file to ${base_name}.xml"
  json2xml "$file" | xmllint --format - > "${base_name}.xml"
done`}
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Quality Assurance</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Validation:</strong> Always validate the converted output format</li>
                  <li><strong>Round-trip Testing:</strong> Test converting back to JSON to ensure data integrity</li>
                  <li><strong>Schema Verification:</strong> Use schemas to validate structure and data types</li>
                  <li><strong>Sample Testing:</strong> Test with representative data samples</li>
                  <li><strong>Error Handling:</strong> Implement proper error handling for malformed data</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Tools and Automation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Online Tools</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li><Link to="/converter" className="text-blue-600 hover:underline">JSONUtil.com Converter</Link> - Multi-format conversion</li>
                  <li>ConvertCSV.com - JSON to CSV conversion</li>
                  <li>JSON2XML.com - JSON to XML conversion</li>
                  <li>JSON2YAML.com - JSON to YAML conversion</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Command Line Tools</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li><code>jq</code> - Swiss army knife for JSON processing</li>
                  <li><code>json2csv</code> - Direct JSON to CSV conversion</li>
                  <li><code>yq</code> - YAML processing tool</li>
                  <li><code>xmlstarlet</code> - XML manipulation toolkit</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Programming Libraries:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h5 className="font-medium mb-1">JavaScript/Node.js:</h5>
                  <ul className="list-disc pl-4 space-y-1 text-blue-700 dark:text-blue-300">
                    <li>json2csv</li>
                    <li>js-yaml</li>
                    <li>xml2js</li>
                    <li>fast-xml-parser</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-1">Python:</h5>
                  <ul className="list-disc pl-4 space-y-1 text-blue-700 dark:text-blue-300">
                    <li>pandas</li>
                    <li>PyYAML</li>
                    <li>xmltodict</li>
                    <li>dicttoxml</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-1">Java:</h5>
                  <ul className="list-disc pl-4 space-y-1 text-blue-700 dark:text-blue-300">
                    <li>Jackson</li>
                    <li>opencsv</li>
                    <li>SnakeYAML</li>
                    <li>JAXB</li>
                  </ul>
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
              Converting JSON to other formats opens up possibilities for data integration, reporting, and 
              system interoperability. Each format has its strengths and use cases:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>CSV:</strong> Perfect for spreadsheets, data analysis, and business reporting</li>
              <li><strong>XML:</strong> Ideal for enterprise systems, SOAP services, and structured documents</li>
              <li><strong>YAML:</strong> Excellent for configuration files, documentation, and human readability</li>
            </ul>
            <p className="mt-4">
              Choose the right format for your specific needs, and always validate your conversions to ensure data integrity.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Convert Your JSON Now</h3>
            <p className="mb-4">
              Ready to convert your JSON to CSV, XML, or YAML? Try our free online converter with support for multiple formats:
            </p>
            <Link to="/converter">
              <Badge className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3">
                Use JSON Converter Tool →
              </Badge>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JsonConversionGuide;
