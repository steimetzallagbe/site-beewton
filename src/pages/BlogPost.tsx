import React from 'react';
import { Calendar, Clock, User, ArrowLeft, Share2, Linkedin, Twitter, Facebook, Mail } from 'lucide-react';
import { getArticleById } from '../data/blogArticles';

interface BlogPostProps {
  postId: string;
  onNavigate: (page: string) => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ postId, onNavigate }) => {
  const article = getArticleById(postId);

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
          <button
            onClick={() => onNavigate('blog')}
            className="px-6 py-3 bg-beewton-primary-400 text-white font-medium rounded-lg hover:bg-beewton-primary-600 transition-colors"
          >
            Retour au blog
          </button>
        </div>
      </div>
    );
  }

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  const shareOnTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(article.title);
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  };

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  const shareByEmail = () => {
    const subject = encodeURIComponent(article.title);
    const body = encodeURIComponent(`Je pense que cet article pourrait vous intéresser : ${window.location.href}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const renderContent = (content: string) => {
    if (content.startsWith('## ')) {
      return (
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          {content.replace('## ', '')}
        </h2>
      );
    }

    if (content.startsWith('**') && content.endsWith('**')) {
      return (
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>{content.replace(/\*\*/g, '')}</strong>
        </p>
      );
    }

    const boldPattern = /\*\*(.*?)\*\*/g;
    const parts = content.split(boldPattern);

    return (
      <p className="text-gray-700 leading-relaxed mb-4">
        {parts.map((part, index) =>
          index % 2 === 0 ? part : <strong key={index}>{part}</strong>
        )}
      </p>
    );
  };

  return (
    <div className="bg-white">
      <div className="relative h-96 bg-gray-900 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12">
          <button
            onClick={() => onNavigate('blog')}
            className="flex items-center text-white mb-6 hover:text-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour au blog
          </button>

          <span className="inline-block px-4 py-1 bg-beewton-primary-400 text-white text-sm font-medium rounded-full mb-4 w-fit">
            {article.category}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {article.title}
          </h1>

          <div className="flex items-center gap-6 text-white/90">
            <span className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              {article.author}
            </span>
            <span className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              {article.date}
            </span>
            <span className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              {article.readTime}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <Share2 className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-900">Partager cet article</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={shareOnLinkedIn}
              className="w-10 h-10 bg-[#0077B5] text-white rounded-lg flex items-center justify-center hover:bg-[#006399] transition-colors"
              aria-label="Partager sur LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </button>
            <button
              onClick={shareOnTwitter}
              className="w-10 h-10 bg-[#1DA1F2] text-white rounded-lg flex items-center justify-center hover:bg-[#1a8cd8] transition-colors"
              aria-label="Partager sur Twitter"
            >
              <Twitter className="w-5 h-5" />
            </button>
            <button
              onClick={shareOnFacebook}
              className="w-10 h-10 bg-[#1877F2] text-white rounded-lg flex items-center justify-center hover:bg-[#166fe5] transition-colors"
              aria-label="Partager sur Facebook"
            >
              <Facebook className="w-5 h-5" />
            </button>
            <button
              onClick={shareByEmail}
              className="w-10 h-10 bg-gray-700 text-white rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="Partager par email"
            >
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </div>

        <article className="prose prose-lg max-w-none">
          {article.content.map((paragraph, index) => (
            <div key={index}>
              {renderContent(paragraph)}
            </div>
          ))}
        </article>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-beewton-primary-400 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {article.author}
                </h3>
                <p className="text-gray-600 text-sm">
                  Expert chez Beewton, spécialisé dans les technologies digitales et l'innovation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Envie de discuter de ces sujets ?
          </h3>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-beewton-primary-400 text-white font-medium rounded-lg hover:bg-beewton-primary-600 transition-all transform hover:scale-105 inline-flex items-center"
          >
            Contactez-nous
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
