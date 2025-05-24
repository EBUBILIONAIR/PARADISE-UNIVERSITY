'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section
      className="w-full h-screen bg-fixed bg-cover bg-center flex items-center justify-center px-6 md:px-16"
      style={{ backgroundImage: "url('/images/about-us.jpg')" }}
    >
      <div className="bg-white/90 p-8 md:p-12 rounded-xl shadow-lg flex flex-col md:flex-row max-w-6xl w-full gap-8">
        {/* Left content */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#21135D]">Who We Are</h2>
          <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
            Welcome to Adeleke University, Ede, where we offer one of the most affordable but best quality education in Nigeria,
            with unique features like, scholarship opportunities, flexibility in payment of fees, acquisition of entrepreneurial
            skills, high quality teaching, research and innovative learning. <br /><br />
            AU’s vision makes it a breed apart and this it has vigorously pursued through infrastructural developments,
            teaching, research, community development and international collaborations.
          </p>
         <Link
  href="#"
  className="inline-flex items-center text-[#21135D] hover:underline font-semibold"
>
  Learn More
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="ml-2 w-4 h-4 text-[#21135D]"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M6.293 12.707a1 1 0 0 1 0-1.414L9.586 8 6.293 4.707a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0z" />
  </svg>
</Link>

        </div>

        {/* Right image */}
        <div className="flex-1">
          <Image
            src="/images/mls_1.jpg"
            alt="Adeleke University"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
