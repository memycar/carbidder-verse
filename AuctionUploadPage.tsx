import { useState } from "react";
import { useNavigate } from "react-router-dom";

const makes = ["Toyota", "Honda", "Ford", "BMW", "Mercedes"]; // Sample makes
const models = {
  Toyota: ["Corolla", "Camry", "RAV4"],
  Honda: ["Civic", "Accord", "CR-V"],
  Ford: ["Fiesta", "Mustang", "Explorer"],
  BMW: ["X3", "X5", "M3"],
  Mercedes: ["C-Class", "E-Class", "GLA"],
};
const years = Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i);

const AuctionUploadPage = () => {
  const [form, setForm] = useState({
    title: "",
    make: "Toyota",
    model: "Corolla",
    year: new Date().getFullYear(),
    mileage: "",
    startingPrice: "",
    reservePrice: "",
    images: [],
    premiumServices: [],
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length < 10 || files.length > 100) {
      alert("Please upload between 10 and 100 images.");
      return;
    }
    setForm((prev) => ({ ...prev, images: files }));
  };

  const handlePremiumService = (service) => {
    setForm((prev) => {
      const services = prev.premiumServices.includes(service)
        ? prev.premiumServices.filter((s) => s !== service)
        : [...prev.premiumServices, service];
      return { ...prev, premiumServices: services };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Auction submitted", form);
    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Upload Your Car for Auction</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={form.title} onChange={handleChange} className="w-full p-2 border mb-2" required />

        <label>Make:</label>
        <select name="make" value={form.make} onChange={handleChange} className="w-full p-2 border mb-2">
          {makes.map((make) => (
            <option key={make} value={make}>{make}</option>
          ))}
        </select>

        <label>Model:</label>
        <select name="model" value={form.model} onChange={handleChange} className="w-full p-2 border mb-2">
          {models[form.make]?.map((model) => (
            <option key={model} value={model}>{model}</option>
          ))}
        </select>

        <label>Year:</label>
        <select name="year" value={form.year} onChange={handleChange} className="w-full p-2 border mb-2">
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>

        <label>Mileage (km):</label>
        <input type="number" name="mileage" value={form.mileage} onChange={handleChange} className="w-full p-2 border mb-2" required />

        <label>Starting Price ($):</label>
        <input type="number" name="startingPrice" value={form.startingPrice} onChange={handleChange} className="w-full p-2 border mb-2" required />

        <label>Reserve Price ($, optional):</label>
        <input type="number" name="reservePrice" value={form.reservePrice} onChange={handleChange} className="w-full p-2 border mb-2" />

        <label>Upload Images (10-100):</label>
        <input type="file" multiple onChange={handleImageUpload} className="w-full p-2 border mb-2" accept="image/*" />

        <div className="mb-4">
          <h3 className="font-semibold">Premium Services:</h3>
          <label>
            <input type="checkbox" onChange={() => handlePremiumService("Premium Listing")} /> Premium Listing
          </label>
          <br />
          <label>
            <input type="checkbox" onChange={() => handlePremiumService("Express Auction")} /> Express Auction
          </label>
          <br />
          <label>
            <input type="checkbox" onChange={() => handlePremiumService("Priority Listing")} /> Priority Listing
          </label>
        </div>

        <button type="submit" className="w-full p-2 bg-blue-500 text-white">Submit Auction</button>
      </form>
    </div>
  );
};

export default AuctionUploadPage;
