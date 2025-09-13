const Footer = () => {
  return (
    <footer className="bg-gradient-card border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg animate-glow-pulse"></div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                ArtifyAI
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Transform your imagination into stunning digital masterpieces with the power of artificial intelligence. Create, inspire, and share your unique artistic vision.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-muted/20 hover:bg-primary/20 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                <span className="text-sm">📧</span>
              </div>
              <div className="w-10 h-10 bg-muted/20 hover:bg-primary/20 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                <span className="text-sm">🐦</span>
              </div>
              <div className="w-10 h-10 bg-muted/20 hover:bg-primary/20 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                <span className="text-sm">📷</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Gallery</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
            </ul>
          </div>
        </div>
          
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 ArtifyAI. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;