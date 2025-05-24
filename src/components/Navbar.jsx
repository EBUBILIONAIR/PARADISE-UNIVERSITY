'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      name: "About Us",
      href: "/about-us",
      subItems: [
        { name: "About PD", href: "/about-pd" },
        { name: "PD at a Glance", href: "/pd-glance" },
        { name: "History", href: "/history" },
      ],
    },
    {
      name: "Academics",
      subItems: [
        { name: "Part Time Undergraduate Programs", href: "/part-time-programs" },
        { name: "Academic Calendar", href: "/academic-calendar" },
        { name: "Student Handbook", href: "/student-handbook" },
      ],
    },
    {
      name: "Publication",
      subItems: [
        { name: "Journals", href: "/journals" },
        { name: "Conferences & Lectures", href: "/conferences-lectures" },
      ],
    },
    {
      name: "Events",
      href: "/events",
    }
  ];

  return (
    <nav className={`w-full z-40 py-4 h-18 bg-blue-50 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>

      <div className="container mx-auto px-6">
        {/* Centered Navigation */}
        <div className="flex justify-center"> {/* Changed from justify-between to justify-center */}
          <div className="flex items-center space-x-8">
            {navItems.map((item) =>
              item.subItems ? (
                <div key={item.name} className="relative group">
                  <button className="flex items-center text-gray-800 hover:text-[#039994] transition font-medium focus:outline-none">
                    {item.name}
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 origin-top bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#039994] hover:text-white transition"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 hover:text-[#039994] font-medium transition"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}