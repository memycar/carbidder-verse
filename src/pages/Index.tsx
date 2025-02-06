
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { FeaturedAuctionCard } from "@/components/FeaturedAuctionCard";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Listing } from "@/types/listings";

const Index = () => {
  const { data: listings, isLoading } = useQuery({
    queryKey: ['featuredListings'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('listings')
        .select('*')
        .eq('status', 'active')
        .order('end_time', { ascending: true })
        .limit(6);

      if (error) throw error;
      return data as Listing[];
    },
  });

  useEffect(() => {
    // Preload images for smooth transitions
    listings?.forEach((listing) => {
      const img = new Image();
      img.src = listing.main_image;
    });
  }, [listings]);

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
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-[400px] rounded-lg bg-gray-100 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listings?.map((listing, index) => (
                <FeaturedAuctionCard 
                  key={listing.id} 
                  listing={listing} 
                  index={index} 
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Index;
