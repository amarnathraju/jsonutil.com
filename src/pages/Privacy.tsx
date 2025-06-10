import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
        Privacy Policy
      </h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>1. Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            At JSONUtil.com, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect 
            your information when you use our service.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>2. Data Processing</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            All JSON processing occurs entirely in your browser. Your data never leaves your device or gets transmitted to our servers. 
            This ensures complete privacy and security for your sensitive information.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>3. Information We Collect</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            We collect minimal information necessary to provide and improve our service:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
            <li>Usage statistics (pages visited, features used)</li>
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>Error reports (if you choose to send them)</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>4. Cookies and Local Storage</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            We use cookies and local storage to:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
            <li>Remember your preferences (theme, language)</li>
            <li>Store tool settings</li>
            <li>Improve site performance</li>
            <li>Analyze usage patterns</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>5. Third-Party Services</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            We use the following third-party services:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
            <li>Google Analytics (for usage statistics)</li>
            <li>Error tracking services</li>
            <li>Advertising networks (if applicable)</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>6. Data Security</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            We implement appropriate security measures to protect your information:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
            <li>HTTPS encryption for all communications</li>
            <li>Regular security audits</li>
            <li>Secure data storage practices</li>
            <li>Access controls and authentication</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>7. Your Rights</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
            <li>Access your personal information</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of analytics and tracking</li>
            <li>File a complaint about our data practices</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>8. Children's Privacy</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Our service is not intended for children under 13. We do not knowingly collect personal information from children 
            under 13 years of age.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>9. Changes to Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy 
            Policy on this page.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>10. Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            If you have any questions about this Privacy Policy, please contact us at privacy@jsonutil.com.
          </p>
        </CardContent>
      </Card>

      <p className="text-sm text-slate-500 dark:text-slate-400 mt-8">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default Privacy; 