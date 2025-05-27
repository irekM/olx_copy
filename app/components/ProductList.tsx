export default function ProductList() {
    return (
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6">Ogłoszenia</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Ogłoszenie 1 */}
          <div className="bg-white border rounded-xl shadow-sm p-4">
            <div className="w-full h-40 bg-gray-200 rounded mb-4" />
            <h3 className="text-lg font-medium">Toyota Corolla 2015</h3>
            <p className="text-sm text-gray-600 mt-1">Motoryzacja</p>
            <p className="text-md font-semibold mt-2">28 500 zł</p>
          </div>
  
          {/* Ogłoszenie 2 */}
          <div className="bg-white border rounded-xl shadow-sm p-4">
            <div className="w-full h-40 bg-gray-200 rounded mb-4" />
            <h3 className="text-lg font-medium">Mieszkanie 45m² Warszawa</h3>
            <p className="text-sm text-gray-600 mt-1">Nieruchomości</p>
            <p className="text-md font-semibold mt-2">599 000 zł</p>
          </div>
  
          {/* Ogłoszenie 3 */}
          <div className="bg-white border rounded-xl shadow-sm p-4">
            <div className="w-full h-40 bg-gray-200 rounded mb-4" />
            <h3 className="text-lg font-medium">Rower trekkingowy Kross</h3>
            <p className="text-sm text-gray-600 mt-1">Sport i Hobby</p>
            <p className="text-md font-semibold mt-2">1 200 zł</p>
          </div>
        </div>
      </section>
    );
  }
  