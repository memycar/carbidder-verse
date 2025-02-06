
export interface Listing {
  id: string;
  title: string;
  make: string;
  model: string;
  year: number;
  mileage: number;
  starting_price: number;
  reserve_price: number | null;
  description: string;
  end_time: string;
  created_at: string;
  status: 'active' | 'ended' | 'sold' | 'cancelled';
  main_image: string;
  views: number;
}

export interface Bid {
  id: string;
  listing_id: string;
  amount: number;
  created_at: string;
}
