
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Search, FileText, Wrench } from 'lucide-react';

const NotFound = () => {
  const popularTools = [
    { name: 'JSON Validator', path: '/validator', icon: <FileText className="w-4 h-4" /> },
    { name: 'JSON Formatter', path: '/formatter', icon: <Wrench className="w-4 h-4" /> },
    { name: 'JSON Converter', path: '/converter', icon: <Wrench className="w-4 h-4" /> },
    { name: 'JSON Diff Tool', path: '/diff', icon: <Wrench className="w-4 h-4" /> }
  ];

  const helpfulResources = [
    { name: 'Documentation', path: '/docs', description: 'Complete guide to using our JSON tools' },
    { name: 'Blog', path: '/blog', description: 'JSON tutorials and best practices' },
    { name: 'FAQ', path: '/faq', description: 'Frequently asked questions and answers' },
    { name: 'Contact Us', path: '/contact', description: 'Get help from our support team' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center py-8 lg:py-12">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-slate-300 dark:text-slate-600 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            The page you're looking for doesn't exist or has been moved. Don't worry, we have plenty of useful JSON tools and resources to help you get back on track.
          </p>
        </div>

        <div className="mb-12">
          <Link to="/">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>

      {/* Popular Tools Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 text-center">
          Popular JSON Tools
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularTools.map((tool, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  {tool.icon}
                  <Link to={tool.path} className="hover:text-blue-600 dark:hover:text-blue-400">
                    {tool.name}
                  </Link>
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Helpful Resources Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 text-center">
          Helpful Resources
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {helpfulResources.map((resource, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link to={resource.path} className="hover:text-blue-600 dark:hover:text-blue-400">
                    {resource.name}
                  </Link>
                </CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Additional Content for AdSense Compliance */}
      <Card className="bg-slate-50 dark:bg-slate-800/50">
        <CardContent className="p-8">
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">
            What is JSON and Why Use Our Tools?
          </h3>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              JSON (JavaScript Object Notation) is a lightweight, text-based data interchange format that's easy for humans to read and write. 
              It's widely used in web development, APIs, and data storage applications.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Our comprehensive suite of JSON tools helps developers work more efficiently with JSON data. Whether you need to validate syntax, 
              format code for readability, convert between different data formats, or analyze complex JSON structures, we provide free, 
              privacy-focused tools that work entirely in your browser.
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              All our tools are designed with privacy in mind - your data never leaves your browser, ensuring complete security for 
              sensitive information while providing instant results without server delays.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
