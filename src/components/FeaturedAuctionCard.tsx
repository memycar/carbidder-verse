
import { motion } from "framer-motion";
import { Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeaturedAuctionCardProps {
  image: string;
  title: string;
  price: number;
  timeLeft: string;
  index: number;
}

export const FeaturedAuctionCard = ({
  image,
  title,
  price,
  timeLeft,
  index,
}: FeaturedAuctionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-primary line-clamp-1">{title}</h3>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="mr-1 h-4 w-4" />
            <span>{timeLeft}</span>
          </div>
          <div className="flex items-center text-sm font-semibold text-primary">
            <DollarSign className="mr-1 h-4 w-4" />
            <span>{price.toLocaleString()}</span>
          </div>
        </div>
        <div className="mt-4">
          <Button className="w-full bg-accent hover:bg-accent/90">
            Bid Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
