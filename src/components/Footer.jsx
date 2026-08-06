import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-slate-800 text-slate-300 transition-colors">
      <div className="container mx-auto px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & Description */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-7 w-7 rounded-lg bg-success flex items-center justify-center font-mono font-bold text-white text-sm">
                &lt;/&gt;
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Next Code
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              A modern, browser-based code editor built for seamless development, testing, and collaboration.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Product
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/editor" className="hover:text-success transition-colors">
                  Web Editor
                </Link>
              </li>
              <li>
                <Link href="/templates" className="hover:text-success transition-colors">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-success transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="hover:text-success transition-colors">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/docs" className="hover:text-success transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/api" className="hover:text-success transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-success transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/status" className="hover:text-success transition-colors">
                  System Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect / Newsletter */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Stay Updated
            </h3>
            <p className="text-sm text-slate-400">
              Get the latest features and announcements delivered to your inbox.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-sm bg-slate-900 border border-slate-700 rounded-md focus:outline-none focus:border-success text-white placeholder-slate-500"
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-success hover:bg-emerald-600 rounded-md transition-colors"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Next Code Editor. All rights reserved.</p>
          
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-slate-300 transition-colors">
              Cookie Preferences
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;