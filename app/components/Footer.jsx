'use client';

import { ArrowUp } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="border-t border-gray-200 mt-auto"
      style={{ backgroundColor: 'var(--secondary-element)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
              Enlaces
            </h3>
            <ul className="space-y-2">
              {[['Inicio', ''], ['Servicios', 'servicios'], ['Productos', 'products'], ['Contacto', 'contact']].map(([label, path]) => (
                <li key={label}>
                  <Link
                    href={`/${path}`}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
              Redes Sociales
            </h3>
            <ul className="space-y-2">
              {['Twitter', 'Instagram', 'Facebook'].map((platform) => (
                <li key={platform}>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Copyright + Back to top */}
          <div className="flex flex-col justify-between">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} MyBrand. Todos los derechos reservados.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-4 sm:mt-0 self-start sm:self-end inline-flex items-center gap-1.5 rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
              aria-label="Volver arriba"
            >
              <ArrowUp size={14} />
              Volver arriba
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
