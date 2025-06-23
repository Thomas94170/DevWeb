import React, { useState } from 'react';

import { useSpring, animated } from '@react-spring/web';
import { useForm, ValidationError } from '@formspree/react';
import { Send } from 'lucide-react';

export default function Contact() {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [state, handleSubmit] = useForm("mrbkyyaa");

 

  const formAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(-50px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: { tension: 280, friction: 60 }
  });

  const contactAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(50px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: { tension: 280, friction: 60 }
  });

 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
<section id="contact" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
        Prêt à démarrer votre projet ?
      </h2>
      <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
        Discutons de vos objectifs et créons ensemble la solution parfaite pour votre entreprise.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
      <animated.div style={formAnimation}>
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Demandez votre devis gratuit</h3>

          {state.succeeded ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Message envoyé !</h4>
              <p className="text-slate-600">Nous vous répondrons dans les plus brefs délais.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Votre nom"
                  />
                  <ValidationError prefix="Nom" field="name" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="votre@email.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Nom de votre entreprise"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                    Service souhaité *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="seo">SEO Optimisation</option>
                    <option value="marketing">Stratégie Marketing</option>
                    <option value="nestjs">Développement NestJS</option>
                    <option value="react">Développement React</option>
                    <option value="complete">Solution complète</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Décrivez votre projet *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Parlez-nous de vos objectifs, de votre timeline et de vos besoins spécifiques..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
              >
                Envoyer ma demande
                <Send className="w-5 h-5 ml-2" />
              </button>
            </form>
          )}
        </div>
      </animated.div>

      <animated.div style={contactAnimation}>
        {/* ... ta deuxième colonne de contact ici ... */}
      </animated.div>
    </div>
  </div>
</section>

        );
      }
