
import { Search, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HowItWorks() {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-white" />,
      title: "Encontre o especialista ideal",
      description: "Busque por especialidade, localização ou nome do médico. Filtre por convênios, avaliações e disponibilidade.",
      color: "bg-medical-600"
    },
    {
      icon: <Calendar className="h-10 w-10 text-white" />,
      title: "Agende sua consulta",
      description: "Escolha o dia e horário que melhor se encaixa na sua agenda, diretamente pelo site ou aplicativo.",
      color: "bg-doctor-600"
    },
    {
      icon: <Star className="h-10 w-10 text-white" />,
      title: "Receba atendimento de qualidade",
      description: "Compareça à consulta e depois avalie o atendimento para ajudar outros pacientes.",
      color: "bg-medical-500"
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900 mb-4">Como funciona</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Agendar uma consulta médica nunca foi tão simples e rápido.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className={`${step.color} h-16 w-16 rounded-xl flex items-center justify-center mb-4`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {index + 1}. {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="heading-md text-gray-900 mb-4">Você é médico?</h3>
              <p className="text-gray-600 mb-6">
                Aumente sua visibilidade online e gerencie sua agenda de forma eficiente. 
                Junte-se a milhares de médicos que já estão usando nossa plataforma.
              </p>
              <Button className="bg-doctor-600 hover:bg-doctor-700 text-white">
                Cadastre-se como médico
              </Button>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Médico usando tablet" 
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
