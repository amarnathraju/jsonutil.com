
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
        About JSONUtil.com
      </h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            At JSONUtil.com, our mission is to provide developers with a comprehensive, fast, and reliable suite of online JSON tools. We aim to simplify common JSON-related tasks, making developers' lives easier and boosting productivity.
          </p>
          <p className="text-slate-600 dark:text-slate-300">
            We believe in the power of client-side processing to ensure user data privacy and deliver instant results.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>What We Offer</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            JSONUtil.com offers a range of tools, including:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-4">
            <li><Link to="/validator" className="text-blue-600 hover:underline">JSON Validator</Link>: Ensure your JSON is syntactically correct.</li>
            <li><Link to="/formatter" className="text-blue-600 hover:underline">JSON Formatter</Link>: Beautify and minify your JSON data.</li>
            <li><Link to="/converter" className="text-blue-600 hover:underline">JSON Converter</Link>: Convert JSON to various formats like CSV, XML, YAML.</li>
            <li><Link to="/diff" className="text-blue-600 hover:underline">JSON Diff</Link>: Compare two JSON objects and highlight differences.</li>
            <li><Link to="/path" className="text-blue-600 hover:underline">JSONPath Query</Link>: Test JSONPath expressions.</li>
            <li><Link to="/schema" className="text-blue-600 hover:underline">Schema Generator</Link>: Create JSON schemas from sample data.</li>
          </ul>
          <p className="text-slate-600 dark:text-slate-300">
            All our tools are designed to be intuitive, efficient, and operate entirely within your browser for maximum security.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Our Commitment to Privacy</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            We are strong advocates for user privacy. None of the data you process with our tools is ever sent to our servers. Everything happens locally in your browser. For more details, please see our <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Always Improving</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300">
            We are constantly working to improve JSONUtil.com by adding new features and enhancing existing ones based on user feedback and technological advancements. Our goal is to be the go-to resource for all JSON-related tasks.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutUs;
