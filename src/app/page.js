import Image from 'next/image'
import Navbar from '@/components/navbar/Navbar';
import HomePage from '@/components/home/Home';
import Footer from '@/components/footer/Footer';
export default function Home() {
  return (
    <>
    <Navbar />
    <HomePage />
    <Footer />
    </>
  )
}
