import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Paris, France',
      details: ['Siège européen', 'Centre d\'expertise'],
    },
    {
      icon: MapPin,
      title: 'Cotonou, Bénin',
      details: ['Centre de livraison nearshore', 'Support 24/7'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@beewton.com', 'Réponse sous 24h'],
    },
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['+33 1 XX XX XX XX', 'Lun-Ven 9h-18h'],
    },
  ];

  const subjects = [
    'Nouveau projet',
    'Demande de devis',
    'Partenariat',
    'Recrutement',
    'Support technique',
    'Autre',
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-gray-600">
              Discutons de votre projet et trouvons ensemble la meilleure solution.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Nos coordonnées
              </h2>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-beewton-primary-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-12 bg-purple-50 border-l-4 border-beewton-primary-400 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-2">
                  Conformité RGPD
                </h3>
                <p className="text-sm text-gray-700">
                  Vos données personnelles sont traitées de manière confidentielle et ne seront
                  jamais partagées avec des tiers. Vous disposez d'un droit d'accès, de rectification
                  et de suppression.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 border-2 border-beewton-accent-teal rounded-xl p-12 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Message envoyé !
                  </h2>
                  <p className="text-lg text-gray-600">
                    Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        minLength={2}
                        maxLength={100}
                        autoComplete="name"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-beewton-primary-400 focus:outline-none transition-colors"
                        placeholder="Jean Dupont"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        maxLength={255}
                        autoComplete="email"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-beewton-primary-400 focus:outline-none transition-colors"
                        placeholder="jean.dupont@exemple.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-2">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        maxLength={200}
                        autoComplete="organization"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-beewton-primary-400 focus:outline-none transition-colors"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        pattern="^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$"
                        title="Format valide: +33 6 12 34 56 78, 0612345678, +33612345678, etc."
                        minLength={10}
                        maxLength={20}
                        autoComplete="tel"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-beewton-primary-400 focus:outline-none transition-colors"
                        placeholder="+33 6 XX XX XX XX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-beewton-primary-400 focus:outline-none transition-colors"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      {subjects.map((subject, index) => (
                        <option key={index} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      minLength={10}
                      maxLength={2000}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-beewton-primary-400 focus:outline-none transition-colors resize-none"
                      placeholder="Décrivez votre projet ou votre besoin..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-4 bg-beewton-primary-400 text-white font-medium rounded-lg hover:bg-beewton-primary-600 transition-all transform hover:scale-105 flex items-center justify-center group"
                  >
                    Envoyer le message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/futuristic-dot-wave-abstract-background copy.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-beewton-primary/95 via-beewton-primary/90 to-beewton-primary-600/95"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Préférez-vous un rendez-vous ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Planifiez un appel avec notre équipe pour discuter de votre projet en détail.
          </p>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-beewton-primary font-medium rounded-lg hover:bg-gray-100 transition-all shadow-xl"
          >
            Prendre rendez-vous
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
