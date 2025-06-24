
import { offers } from '../data/productData';

export default function ProductList() {
    return (
        <section className='mx-auto max-w-7xl px-4 py-8'>
            <h2 className='mb-6 text-2xl font-semibold'>Ogłoszenia</h2>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
                {offers.map((offer, index) => (
                    <div
                        key={index}
                        className='rounded-xl border bg-white p-4 shadow-sm'
                    >
                        <div className='mb-4 h-40 w-full rounded bg-gray-200' />
                        <h3 className='text-lg font-medium'>{offer.title}</h3>
                        <p className='mt-1 text-sm text-gray-600'>
                            {offer.category}
                        </p>
                        <p className='mt-1 text-sm text-gray-600 capitalize'>
                            Stan: {offer.state === 'new' ? 'Nowy' : 'Używany'}
                        </p>
                        <p className='mt-1 text-sm text-gray-600'>
                            Lokalizacja: {offer.location}
                        </p>
                        <p className='mt-1 text-sm text-gray-500'>
                            Data publikacji:{' '}
                            {new Date(offer.published).toLocaleDateString(
                                'pl-PL'
                            )}
                        </p>
                        <p className='text-md mt-2 font-semibold'>
                            {offer.price}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
