import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '(555) 123-4567',
      description: 'Available Monday - Friday'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@ansongc.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Service Area',
      details: 'Greater Metro Area',
      description: 'Licensed in multiple states'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 7AM-6PM',
      description: 'Emergency services available'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Get Started Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to begin your construction project? Contact us for a free consultation 
            and let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <p className="text-foreground font-medium">{info.details}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="gradient-primary text-white">
              <CardHeader>
                <CardTitle className="text-white">Free Project Consultation</CardTitle>
                <CardDescription className="text-white/90">
                  Schedule a no-obligation consultation to discuss your project requirements and get expert advice.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full">
                  Schedule Consultation
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 shadow-construction">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                    Project Type
                  </label>
                  <select 
                    id="projectType" 
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                  >
                    <option value="">Select a division</option>
                    <option value="commercial">Commercial Building</option>
                    <option value="residential">Residential Design Build</option>
                    <option value="consulting">Construction Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Details *
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Please describe your project, timeline, and any specific requirements..."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;