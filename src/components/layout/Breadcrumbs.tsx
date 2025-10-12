import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show breadcrumbs on homepage
  if (pathnames.length === 0) {
    return null;
  }

  // Mapping for better labels
  const labelMap: Record<string, string> = {
    'validator': 'JSON Validator',
    'formatter': 'JSON Formatter',
    'converter': 'JSON Converter',
    'diff': 'JSON Diff',
    'path': 'JSONPath Query',
    'schema': 'Schema Generator',
    'blog': 'Blog',
    'docs': 'Documentation',
    'about': 'About Us',
    'contact': 'Contact Us',
    'faq': 'FAQ',
    'privacy': 'Privacy Policy',
    'terms': 'Terms of Service',
    'cookies': 'Cookie Policy',
    'json-vs-xml-comparison': 'JSON vs XML Comparison',
    'json-validation-guide': 'JSON Validation Guide',
    'json-formatting-best-practices': 'JSON Formatting Best Practices',
    'json-conversion-guide': 'JSON Conversion Guide',
    'json-schema-guide': 'JSON Schema Guide',
    'json-api-guide': 'JSON API Guide'
  };

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', path: '/' }
  ];

  let currentPath = '';
  pathnames.forEach((segment) => {
    currentPath += `/${segment}`;
    breadcrumbs.push({
      label: labelMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1),
      path: currentPath
    });
  });

  // Generate JSON-LD structured data for breadcrumbs
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': crumb.label,
      'item': `https://jsonutil.com${crumb.path}`
    }))
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="mb-6 px-4 sm:px-6 lg:px-8"
      >
        <ol
          className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {breadcrumbs.map((crumb, index) => (
            <li
              key={crumb.path}
              className="flex items-center"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {index > 0 && (
                <ChevronRight className="w-4 h-4 mx-2 text-slate-400" aria-hidden="true" />
              )}

              {index === breadcrumbs.length - 1 ? (
                // Current page - not a link
                <span
                  className="font-medium text-slate-900 dark:text-slate-100"
                  itemProp="name"
                  aria-current="page"
                >
                  {index === 0 && <Home className="w-4 h-4 inline mr-1" aria-hidden="true" />}
                  {crumb.label}
                </span>
              ) : (
                // Link to previous pages
                <Link
                  to={crumb.path}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
                  itemProp="item"
                >
                  {index === 0 && <Home className="w-4 h-4 inline mr-1" aria-hidden="true" />}
                  <span itemProp="name">{crumb.label}</span>
                </Link>
              )}

              <meta itemProp="position" content={String(index + 1)} />
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
