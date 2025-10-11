// app/utils/seedOffers.ts
import { writeBatch, collection, doc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { offersElectronics } from '../data/offersElectronic';

export async function seedOffers() {
    const batch = writeBatch(db);
    const offersRef = collection(db, 'offers');

    offersElectronics.forEach((offer) => {
        const newDoc = doc(offersRef);
        batch.set(newDoc, {
            ...offer,
            published: offer.published ? offer.published : new Date(),
        });
    });

    await batch.commit();
    console.log('All offers have been added to Firestore.');
}
