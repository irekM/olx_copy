import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';

export const metadata: Metadata = {
    title: 'OLX Copy',
    description: 'My OLX-like app built with Next.js and Tailwind',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='pl'>
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
