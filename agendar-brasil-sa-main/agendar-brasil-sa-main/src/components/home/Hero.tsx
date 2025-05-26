
import { SearchInput } from "@/components/ui/SearchInput";
import { Calendar, MapPin, Users } from "lucide-react";

export function Hero() {
  return (
    <div className="bg-gradient-to-br from-medical-50 to-doctor-50 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="heading-xl text-gray-900 mb-4">
              Encontre médicos <span className="text-medical-600">perto de você</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Agende consultas médicas com especialistas em todo o Brasil 
              de forma rápida e gratuita.
            </p>
            
            <div className="bg-white p-5 rounded-xl shadow-lg mb-8">
              <SearchInput
                placeholder="Digite especialidade ou nome do médico"
                className="mb-4"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin size={18} className="text-gray-400" />
                  </div>
                  <select className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-medical-500 focus:border-medical-500">
                    <option>Todas as cidades</option>
                    <option>São Paulo</option>
                    <option>Rio de Janeiro</option>
                    <option>Belo Horizonte</option>
                    <option>Salvador</option>
                    <option>Brasília</option>
                  </select>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Users size={18} className="text-gray-400" />
                  </div>
                  <select className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-medical-500 focus:border-medical-500">
                    <option>Todas as especialidades</option>
                    <option>Psiquiatria</option>
                    <option>Cardiologia</option>
                    <option>Dermatologia</option>
                    <option>Pediatria</option>
                    <option>Ortopedia</option>
                  </select>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="date"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-medical-500 focus:border-medical-500"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-medical-100 flex items-center justify-center mr-2">
                  <Calendar size={16} className="text-medical-600" />
                </div>
                <span>Mais de 50.000 consultas agendadas</span>
              </div>
              
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-medical-100 flex items-center justify-center mr-2">
                  <Users size={16} className="text-medical-600" />
                </div>
                <span>+3.000 médicos em todo Brasil</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block relative h-full">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-medical-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-subtle"></div>
            <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-doctor-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-subtle"></div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2664&q=80"
                alt="Médico com paciente"
                className="rounded-lg shadow-xl object-cover h-[500px] w-full animate-fade-in"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs animate-fade-in">
                <div className="flex items-center mb-2">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-600 text-lg font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Dra. Camila Santos</h3>
                    <p className="text-sm text-gray-500">Cardiologista</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Próx. disponível:</span>
                  <span className="text-sm font-medium text-medical-600">Hoje, 14:30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
