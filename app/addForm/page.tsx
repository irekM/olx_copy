'use client';

import { useState } from 'react';
import { db } from '../../firebase/firebase'; // <-- tu importujesz swoją konfigurację
import { collection, addDoc } from 'firebase/firestore';

export default function AddOfferPage() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await addDoc(collection(db, 'offers'), {
                title,
                price,
                category,
                location,
                published: new Date(),
            });
            alert('Ogłoszenie dodane 🎉');
            setTitle('');
            setPrice('');
            setCategory('');
            setLocation('');
        } catch (error) {
            console.error('Błąd przy dodawaniu dokumentu:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='mx-auto mt-10 max-w-xl rounded bg-white p-6 shadow'>
            <h1 className='mb-4 text-2xl font-bold'>Dodaj ogłoszenie</h1>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <input
                    type='text'
                    placeholder='Tytuł'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='w-full rounded border p-2'
                    required
                />
                <input
                    type='text'
                    placeholder='Cena'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className='w-full rounded border p-2'
                    required
                />
                <input
                    type='text'
                    placeholder='Kategoria'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className='w-full rounded border p-2'
                    required
                />
                <input
                    type='text'
                    placeholder='Lokalizacja'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className='w-full rounded border p-2'
                    required
                />
                <button
                    type='submit'
                    disabled={loading}
                    className='rounded bg-yellow-400 px-4 py-2 font-semibold text-white hover:bg-yellow-500'
                >
                    {loading ? 'Dodawanie...' : 'Dodaj ogłoszenie'}
                </button>
            </form>
        </div>
    );
}
