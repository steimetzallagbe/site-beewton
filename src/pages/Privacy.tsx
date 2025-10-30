import React from 'react';
import { Shield, Lock, Eye, Database, UserCheck, Mail } from 'lucide-react';

const Privacy: React.FC = () => {
  const sections = [
    {
      icon: Database,
      title: '1. Données collectées',
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dans le cadre de l'utilisation de notre site et de nos services, nous sommes amenés à collecter les données personnelles suivantes :
          </p>
          <div className="bg-gray-50 p-6 rounded-lg space-y-3">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Données d'identification :</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Nom de l'entreprise</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Données de navigation :</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Adresse IP</li>
                <li>Type et version du navigateur</li>
                <li>Système d'exploitation</li>
                <li>Pages visitées et durée de visite</li>
                <li>Date et heure de connexion</li>
              </ul>
            </div>
          </div>
        </>
      ),
    },
    {
      icon: Eye,
      title: '2. Finalités du traitement',
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vos données personnelles sont collectées et traitées pour les finalités suivantes :
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Traitement de vos demandes de contact et réponse à vos questions</li>
            <li>Fourniture de nos services et gestion de la relation client</li>
            <li>Envoi de communications commerciales et newsletters (avec votre consentement)</li>
            <li>Amélioration de notre site et de nos services</li>
            <li>Analyses statistiques et mesures d'audience</li>
            <li>Respect de nos obligations légales et réglementaires</li>
            <li>Prévention de la fraude et sécurisation de nos services</li>
          </ul>
        </>
      ),
    },
    {
      icon: UserCheck,
      title: '3. Base légale du traitement',
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            Conformément au RGPD, le traitement de vos données personnelles repose sur les bases légales suivantes :
          </p>
          <div className="space-y-3">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Votre consentement</h4>
              <p className="text-gray-700 text-sm">
                Pour l'envoi de communications commerciales et l'utilisation de cookies non essentiels
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">L'exécution d'un contrat</h4>
              <p className="text-gray-700 text-sm">
                Pour la fourniture de nos services et la gestion de la relation client
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Notre intérêt légitime</h4>
              <p className="text-gray-700 text-sm">
                Pour l'amélioration de nos services, les analyses statistiques et la sécurité
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Une obligation légale</h4>
              <p className="text-gray-700 text-sm">
                Pour le respect de nos obligations comptables, fiscales et légales
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      icon: Lock,
      title: '4. Durée de conservation',
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vos données personnelles sont conservées pendant des durées variables selon leur nature et leur finalité :
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li><strong>Données de contact :</strong> 3 ans à compter du dernier contact</li>
            <li><strong>Données clients :</strong> Durée de la relation contractuelle + 5 ans (obligations légales)</li>
            <li><strong>Données de navigation :</strong> 13 mois maximum</li>
            <li><strong>Cookies :</strong> 13 mois maximum</li>
            <li><strong>Données comptables :</strong> 10 ans (obligation légale)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            À l'issue de ces durées, vos données sont supprimées ou anonymisées de manière irréversible.
          </p>
        </>
      ),
    },
    {
      icon: Shield,
      title: '5. Sécurité des données',
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            La sécurité de vos données personnelles est une priorité absolue. Nous mettons en œuvre les mesures techniques et organisationnelles suivantes :
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Chiffrement des données en transit (HTTPS/TLS)</li>
            <li>Chiffrement des données sensibles au repos</li>
            <li>Contrôle d'accès strict et authentification forte</li>
            <li>Sauvegardes régulières et sécurisées</li>
            <li>Surveillance et journalisation des accès</li>
            <li>Tests de sécurité et audits réguliers</li>
            <li>Formation du personnel aux bonnes pratiques de sécurité</li>
            <li>Plan de réponse aux incidents de sécurité</li>
          </ul>
        </>
      ),
    },
    {
      icon: Mail,
      title: '6. Vos droits',
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
          </p>
          <div className="space-y-3">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-1">Droit d'accès</h4>
              <p className="text-gray-700 text-sm">Obtenir une copie de vos données personnelles</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-1">Droit de rectification</h4>
              <p className="text-gray-700 text-sm">Corriger vos données inexactes ou incomplètes</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-1">Droit à l'effacement</h4>
              <p className="text-gray-700 text-sm">Demander la suppression de vos données</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-1">Droit à la limitation</h4>
              <p className="text-gray-700 text-sm">Limiter le traitement de vos données</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-1">Droit à la portabilité</h4>
              <p className="text-gray-700 text-sm">Recevoir vos données dans un format structuré</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-1">Droit d'opposition</h4>
              <p className="text-gray-700 text-sm">Vous opposer au traitement de vos données</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-1">Droit de retrait du consentement</h4>
              <p className="text-gray-700 text-sm">Retirer votre consentement à tout moment</p>
            </div>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mt-6">
            <h4 className="font-semibold text-gray-900 mb-2">Comment exercer vos droits ?</h4>
            <p className="text-gray-700 text-sm mb-2">
              Pour exercer vos droits, contactez notre Délégué à la Protection des Données :
            </p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li><strong>Email :</strong> <a href="mailto:dpo@beewton.com" className="text-green-700 hover:text-green-900 underline">dpo@beewton.com</a></li>
              <li><strong>Courrier :</strong> Beewton SAS - DPO, [Adresse complète], Paris, France</li>
            </ul>
            <p className="text-gray-700 text-sm mt-3">
              Nous nous engageons à répondre dans un délai maximum d'un mois à compter de la réception de votre demande.
            </p>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Politique de confidentialité
              </h1>
            </div>
            <p className="text-xl text-gray-600">
              Protection et traitement de vos données personnelles conformément au RGPD
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-gray-900 mb-2">Engagement de Beewton</h3>
            <p className="text-gray-700 leading-relaxed">
              Beewton SAS s'engage à protéger la vie privée de ses utilisateurs et à traiter leurs données personnelles de manière transparente, loyale et sécurisée, conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
            </p>
          </div>

          <div className="space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index} className="border-b border-gray-200 pb-12 last:border-b-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  </div>
                  <div>{section.content}</div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">7. Partage des données</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Vos données personnelles ne sont jamais vendues. Elles peuvent être partagées uniquement dans les cas suivants :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Avec des prestataires techniques (hébergement, analytics) sous contrat de sous-traitance RGPD</li>
                <li>Avec des autorités légales si la loi l'exige</li>
                <li>En cas de fusion, acquisition ou cession d'actifs (avec information préalable)</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">8. Transferts hors UE</h3>
              <p className="text-gray-700 leading-relaxed">
                Vos données sont hébergées dans l'Union Européenne. En cas de transfert hors UE, nous nous assurons que des garanties appropriées sont mises en place (clauses contractuelles types approuvées par la Commission Européenne, décision d'adéquation, etc.).
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">9. Réclamation</h3>
              <p className="text-gray-700 leading-relaxed">
                Si vous estimez que vos droits ne sont pas respectés, vous avez le droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :
              </p>
              <div className="mt-3 text-sm text-gray-700">
                <p><strong>CNIL</strong></p>
                <p>3 Place de Fontenoy - TSA 80715</p>
                <p>75334 PARIS CEDEX 07</p>
                <p>Téléphone : 01 53 73 22 22</p>
                <p>Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">www.cnil.fr</a></p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Date de dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p className="text-sm text-gray-700 mb-0">
                Cette politique de confidentialité peut être modifiée à tout moment. Nous vous informerons de toute modification substantielle par email ou via une notification sur notre site.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
