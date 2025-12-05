import { Leaf, Heart } from "lucide-react";

const footerLinks = {
  servicios: [
    { name: "Consultas", href: "#servicios" },
    { name: "Productos", href: "#productos" },
    { name: "Programa Rasayana", href: "#servicios" },
    { name: "Blog", href: "#" },
  ],
  informacion: [
    { name: "Sobre Nosotros", href: "#nosotros" },
    { name: "FAQ", href: "#" },
    { name: "Aviso Legal", href: "#" },
    { name: "Política de Privacidad", href: "#" },
  ],
  contacto: [
    { name: "info@ayurvedasalud.com", href: "mailto:info@ayurvedasalud.com" },
    { name: "+34 91 XXX XX XX", href: "tel:+3491XXXXXX" },
    { name: "Madrid, España", href: "#contacto" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-forest text-cream">
      <div className="container-width section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#inicio" className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-cream/10 rounded-xl">
                <Leaf className="w-6 h-6 text-cream" />
              </div>
              <span className="font-serif text-2xl font-bold text-cream">
                Ayurveda Salud
              </span>
            </a>
            <p className="text-cream/70 leading-relaxed mb-6">
              Tu centro de bienestar ayurvédico en Madrid.
              Tratamientos personalizados para el equilibrio de cuerpo, mente y espíritu.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream mb-6">
              Servicios
            </h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-cream/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream mb-6">
              Información
            </h4>
            <ul className="space-y-3">
              {footerLinks.informacion.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-cream/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream mb-6">
              Contacto
            </h4>
            <ul className="space-y-3">
              {footerLinks.contacto.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-cream/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream/60 text-sm">
            © {new Date().getFullYear()} Ayurveda Salud. Todos los derechos reservados.
          </p>
          <p className="text-cream/60 text-sm flex items-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-terracotta fill-terracotta" /> para tu bienestar
          </p>
        </div>
      </div>
    </footer>
  );
};
