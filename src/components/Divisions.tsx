import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, Home, FileText, ArrowRight } from 'lucide-react';

const Divisions = () => {
  const divisions = [
    {
      icon: Building2,
      title: 'Commercial Building',
      description: 'Comprehensive commercial construction services for office buildings, retail spaces, warehouses, and industrial facilities.',
      features: [
        'Office Buildings & Corporate Headquarters',
        'Retail & Shopping Centers',
        'Warehouses & Distribution Centers',
        'Industrial Facilities',
        'Healthcare & Medical Buildings',
        'Educational Institutions'
      ],
      highlight: 'From ground-up construction to major renovations, we deliver commercial projects that meet your business needs and exceed expectations.'
    },
    {
      icon: Home,
      title: 'Residential Design Build',
      description: 'Complete residential construction services from initial design through final construction, creating homes that reflect your lifestyle.',
      features: [
        'Custom Home Design & Construction',
        'Home Additions & Extensions',
        'Kitchen & Bathroom Remodeling',
        'Whole House Renovations',
        'Outdoor Living Spaces',
        'Energy-Efficient Upgrades'
      ],
      highlight: 'Our design-build approach ensures seamless communication, better cost control, and faster project completion for your dream home.'
    },
    {
      icon: FileText,
      title: 'Construction Consulting',
      description: 'Expert consulting services to guide you through complex construction challenges and optimize your project outcomes.',
      features: [
        'Project Planning & Feasibility Studies',
        'Cost Estimation & Budget Planning',
        'Construction Management',
        'Quality Control & Inspections',
        'Code Compliance & Permits',
        'Value Engineering'
      ],
      highlight: 'Leverage our decades of experience to make informed decisions, avoid costly mistakes, and ensure project success.'
    }
  ];

  return (
    <section id="divisions" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Our Service Divisions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three specialized divisions working together to provide comprehensive construction solutions 
            for all your building needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {divisions.map((division, index) => (
            <Card key={index} className="shadow-construction hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <division.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-2">{division.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {division.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-foreground italic">
                    "{division.highlight}"
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Services Include:</h4>
                  <ul className="space-y-2">
                    {division.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button variant="outline" className="w-full group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Divisions;