import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
        Terms of Service
      </h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>1. Acceptance of Terms</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            By accessing and using JSONUtil.com ("the Service"), you agree to be bound by these Terms of Service. 
            If you do not agree to these terms, please do not use the Service.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>2. Description of Service</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            JSONUtil.com provides JSON processing tools including validation, formatting, conversion, and analysis. 
            All processing occurs in your browser, and your data never leaves your device.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>3. User Responsibilities</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            You are responsible for:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
            <li>Ensuring you have the right to process any data you input into the Service</li>
            <li>Maintaining the security of your device and browser</li>
            <li>Using the Service in compliance with applicable laws and regulations</li>
            <li>Not attempting to reverse engineer or decompile the Service</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>4. Privacy and Data Security</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            The Service processes all data locally in your browser. We do not collect, store, or transmit your JSON data. 
            Please refer to our Privacy Policy for more information about how we handle your information.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>5. Intellectual Property</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            The Service, including its code, design, and content, is protected by intellectual property rights. 
            You may not copy, modify, or distribute any part of the Service without our permission.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>6. Disclaimer of Warranties</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            The Service is provided "as is" without any warranties, express or implied. We do not guarantee that the Service 
            will be error-free or uninterrupted.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>7. Limitation of Liability</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from 
            your use of or inability to use the Service.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>8. Changes to Terms</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            We reserve the right to modify these terms at any time. We will notify users of any material changes by posting 
            the new terms on this page.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>9. Contact Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            For questions about these Terms of Service, please contact us at support@jsonutil.com.
          </p>
        </CardContent>
      </Card>

      <p className="text-sm text-slate-500 dark:text-slate-400 mt-8">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default Terms; 