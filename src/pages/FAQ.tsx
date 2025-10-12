
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const faqCategories = [
    {
      category: "General Questions",
      questions: [
        {
          question: "What is JSONUtil.com?",
          answer: "JSONUtil.com is a comprehensive suite of free online JSON tools designed for developers. We provide tools for validating, formatting, converting, and analyzing JSON data. All processing happens in your browser for maximum privacy and speed."
        },
        {
          question: "Is my data secure when using JSONUtil.com?",
          answer: "Absolutely! All processing happens entirely in your browser using client-side JavaScript. Your JSON data never leaves your device or gets sent to our servers. This ensures complete privacy and security for your sensitive information."
        },
        {
          question: "Do I need to create an account to use the tools?",
          answer: "No account required! All our tools are completely free and can be used without registration. Simply visit any tool page and start using it immediately."
        },
        {
          question: "Can I use these tools offline?",
          answer: "Yes! After your first visit, the site works offline for all core functionality. The tools are cached in your browser and will work without an internet connection."
        }
      ]
    },
    {
      category: "JSON Validation",
      questions: [
        {
          question: "What types of JSON errors can the validator detect?",
          answer: "Our validator detects syntax errors (missing brackets, commas, quotes), structural issues, invalid characters, and provides detailed error messages with line numbers to help you fix problems quickly."
        },
        {
          question: "Does the validator support JSONC (JSON with comments)?",
          answer: "Our validator can identify JSONC format, but most tools work with standard JSON. Use the formatter to remove comments if you need to convert JSONC to standard JSON."
        },
        {
          question: "What's the maximum file size I can validate?",
          answer: "Our tools can handle files up to 10MB efficiently. For larger files, we recommend breaking them into smaller chunks or using our tools for specific sections of your data."
        }
      ]
    },
    {
      category: "JSON Formatting",
      questions: [
        {
          question: "Can I customize the formatting style?",
          answer: "Yes! Our formatter allows you to customize indentation (2, 4, or 8 spaces), sort keys alphabetically, and choose between expanded or minified formatting styles."
        },
        {
          question: "Does the formatter preserve data types?",
          answer: "Absolutely. Our formatter maintains all original data types including strings, numbers, booleans, arrays, and objects while only changing the visual presentation."
        },
        {
          question: "Can I minify JSON to reduce file size?",
          answer: "Yes, our formatter includes a minify option that removes all unnecessary whitespace, making your JSON as compact as possible for production use."
        }
      ]
    },
    {
      category: "JSON Conversion",
      questions: [
        {
          question: "What formats can I convert JSON to?",
          answer: "You can convert JSON to CSV, XML, YAML, TypeScript interfaces, and more. Each conversion preserves the original data structure while adapting to the target format's conventions."
        },
        {
          question: "Can I convert nested JSON objects to CSV?",
          answer: "Yes, our converter handles nested JSON for CSV conversion. Complex nested objects are stringified into JSON strings within CSV cells to preserve all data. For truly flat CSV, consider restructuring your JSON first."
        },
        {
          question: "Is the conversion process reversible?",
          answer: "While we focus on JSON-to-other-format conversion, some formats like YAML and XML can be converted back to JSON with minimal data loss. CSV conversion may lose some structural information."
        }
      ]
    },
    {
      category: "JSONPath and Schema",
      questions: [
        {
          question: "What is JSONPath and how do I use it?",
          answer: "JSONPath is a query language for JSON, similar to XPath for XML. Use expressions like '$.users[*].name' to extract specific data from complex JSON structures. Our tool provides real-time testing and examples."
        },
        {
          question: "Can the schema generator handle complex nested objects?",
          answer: "Yes, our schema generator analyzes your JSON data and creates comprehensive schemas that include nested objects, arrays, and all data types with appropriate constraints."
        },
        {
          question: "Do you support JSON Schema draft versions?",
          answer: "We support the latest JSON Schema specifications and clearly indicate which draft version is being used for maximum compatibility with your validation needs."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "Which browsers are supported?",
          answer: "Our tools work in all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version for the best experience."
        },
        {
          question: "Why might the tools run slowly with large files?",
          answer: "Performance depends on your device's processing power and available memory. For very large files (>5MB), consider breaking them into smaller sections or using a more powerful device."
        },
        {
          question: "Can I integrate these tools into my development workflow?",
          answer: "While our tools are web-based, you can bookmark specific tool URLs, use browser automation, or refer to our documentation for API-like usage patterns in your workflow."
        },
        {
          question: "Do you provide programmatic access or APIs?",
          answer: "Currently, our tools are designed for interactive web use. However, all our processing logic is client-side JavaScript, which you can study and adapt for your own projects."
        }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          Find answers to common questions about our JSON tools, features, and best practices. 
          Can't find what you're looking for? <Link to="/contact" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Contact us</Link> for personalized help.
        </p>
      </div>

      {/* Quick Links */}
      <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Navigation</h3>
          <div className="flex flex-wrap gap-2">
            {faqCategories.map((category, index) => (
              <Badge key={index} variant="outline" className="cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20">
                {category.category}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* FAQ Categories */}
      <div className="space-y-8">
        {faqCategories.map((category, categoryIndex) => (
          <Card key={categoryIndex}>
            <CardHeader>
              <CardTitle className="text-xl text-slate-800 dark:text-slate-200">
                {category.category}
              </CardTitle>
              <CardDescription>
                Common questions about {category.category.toLowerCase()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, questionIndex) => (
                  <AccordionItem key={questionIndex} value={`${categoryIndex}-${questionIndex}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 dark:text-slate-400">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Help Section */}
      <Card className="mt-12 bg-slate-50 dark:bg-slate-800/50">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
            Still Need Help?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
            Our comprehensive documentation covers advanced use cases, and our support team is ready to help with specific questions about your JSON processing needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/docs">
              <Badge className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2">
                View Documentation
              </Badge>
            </Link>
            <Link to="/contact">
              <Badge className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2">
                Contact Support
              </Badge>
            </Link>
            <Link to="/blog">
              <Badge className="bg-green-600 hover:bg-green-700 text-white px-4 py-2">
                Read Our Blog
              </Badge>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FAQ;
