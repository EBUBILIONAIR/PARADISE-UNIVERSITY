'use client';
import Link from 'next/link';

export default function Footer() {
  const footerColumns = [
    {
      title: 'Helpful Link',
      items: [
        { name: 'Undergraduate Program', href: '/undergraduate' },
        { name: 'Scholarship', href: '/scholarship' },
      ]
    },
    {
      title: 'QUICK LINK',
      items: [
        { name: 'News', href: '/news' },
        { name: 'Events', href: '/events' },
      ]
    },
  ];

  const contactEmails = [
    'info@bigrelief.com',
    'customersupport@bigrelief.com',
    'career@bigrelief.com',
    'sponsorship@bigrelief.com'
  ];

  return (
    <footer className="bg-gray-900 bg-fixed text-white pt-16 pb-8">
      {/* Apply Section */}
      <div className="flex flex-col sm:flex-row gap-6 items-center mb-12">
        <h4 className="text-lg">Apply For 2025/2026 Academy session</h4>
        <button className="px-6 py-2 bg-[#039994] text-white rounded hover:bg-[#02736f] transition">
          Apply Now
        </button>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo Column (left-aligned) */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <img src="/images/BIG-RELIEF.png" alt="BigRelief Logo" className="h-12" />
            </Link>
          </div>

          {/* Contact Column (left-aligned) */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#039994]">Contact</h3>
            <div className="space-y-1 text-gray-400">
              <p>+2347089132193</p>
              {contactEmails.map(email => (
                <p key={email}>
                  <a href={`mailto:${email}`} className="hover:text-white transition">
                    {email}
                  </a>
                </p>
              ))}
            </div>
          </div>

          {/* Centered Link Columns */}
          <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-24 lg:col-span-2">
            {footerColumns.map(col => (
              <div key={col.title} className="text-left">
                <h3 className="text-lg font-semibold mb-4 text-[#039994]">{col.title}</h3>
                <ul className="space-y-2 text-gray-400">
                  {col.items.map(item => (
                    <li key={item.name}>
                      <Link href={item.href} className="hover:text-white transition">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom links */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            PARADISE UNIVERSITY. | {new Date().getFullYear()} All RIGHT RESERVED.
          </p>
          <div className="flex space-x-6 text-gray-500">
            <Link href="/privacy" className="hover:text-white text-sm transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white text-sm transition">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-white text-sm transition">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}