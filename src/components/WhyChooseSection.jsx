'use client';
import Image from 'next/image';

const Reason = [
  {
    id: 1,
    name: 'Serene Environment',
    description:
      'The University provides a more intimate environment for learning and teaching, while it helps the University reach its goals of promoting a safe and secure environment',
  },
  {
    id: 2,
    name: 'Fully stocked Library',
    description:
      'Our fully stocked library offers all types of books, periodicals and research materials to students, faculty and staff members.',
  },
  {
    id: 3,
    name: 'Facilities',
    description:
      'The University provides a well-equipped modern teaching facility. Students can access various recreation facilities, computer labs and more.',
  },
];

export default function WhyChooseSection() {
  return (
    <section
      className="relative bg-cover bg-fixed bg-center py-24"
      style={{ backgroundImage: `url('/images/student.jpeg')` }}
    >
      {/* Transparent overlay */}
      <div className="absolute inset-0 bg-[#164664] opacity-30 z-0" />

      {/* Main Content */}
      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-12">
            Why Choose Paradise University?
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {Reason.map((item) => (
              <div
                key={item.id}
                className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg text-left"
              >
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                  {item.name}
                </h3>
                <p className="text-black text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
