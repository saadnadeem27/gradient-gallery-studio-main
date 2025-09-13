import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-ai-art.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-glow-pulse delay-1000"></div>
      
      {/* Hero Image */}
      <div className="absolute inset-0 opacity-30">
        <img 
          src={heroImage} 
          alt="AI Art Generation" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-balance break-words overflow-visible text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent leading-[1.2] md:leading-[1.15] xl:leading-[1.1]">
            Create Stunning AI Art in Seconds
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your imagination into breathtaking digital masterpieces with our advanced AI art generator. Professional quality, unlimited creativity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/generate">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300 text-lg px-8 py-6 shadow-premium animate-scale-in"
              >
                Start Creating Free
              </Button>
            </Link>
            
            <Link to="/gallery">
              <Button 
                variant="outline" 
                size="lg"
                className="border-border/50 bg-background/10 backdrop-blur-sm hover:bg-background/20 text-lg px-8 py-6 animate-scale-in delay-100"
              >
                View Gallery
              </Button>
            </Link>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center animate-fade-in delay-200">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground text-sm">Generate high-quality art in under 10 seconds</p>
            </div>
            
            <div className="text-center animate-fade-in delay-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-semibold mb-2">Unlimited Styles</h3>
              <p className="text-muted-foreground text-sm">From photorealistic to abstract, any style you imagine</p>
            </div>
            
            <div className="text-center animate-fade-in delay-400">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-semibold mb-2">Professional Quality</h3>
              <p className="text-muted-foreground text-sm">4K resolution perfect for commercial use</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;