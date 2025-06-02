'use client';
import { menuItems } from "../data/navbarItems";


export default function Navbar() {
    return (
      <nav className="w-full bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex space-x-6">
              {menuItems.map((item) => (
                <a
                  className="text-gray-700 hover:text-black text-sm font-medium"
                  key={item.title}
                  href={item.href}                  
                >
                  {item.title}
                </a>
              ))}
            </div>
            <div className="flex space-x-4">
              <button className="bg-white border border-gray-300 text-sm px-4 py-1 rounded hover:bg-gray-100">
                Zaloguj się
              </button>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-sm px-4 py-1 rounded text-white font-semibold">
                Dodaj ogłoszenie
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }

          