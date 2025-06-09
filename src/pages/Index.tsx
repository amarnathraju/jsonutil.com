
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AdBanner from '@/components/ads/AdBanner';

const Index = () => {
  const tools = [
    {
      title: 'JSON Validator',
      description: 'Validate JSON syntax with detailed error reporting and real-time feedback.',
      path: '/validator',
      icon: '✓',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'JSON Formatter',
      description: 'Beautify and format JSON with customizable indentation and sorting options.',
      path: '/formatter',
      icon: '{ }',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'JSON Converter',
      description: 'Convert JSON to CSV, XML, YAML, TypeScript interfaces, and more formats.',
      path: '/converter',
      icon: '⇄',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'JSON Diff',
      description: 'Compare JSON objects and visualize differences with detailed analysis.',
      path: '/diff',
      icon: '≠',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'JSONPath Query',
      description: 'Execute JSONPath expressions and extract data from complex JSON structures.',
      path: '/path',
      icon: '?',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Schema Generator',
      description: 'Generate JSON Schema from sample data with intelligent type inference.',
      path: '/schema',
      icon: '⚡',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center py-12 lg:py-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
          JSONUtil.com
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto px-4">
          The complete JSON utility toolkit for developers. Validate, format, convert, and analyze JSON data with our comprehensive suite of tools.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
          <Link to="/validator">
            <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Started Free
            </Button>
          </Link>
          <Link to="/docs">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              View Documentation
            </Button>
          </Link>
        </div>
      </div>

      <AdBanner position="in-content" />

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {tools.map((tool, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tool.color} flex items-center justify-center text-white text-xl font-bold mb-4`}>
                {tool.icon}
              </div>
              <CardTitle className="text-slate-800 dark:text-slate-200 text-lg">{tool.title}</CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-400 text-sm">
                {tool.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Link to={tool.path}>
                <Button className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  Try {tool.title}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Features Section */}
      <div className="bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 lg:p-8 mb-16">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-slate-800 dark:text-slate-200">
          Why Choose JSONUtil.com?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🚀</span>
            </div>
            <h3 className="text-lg lg:text-xl font-semibold mb-2 text-slate-800 dark:text-slate-200">Lightning Fast</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm lg:text-base">
              All processing happens in your browser. No server delays, no data uploads, instant results.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🔒</span>
            </div>
            <h3 className="text-lg lg:text-xl font-semibold mb-2 text-slate-800 dark:text-slate-200">Privacy First</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm lg:text-base">
              Your data never leaves your browser. Complete privacy and security for sensitive information.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">⚡</span>
            </div>
            <h3 className="text-lg lg:text-xl font-semibold mb-2 text-slate-800 dark:text-slate-200">Always Available</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm lg:text-base">
              Works offline after first visit. No internet required for most operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
