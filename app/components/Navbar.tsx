'use client';

import { menuItems } from '../data/navbarItems';

export default function Navbar() {
    return (
        <nav className='w-full bg-white shadow-md'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='flex h-16 items-center justify-between'>
                    <div className='flex space-x-6'>
                        {menuItems.map((item) => (
                            <a
                                className='text-sm font-medium text-gray-700 hover:text-black'
                                key={item.title}
                                href={item.href}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                    <div className='flex space-x-4'>
                        <button className='rounded border border-gray-300 bg-white px-4 py-1 text-sm hover:bg-gray-100'>
                            Zaloguj się
                        </button>
                        <button className='rounded bg-yellow-400 px-4 py-1 text-sm font-semibold text-white hover:bg-yellow-500'>
                            Dodaj ogłoszenie
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
