
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-medical-400 text-2xl font-bold">Agendar</span>
              <span className="text-doctor-400 text-2xl font-bold">Brasil</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Plataforma online para agendamento de consultas médicas, 
              conectando pacientes e profissionais de saúde em todo o Brasil.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Para Pacientes</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Como funciona</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Encontrar médicos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Especialidades</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Avaliações</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Para Médicos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Cadastro profissional</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Benefícios</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Gestão de agenda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Planos e preços</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Suporte</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Sobre nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Carreira</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Imprensa</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Contato</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} AgendarBrasil SA. Todos os direitos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Termos de Uso</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">LGPD</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
