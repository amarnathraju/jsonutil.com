import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface RelatedLink {
  title: string;
  description: string;
  path: string;
  icon?: string;
}

interface RelatedContentProps {
  currentPage: string;
  title?: string;
  description?: string;
}

const RelatedContent: React.FC<RelatedContentProps> = ({
  currentPage,
  title = 'Related Tools & Resources',
  description = 'Explore these related JSON tools and guides'
}) => {
  // Define related content mappings
  const relatedContentMap: Record<string, RelatedLink[]> = {
    validator: [
      {
        title: 'JSON Formatter',
        description: 'Format your validated JSON for better readability',
        path: '/formatter',
        icon: '{ }'
      },
      {
        title: 'JSON Schema Generator',
        description: 'Generate schemas from your validated JSON',
        path: '/schema',
        icon: '📋'
      },
      {
        title: 'JSON Validation Guide',
        description: 'Learn best practices for JSON validation',
        path: '/blog/json-validation-guide',
        icon: '📚'
      }
    ],
    formatter: [
      {
        title: 'JSON Validator',
        description: 'Validate your JSON before formatting',
        path: '/validator',
        icon: '✓'
      },
      {
        title: 'JSON Converter',
        description: 'Convert formatted JSON to other formats',
        path: '/converter',
        icon: '⇄'
      },
      {
        title: 'JSON Formatting Best Practices',
        description: 'Learn professional formatting techniques',
        path: '/blog/json-formatting-best-practices',
        icon: '📚'
      }
    ],
    converter: [
      {
        title: 'JSON Formatter',
        description: 'Format JSON before conversion',
        path: '/formatter',
        icon: '{ }'
      },
      {
        title: 'JSON Validator',
        description: 'Validate JSON before converting',
        path: '/validator',
        icon: '✓'
      },
      {
        title: 'JSON Conversion Guide',
        description: 'Master JSON conversion techniques',
        path: '/blog/json-conversion-guide',
        icon: '📚'
      }
    ],
    diff: [
      {
        title: 'JSON Validator',
        description: 'Validate both JSON objects before comparison',
        path: '/validator',
        icon: '✓'
      },
      {
        title: 'JSON Formatter',
        description: 'Format JSON for easier comparison',
        path: '/formatter',
        icon: '{ }'
      },
      {
        title: 'JSON API Guide',
        description: 'Learn about API versioning and changes',
        path: '/blog/json-api-guide',
        icon: '📚'
      }
    ],
    path: [
      {
        title: 'JSON Validator',
        description: 'Validate JSON before querying',
        path: '/validator',
        icon: '✓'
      },
      {
        title: 'JSON Schema Generator',
        description: 'Generate schemas for your JSON queries',
        path: '/schema',
        icon: '📋'
      },
      {
        title: 'Documentation',
        description: 'JSONPath syntax and examples',
        path: '/docs#tools',
        icon: '📖'
      }
    ],
    schema: [
      {
        title: 'JSON Validator',
        description: 'Validate JSON against your schema',
        path: '/validator',
        icon: '✓'
      },
      {
        title: 'JSON Formatter',
        description: 'Format sample data for schemas',
        path: '/formatter',
        icon: '{ }'
      },
      {
        title: 'JSON Schema Guide',
        description: 'Complete guide to JSON Schema',
        path: '/blog/json-schema-guide',
        icon: '📚'
      }
    ],
    blog: [
      {
        title: 'JSON Validator',
        description: 'Try our JSON validation tool',
        path: '/validator',
        icon: '✓'
      },
      {
        title: 'Documentation',
        description: 'Comprehensive JSON guides',
        path: '/docs',
        icon: '📖'
      },
      {
        title: 'All Tools',
        description: 'Browse our complete toolkit',
        path: '/',
        icon: '🛠️'
      }
    ],
    docs: [
      {
        title: 'JSON Validator',
        description: 'Validate JSON syntax',
        path: '/validator',
        icon: '✓'
      },
      {
        title: 'Blog',
        description: 'In-depth JSON tutorials',
        path: '/blog',
        icon: '📚'
      },
      {
        title: 'FAQ',
        description: 'Common questions answered',
        path: '/faq',
        icon: '❓'
      }
    ]
  };

  const relatedLinks = relatedContentMap[currentPage] || [];

  if (relatedLinks.length === 0) {
    return null;
  }

  return (
    <Card className="mt-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          🔗 {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {relatedLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="group block p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md transition-all"
              rel="related"
            >
              <div className="flex items-start gap-3">
                {link.icon && (
                  <span className="text-2xl" aria-hidden="true">{link.icon}</span>
                )}
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1 flex items-center gap-2">
                    {link.title}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {link.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RelatedContent;
