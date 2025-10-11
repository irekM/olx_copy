// app/addform/components/FilterPanel.tsx
'use client';
import React from 'react';
import type { Offer } from '../data/offersElectronic';

export type Filters = {
    minPrice?: number | null;
    maxPrice?: number | null;
    state?: 'all' | 'new' | 'used';
    location?: string;
    brand?: string;
    keyword?: string;

    //how long - time ago was published
    daysAgo?: number | 'all';
};

type Props = {
    allOffers: Offer[];
    filters: Filters;
    setFilters: (f: Filters) => void;
};

export default function FilterPanel({ allOffers, filters, setFilters }: Props) {
    // Extract unique brands and locations for filter dropdowns
    const brands = Array.from(new Set(allOffers.map((o) => o.brand))).sort();
    const locations = Array.from(
        new Set(allOffers.map((o) => o.location))
    ).sort();

    return (
        <aside className='mb-6 rounded border bg-white p-4 shadow-sm'>
            <h3 className='mb-2 font-semibold'>Filtry (Elektronika)</h3>

            <div className='grid gap-3 sm:grid-cols-2'>
                <div>
                    <label className='block text-xs text-gray-600'>
                        Szukaj (tytuł)
                    </label>
                    <input
                        value={filters.keyword ?? ''}
                        onChange={(e) =>
                            setFilters({
                                ...filters,
                                keyword: e.target.value || undefined,
                            })
                        }
                        className='mt-1 w-full rounded border p-2 text-sm'
                        placeholder='np. iPhone, Samsung...'
                    />
                </div>

                <div>
                    <label className='block text-xs text-gray-600'>Stan</label>
                    <select
                        value={filters.state ?? 'all'}
                        onChange={(e) =>
                            setFilters({
                                ...filters,
                                state:
                                    (e.target.value as Filters['state']) ||
                                    'all',
                            })
                        }
                        className='mt-1 w-full rounded border p-2 text-sm'
                    >
                        <option value='all'>Wszystkie</option>
                        <option value='new'>Nowe</option>
                        <option value='used'>Używane</option>
                    </select>
                </div>

                <div>
                    <label className='block text-xs text-gray-600'>Marka</label>
                    <select
                        value={filters.brand ?? 'all'}
                        onChange={(e) =>
                            setFilters({
                                ...filters,
                                brand:
                                    e.target.value === 'all'
                                        ? undefined
                                        : e.target.value,
                            })
                        }
                        className='mt-1 w-full rounded border p-2 text-sm'
                    >
                        <option value='all'>Wszystkie</option>
                        {brands.map((b) => (
                            <option key={b} value={b}>
                                {b}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className='block text-xs text-gray-600'>
                        Lokalizacja
                    </label>
                    <select
                        value={filters.location ?? 'all'}
                        onChange={(e) =>
                            setFilters({
                                ...filters,
                                location:
                                    e.target.value === 'all'
                                        ? undefined
                                        : e.target.value,
                            })
                        }
                        className='mt-1 w-full rounded border p-2 text-sm'
                    >
                        <option value='all'>Wszystkie</option>
                        {locations.map((l) => (
                            <option key={l} value={l}>
                                {l}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className='block text-xs text-gray-600'>
                        Opublikowane
                    </label>
                    <select
                        value={filters.daysAgo ?? 'all'}
                        onChange={(e) =>
                            setFilters({
                                ...filters,
                                daysAgo:
                                    e.target.value === 'all'
                                        ? 'all'
                                        : Number(e.target.value),
                            })
                        }
                        className='mt-1 w-full rounded border p-2 text-sm'
                    >
                        <option value='all'>Wszystkie</option>
                        <option value={7}>Ostatnie 7 dni</option>
                        <option value={30}>Ostatnie 30 dni</option>
                        <option value={365}>Ostatni rok</option>
                    </select>
                </div>

                <div className='sm:col-span-2'>
                    <label className='block text-xs text-gray-600'>
                        Cena (min / max)
                    </label>
                    <div className='mt-1 flex gap-2'>
                        <input
                            type='number'
                            placeholder='min'
                            value={filters.minPrice ?? ''}
                            onChange={(e) =>
                                setFilters({
                                    ...filters,
                                    minPrice: e.target.value
                                        ? Number(e.target.value)
                                        : undefined,
                                })
                            }
                            className='w-1/2 rounded border p-2 text-sm'
                        />
                        <input
                            type='number'
                            placeholder='max'
                            value={filters.maxPrice ?? ''}
                            onChange={(e) =>
                                setFilters({
                                    ...filters,
                                    maxPrice: e.target.value
                                        ? Number(e.target.value)
                                        : undefined,
                                })
                            }
                            className='w-1/2 rounded border p-2 text-sm'
                        />
                    </div>
                </div>
            </div>
            <div className='mt-3 flex gap-2'>
                <button
                    type='button'
                    onClick={() =>
                        setFilters({
                            minPrice: undefined,
                            maxPrice: undefined,
                            state: 'all',
                            location: undefined,
                            brand: undefined,
                            keyword: undefined,
                            daysAgo: 'all',
                        })
                    }
                    className='rounded border px-3 py-1 text-sm'
                >
                    Wyczyść
                </button>
            </div>
        </aside>
    );
}
