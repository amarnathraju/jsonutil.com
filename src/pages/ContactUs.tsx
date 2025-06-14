
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
        Contact Us
      </h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Mail className="mr-2 h-6 w-6 text-blue-500" />
            Get in Touch
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            We welcome your feedback, questions, and suggestions. If you have any inquiries about JSONUtil.com, encounter any issues, or have ideas for new features, please don't hesitate to reach out.
          </p>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            You can contact us via email at:
          </p>
          <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
            <a href="mailto:support@jsonutil.com">support@jsonutil.com</a>
          </p>
          <p className="text-slate-600 dark:text-slate-300 mt-6">
            We typically respond within 24-48 business hours. Your input is valuable to us as we strive to make JSONUtil.com the best possible resource for developers.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Feedback & Feature Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300">
            We are always looking for ways to improve. If you have specific feedback on a tool or a request for a new utility that would be helpful for your JSON-related workflows, please let us know. Your insights help shape the future of JSONUtil.com.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactUs;
