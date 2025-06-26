import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Search, TrendingUp, Server, Palette } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  features: string[];
  color: string;
}

function ServiceCard({ icon, title, shortDescription, detailedDescription, features, color }: ServiceCardProps) {
  const [flipped, setFlipped] = useState(false);
  
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div className="relative h-80 cursor-pointer" onClick={() => setFlipped(!flipped)}>
      {/* Face avant */}
      <animated.div
        className="absolute inset-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 flex flex-col justify-center items-center text-center"
        style={{
          opacity: opacity.to(o => 1 - o),
          transform,
        }}
      >
        <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mb-6`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
        <p className="text-slate-600 leading-relaxed mb-6">{shortDescription}</p>
        <div className="text-sm text-blue-600 font-medium">Cliquez pour en savoir plus</div>
      </animated.div>

      {/* Face arrière */}
      <animated.div
        className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-8 text-white"
        style={{
          opacity,
          transform,
          rotateX: '180deg',
        }}
      >
        <div className="h-full flex flex-col">
          <h3 className="text-xl font-bold mb-4">{title}</h3>
          <p className="text-slate-300 text-sm mb-6 leading-relaxed">{detailedDescription}</p>
          <div className="flex-1">
            <h4 className="font-semibold mb-3 text-blue-300">Inclus :</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="text-sm text-slate-300 flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center mt-4">
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
              Demander un devis
            </button>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default function Services() {
  const services = [
    {
      icon: <Search className="w-8 h-8 text-white" />,
      title: "SEO Optimisation",
      shortDescription: "Boostez votre visibilité sur Google et attirez plus de clients qualifiés grâce à un référencement naturel optimisé.",
      //detailedDescription: "",
      features: [
        "Audit SEO complet",
        "Recherche de mots-clés stratégiques",
        "Optimisation technique",
        "Création de contenu optimisé",
        "Link building de qualité",
        "Suivi des performances"
      ],
      color: "bg-emerald-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "Stratégie Marketing",
      shortDescription: "Développez votre audience et convertissez vos visiteurs en clients avec des stratégies marketing digitales performantes.",
      //detailedDescription: "",
      features: [
        "Analyse de la concurrence",
        "Stratégie de contenu",
        "Campagnes publicitaires",
        "Social media marketing",
        "Email marketing",
        "Analytics et reporting"
      ],
      color: "bg-blue-500"
    },
    {
      icon: <Server className="w-8 h-8 text-white" />,
      title: "Développement NestJS",
      shortDescription: "API robustes et évolutives avec NestJS pour alimenter vos applications web et mobiles avec performance.",
      //detailedDescription: "",
      features: [
        "Architecture modulaire",
        "API REST & GraphQL",
        "Base de données optimisée",
        "Authentification sécurisée",
        "Tests automatisés",
        "Documentation complète"
      ],
      color: "bg-red-500"
    },
    {
      icon: <Palette className="w-8 h-8 text-white" />,
      title: "Développement React",
      shortDescription: "Interfaces utilisateur modernes et réactives avec React pour offrir une expérience utilisateur exceptionnelle.",
      //detailedDescription: "",
      features: [
        "Composants réutilisables",
        "State management moderne",
        "Design responsive",
        "Optimisation des performances",
        "Tests d'intégration",
        "PWA & SEO friendly"
      ],
      color: "bg-cyan-500"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Nos Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Des solutions complètes pour propulser votre présence digitale et générer des résultats mesurables.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6">Besoin d'une solution sur-mesure ?</p>
          <a href= "https://app.simplymeet.me/devwebsolutions"  
              target="_blank"
              rel="noopener noreferrer" className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold transition-colors">
              Discutons de votre projet
          </a>
        </div>
      </div>
    </section>
  );
}