import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { CheckCircle, Users, Code, Award } from 'lucide-react';

export default function About() {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 280, friction: 60 }
  });

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <animated.div style={fadeIn} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Pourquoi choisir DevWeb Solutions ?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Une expertise technique approfondie au service de votre croissance digitale.
            </p>
          </animated.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-8">
                Une approche centrée sur les résultats
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Solutions sur-mesure</h4>
                    <p className="text-slate-600">Chaque projet est unique. Nous adaptons nos technologies et méthodes à vos besoins spécifiques.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Performance garantie</h4>
                    <p className="text-slate-600">Code optimisé, SEO intégré et expérience utilisateur soignée pour des résultats mesurables.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Suivi personnalisé</h4>
                    <p className="text-slate-600">Communication transparente et accompagnement à chaque étape de votre projet.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-slate-900 mb-2">50+</div>
                <div className="text-slate-600 text-sm">Projets réalisés</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-2xl text-center">
                <Code className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-slate-900 mb-2">100%</div>
                <div className="text-slate-600 text-sm">Code moderne</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl text-center">
                <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-slate-900 mb-2">3 ans</div>
                <div className="text-slate-600 text-sm">D'expérience</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl text-center">
                <CheckCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-slate-900 mb-2">24h</div>
                <div className="text-slate-600 text-sm">Support réactif</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}