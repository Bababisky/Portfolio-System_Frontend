/**
 * Footer Component
 * 
 * Site footer with company info
 * Usage: Root layout
 */

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-neutral-800 text-white py-16">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">YIP IN TSOI & CO., LTD.</h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              No.523 Mahaprutharam Rd., Mahaprutharam Sub-District, Bang Rak District,<br />
              Bangkok Metropolis 10500
            </p>
            <div className="space-y-2 text-sm">
              <p>
                TEL : <a href="tel:+6622358000" className="text-blue-400 hover:text-blue-300">(662) 235 8000</a>
              </p>
              <p>
                FAX : <a href="tel:+6622365943" className="text-blue-400 hover:text-blue-300">(662) 236 5943</a>, <a href="tel:+6622362880" className="text-blue-400 hover:text-blue-300">(662) 236 2880</a>
              </p>
              <p>
                EMAIL : <a href="mailto:yit@yipintsoi.com" className="text-blue-400 hover:text-blue-300">yit@yipintsoi.com</a>
              </p>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Menu</h3>
            <ul className="space-y-3 text-neutral-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors">
                  Solution & Product
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About us
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Follow</h3>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-700 rounded-full flex items-center justify-center hover:bg-neutral-600 transition-colors"
                aria-label="Facebook"
              >
                <span className="text-xl">f</span>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-700 rounded-full flex items-center justify-center hover:bg-neutral-600 transition-colors"
                aria-label="Twitter"
              >
                <span className="text-xl">𝕏</span>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-700 rounded-full flex items-center justify-center hover:bg-neutral-600 transition-colors"
                aria-label="LinkedIn"
              >
                <span className="text-xl">in</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
