import React from 'react';
import { Cookie, CheckCircle, XCircle, Settings } from 'lucide-react';

const Cookies: React.FC = () => {
  const cookieTypes = [
    {
      name: 'Cookies strictement nécessaires',
      icon: CheckCircle,
      required: true,
      description: 'Ces cookies sont indispensables au fonctionnement du site et ne peuvent pas être désactivés.',
      examples: [
        {
          name: 'Session utilisateur',
          purpose: 'Maintien de votre session de navigation',
          duration: 'Session',
          type: 'Technique',
        },
        {
          name: 'Préférences de cookies',
          purpose: 'Mémorisation de vos choix en matière de cookies',
          duration: '13 mois',
          type: 'Technique',
        },
        {
          name: 'Sécurité CSRF',
          purpose: 'Protection contre les attaques CSRF',
          duration: 'Session',
          type: 'Sécurité',
        },
      ],
    },
    {
      name: 'Cookies de performance',
      icon: Settings,
      required: false,
      description: 'Ces cookies nous permettent d\'analyser l\'utilisation du site pour améliorer ses performances.',
      examples: [
        {
          name: 'Google Analytics',
          purpose: 'Analyse du trafic et des statistiques de visite',
          duration: '13 mois',
          type: 'Analytique',
        },
        {
          name: 'Hotjar',
          purpose: 'Analyse du comportement utilisateur et cartes de chaleur',
          duration: '12 mois',
          type: 'Analytique',
        },
      ],
    },
    {
      name: 'Cookies fonctionnels',
      icon: Settings,
      required: false,
      description: 'Ces cookies permettent d\'améliorer votre expérience en mémorisant vos préférences.',
      examples: [
        {
          name: 'Préférences de langue',
          purpose: 'Mémorisation de votre langue préférée',
          duration: '12 mois',
          type: 'Fonctionnel',
        },
        {
          name: 'Paramètres d\'affichage',
          purpose: 'Mémorisation de vos préférences d\'interface',
          duration: '6 mois',
          type: 'Fonctionnel',
        },
      ],
    },
    {
      name: 'Cookies marketing',
      icon: XCircle,
      required: false,
      description: 'Ces cookies sont utilisés pour afficher des publicités pertinentes. Nous ne les utilisons pas actuellement.',
      examples: [],
    },
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Cookie className="w-6 h-6 text-orange-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Politique de cookies
              </h1>
            </div>
            <p className="text-xl text-gray-600">
              Comprendre l'utilisation des cookies sur notre site et gérer vos préférences
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-gray-900 mb-2">Qu'est-ce qu'un cookie ?</h3>
            <p className="text-gray-700 leading-relaxed">
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, smartphone, tablette) lors de la visite d'un site web. Les cookies permettent de reconnaître votre navigateur et de collecter des informations sur votre utilisation du site, afin d'améliorer votre expérience de navigation.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Types de cookies utilisés</h2>
            <div className="space-y-6">
              {cookieTypes.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={index} className="border-2 border-gray-200 rounded-xl overflow-hidden">
                    <div className={`p-6 ${category.required ? 'bg-green-50' : 'bg-gray-50'}`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 ${category.required ? 'bg-green-100' : 'bg-gray-200'} rounded-lg flex items-center justify-center`}>
                            <Icon className={`w-5 h-5 ${category.required ? 'text-green-600' : 'text-gray-600'}`} />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                        </div>
                        {category.required ? (
                          <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                            Obligatoire
                          </span>
                        ) : (
                          <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm font-medium rounded-full">
                            Optionnel
                          </span>
                        )}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{category.description}</p>
                    </div>

                    {category.examples.length > 0 && (
                      <div className="p-6 bg-white">
                        <h4 className="font-semibold text-gray-900 mb-4">Exemples de cookies :</h4>
                        <div className="space-y-4">
                          {category.examples.map((example, idx) => (
                            <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                              <div className="flex items-start justify-between mb-2">
                                <h5 className="font-semibold text-gray-900">{example.name}</h5>
                                <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded">
                                  {example.type}
                                </span>
                              </div>
                              <p className="text-sm text-gray-700 mb-1">
                                <strong>Finalité :</strong> {example.purpose}
                              </p>
                              <p className="text-sm text-gray-700">
                                <strong>Durée de conservation :</strong> {example.duration}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Gestion de vos préférences</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vous pouvez à tout moment modifier vos préférences en matière de cookies. Voici les différentes options qui s'offrent à vous :
              </p>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Via notre bandeau de cookies</h4>
                  <p className="text-sm text-gray-700">
                    Lors de votre première visite, un bandeau vous permet d'accepter ou de refuser les cookies non essentiels. Vous pouvez modifier votre choix à tout moment en cliquant sur le lien "Gérer mes cookies" en bas de page.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Via votre navigateur</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Vous pouvez configurer votre navigateur pour accepter ou refuser les cookies. Consultez les pages d'aide de votre navigateur :
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4 list-disc list-inside">
                    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Google Chrome</a></li>
                    <li><a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies-preferences" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Mozilla Firefox</a></li>
                    <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Safari</a></li>
                    <li><a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Microsoft Edge</a></li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Outils de désactivation tiers</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Pour désactiver les cookies analytics spécifiques :
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4 list-disc list-inside">
                    <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Désactiver Google Analytics</a></li>
                    <li><a href="https://www.hotjar.com/legal/compliance/opt-out" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Désactiver Hotjar</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Conséquences du refus des cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Le refus des cookies peut avoir les conséquences suivantes :
              </p>
              <ul className="text-sm text-gray-700 space-y-2 ml-4 list-disc list-inside">
                <li>Impossibilité d'accéder à certaines fonctionnalités du site</li>
                <li>Nécessité de ressaisir vos préférences à chaque visite</li>
                <li>Affichage non optimisé de certaines pages</li>
                <li>Impossibilité de bénéficier de recommandations personnalisées</li>
              </ul>
              <p className="text-sm text-gray-700 mt-3">
                <strong>Important :</strong> Les cookies strictement nécessaires ne peuvent pas être désactivés car ils sont indispensables au fonctionnement du site.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cookies tiers</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Certains cookies sont déposés par des services tiers (Google Analytics, Hotjar, etc.) pour analyser l'utilisation de notre site. Ces services ont leur propre politique de confidentialité :
              </p>
              <ul className="text-sm text-gray-700 space-y-1 ml-4 list-disc list-inside">
                <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Politique de confidentialité Google</a></li>
                <li><a href="https://www.hotjar.com/legal/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Politique de confidentialité Hotjar</a></li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Durée de validité du consentement</h3>
              <p className="text-gray-700 leading-relaxed">
                Votre consentement à l'utilisation de cookies est valable pour une durée maximale de 13 mois. À l'issue de cette période, nous vous demanderons à nouveau votre consentement.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="font-bold text-gray-900 mb-2">Contact</h3>
              <p className="text-gray-700 text-sm">
                Pour toute question concernant notre politique de cookies, contactez-nous à : <a href="mailto:privacy@beewton.com" className="text-blue-600 hover:text-blue-800 underline">privacy@beewton.com</a>
              </p>
              <p className="text-gray-700 text-sm mt-3">
                <strong>Date de dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cookies;
