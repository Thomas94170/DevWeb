import React from 'react';
import { Target, Rocket, ShieldCheck, PhoneCall } from 'lucide-react';
import { useSpring, animated } from '@react-spring/web';

export default function Start() {
  const introAnim = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 280, friction: 60 },
  });

  const cardsAnim = useSpring({
    from: { opacity: 0, transform: 'scale(0.9)' },
    to: { opacity: 1, transform: 'scale(1)' },
    delay: 500,
    config: { tension: 300, friction: 70 },
  });

  return (
    <section id='start' className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 pt-20 pb-16">
      <div className="container mx-auto px-6">
        <animated.div style={introAnim} className="text-center max-w-4xl mx-auto pt-16 pb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Démarrez votre projet digital avec confiance
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Nous vous accompagnons pas à pas pour créer un site performant, esthétique et adapté à vos objectifs business.
            Voici comment se passe la collaboration :
          </p>
        </animated.div>

        <animated.div style={cardsAnim} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">1. Cadrage du besoin</h3>
            <p className="text-slate-600">
              Nous discutons ensemble de vos objectifs, de votre cible et de la structure du site idéal pour vous.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <Rocket className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">2. Conception et développement</h3>
            <p className="text-slate-600">
              On conçoit le design, développe le site et vous suivez l’avancement à chaque étape.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">3. Livraison et garanties</h3>
            <p className="text-slate-600">
              Vous validez le site final et nous assurons un suivi technique pendant 30 jours.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <PhoneCall className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">4. Suivi ou évolutions</h3>
            <p className="text-slate-600">
              Besoin de faire évoluer le site ? On reste dispo pour ajouter des pages, des outils ou du SEO.
            </p>
          </div>
        </animated.div>
      </div>
    </section>
  );
}
