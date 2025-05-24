'use client';
import Image from 'next/image';
import Link from 'next/link';

const News = [
  {
    id: 1,
    name: 'FBMS Health Submit 2025: Healthy Lifestyles & Cardiovascular Health',
    image: '/images/news-1.jpg',
  },
  {
    id: 2,
    name: 'Unlocking the potentials of generative artificial intelligence.',
    image: '/images/news-2.jpg',
  },
];

export default function LatestNewsSection() {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center py-24"
      style={{ backgroundImage: `url('/images/news.jpg')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#c9c5d9] opacity-30 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-12 text-left">
          Latest News
        </h2>

      {/* Cards Row */}
<div className="flex flex-wrap justify-center items-start gap-4">
  {/* Academics Container */}
  <div
    className="relative bg-cover bg-center w-[360px] h-[320px] shadow-lg text-white"
    style={{ backgroundImage: `url('/images/news-3.jpg')` }}
  >
    <p className="absolute bottom-6 left-4 px-4 py-2 text-base font-semibold z-10">
      ACADEMICS
    </p>

    {/* Gradient only at the bottom */}
    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#103e84] to-transparent opacity-90 rounded-b-lg" />
  </div>

  {News.map((item) => (
    <div
      key={item.id}
      className="bg-white overflow-hidden shadow-lg w-[360px] h-[320px] flex flex-col"
    >
      <Image
        src={item.image}
        alt={item.name}
        width={360}
        height={180}
        className="w-full h-[180px] object-cover"
      />
      <div className="p-4 flex-1 flex items-center">
        <h3 className="text-base font-semibold text-gray-800">{item.name}</h3>
      </div>
    </div>
  ))}
</div>


        {/* Button */}
        <div className="mt-16 text-center">
          <Link href="/news">
            <button className="bg-[#6514e7] hover:bg-[#4c0ec2] text-white font-semibold px-8 py-3 rounded-sm transition">
              MORE NEWS
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
