import Link from 'next/link';
import { Search } from 'lucide-react';

export default function Home() {
  const methodologies = [
    {
      title: 'Concept',
      desc: 'Defining your capabilities and aligning them with federal demand.',
    },
    {
      title: 'Compliance',
      desc: 'Ensuring your business meets all FAR requirements and set-asides.',
    },
    {
      title: 'Consulting',
      desc: 'Strategic guidance to navigate the complex federal marketplace.',
    },
    {
      title: 'Continuity',
      desc: 'Building sustainable revenue streams for long-term growth.',
    },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-white pt-24 pb-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gov-navy leading-tight">
            Win Government Contracts.<br />
            <span className="text-gov-crimson">Systematically.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light">
            We take you from Concept to Continuity. The 4 C's of Government Contracting.
          </p>

          {/* Search Input (Visual Only) */}
          <div className="mt-10 max-w-lg mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400 group-focus-within:text-gov-crimson transition-colors" />
            </div>
            <Link href="/resources/find-bids" className="block">
              <input
                type="text"
                className="block w-full pl-11 pr-4 py-4 bg-white border border-gov-silver rounded-full text-gov-navy placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-gov-crimson focus:border-transparent transition-all cursor-pointer"
                placeholder="Search active federal contracts..."
                readOnly
              />
            </Link>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-gov-crimson text-white rounded-md font-medium">Book a Strategy Session</Link>
            <Link href="/services" className="inline-flex items-center px-6 py-3 border border-gov-silver rounded-md">View Services</Link>
          </div>
        </div>
      </section>

      {/* Methodology Preview Section */}
      <section className="w-full bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gov-navy mb-8">The 4 C's Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologies.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg border border-gov-silver shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                <div className="h-2 w-12 bg-gov-crimson mb-6 rounded-full"></div>
                <h3 className="text-xl font-bold text-gov-navy mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Snapshot / Contact CTA */}
      <section className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-gov-navy mb-3">Snapshot</h3>
            <p className="text-gray-700 leading-relaxed mb-4">GovCon LLC is a Tampa, FL based consulting firm helping companies navigate federal, state, and local contracting. We manage paperwork, capture bids, write proposals, and act as strategic partners to build pursuit pipelines and win work.</p>
            <p className="text-gray-700">Phone: <a className="text-gov-crimson" href="tel:8136650308">(813) 665-0308</a> · Email: <a className="text-gov-crimson" href="mailto:Info@GovCon.Info">Info@GovCon.Info</a></p>
          </div>

          <div className="bg-gov-navy text-white rounded-lg p-8">
            <h4 className="text-xl font-bold mb-3">Ready to Win?</h4>
            <p className="text-gray-200 leading-relaxed mb-6">Book a strategy session to build your pursuit thesis and start winning government business.</p>
            <Link href="/contact" className="inline-flex px-4 py-2 bg-gov-crimson rounded-md">Book Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
}