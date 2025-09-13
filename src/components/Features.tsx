import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: "🎨",
      title: "Advanced AI Models",
      description: "State-of-the-art neural networks trained on millions of artworks for exceptional quality and creativity."
    },
    {
      icon: "⚡",
      title: "Lightning Fast Generation",
      description: "Generate high-quality images in seconds, not minutes. Our optimized infrastructure ensures rapid processing."
    },
    {
      icon: "🎯",
      title: "Precise Control",
      description: "Fine-tune your creations with advanced parameters for style, composition, lighting, and mood."
    },
    {
      icon: "📐",
      title: "Multiple Formats",
      description: "Generate images in various aspect ratios and resolutions, from social media posts to print-ready artwork."
    },
    {
      icon: "🔄",
      title: "Iteration & Refinement",
      description: "Easily modify and refine your generations with our intuitive editing tools and variation system."
    },
    {
      icon: "🏢",
      title: "Commercial License",
      description: "Use generated artwork for commercial purposes with our flexible licensing options."
    },
    {
      icon: "🌍",
      title: "Multi-Language Support",
      description: "Create art using prompts in multiple languages with our globally trained AI models."
    },
    {
      icon: "🔒",
      title: "Privacy & Security",
      description: "Your creations are secure and private. We never use your images to train our models without permission."
    },
    {
      icon: "📱",
      title: "Mobile Optimized",
      description: "Create stunning art on any device with our responsive web interface and mobile apps."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
            Powerful Features for Every Creator
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the tools and capabilities that make ArtifyAI the preferred choice for artists, designers, and creators worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300 hover-glow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-2xl mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;