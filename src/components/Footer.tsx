import { Building2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/2453ce3d-0d35-4d9b-a826-a679d973b259.png" 
                alt="AG Construction Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-white/80 mb-4 max-w-md">
              Professional construction services across Commercial Building, Residential Design Build, 
              and Construction Consulting. Building excellence since day one.
            </p>
            <div className="text-sm text-white/60">
              <p>Licensed General Contractor</p>
              <p>Fully Insured & Bonded</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li>Commercial Building</li>
              <li>Residential Design Build</li>
              <li>Construction Consulting</li>
              <li>Project Management</li>
              <li>Cost Estimation</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-white/80">
              <p>(555) 123-4567</p>
              <p>info@ansongc.com</p>
              <p>Mon-Fri: 7AM-6PM</p>
              <p>Emergency Services Available</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 AG Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;