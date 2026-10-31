import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-16 h-16">
                <Image
                  src="/logo-branco.png"
                  alt="ASSESP Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Associação de Esportes, Cultura e Lazer de Praia de Santos e Região.
              Promovendo transformação social através do esporte, cultura e lazer.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-coral transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-coral transition-colors"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/projetos" className="text-gray-300 hover:text-white transition-colors">
                  Nossos Projetos
                </Link>
              </li>
              <li>
                <Link href="/torneios" className="text-gray-300 hover:text-white transition-colors">
                  Torneios
                </Link>
              </li>
              <li>
                <Link href="/transparencia" className="text-gray-300 hover:text-white transition-colors">
                  Transparência
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-2">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span className="text-sm">
                  Rua Doutor Luis de Faria, 109<br />
                  Gonzaga, Santos - SP<br />
                  11.060-481
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={20} />
                <a href="mailto:assesp_sp@hotmail.com" className="hover:text-white transition-colors">
                  assesp_sp@hotmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle size={20} />
                <a href="https://wa.me/5513991760203" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  (13) 99176-0203
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>CNPJ: 43.696.620/0001-10</p>
          <p className="mt-2">
            © {new Date().getFullYear()} ASSESP. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
