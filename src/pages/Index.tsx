import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import achievementImage from "@/assets/achievement.jpg";
import achievementVideo from "@/assets/achievement-video.mp4";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="text-center space-y-8 max-w-lg">
        {/* Decorative element */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-full animate-shimmer" 
               style={{ backgroundSize: '200% 100%' }} />
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight animate-float">
          Look at what I was doing kalomo shikaseba 
        </h1>

        {/* Subtext */}
        <p className="text-muted-foreground text-lg">
        KALOMO WANKUMBU SHIKASEBA 
        </p>

        {/* Open button with dialog */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button 
              size="lg"
              className="bg-primary hover:bg-gold-dark text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow"
            >
              <Eye className="mr-2 h-5 w-5" />
              Open
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl p-2 bg-card border-2 border-gold/30">
            <div className="space-y-4">
              <video 
                src={achievementVideo}
                controls
                autoPlay
                className="w-full h-auto rounded-lg"
              />
              <img 
                src={achievementImage} 
                alt="Achievement moment - receiving an award at a graduation ceremony"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </DialogContent>
        </Dialog>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" style={{ animationDelay: '0s' }} />
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
import {buttons} from "youtube"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Image Gallery</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<h1>My Image Gallery</h1>

<div class="gallery">
  <img src="images/img1.jpg" alt="Image 1">
  <img src="images/img2.jpg" alt="Image 2">
  <img src="images/img3.jpg" alt="Image 3">
</div>

</body>
</html>



