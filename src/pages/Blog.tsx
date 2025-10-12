
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 'json-vs-xml-comparison',
      title: 'JSON vs XML: Which Data Format Should You Choose?',
      description: 'A comprehensive comparison of JSON and XML data formats, their use cases, advantages, and when to choose each one for your projects.',
      category: 'Comparison',
      readTime: '8 min read',
      publishDate: '2024-01-15',
      author: 'JSONUtil Team',
      featured: true
    },
    {
      id: 'json-validation-guide',
      title: 'Complete Guide to JSON Validation: Best Practices and Common Errors',
      description: 'Learn how to validate JSON data effectively, understand common validation errors, and implement robust validation in your applications.',
      category: 'Tutorial',
      readTime: '12 min read',
      publishDate: '2024-01-10',
      author: 'JSONUtil Team',
      featured: true
    },
    {
      id: 'json-formatting-best-practices',
      title: 'JSON Formatting Best Practices for Developers',
      description: 'Master JSON formatting techniques, understand when to format vs minify, and learn industry best practices for maintainable JSON.',
      category: 'Best Practices',
      readTime: '6 min read',
      publishDate: '2024-01-08',
      author: 'JSONUtil Team',
      featured: false
    },
    {
      id: 'json-conversion-guide',
      title: 'Converting JSON to CSV, XML, and YAML: A Developer\'s Guide',
      description: 'Step-by-step guide on converting JSON to other popular data formats, including practical examples and use cases.',
      category: 'Tutorial',
      readTime: '10 min read',
      publishDate: '2024-01-05',
      author: 'JSONUtil Team',
      featured: false
    },
    {
      id: 'json-schema-guide',
      title: 'Understanding JSON Schema: A Complete Guide',
      description: 'Master JSON Schema for data validation, documentation, and code generation. Learn types, constraints, and real-world applications.',
      category: 'Tutorial',
      readTime: '11 min read',
      publishDate: '2024-01-12',
      author: 'JSONUtil Team',
      featured: true
    },
    {
      id: 'json-api-guide',
      title: 'JSON in APIs: Best Practices and Common Patterns',
      description: 'Essential patterns for JSON APIs including response structure, pagination, error handling, and security considerations.',
      category: 'Best Practices',
      readTime: '13 min read',
      publishDate: '2024-01-09',
      author: 'JSONUtil Team',
      featured: false
    },
    {
      id: 'json-beginners-guide',
      title: 'JSON for Beginners: Everything You Need to Know',
      description: 'A comprehensive introduction to JSON for new developers, covering syntax, data types, and practical examples.',
      category: 'Beginner',
      readTime: '15 min read',
      publishDate: '2024-01-03',
      author: 'JSONUtil Team',
      featured: false
    },
    {
      id: 'advanced-json-techniques',
      title: 'Advanced JSON Manipulation Techniques',
      description: 'Explore advanced JSON processing techniques, including JSONPath queries, schema validation, and performance optimization.',
      category: 'Advanced',
      readTime: '14 min read',
      publishDate: '2024-01-01',
      author: 'JSONUtil Team',
      featured: false
    }
  ];

  const categories = ['All', 'Tutorial', 'Best Practices', 'Comparison', 'Beginner', 'Advanced'];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          JSON Development Blog
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
          Expert insights, tutorials, and best practices for working with JSON data. From beginner guides to advanced techniques, 
          discover everything you need to master JSON development.
        </p>
      </div>

      {/* Categories Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge 
              key={category} 
              variant="outline" 
              className="cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Featured Posts */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {blogPosts.filter(post => post.featured).map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="default">{post.category}</Badge>
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Link to={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-base">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.publishDate).toLocaleDateString()}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* All Posts */}
      <div>
        <h2 className="text-2xl font-bold mb-6">All Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{post.category}</Badge>
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Link to={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription>
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.publishDate).toLocaleDateString()}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <Card className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Try Our JSON Tools?</h3>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Put your JSON knowledge into practice with our comprehensive suite of free online tools.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/validator">
              <Badge className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2">JSON Validator</Badge>
            </Link>
            <Link to="/formatter">
              <Badge className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2">JSON Formatter</Badge>
            </Link>
            <Link to="/converter">
              <Badge className="bg-green-600 hover:bg-green-700 text-white px-4 py-2">JSON Converter</Badge>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Blog;
