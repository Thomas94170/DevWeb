import React from 'react';
import { Code2, Mail, Phone, Linkedin, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">DevWeb Solutions</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              Votre partenaire pour une présence digitale performante. 
              Développement web moderne, SEO et stratégies marketing qui convertissent.
            </p>
            <p className="text-slate-400 text-sm mt-2">
            Développeur freelance basé en Île-de-France : Paris, Essonne, Hauts-de-Seine, Val-de-Marne, Seine-Saint-Denis.
            </p>
            <br/>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">SEO Optimisation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Stratégie Marketing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Développement NestJS</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Développement React</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>devwebsolutions94@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+33 7 83 98 71 64</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; 2024 DevWeb Solutions. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}