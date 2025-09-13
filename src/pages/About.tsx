import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      image: "👩‍💼",
      description: "Former Google AI researcher with 10+ years in machine learning"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder", 
      image: "👨‍💻",
      description: "Ex-OpenAI engineer specializing in generative AI and neural networks"
    },
    {
      name: "Elena Volkov",
      role: "Head of Design",
      image: "👩‍🎨", 
      description: "Award-winning designer with expertise in AI-human interaction"
    },
    {
      name: "David Kim",
      role: "Lead AI Engineer",
      image: "👨‍🔬",
      description: "PhD in Computer Vision from Stanford, 50+ research publications"
    }
  ];

  const stats = [
    { number: "2M+", label: "Images Generated" },
    { number: "100K+", label: "Active Users" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
              About ArtifyAI
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're on a mission to democratize creativity through artificial intelligence, 
              making professional-quality art generation accessible to everyone.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Story Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Founded in 2023, ArtifyAI emerged from a simple belief: that everyone deserves access to 
                professional-quality creative tools. Our founders, coming from backgrounds at Google, OpenAI, 
                and Stanford, saw the transformative potential of AI in creative fields.
              </p>
              <p>
                What started as a research project has evolved into a platform used by millions of creators, 
                designers, and artists worldwide. We've processed over 2 million image generations, helping 
                users bring their creative visions to life with unprecedented ease and quality.
              </p>
              <p>
                Today, we continue to push the boundaries of what's possible with AI-generated art, 
                constantly improving our models and expanding our capabilities based on community feedback.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-6">
                    <div className="text-6xl mb-4">{member.image}</div>
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg mx-auto mb-4 flex items-center justify-center text-2xl">
                  🚀
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We constantly push the boundaries of AI technology to deliver cutting-edge creative tools.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg mx-auto mb-4 flex items-center justify-center text-2xl">
                  🤝
                </div>
                <h3 className="text-xl font-bold mb-3">Accessibility</h3>
                <p className="text-muted-foreground">
                  We believe powerful creative tools should be accessible to everyone, regardless of skill level.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg mx-auto mb-4 flex items-center justify-center text-2xl">
                  🎨
                </div>
                <h3 className="text-xl font-bold mb-3">Creativity</h3>
                <p className="text-muted-foreground">
                  We empower human creativity through AI, amplifying artistic expression and imagination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;