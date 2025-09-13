const Gallery = () => {
  const sampleArtworks = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop",
      prompt: "Cyberpunk city at night with neon lights",
      style: "Digital Art"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      prompt: "Majestic mountain landscape at sunset",
      style: "Oil Painting"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop",
      prompt: "Abstract geometric patterns in vibrant colors",
      style: "Abstract"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1572177812156-58036aae439c?w=400&h=400&fit=crop",
      prompt: "Fantasy dragon in a mystical forest",
      style: "Fantasy Art"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=400&h=400&fit=crop",
      prompt: "Futuristic robot in a sci-fi setting",
      style: "Photorealistic"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=400&fit=crop",
      prompt: "Serene ocean waves at dawn",
      style: "Watercolor"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Incredible AI Creations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the limitless possibilities of AI-generated art. Every piece is unique and crafted from imagination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sampleArtworks.map((artwork, index) => (
            <div 
              key={artwork.id}
              className="group relative overflow-hidden rounded-xl bg-gradient-card border border-border/50 shadow-card hover:shadow-premium transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={artwork.image} 
                  alt={artwork.prompt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-primary/20 backdrop-blur-sm rounded-lg px-3 py-1 text-xs font-medium mb-2 w-fit">
                    {artwork.style}
                  </div>
                  <p className="text-sm text-foreground/90 line-clamp-2">
                    {artwork.prompt}
                  </p>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-primary hover:opacity-90 transition-opacity px-8 py-4 rounded-lg font-medium shadow-premium">
            View More Creations
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;