// app/addform/components/ProductList.tsx
'use client';
import type { Offer } from '../data/offersElectronic';

type Props = {
    offers: Offer[];
};

export default function ProductList({ offers }: Props) {
    return (
        <section className='mx-auto max-w-7xl px-4 py-8'>
            <h2 className='mb-6 text-2xl font-semibold'>Ogłoszenia</h2>
            <div className='flex flex-col gap-4'>
                {offers.length === 0 && (
                    <p className='text-sm text-gray-600'>Brak wyników.</p>
                )}
                {offers.map((offer) => (
                    <article
                        key={offer.id}
                        className='w-full rounded-xl border bg-white p-4 shadow-sm'
                    >
                        <div className='mb-4 h-40 w-full rounded bg-gray-200' />
                        <h3 className='text-lg font-medium'>{offer.title}</h3>
                        <p className='mt-1 text-sm text-gray-600'>
                            {offer.brand} • {offer.category}
                        </p>
                        <p className='mt-1 text-sm text-gray-600 capitalize'>
                            Stan: {offer.state === 'new' ? 'Nowy' : 'Używany'}
                        </p>
                        <p className='mt-1 text-sm text-gray-600'>
                            Lokalizacja: {offer.location}
                        </p>
                        <p className='mt-1 text-sm text-gray-500'>
                            Data:{' '}
                            {new Date(offer.published).toLocaleDateString(
                                'pl-PL'
                            )}
                        </p>
                        <p className='text-md mt-2 font-semibold'>
                            {offer.price.toLocaleString('pl-PL')} zł
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}
