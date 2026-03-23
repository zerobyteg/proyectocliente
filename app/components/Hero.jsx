import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    title: 'Telefonía Móvil',
    icon: '/assets/mobile-vector.svg',
    description: 'Planes flexibles y cobertura total para mantenerte conectado.',
  },
  {
    title: 'Internet Hogar',
    icon: '/assets/internet-tv-vector.svg',
    description: 'Súper alta velocidad y TV en un solo combo increíble.',
  },
  {
    title: 'Alarmas',
    icon: '/assets/security-vector.svg',
    description: 'Sistemas inteligentes para proteger lo que más te importa.',
  },
  {
    title: 'POS Comercial',
    icon: '/assets/pos-vector.svg',
    description: 'Terminales ágiles y seguras para impulsar tus ventas.',
  },
];

export default function Hero() {
  return (
    <section className="bg-slate-50 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* Main Split Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Conectividad y Seguridad para tu Hogar o Negocio
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Llevamos tu comunicación al siguiente nivel. Descubre nuestros planes de Telefonía Móvil,
              Internet de alta velocidad con TV, Sistemas de Alarma inteligentes y Puntos de Venta (POS)
              para tu comercio.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/servicios"
                className="inline-flex justify-center items-center rounded-lg bg-blue-500 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all active:scale-[0.98]"
              >
                Ver Todos los Servicios
              </Link>
              <Link
                href="/contact"
                className="inline-flex justify-center items-center rounded-lg bg-white border border-slate-300 px-8 py-3.5 text-base font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-all active:scale-[0.98]"
              >
                Contáctanos ya!
              </Link>
            </div>
          </div>

          {/* Visual Elements Overview (Right Side) */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center sm:items-start text-center sm:text-left hover:shadow-md transition-shadow"
                >
                  <div className="h-14 w-14 bg-blue-50 rounded-xl flex flex-shrink-0 items-center justify-center mb-4 p-2.5 relative">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      fill
                      className="object-contain p-2.5"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
