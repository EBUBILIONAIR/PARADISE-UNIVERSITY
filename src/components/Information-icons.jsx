'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function InfoCards() {
  const Informations = [
    {
      id: 1,
      name: 'Our Programs',
      icon: '/Icons/book.png',
    },
    {
      id: 2,
      name: 'How To Apply',
      icon: '/Icons/tick.png',
    },
    {
      id: 3,
      name: 'Tuition & Fees',
      icon: '/Icons/wallet.png',
    },
    {
      id: 4,
      name: 'Scholarship/Aid',
      icon: '/Icons/graduate-cap.png',
    },
  ];

  return (
    <div className="w-full bg-[#605396] py-4">
      <div className="flex flex-wrap gap-20 justify-center">
        {Informations.map((info) => (
          <Link href="/" key={info.id}>
            <div className="w-32 p-3 flex flex-col items-center rounded cursor-pointer transition">
              <Image src={info.icon} alt={info.name} width={48} height={48} />
              <p className="mt-2 text-base text-white text-center font-medium whitespace-nowrap">
                {info.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
