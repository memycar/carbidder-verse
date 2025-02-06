
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { FeaturedAuctionCard } from "@/components/FeaturedAuctionCard";
import { Button } from "@/components/ui/button";

// Temporary mock data
const featuredAuctions = [
  {
    id: 1,
    image: "https://source.unsplash.com/random/800x600/?luxury,car",
    title: "2021 Porsche 911 GT3",
    price: 175000,
    timeLeft: "2 days left",
  },
  {
    id: 2,
    image: "https://source.unsplash.com/random/800x600/?sports,car",
    title: "2020 Ferrari F8 Tributo",
    price: 285000,
    timeLeft: "3 days left",
  },
  {
    id: 3,
    image: "https://source.unsplash.com/random/800x600/?classic,car",
    title: "1967 Ford Mustang Fastback",
    price: 85000,
    timeLeft: "1 day left",
  },
];

const Index = () => {
  useEffect(() => {
    // Preload images for smooth transitions
    featuredAuctions.forEach((auction) => {
      const img = new Image();
      img.src = auction.image;
    });
  }, []);

  return (
    <div className="min-h-screen bg-muted">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary">
              Discover Extraordinary Cars
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Join the premier marketplace for unique and exceptional vehicles.
              Every car tells a story.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Start Bidding
              </Button>
              <Button size="lg" variant="outline">
                Sell Your Car
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Auctions */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-display font-bold text-primary">
              Featured Auctions
            </h2>
            <Button variant="ghost" className="text-primary">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAuctions.map((auction, index) => (
              <FeaturedAuctionCard key={auction.id} {...auction} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
