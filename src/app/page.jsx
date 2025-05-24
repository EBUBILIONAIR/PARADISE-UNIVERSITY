'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InfoCards from '@/components/Information-icons';
import AboutSection from '@/components/About-section';
import WhyChooseSection from '@/components/WhyChooseSection';
import NewsSection from '@/components/NewsSection';
import AcademicsSection from '@/components/AcademicsSection';

// Email icon component
const EmailIcon = () => (
  <Image src="/icons/email.svg" alt="Email icon" width={24} height={24} />
);

// Custom link component
const LinkItem = ({ href, children, className }) => (
  <Link
    href={href}
    className={`font-medium text-white transition duration-300 hover:text-yellow-400 ${className || ''}`}
  >
    {children}
  </Link>
);

export default function HomePage() {
  const router = useRouter();
  const [currentDay, setCurrentDay] = useState('');
  const [dailyTheme, setDailyTheme] = useState('');
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const backgroundImages = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
  ];

  useEffect(() => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date();
    const dayName = days[date.getDay()];
    setCurrentDay(dayName);

    const themes = {
      Monday: 'Freshly Pricked',
      Tuesday: 'Testimonials Tuesday',
      Wednesday: 'Shakers Day',
      Thursday: 'Do You Remember the Time',
      Friday: 'TGIF',
      Saturday: 'Handout Day',
      Sunday: 'Worship',
    };

    setDailyTheme(themes[dayName] || '');
    initAnimations();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const initAnimations = () => {
    gsap.from('.hero-title', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
    gsap.from('.hero-subtitle', {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out',
    });
    gsap.from('.hero-button', {
      y: 20,
      opacity: 0,
      duration: 1,
      delay: 0.6,
      ease: 'power3.out',
    });
  };

  useEffect(() => {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
      const rawTarget = counter.getAttribute('data-target') || '0';
      const hasPlus = rawTarget.includes('+');
      const target = parseInt(rawTarget.replace(/[^0-9]/g, ''), 10);

      if (!isNaN(target)) {
        const count = { value: 0 };
        gsap.to(count, {
          value: target,
          duration: 2,
          scrollTrigger: {
            trigger: counter,
            start: 'top 90%',
          },
          onUpdate: () => {
            counter.textContent = Math.floor(count.value).toLocaleString();
          },
          onComplete: () => {
            if (hasPlus) {
              counter.textContent = `${Math.floor(count.value).toLocaleString()}+`;
            }
          }
        });
      }
    });
  }, []);

  return (
    <div>
      {/* Header */}
      <section className="w-full h-24" style={{ backgroundColor: '#150363' }}>
        <div className="flex items-center justify-between px-6 h-full max-w-7xl mx-auto">
          <Link href="/" className="flex items-center">
            <Image src="/images/BIG-RELIEF.png" alt="University Logo" width={80} height={48} />
          </Link>

          <div className="flex items-center gap-2 text-white">
            <EmailIcon />
            <span className="font-medium">admissions@Paradiseuniversity.edu.ng</span>
          </div>

          <div className="hidden sm:flex flex-wrap gap-4 sm:gap-6">
            <LinkItem href="#">Apply</LinkItem>
            <LinkItem href="#">Student</LinkItem>
            <LinkItem href="#">Staff</LinkItem>
            <LinkItem href="#">Alumni</LinkItem>
            <LinkItem href="#">Library</LinkItem>
          </div>
        </div>
      </section>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            {backgroundImages.map((image, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                  currentBgIndex === index ? 'opacity-100 z-20' : 'opacity-0 z-10'
                }`}
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
            <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent to-[#103e84] opacity-80 z-30" />
          </div>

          <div className="relative z-40 flex justify-start w-full px-6">
            <div className="text-left text-white w-full max-w-3xl p-6 md:p-10 shadow-lg ml-11" style={{ backgroundColor: '#21135D85' }}>
              <h1 className="hero-title text-4xl md:text-6xl p-5 font-semibold">
                <span>Creating a legacy</span><br />
                <span className="block mt-4">for generations</span>
              </h1>
              <p
                className="hero-subtitle mt-4 pb-5 ml-7 font-light"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '20px',
                  fontWeight: 300,
                  letterSpacing: '3px',
                  color: '#FFFFFF',
                }}
              >
                AT PARADISE <br /> UNIVERSITY
              </p>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-24 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url("/images/info-background.png")` }}>
          <div className="flex flex-col items-center justify-center text-center mb-28 text-white">
            <h1 className="font-semibold text-4xl mb-6">Take your next step</h1>
            <p className="mb-12">
              With a diverse academic plan that attracts students from across the world, Adeleke University <br />
              aims to share with all those who are interested in an excellent college education that they deserve.
            </p>
            <InfoCards />
          </div>
        </section>

        <AboutSection />
        <WhyChooseSection />
        <NewsSection />
        <AcademicsSection />

        {/* Stats Section */}
        <section className="py-8 bg-white my-1 border-b shadow-md h-[236px]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { target: '10000+', label: 'Students' },
                { target: '8', label: 'Faculties' },
                { target: '35', label: 'Undergraduate programs' },
                { target: '56', label: 'Postgraduate Programs' }
              ].map(({ target, label }, idx) => (
                <div key={idx} className="bg-white p-8 text-center transform hover:scale-105 transition duration-300">
                <div className="text-7xl font-bold text-[#031799] mb-2 counter" data-target={target}>0</div>

                  <p className="text-lg text-black font-semibold">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Embed */}
<div className="relative w-full h-[548px] overflow-hidden">
    <iframe
    className="absolute top-0 left-0 w-full h-full"
    src="https://www.youtube.com/embed/32iEKCwjkOc"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

      </main>

      <Footer />
    </div>
  );
}
