import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Download, Share2, Shuffle, Settings, Sparkles, Zap, Palette, Camera } from "lucide-react";

const ArtGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [negativePrompt, setNegativePrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [settings, setSettings] = useState({
    style: "photorealistic",
    aspectRatio: "1:1",
    resolution: "1024",
    steps: 50,
    guidanceScale: 7.5,
    seed: "",
    model: "flux-pro",
    numImages: 1
  });

  const stylePresets = [
    { id: "photorealistic", name: "Photorealistic", icon: "📸", description: "Highly detailed, camera-like images" },
    { id: "digital-art", name: "Digital Art", icon: "🎨", description: "Modern digital illustration style" },
    { id: "oil-painting", name: "Oil Painting", icon: "🖼️", description: "Classic fine art painting style" },
    { id: "anime", name: "Anime", icon: "✨", description: "Japanese animation art style" },
    { id: "watercolor", name: "Watercolor", icon: "🌈", description: "Soft, flowing watercolor technique" },
    { id: "cyberpunk", name: "Cyberpunk", icon: "🤖", description: "Futuristic neon-lit aesthetic" },
    { id: "fantasy", name: "Fantasy", icon: "🧙", description: "Magical and mythical themes" },
    { id: "minimalist", name: "Minimalist", icon: "⚪", description: "Clean, simple, modern design" }
  ];

  const aspectRatios = [
    { value: "1:1", label: "Square (1:1)", dimensions: "1024×1024" },
    { value: "3:4", label: "Portrait (3:4)", dimensions: "768×1024" },
    { value: "4:3", label: "Landscape (4:3)", dimensions: "1024×768" },
    { value: "16:9", label: "Widescreen (16:9)", dimensions: "1024×576" },
    { value: "9:16", label: "Story (9:16)", dimensions: "576×1024" }
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a description for your artwork");
      return;
    }

    setIsGenerating(true);
    try {
      // Simulate AI generation (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 4000));
      
      // For demo purposes, generate multiple placeholder images
      const newImages = Array.from({ length: settings.numImages }, (_, i) => 
        `https://images.unsplash.com/photo-${1541961017774 + i}?w=800&h=800&fit=crop&auto=format`
      );
      
      setGeneratedImages(prev => [...newImages, ...prev]);
      setSelectedImage(newImages[0]);
      toast.success(`Generated ${settings.numImages} artwork${settings.numImages > 1 ? 's' : ''} successfully!`);
    } catch (error) {
      toast.error("Failed to generate artwork. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const generateRandomSeed = () => {
    const randomSeed = Math.floor(Math.random() * 999999999).toString();
    setSettings(prev => ({ ...prev, seed: randomSeed }));
  };

  const downloadImage = () => {
    if (selectedImage) {
      // In a real app, this would download the actual image
      toast.success("Image download started!");
    }
  };

  const shareImage = () => {
    if (selectedImage) {
      // In a real app, this would open share dialog
      toast.success("Share link copied to clipboard!");
    }
  };

  return (
    <section id="generate" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Professional AI Art Studio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Create stunning artwork with advanced AI models and professional-grade controls. 
            Fine-tune every aspect of your creation for perfect results.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Controls Panel */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    Prompt & Style
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Describe your artwork</label>
                    <Textarea
                      placeholder="A majestic dragon soaring through a starlit sky, fantasy art style, vibrant colors, highly detailed, 4K resolution..."
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      className="min-h-24 bg-background/50 border-border/50 focus:border-primary resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Negative Prompt (Optional)</label>
                    <Textarea
                      placeholder="blurry, low quality, distorted, ugly, bad anatomy..."
                      value={negativePrompt}
                      onChange={(e) => setNegativePrompt(e.target.value)}
                      className="min-h-20 bg-background/50 border-border/50 focus:border-primary resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">Art Style</label>
                    <div className="grid grid-cols-2 gap-2">
                      {stylePresets.map((style) => (
                        <Button
                          key={style.id}
                          variant={settings.style === style.id ? "default" : "outline"}
                          className={`h-auto p-3 flex flex-col items-center gap-1 text-xs ${
                            settings.style === style.id ? "bg-gradient-primary" : ""
                          }`}
                          onClick={() => setSettings(prev => ({ ...prev, style: style.id }))}
                        >
                          <span className="text-lg">{style.icon}</span>
                          <span className="font-medium">{style.name}</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Advanced Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Aspect Ratio</label>
                    <Select value={settings.aspectRatio} onValueChange={(value) => setSettings(prev => ({ ...prev, aspectRatio: value }))}>
                      <SelectTrigger className="bg-background/50 border-border/50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {aspectRatios.map((ratio) => (
                          <SelectItem key={ratio.value} value={ratio.value}>
                            <div className="flex flex-col">
                              <span>{ratio.label}</span>
                              <span className="text-xs text-muted-foreground">{ratio.dimensions}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">AI Model</label>
                      <Select value={settings.model} onValueChange={(value) => setSettings(prev => ({ ...prev, model: value }))}>
                        <SelectTrigger className="bg-background/50 border-border/50">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="flux-pro">Flux Pro</SelectItem>
                          <SelectItem value="flux-dev">Flux Dev</SelectItem>
                          <SelectItem value="stable-diffusion">Stable Diffusion</SelectItem>
                          <SelectItem value="midjourney">Midjourney Style</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Images</label>
                      <Select value={settings.numImages.toString()} onValueChange={(value) => setSettings(prev => ({ ...prev, numImages: parseInt(value) }))}>
                        <SelectTrigger className="bg-background/50 border-border/50">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Image</SelectItem>
                          <SelectItem value="2">2 Images</SelectItem>
                          <SelectItem value="4">4 Images</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Quality Steps: {settings.steps}
                    </label>
                    <Slider
                      value={[settings.steps]}
                      onValueChange={(value) => setSettings(prev => ({ ...prev, steps: value[0] }))}
                      max={100}
                      min={20}
                      step={5}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Guidance Scale: {settings.guidanceScale}
                    </label>
                    <Slider
                      value={[settings.guidanceScale]}
                      onValueChange={(value) => setSettings(prev => ({ ...prev, guidanceScale: value[0] }))}
                      max={20}
                      min={1}
                      step={0.5}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Seed (Optional)</label>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Random seed"
                        value={settings.seed}
                        onChange={(e) => setSettings(prev => ({ ...prev, seed: e.target.value }))}
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={generateRandomSeed}
                        className="flex-shrink-0"
                      >
                        <Shuffle className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <Button 
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 py-6 text-lg shadow-premium"
                  >
                    {isGenerating ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Generating {settings.numImages} image{settings.numImages > 1 ? 's' : ''}...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Zap className="h-5 w-5" />
                        Generate Artwork
                      </div>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="h-5 w-5" />
                    Generated Artwork
                  </CardTitle>
                  <CardDescription>
                    Your AI-generated images will appear here. Click on any image to view it full size.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {selectedImage ? (
                    <div className="space-y-4">
                      <div className="aspect-square bg-muted/20 rounded-lg border border-border/50 overflow-hidden">
                        <img 
                          src={selectedImage} 
                          alt="Generated artwork" 
                          className="w-full h-full object-cover animate-scale-in"
                        />
                      </div>
                      
                      <div className="flex gap-2">
                        <Button onClick={downloadImage} className="flex-1 bg-gradient-primary hover:opacity-90">
                          <Download className="h-4 w-4 mr-2" />
                          Download HD
                        </Button>
                        <Button onClick={shareImage} variant="outline" className="flex-1">
                          <Share2 className="h-4 w-4 mr-2" />
                          Share
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Palette className="h-4 w-4 mr-2" />
                          Enhance
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="aspect-square bg-muted/20 rounded-lg border-2 border-dashed border-border/50 flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <div className="w-16 h-16 bg-gradient-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Sparkles className="h-8 w-8" />
                        </div>
                        <p className="text-lg font-medium mb-2">Ready to Create</p>
                        <p>Enter your prompt and click Generate to start</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {generatedImages.length > 0 && (
                <Card className="bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Generation History</CardTitle>
                    <CardDescription>
                      Click on any image to view it full size
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {generatedImages.slice(0, 8).map((image, index) => (
                        <div
                          key={index}
                          className={`aspect-square rounded-lg overflow-hidden cursor-pointer transition-all duration-200 hover:scale-105 ${
                            selectedImage === image ? 'ring-2 ring-primary' : 'hover:ring-2 hover:ring-primary/50'
                          }`}
                          onClick={() => setSelectedImage(image)}
                        >
                          <img 
                            src={image} 
                            alt={`Generated artwork ${index + 1}`} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtGenerator;