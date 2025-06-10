import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Cookies = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
        Cookie Policy
      </h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>1. What Are Cookies</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience and enable certain features to work properly. We also use similar technologies like local storage for the same purposes.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>2. How We Use Cookies</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            We use cookies for the following purposes:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
            <li>Essential cookies for site functionality and security</li>
            <li>Preference cookies to remember your settings (theme, language)</li>
            <li>Analytics cookies to understand how you use our site</li>
            <li>Advertising cookies to show relevant ads (if you accept them)</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>3. Types of Cookies We Use</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Essential Cookies</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Required for the website to function properly. These cannot be disabled and are necessary for:
              </p>
              <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 mt-2">
                <li>Maintaining your session</li>
                <li>Security features</li>
                <li>Basic site functionality</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Preference Cookies</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Remember your settings and preferences for a better experience:
              </p>
              <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 mt-2">
                <li>Theme preference (light/dark mode)</li>
                <li>Language settings</li>
                <li>Tool configurations</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Analytics Cookies</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Help us understand how visitors interact with our website:
              </p>
              <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 mt-2">
                <li>Page views and navigation</li>
                <li>Feature usage statistics</li>
                <li>Performance metrics</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Advertising Cookies</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Used to deliver relevant advertisements and track their effectiveness:
              </p>
              <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 mt-2">
                <li>Google AdSense cookies</li>
                <li>Ad performance tracking</li>
                <li>Personalized ad content</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>4. Managing Cookies</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            You can control and manage cookies in several ways:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
            <li>Using our cookie consent banner to accept or decline non-essential cookies</li>
            <li>Adjusting your browser settings to block or delete cookies</li>
            <li>Using privacy-focused browser extensions</li>
            <li>Clearing cookies through your browser's privacy settings</li>
          </ul>
          <p className="text-slate-600 dark:text-slate-300 mt-4">
            Please note that disabling certain cookies may affect the functionality of our website.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>5. Third-Party Cookies</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            We use third-party services that may set their own cookies:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
            <li>Google Analytics for website analytics</li>
            <li>Google AdSense for advertising</li>
            <li>Error tracking services for improving reliability</li>
          </ul>
          <p className="text-slate-600 dark:text-slate-300 mt-4">
            These third-party services have their own privacy policies and cookie practices.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>6. Updates to This Policy</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            We may update this Cookie Policy from time to time. Any changes will be posted on this page and the "Last updated" 
            date will be modified. Your continued use of the Service after such changes constitutes your acceptance of the new Cookie Policy.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>7. Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            If you have any questions about our Cookie Policy or cookie practices, please contact us at privacy@jsonutil.com.
          </p>
        </CardContent>
      </Card>

      <p className="text-sm text-slate-500 dark:text-slate-400 mt-8">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default Cookies; 