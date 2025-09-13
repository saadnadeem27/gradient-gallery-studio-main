import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Graphic Designer",
      company: "Creative Studios",
      image: "👩‍🎨",
      quote: "ArtifyAI has revolutionized my creative process. I can now generate concepts in minutes that would have taken hours to sketch manually.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Marketing Director", 
      company: "TechStart Inc.",
      image: "👨‍💼",
      quote: "The quality and speed of image generation is incredible. Our marketing campaigns have never looked better, and we're saving thousands on stock photos.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Freelance Artist",
      company: "Independent",
      image: "👩‍🎤",
      quote: "As a freelancer, ArtifyAI gives me a competitive edge. I can offer clients more options and deliver projects faster than ever before.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Game Developer",
      company: "PixelForge Games",
      image: "👨‍💻",
      quote: "Perfect for rapid prototyping game assets. The variety of styles and the ability to iterate quickly has streamlined our entire art pipeline.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "Social Media Manager",
      company: "BrandBoost Agency",
      image: "👩‍💻",
      quote: "Creating engaging social media content has never been easier. Our engagement rates have increased by 40% since using ArtifyAI.",
      rating: 5
    },
    {
      name: "Alex Morgan",
      role: "Art Director",
      company: "Visionary Films",
      image: "👨‍🎨",
      quote: "The commercial license and high-resolution outputs make this perfect for professional use. It's become an essential tool in our studio.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
            Trusted by Creators Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what professionals are saying about ArtifyAI and how it's transforming their creative workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-primary font-medium">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 text-muted-foreground">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.9/5</div>
              <div className="text-sm">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50K+</div>
              <div className="text-sm">Happy Users</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2M+</div>
              <div className="text-sm">Images Created</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;