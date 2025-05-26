
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Consegui agendar uma consulta com um cardiologista renomado em apenas 5 minutos. A plataforma é intuitiva e o atendimento foi excelente!",
      author: "Mariana Silva",
      location: "São Paulo, SP",
      rating: 5
    },
    {
      id: 2,
      quote: "Como médico, a plataforma facilitou muito a gestão da minha agenda. Reduzi o número de faltas e aumentei minha produtividade.",
      author: "Dr. Rafael Mendes",
      location: "Rio de Janeiro, RJ",
      rating: 5
    },
    {
      id: 3,
      quote: "Precisava de um psiquiatra com urgência e encontrei vários profissionais disponíveis para o mesmo dia. Recomendo muito!",
      author: "Pedro Oliveira",
      location: "Belo Horizonte, MG",
      rating: 4
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index}
        className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900 mb-4">O que dizem nossos usuários</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Milhares de pacientes e médicos já utilizam nossa plataforma em todo o Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-700 mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
