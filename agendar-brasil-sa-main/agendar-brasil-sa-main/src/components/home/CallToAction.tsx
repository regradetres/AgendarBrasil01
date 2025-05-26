
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function CallToAction() {
  const benefits = [
    "Agendamento online 24/7",
    "Lembretes por e-mail e SMS",
    "Avaliações e recomendações",
    "Histórico de consultas",
    "Busca por localização",
    "Totalmente gratuito para pacientes"
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-medical-500 to-doctor-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-lg mb-6">
              Comece a cuidar da sua saúde agora mesmo
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Junte-se a milhares de brasileiros que já estão aproveitando a facilidade de agendar consultas médicas online.
            </p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-medical-600 hover:bg-gray-100">
                Cadastre-se grátis
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Saiba mais
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-white/10 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-pulse-subtle"></div>
            <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-white/10 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-pulse-subtle"></div>
            <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1380&q=80"
                alt="Paciente usando aplicativo de agendamento"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
