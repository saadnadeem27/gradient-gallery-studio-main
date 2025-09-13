import Navigation from "@/components/Navigation";
import ArtGenerator from "@/components/ArtGenerator";
import Footer from "@/components/Footer";

const Generate = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
              AI Art Generator
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your ideas into stunning visual art with our advanced AI technology. 
              Enter a description and watch your imagination come to life.
            </p>
          </div>
          <ArtGenerator />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Generate;