import React from 'react';
import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';
import { useSpring, animated } from '@react-spring/web';



export default function Hero() {
  const heroAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 280, friction: 60 }
  });

  const statsAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    delay: 600,
    config: { tension: 300, friction: 70 }
  });

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 pt-20 pb-16">
      <div className="container mx-auto px-6">
        <animated.div style={heroAnimation} className="text-center max-w-4xl mx-auto pt-16 pb-12">
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight">
            Votre présence digitale,{' '}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              notre expertise
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 mb-12 leading-relaxed">
            Développement web moderne, SEO optimisé et stratégies marketing qui convertissent. 
            Transformons ensemble votre vision en succès digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center">
              Commencer maintenant
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <a href="#projects" className="px-8 py-4 border-2 border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-600 rounded-xl font-semibold text-lg transition-all duration-300">
              Voir nos réalisations
            </a>
          </div>
        </animated.div>

        <animated.div style={statsAnimation} className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-2">250%</div>
            <div className="text-slate-600">Croissance moyenne du trafic</div>
          </div>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-emerald-600" />
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-2">50+</div>
            <div className="text-slate-600">Clients satisfaits</div>
          </div>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-2">3 ans</div>
            <div className="text-slate-600">D'expertise confirmée</div>
          </div>
        </animated.div>
      </div>
    </section>
  );
}