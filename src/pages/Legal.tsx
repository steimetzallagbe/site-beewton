import React from 'react';
import { Scale } from 'lucide-react';

const Legal: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Scale className="w-6 h-6 text-blue-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Mentions légales
              </h1>
            </div>
            <p className="text-xl text-gray-600">
              Informations légales concernant l'éditeur et l'hébergeur du site
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Éditeur du site</h2>
              <div className="bg-gray-50 p-6 rounded-lg space-y-2">
                <p className="text-gray-700 mb-0">
                  <strong>Raison sociale :</strong> Beewton SAS
                </p>
                <p className="text-gray-700 mb-0">
                  <strong>Capital social :</strong> 50 000 €
                </p>
                <p className="text-gray-700 mb-0">
                  <strong>Siège social :</strong> [Adresse complète], Paris, France
                </p>
                <p className="text-gray-700 mb-0">
                  <strong>SIRET :</strong> XXX XXX XXX XXXXX
                </p>
                <p className="text-gray-700 mb-0">
                  <strong>RCS :</strong> Paris B XXX XXX XXX
                </p>
                <p className="text-gray-700 mb-0">
                  <strong>TVA intracommunautaire :</strong> FR XX XXXXXXXXX
                </p>
                <p className="text-gray-700 mb-0">
                  <strong>Téléphone :</strong> +33 1 XX XX XX XX
                </p>
                <p className="text-gray-700 mb-0">
                  <strong>Email :</strong> contact@beewton.com
                </p>
                <p className="text-gray-700 mb-0">
                  <strong>Directeur de publication :</strong> [Nom du directeur]
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Hébergement</h2>
              <div className="bg-gray-50 p-6 rounded-lg space-y-2">
                <p className="text-gray-700 mb-0">
                  <strong>Hébergeur :</strong> [Nom de l'hébergeur]
                </p>
                <p className="text-gray-700 mb-0">
                  <strong>Adresse :</strong> [Adresse de l'hébergeur]
                </p>
                <p className="text-gray-700 mb-0">
                  <strong>Téléphone :</strong> [Numéro de téléphone]
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Propriété intellectuelle</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, etc.) est la propriété exclusive de Beewton SAS ou de ses partenaires. Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l'accord exprès par écrit de Beewton SAS.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Les marques et logos présents sur le site sont déposés par Beewton SAS ou éventuellement par un de ses partenaires. Toute utilisation non autorisée de ces marques et logos constitue une contrefaçon passible de sanctions pénales.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Responsabilité</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Beewton SAS ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications techniques requises, soit de l'apparition d'un bug ou d'une incompatibilité.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Beewton SAS ne pourra également être tenue responsable des dommages indirects (tels qu'une perte de marché ou perte d'une chance) consécutifs à l'utilisation du site.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Liens hypertextes</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le site peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet. Les liens vers ces autres ressources vous font quitter le site beewton.com.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Il est possible de créer un lien vers la page de présentation de ce site sans autorisation expresse de Beewton SAS. Aucune autorisation ou demande d'information préalable ne peut être exigée par l'éditeur à l'égard d'un site qui souhaite établir un lien vers le site de l'éditeur. Il convient toutefois d'afficher ce site dans une nouvelle fenêtre du navigateur. Cependant, Beewton SAS se réserve le droit de demander la suppression d'un lien qu'elle estime non conforme à l'objet du site.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Droit applicable et juridiction compétente</h2>
              <p className="text-gray-700 leading-relaxed">
                Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Date de dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p className="text-sm text-gray-700 mb-0">
                Pour toute question concernant les mentions légales, contactez-nous à : <a href="mailto:legal@beewton.com" className="text-blue-600 hover:text-blue-800 underline">legal@beewton.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legal;
