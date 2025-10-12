
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';
import ScrollToBottom from '../ScrollToBottom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Header />
      <main className="container mx-auto py-6 lg:py-8">
        <Breadcrumbs />
        <div className="px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
      <Footer />
      <ScrollToBottom />
    </div>
  );
};

export default Layout;
