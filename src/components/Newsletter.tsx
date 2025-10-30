import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

interface NewsletterProps {
  compact?: boolean;
}

const Newsletter: React.FC<NewsletterProps> = ({ compact = false }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  if (compact) {
    return (
      <div>
        <h3 className="font-semibold mb-3 text-white">Newsletter</h3>
        {submitted ? (
          <div className="flex items-center gap-2 text-purple-200 text-sm">
            <CheckCircle className="w-4 h-4" />
            <span>Merci !</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre email"
              className="flex-1 px-4 py-2 rounded-lg bg-white/10 text-white text-sm placeholder-purple-200 border border-white/20 focus:border-white focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-white text-beewton-primary font-medium rounded-lg hover:bg-gray-100 transition-all"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-beewton-primary to-beewton-primary-600 rounded-2xl p-8 md:p-12">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Restez informé
        </h3>
        <p className="text-purple-100 mb-8">
          Recevez nos dernières actualités, articles et insights tech directement dans votre boîte mail.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 text-white">
            <CheckCircle className="w-6 h-6" />
            <span className="font-medium">Merci pour votre inscription !</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-purple-200 border-2 border-white/20 focus:border-white focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-beewton-primary font-medium rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              S'inscrire
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
