import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import AIChatbot from '../ui/ai-chatbot';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
}
