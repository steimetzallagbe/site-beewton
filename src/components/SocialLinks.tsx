import React from 'react';
import { Linkedin, Twitter, Facebook, Instagram, Github } from 'lucide-react';

interface SocialLinksProps {
  variant?: 'light' | 'dark';
}

const SocialLinks: React.FC<SocialLinksProps> = ({ variant = 'dark' }) => {
  const socials = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Github, href: 'https://github.com', label: 'Github' },
  ];

  const baseClasses = "w-10 h-10 rounded-full flex items-center justify-center transition-all transform hover:scale-110";
  const variantClasses = variant === 'light'
    ? "bg-white/10 hover:bg-white/20 text-white"
    : "bg-gray-100 hover:bg-beewton-primary-400 text-gray-700 hover:text-white";

  return (
    <div className="flex gap-3">
      {socials.map((social, index) => {
        const Icon = social.icon;
        return (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseClasses} ${variantClasses}`}
            aria-label={social.label}
          >
            <Icon className="w-5 h-5" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
