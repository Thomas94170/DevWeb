import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { ExternalLink } from 'lucide-react';

const frontProjects = [
  {
    title: 'Les Trésors Postaux',
    description: 'Site vitrine dédié à la philatélie, mettant en avant une collection de timbres rares.',
    image: '../../public/image/philatelie.png',
    link: 'https://www.les-tresors-postaux.fr',
  },
  {
    title: 'NumisFrance',
    description: 'Plateforme dédiée aux collectionneurs de pièces de monnaie.',
    image: '../../public/image/numisfrance.png',
    link: 'https://www.numisfrance.fr',
  },
  {
    title: 'Papiliona',
    description: 'Site vitrine poétique dédié à la passion des papillons, avec galerie interactive',
    image: '../../public/image/papiliona.png',
    link: 'https://www.papiliona.fr',
  },
  {
    title: 'Les Miroirs du Temps',
    description: 'Voyage à travers les siècles pour découvrir les miroirs',
    image: '../../public/image/miroir.png',
    link: 'https://www.les-miroirs-du-temps.fr',
  },
];

const backProjects = [
  {
    title: 'RenovTonDressing (Back-end)',
    description: 'API NestJS complète avec Prisma et Supabase. Authentification sécurisée avec JWT. Gestion complète des commandes, tickets, utilisateurs, catégories d’articles. Intégration des moyens de paiement (Stripe & PayPal). Suivi des colis avec l’API Colissimo. Architecture modulaire scalable (13 modules métiers) ',
    image: '../../public/image/rtd-backend.png',
    link: 'https://github.com/Thomas94170/renovtondressing-api',
  },
  {
    title: 'Legalix (Système de rotation API)',
    description: 'Script NestJS avec cron toutes les 10s pour répartir intelligemment les requêtes entre 30 clés GPT-4/Mistral avec file d’attente et gestion des quotas.',
    image: '../../public/image/legalix.png',
    link: '', // ou "Repo privé sur demande"
  },
];

const appMobile = [
  {
    title: 'VTC Push',
    description: 'Application mobile permettant aux chauffeurs VTC franciliens de suivre en temps réel les perturbations des transports afin de les aider à optimiser leurs courses.',
    image:'../../public/image/vtc-push.png',
    link: 'https://github.com/Thomas94170/VTC-alert-client'
  },
];

const saas = [
  {
    title: 'Smart-Invoice',
    description: 'Saas permettant le suivi fiscal complet des auto-entrepreneurs ayant le statut de micro-entreprises, édition devis & facture, upload de documents externes.',
    image:'../../public/image/smart-invoice.jpeg',
    link:''
  }
]

export default function Projects() {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(40px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 280, friction: 60 },
    delay: 200,
  });

  const renderProjects = (projects) => (
    <div className="grid md:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
        >
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-slate-900 mb-2">{project.title}</h3>
            <p className="text-slate-600 mb-4">{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:underline font-medium"
              >
                Voir le projet <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            )}
            {!project.link && (
              <p className="text-sm text-slate-400 italic">Code disponible sur demande</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="min-h-screen bg-slate-50 py-24 px-6" id="projects">
      <animated.div style={fadeIn} className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-12">
          Dernières <span className="text-blue-600">réalisations</span>
        </h2>

        <h3 className="text-2xl font-semibold text-slate-800 mb-6">Sites vitrines</h3>
        {renderProjects(frontProjects)}

        <h3 className="text-2xl font-semibold text-slate-800 mt-16 mb-6">Projets back-end</h3>
        {renderProjects(backProjects)}

        <h3 className="text-2xl font-semibold text-slate-800 mt-16 mb-6">App mobile</h3>
        {renderProjects(appMobile)}

        <h3 className="text-2xl font-semibold text-slate-800 mt-16 mb-6">Saas</h3>
        {renderProjects(saas)}
      </animated.div>
    </section>
  );
}
