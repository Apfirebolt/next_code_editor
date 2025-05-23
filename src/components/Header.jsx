'use client'

import Link from "next/link";
import { HomeIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

const Header = () => {

  return (
    <header className="bg-primary">
      <div className="container mx-auto flex justify-between items-center p-4">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 font-semibold hover:bg-gray-300 flex items-center space-x-2">
                <HomeIcon className="h-5 w-5" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/editor" className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 font-semibold hover:bg-gray-300 flex items-center space-x-2">
                <PencilSquareIcon className="h-5 w-5" />
                <span>Editor</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <h2 className="text-2xl font-bold text-white">
            NEXT CODE EDITOR
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
