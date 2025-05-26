
import { Heart, Activity, Brain, Eye, Users, Stethoscope } from "lucide-react";

export function Specialties() {
  const specialties = [
    {
      icon: <Heart className="h-8 w-8" />,
      name: "Cardiologia",
      count: 320
    },
    {
      icon: <Brain className="h-8 w-8" />,
      name: "Neurologia",
      count: 245
    },
    {
      icon: <Users className="h-8 w-8" />,
      name: "Psiquiatria",
      count: 389
    },
    {
      icon: <Eye className="h-8 w-8" />,
      name: "Oftalmologia",
      count: 176
    },
    {
      icon: <Activity className="h-8 w-8" />,
      name: "Dermatologia",
      count: 291
    },
    {
      icon: <Stethoscope className="h-8 w-8" />,
      name: "Pediatria",
      count: 352
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900 mb-4">Especialidades médicas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre o especialista certo para cada necessidade de saúde.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-300 cursor-pointer"
            >
              <div className="bg-medical-50 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4 text-medical-600">
                {specialty.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{specialty.name}</h3>
              <p className="text-sm text-gray-500">{specialty.count} médicos</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="text-medical-600 font-medium hover:text-medical-700 transition-colors duration-200">
            Ver todas as especialidades →
          </a>
        </div>
      </div>
    </div>
  );
}
