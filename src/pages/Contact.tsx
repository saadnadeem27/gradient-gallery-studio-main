import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email Support",
      description: "Get help with your account or technical issues",
      contact: "support@artifyai.com",
      response: "Within 24 hours"
    },
    {
      icon: "💼",
      title: "Business Inquiries",
      description: "Enterprise solutions and partnerships",
      contact: "business@artifyai.com", 
      response: "Within 2 business days"
    },
    {
      icon: "🚨",
      title: "Technical Issues",
      description: "Report bugs or technical problems",
      contact: "tech@artifyai.com",
      response: "Within 12 hours"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you soon.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Input placeholder="How can we help you?" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea 
                      rows={6} 
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-primary hover:opacity-90">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Other ways to reach us</h2>
              
              {contactMethods.map((method, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{method.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">{method.title}</h3>
                        <p className="text-muted-foreground mb-3">{method.description}</p>
                        <p className="font-medium text-primary mb-1">{method.contact}</p>
                        <p className="text-sm text-muted-foreground">Response time: {method.response}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* FAQ Link */}
              <Card className="bg-gradient-primary/10 border-primary/20">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">Check our FAQ</h3>
                  <p className="text-muted-foreground mb-4">
                    Find instant answers to common questions about our platform.
                  </p>
                  <Button variant="outline" className="border-primary/20">
                    View FAQ
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Office Info */}
          <div className="text-center mt-16 p-8 bg-card/30 rounded-lg backdrop-blur-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Visit Our Office</h3>
            <p className="text-muted-foreground mb-2">123 Innovation Drive</p>
            <p className="text-muted-foreground mb-2">San Francisco, CA 94105</p>
            <p className="text-muted-foreground">United States</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;