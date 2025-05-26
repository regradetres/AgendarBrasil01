
import { Button } from "@/components/ui/button";
import { SearchInput } from "@/components/ui/SearchInput";
import { MapPin, Star } from "lucide-react";

export function DoctorSearch() {
  const topDoctors = [
    {
      id: 1,
      name: "Dra. Camila Santos",
      specialty: "Cardiologista",
      rating: 4.9,
      reviews: 127,
      location: "São Paulo, SP",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: 2,
      name: "Dr. Ricardo Oliveira",
      specialty: "Neurologista",
      rating: 4.8,
      reviews: 98,
      location: "Rio de Janeiro, RJ",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: 3,
      name: "Dra. Fernanda Lima",
      specialty: "Psiquiatra",
      rating: 4.9,
      reviews: 215,
      location: "Belo Horizonte, MG",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900 mb-4">Encontre os melhores especialistas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Milhares de médicos qualificados prontos para atender você e sua família.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <SearchInput 
            placeholder="Busque por nome ou especialidade" 
            className="mb-4"
          />
          
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="outline" size="sm" className="rounded-full">
              Cardiologia
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Psiquiatria
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Dermatologia
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Ortopedia
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Oftalmologia
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Pediatria
            </Button>
            <Button variant="ghost" size="sm" className="text-medical-600">
              Ver todas
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {topDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
                <p className="text-medical-600 mb-3">{doctor.specialty}</p>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center mr-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-gray-700 font-medium">{doctor.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({doctor.reviews} avaliações)</span>
                </div>
                
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{doctor.location}</span>
                </div>
                
                <Button className="w-full bg-medical-600 hover:bg-medical-700 text-white">
                  Ver disponibilidade
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="rounded-full">
            Ver mais médicos
          </Button>
        </div>
      </div>
    </div>
  );
}
