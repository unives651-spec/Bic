import { Phone, Mail, Facebook, Flame, Grid3x3, DoorOpen, Warehouse } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const galleryImages = [
  { id: 1, src: 'https://images.pexels.com/photos/5474044/pexels-photo-5474044.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Kerítés munka 1' },
  { id: 2, src: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Kapu munka 2' },
  { id: 3, src: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Hegesztés 3' },
  { id: 4, src: 'https://images.pexels.com/photos/162539/architecture-building-Amsterdam-blue-162539.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Fémszerkezet munka 4' },
  { id: 5, src: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Referencia munka 5' },
  { id: 6, src: 'https://images.pexels.com/photos/5474044/pexels-photo-5474044.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Referencia munka 6' },
];

const services = [
  {
    icon: Grid3x3,
    title: 'Kerítések gyártása és beszerelése',
  },
  {
    icon: DoorOpen,
    title: 'Kétszárnyú kapuk, tolókapuk készítése',
  },
  {
    icon: Warehouse,
    title: 'Garázs, előtetők, kerti tárolók, fémszerkezetek kivitelezése',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Flame className="w-10 h-10 text-[#0066B3]" strokeWidth={2} />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Fekete Tamás</h1>
              <p className="text-sm text-gray-600">egyéni vállalkozó</p>
            </div>
          </div>
          <Button
            asChild
            className="bg-[#0066B3] hover:bg-[#0055A0] text-white"
          >
            <a href="tel:+36300184459">
              <Phone className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">06-30/018-4459</span>
              <span className="sm:hidden">Hívás</span>
            </a>
          </Button>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <Flame className="w-20 h-20 text-[#0066B3]" strokeWidth={2} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Lakatos és Hegesztési munkák kivitelezése
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Borsod-Abaúj-Zemplén Megye területén
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#0066B3] hover:bg-[#0055A0] text-white text-lg"
            >
              <a href="tel:+36300184459">
                <Phone className="w-5 h-5 mr-2" />
                Hívjon most
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#0066B3] text-[#0066B3] hover:bg-[#0066B3] hover:text-white text-lg"
            >
              <a href="mailto:feketetamas1328@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Email
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Szolgáltatások
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-[#0066B3] border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8 text-center">
                  <service.icon className="w-16 h-16 text-[#0066B3] mx-auto mb-4" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Referencia Munkáim
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-[#0066B3] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Kapcsolat</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            <div>
              <a
                href="tel:+36300184459"
                className="text-3xl md:text-4xl font-bold hover:underline inline-flex items-center gap-3"
              >
                <Phone className="w-8 h-8" />
                06-30/018-4459
              </a>
            </div>
            <div>
              <a
                href="mailto:feketetamas1328@gmail.com"
                className="text-xl md:text-2xl hover:underline inline-flex items-center gap-3"
              >
                <Mail className="w-6 h-6" />
                feketetamas1328@gmail.com
              </a>
            </div>
            <div className="text-lg md:text-xl">
              <p>Tiszaújváros, Magyarország</p>
            </div>
            <div className="pt-4">
              <a
                href="https://www.facebook.com/p/Fekete-Tam%C3%A1s-Egy%C3%A9ni-V%C3%A1llalkoz%C3%B3-100082928186791/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#0066B3] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Facebook className="w-6 h-6" />
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <p className="text-lg font-semibold">
              Copyright © 2024 Fekete Tamás Egyéni Vállalkozó
            </p>
            <p className="text-gray-400">Tiszaújváros</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-400">
              <a href="tel:+36300184459" className="hover:text-white transition-colors">
                06-30/018-4459
              </a>
              <span className="hidden sm:inline">|</span>
              <a href="mailto:feketetamas1328@gmail.com" className="hover:text-white transition-colors">
                feketetamas1328@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
