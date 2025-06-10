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
            JSONUtil.com provides a suite of JSON processing tools including:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
            <li>JSON validation and error reporting</li>
            <li>JSON formatting and beautification</li>
            <li>JSON conversion to other formats (CSV, XML, YAML)</li>
            <li>JSON diff and comparison tools</li>
            <li>JSONPath query execution</li>
            <li>JSON Schema generation</li>
          </ul>
          <p className="text-slate-600 dark:text-slate-300 mt-4">
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
            <li>Not using the Service for any illegal or unauthorized purposes</li>
            <li>Not interfering with or disrupting the Service</li>
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
            We only collect minimal usage statistics and analytics as described in our Privacy Policy.
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
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. 
            TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
            <li>Warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
            <li>Warranties that the Service will be error-free, uninterrupted, or secure</li>
            <li>Warranties that the Service will meet your requirements or expectations</li>
            <li>Warranties regarding the accuracy, reliability, or completeness of any information provided</li>
            <li>Warranties that any errors in the Service will be corrected</li>
          </ul>
          <p className="text-slate-600 dark:text-slate-300 mt-4">
            You acknowledge that you use the Service at your own risk and discretion.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>7. Limitation of Liability</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL JSONUTIL.COM, ITS AFFILIATES, DIRECTORS, EMPLOYEES, 
            AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, 
            INCLUDING WITHOUT LIMITATION:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
            <li>Loss of profits, revenue, data, or use</li>
            <li>Business interruption</li>
            <li>Cost of substitute services</li>
            <li>Any damages arising from or related to your use of or inability to use the Service</li>
            <li>Any damages resulting from errors, mistakes, or inaccuracies in the Service</li>
            <li>Any damages resulting from unauthorized access to or use of our servers and/or any personal information stored therein</li>
            <li>Any damages resulting from bugs, viruses, trojan horses, or the like that may be transmitted through the Service</li>
          </ul>
          <p className="text-slate-600 dark:text-slate-300 mt-4">
            This limitation of liability applies regardless of whether the damages arise from breach of contract, tort, 
            negligence, or any other cause of action, even if we have been advised of the possibility of such damages.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>8. Indemnification</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            You agree to defend, indemnify, and hold harmless JSONUtil.com, its affiliates, directors, employees, agents, 
            and licensors from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, 
            or fees (including reasonable attorneys' fees) arising out of or relating to:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
            <li>Your use of the Service</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any third-party rights</li>
            <li>Any content you submit, post, or transmit through the Service</li>
            <li>Your violation of any applicable laws or regulations</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>9. Risk Acknowledgment</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            You acknowledge and agree that:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2">
            <li>The Service is provided for informational and utility purposes only</li>
            <li>You are solely responsible for verifying the accuracy and suitability of any processed data</li>
            <li>We do not guarantee the accuracy, completeness, or reliability of any processed data</li>
            <li>You should not rely solely on the Service for critical business or personal decisions</li>
            <li>You are responsible for backing up your data before using the Service</li>
            <li>We are not responsible for any data loss or corruption that may occur while using the Service</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>10. Changes to Terms</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            We reserve the right to modify these terms at any time. We will notify users of any material changes by posting 
            the new terms on this page. Your continued use of the Service after such changes constitutes your acceptance of the new terms.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>11. Contact Information</CardTitle>
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