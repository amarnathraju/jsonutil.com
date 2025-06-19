
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, Shield, Zap, Code, FileText, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const faqCategories = [
    {
      category: "General Questions",
      icon: <HelpCircle className="w-5 h-5" />,
      questions: [
        {
          question: "What is JSONUtil.com?",
          answer: "JSONUtil.com is a comprehensive suite of free online JSON tools designed for developers, data analysts, and anyone working with JSON data. Our tools include validation, formatting, conversion, comparison, and more - all processing data securely in your browser."
        },
        {
          question: "Do I need to create an account to use the tools?",
          answer: "No account required! All our tools are completely free and work without registration. Simply visit any tool page and start using it immediately."
        },
        {
          question: "Is there a limit on file size?",
          answer: "Our tools can efficiently handle JSON files up to 10MB. For larger files, we recommend breaking them into smaller chunks or processing specific sections. Most common use cases are well within this limit."
        },
        {
          question: "Can I use these tools offline?",
          answer: "Yes! After your first visit, our site works offline for all core functionality. The tools are cached in your browser using service workers, so you can validate and format JSON even without an internet connection."
        },
        {
          question: "Which browsers are supported?",
          answer: "Our tools work in all modern browsers including Chrome, Firefox, Safari, Edge, and Opera. We recommend using the latest version for the best experience and security."
        }
      ]
    },
    {
      category: "Security & Privacy",
      icon: <Shield className="w-5 h-5" />,
      questions: [
        {
          question: "Is my data secure when using JSONUtil.com?",
          answer: "Absolutely! All processing happens entirely in your browser using client-side JavaScript. Your JSON data never leaves your device or gets sent to our servers. This ensures complete privacy and security for your sensitive information."
        },
        {
          question: "Do you store or log my JSON data?",
          answer: "No, we never store, log, or transmit your JSON data. Everything is processed locally in your browser. We only collect anonymous usage statistics to improve our service, but never the actual data you process."
        },
        {
          question: "Can I use these tools with sensitive or confidential data?",
          answer: "Yes, because all processing is client-side, our tools are safe for sensitive data. However, always follow your organization's data handling policies and avoid pasting sensitive data in shared or public environments."
        },
        {
          question: "What data do you collect about users?",
          answer: "We collect minimal, anonymous usage data including page views, feature usage, browser type, and performance metrics. We use Google Analytics for this purpose. No personal information or JSON content is collected."
        },
        {
          question: "How do you handle cookies?",
          answer: "We use essential cookies for site functionality and optional cookies for analytics and preferences. You can control cookie preferences through our cookie consent banner or your browser settings."
        }
      ]
    },
    {
      category: "Tool-Specific Questions",
      icon: <Code className="w-5 h-5" />,
      questions: [
        {
          question: "What's the difference between validation and formatting?",
          answer: "Validation checks if your JSON syntax is correct and identifies errors, while formatting (beautifying) makes valid JSON more readable by adding proper indentation and line breaks. Use validation first to fix errors, then formatting for readability."
        },
        {
          question: "Can your validator handle JSONC (JSON with comments)?",
          answer: "Our validator can identify JSONC format and will show appropriate error messages. However, most tools work with standard JSON. Use our formatter to remove comments if you need to convert JSONC to standard JSON."
        },
        {
          question: "What formats can I convert JSON to?",
          answer: "Our converter supports JSON to CSV, XML, YAML, and TypeScript interfaces. Each conversion includes options for customization like handling nested objects, arrays, and data type preservation."
        },
        {
          question: "How does the JSON diff tool work?",
          answer: "The diff tool compares two JSON objects and highlights differences including added, removed, and modified properties. It works recursively through nested objects and provides a detailed analysis of changes."
        },
        {
          question: "What is JSONPath and when should I use it?",
          answer: "JSONPath is a query language for JSON, similar to XPath for XML. Use it to extract specific data from complex JSON structures, filter arrays, or find nested values. It's perfect for API testing and data extraction."
        }
      ]
    },
    {
      category: "Performance & Technical",
      icon: <Zap className="w-5 h-5" />,
      questions: [
        {
          question: "Why are my large JSON files slow to process?",
          answer: "Large files require more browser memory and processing power. For files over 5MB, consider: 1) Using a more powerful device, 2) Closing other browser tabs, 3) Processing smaller sections, or 4) Using desktop tools for very large files."
        },
        {
          question: "Can I integrate your tools into my application?",
          answer: "While our tools are web-based, the underlying logic is JavaScript that could be adapted. For integration, consider using similar open-source libraries or our tools' REST-like functionality through browser automation."
        },
        {
          question: "Do you provide an API?",
          answer: "Currently, we don't offer a public API since our tools are designed for client-side processing. However, you can use similar functionality through popular programming libraries like jq, json-schema, or language-specific JSON libraries."
        },
        {
          question: "Why might my JSON appear to validate but still cause errors in my application?",
          answer: "Valid JSON syntax doesn't guarantee valid data structure. Your application might expect specific properties, data types, or formats. Consider using our Schema Generator to create validation rules for your specific data structure."
        },
        {
          question: "How accurate is the schema generation?",
          answer: "Our schema generator analyzes your sample data and creates JSON Schema based on observed patterns. It's quite accurate for simple structures but may need manual refinement for complex validation rules or edge cases."
        }
      ]
    },
    {
      category: "Usage & Best Practices",
      icon: <FileText className="w-5 h-5" />,
      questions: [
        {
          question: "When should I format vs minify JSON?",
          answer: "Format JSON for development, debugging, documentation, and human review. Minify JSON for production APIs, storage, and network transmission to reduce bandwidth and improve performance."
        },
        {
          question: "What's the best way to handle large JSON files?",
          answer: "For large files: 1) Validate structure first, 2) Process in smaller sections if possible, 3) Use streaming approaches in your applications, 4) Consider alternative formats like JSONL for very large datasets."
        },
        {
          question: "How can I ensure my team uses consistent JSON formatting?",
          answer: "Establish formatting standards (indentation, key naming), use automated tools in your build process, implement pre-commit hooks, and document your conventions. Our formatter can help standardize existing files."
        },
        {
          question: "What should I do if I get validation errors?",
          answer: "Common fixes: 1) Check for missing quotes around strings, 2) Remove trailing commas, 3) Ensure proper bracket/brace matching, 4) Escape special characters in strings, 5) Verify data types match expectations."
        },
        {
          question: "Can I bookmark specific tool configurations?",
          answer: "Yes! Most tool settings are preserved in your browser's local storage, so your preferences will be remembered for future visits. You can also bookmark URLs with specific parameters for quick access."
        }
      ]
    },
    {
      category: "Troubleshooting",
      icon: <Settings className="w-5 h-5" />,
      questions: [
        {
          question: "The tool isn't working. What should I try?",
          answer: "Try these steps: 1) Refresh the page, 2) Clear your browser cache, 3) Disable browser extensions temporarily, 4) Try a different browser, 5) Check if JavaScript is enabled. If problems persist, contact us."
        },
        {
          question: "I'm getting 'out of memory' errors with large files. What can I do?",
          answer: "This happens with very large JSON files. Solutions: 1) Close other browser tabs, 2) Use a device with more RAM, 3) Process smaller sections of the file, 4) Use desktop tools for extremely large files (>50MB)."
        },
        {
          question: "Why is my formatted JSON different from what I expected?",
          answer: "Our formatter follows standard JSON formatting rules. If you expect specific formatting, check: 1) Indentation settings, 2) Key sorting options, 3) Whether your input was valid JSON, 4) Browser-specific rendering differences."
        },
        {
          question: "The conversion isn't working correctly. What's wrong?",
          answer: "Conversion issues often relate to data structure. Check: 1) Source JSON is valid, 2) Data structure matches target format expectations, 3) Nested objects/arrays are handled appropriately, 4) Special characters are properly escaped."
        },
        {
          question: "How can I report bugs or request features?",
          answer: "We welcome feedback! Contact us through our contact page with: 1) Description of the issue, 2) Steps to reproduce, 3) Browser and OS information, 4) Sample data (if not sensitive). We typically respond within 24-48 hours."
        }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
          Find answers to common questions about JSONUtil.com tools, features, security, and best practices. 
          Can't find what you're looking for? <Link to="/contact" className="text-blue-600 hover:underline">Contact us</Link> for help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Quick Navigation */}
        <div className="lg:col-span-3">
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle className="text-lg">📍 Quick Navigation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {faqCategories.map((category, index) => (
                <a
                  key={index}
                  href={`#category-${index}`}
                  className="block p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <div className="flex items-center gap-2 text-sm">
                    {category.icon}
                    <span>{category.category}</span>
                  </div>
                </a>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* FAQ Content */}
        <div className="lg:col-span-9">
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} id={`category-${categoryIndex}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    {category.icon}
                    {category.category}
                    <Badge variant="outline">{category.questions.length} questions</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Section */}
          <Card className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Can't find the answer you're looking for? Our team is here to help you with any questions 
                about our JSON tools and services.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Badge className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                    Contact Support
                  </Badge>
                </Link>
                <Link to="/docs">
                  <Badge variant="outline" className="px-6 py-3">
                    View Documentation
                  </Badge>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
