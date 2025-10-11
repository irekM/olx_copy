'use client';

import { useState } from 'react';
import { seedOffers } from '../utils/seedOffers';

export default function SeedPage() {
    const [loading, setLoading] = useState(false);

    const handleSeed = async () => {
        setLoading(true);
        await seedOffers();
        setLoading(false);
    };

    return (
        <div className='flex min-h-screen flex-col items-center justify-center'>
            <h1 className='mb-4 text-2xl font-bold'>Seed Firestore</h1>
            <button
                onClick={handleSeed}
                disabled={loading}
                className='rounded bg-yellow-400 px-4 py-2 font-semibold text-white hover:bg-yellow-500'
            >
                {loading ? 'Loading...' : 'Add offers to Firestore'}
            </button>
        </div>
    );
}
