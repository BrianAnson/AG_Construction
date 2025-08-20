import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Calendar, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Calendar, label: 'Years Experience', value: '25+' },
    { icon: Award, label: 'Projects Completed', value: '500+' },
    { icon: Users, label: 'Happy Clients', value: '200+' },
    { icon: Target, label: 'On-Time Delivery', value: '98%' },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            About Anson General Contracting
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With decades of experience in the construction industry, we've built our reputation 
            on delivering exceptional quality, maintaining strong client relationships, and 
            exceeding expectations on every project.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-construction">
              <CardContent className="p-6">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Our Commitment to Excellence</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                At Anson General Contracting, we understand that every construction project represents 
                more than just buildings and structures—it represents dreams, visions, and investments 
                in the future.
              </p>
              <p>
                Our team brings together extensive experience in commercial construction, residential 
                design-build services, and specialized construction consulting. We pride ourselves on 
                our attention to detail, commitment to safety, and ability to deliver projects on time 
                and within budget.
              </p>
              <p>
                Whether you're planning a major commercial development, building your dream home, or 
                need expert construction consulting, we have the expertise and dedication to bring 
                your vision to life.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary to-accent p-8 rounded-lg text-white">
            <h4 className="text-xl font-bold mb-6">Why Choose Anson GC?</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Licensed and fully insured professionals
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Comprehensive project management from start to finish
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Transparent communication and regular updates
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Quality craftsmanship with attention to detail
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Competitive pricing and value-driven solutions
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;