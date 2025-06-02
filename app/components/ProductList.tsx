import { offers } from "../data/productData";

export default function ProductList() {
    return (
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6">Ogłoszenia</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {offers.map((offer, index) => (
                <div key={index} className="bg-white border rounded-xl shadow-sm p-4">
                <div className="w-full h-40 bg-gray-200 rounded mb-4" />
                <h3 className="text-lg font-medium">{offer.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{offer.category}</p>
                <p className="text-md font-semibold mt-2">{offer.price}</p>
                </div>
            ))}
        </div>
      </section>
    );
  }
  