import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Logo from "../../img/Logo.png";
export default function Navbar() {
  return (
    <>
     <nav className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Image className="h-12 w-12" src={Logo} alt="Logo" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/">
                <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">Home</p>
              </Link>
              <Link href="/">
                <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">About Us</p>
              </Link>
              <Link href="/">
                <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">Courses</p>
              </Link>
              <Link href="/">
                <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">Gallery</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}
