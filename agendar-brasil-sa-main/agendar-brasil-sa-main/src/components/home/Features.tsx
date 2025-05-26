
import { CalendarCheck, Clock, HeartPulse, ShieldCheck } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <CalendarCheck className="h-10 w-10 text-medical-500" />,
      title: "Agendamento Online",
      description: "Marque consultas médicas 24 horas por dia, sem precisar telefonar ou esperar em filas."
    },
    {
      icon: <Clock className="h-10 w-10 text-medical-500" />,
      title: "Lembretes Automáticos",
      description: "Receba notificações sobre suas consultas para nunca perder um compromisso médico."
    },
    {
      icon: <HeartPulse className="h-10 w-10 text-medical-500" />,
      title: "Especialistas Verificados",
      description: "Todos os profissionais passam por uma verificação completa de credenciais."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-medical-500" />,
      title: "Privacidade Garantida",
      description: "Seus dados médicos são protegidos e criptografados conforme a LGPD."
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900 mb-4">
            Por que escolher o <span className="text-medical-600">Agendar</span>
            <span className="text-doctor-600">Brasil</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Facilitamos o acesso à saúde com tecnologia e praticidade para pacientes e médicos em todo o Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-medical-50 h-16 w-16 rounded-xl flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
