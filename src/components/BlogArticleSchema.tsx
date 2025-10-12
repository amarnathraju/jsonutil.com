import React from 'react';
import { Helmet } from 'react-helmet-async';

interface BlogArticleSchemaProps {
  title: string;
  description: string;
  author?: string;
  publishDate: string;
  modifiedDate?: string;
  url: string;
  imageUrl?: string;
}

const BlogArticleSchema: React.FC<BlogArticleSchemaProps> = ({
  title,
  description,
  author = 'JSONUtil Team',
  publishDate,
  modifiedDate,
  url,
  imageUrl = 'https://jsonutil.com/lovable-uploads/c41295d1-ed4f-4180-8089-4355f5872821.png',
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'JSONUtil.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://jsonutil.com/lovable-uploads/c41295d1-ed4f-4180-8089-4355f5872821.png',
      },
    },
    datePublished: publishDate,
    dateModified: modifiedDate || publishDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    image: imageUrl,
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="article:published_time" content={publishDate} />
      {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
      <meta property="article:author" content={author} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default BlogArticleSchema;
