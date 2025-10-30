import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Sectors from './pages/Sectors';
import Cases from './pages/Cases';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Legal from './pages/Legal';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentPostId, setCurrentPostId] = useState<string>('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: string, postId?: string) => {
    setCurrentPage(page);
    if (postId) {
      setCurrentPostId(postId);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'services':
        return <Services onNavigate={handleNavigate} />;
      case 'sectors':
        return <Sectors onNavigate={handleNavigate} />;
      case 'cases':
        return <Cases onNavigate={handleNavigate} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'careers':
        return <Careers onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact />;
      case 'blog':
        return <Blog onNavigate={handleNavigate} />;
      case 'blog-post':
        return <BlogPost postId={currentPostId} onNavigate={handleNavigate} />;
      case 'legal':
        return <Legal />;
      case 'privacy':
        return <Privacy />;
      case 'cookies':
        return <Cookies />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={handleNavigate}>
      {renderPage()}
    </Layout>
  );
}

export default App;
