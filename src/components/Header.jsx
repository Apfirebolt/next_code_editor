'use client'

import Link from "next/link";

const Header = () => {

  return (
    <header className="bg-primary">
      <div className="container mx-auto flex justify-between items-center p-4">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm font-semibold hover:bg-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm font-semibold hover:bg-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/editor" className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm font-semibold hover:bg-gray-300">
                Editor
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
