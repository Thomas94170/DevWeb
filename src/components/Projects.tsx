import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { ExternalLink } from 'lucide-react';

const projects = [
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

export default function Projects() {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(40px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 280, friction: 60 },
    delay: 200,
  });

  return (
    <section className="min-h-screen bg-slate-50 py-24 px-6" id="projects">
      <animated.div style={fadeIn} className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-12">
          Dernières <span className="text-blue-600">réalisations</span>
        </h2>
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
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:underline font-medium"
                >
                  Voir le projet <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </animated.div>
    </section>
  );
}
