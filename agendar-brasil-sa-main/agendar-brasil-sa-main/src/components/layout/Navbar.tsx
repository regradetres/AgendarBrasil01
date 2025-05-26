
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-medical-600 text-2xl font-bold">Agendar</span>
              <span className="text-doctor-600 text-2xl font-bold">Brasil</span>
            </div>
            <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
              <a href="#" className="border-transparent text-gray-500 hover:text-gray-900 hover:border-medical-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Home
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:text-gray-900 hover:border-medical-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Especialidades
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:text-gray-900 hover:border-medical-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Como Funciona
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:text-gray-900 hover:border-medical-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Para Médicos
              </a>
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <Button variant="ghost" size="sm" className="mr-2">Entrar</Button>
            <Button className="bg-medical-600 text-white hover:bg-medical-700">Cadastrar</Button>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-medical-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Abrir menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a href="#" className="bg-medical-50 border-medical-500 text-medical-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Home
            </a>
            <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Especialidades
            </a>
            <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Como Funciona
            </a>
            <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Para Médicos
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <Button variant="ghost" size="sm" className="mr-2 w-full justify-center">Entrar</Button>
              <Button className="bg-medical-600 text-white hover:bg-medical-700 w-full justify-center">Cadastrar</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
