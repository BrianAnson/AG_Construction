import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import heroConstructionBg from '@/assets/hero-construction-bg.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center gradient-hero text-white" style={{ backgroundImage: `url(${heroConstructionBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="absolute inset-0 gradient-hero"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Building Excellence
          <span className="block text-accent">Since Day One</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
          Professional construction services across Commercial Building, Residential Design Build, 
          and Construction Consulting with decades of expertise and commitment to quality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" variant="secondary" className="text-lg px-8">
            View Our Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
            <Phone className="mr-2 h-5 w-5" />
            Get Free Quote
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;