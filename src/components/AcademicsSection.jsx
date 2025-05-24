'use client';
import Image from 'next/image';
import Link from 'next/link';

const academicsData = [
  {
    id: 1,
    name: 'FBMS Health Submit 2025: Healthy Lifestyles & Cardiovascular Health',
    image: '/images/academics-1.jpg',
    linkText: 'Browse undergraduate programs',
    linkHref: '/academics/undergraduate',
  },
  {
    id: 2,
    name: 'Our graduates meet their goals and achieve extraordinary results in their careers.',
    image: '/images/academics-2.jpg',
    linkText: 'Browse Postgraduate programs',
    linkHref: '/academics/postgraduate',
  },
  {
    id: 3,
    name: 'Enrol for foundation or JUPEB Programmes.',
    image: '/images/academics-3.jpg',
    linkText: 'Discover more',
    linkHref: '/academics',
  },
];

export default function AcademicsSection() {
  return (
    <section className="bg-gray-100 py-20">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Academics at Adeleke University
      </h1>

      {/* Card Grid */}
      <div className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-3 justify-center">
        {academicsData.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md overflow-hidden flex flex-col w-full max-w-sm h-[380px]"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={400}
              height={200}
              className="w-full h-[200px] object-cover"
            />
            <div className="p-6 flex flex-col justify-between flex-1">
              <h3 className="text-base font-semibold text-gray-800">{item.name}</h3>
              <Link href={item.linkHref}>
                <p className="text-[#6514e7] text-sm font-medium hover:underline mt-auto">
                  {item.linkText}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
