'use client';
import { useEffect, useMemo, useState } from 'react';
import { db } from '../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import FilterPanel, { Filters } from './components/FilterPanel';
import ProductList from './components/ProductList';

export default function HomePage() {
    const [filters, setFilters] = useState<Filters>({
        state: 'all',
        daysAgo: 'all',
    });
    const [offers, setOffers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOffers = async () => {
            const snapshot = await getDocs(collection(db, 'offers'));
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setOffers(data);
            setLoading(false);
        };
        fetchOffers();
    }, []);

    const filteredOffers = useMemo(() => {
        const now = Date.now();

        return offers.filter((o) => {
            if (
                filters.keyword &&
                !o.title.toLowerCase().includes(filters.keyword.toLowerCase())
            )
                return false;
            if (
                filters.state &&
                filters.state !== 'all' &&
                o.state !== filters.state
            )
                return false;
            if (filters.brand && o.brand !== filters.brand) return false;
            if (filters.location && o.location !== filters.location)
                return false;
            if (filters.minPrice && o.price < filters.minPrice) return false;
            if (filters.maxPrice && o.price > filters.maxPrice) return false;
            if (filters.daysAgo && filters.daysAgo !== 'all') {
                const days = Number(filters.daysAgo);
                const publishedTs = new Date(o.published).getTime();
                if (now - publishedTs > days * 86400000) return false;
            }
            return true;
        });
    }, [offers, filters]);

    return (
        <div className='min-h-screen bg-gray-50'>
            <div className='mx-auto max-w-7xl px-4 py-8'>
                {loading ? (
                    <p className='text-gray-500'>Wczytywanie ofert...</p>
                ) : (
                    <div className='mb-6 grid gap-6 lg:grid-cols-[300px_1fr]'>
                        <FilterPanel
                            allOffers={offers}
                            filters={filters}
                            setFilters={setFilters}
                        />
                        <ProductList offers={filteredOffers} />
                    </div>
                )}
            </div>
        </div>
    );
}
