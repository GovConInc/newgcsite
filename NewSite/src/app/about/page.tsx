export const metadata = {
  title: 'About Us — GovCon Inc.',
  description: 'Learn GovCon\'s story — we help companies win government contracts through strategy, compliance, and continuity.',
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-extrabold text-gov-navy mb-6">Our Story</h1>
      <p className="text-gray-700 mb-6 leading-relaxed">
        In 2012, the switch from Central Contractor Registration (CCR) to SAM.gov created a boom for the industry. New processes and technology became a never-ending annoyance for government contractors.
      </p>

      <p className="text-gray-700 mb-6 leading-relaxed">
        After completing over 7,000 registrations, GovCon Inc. noticed the same problem across organizations of all sizes. Some firms assist with paperwork, but few consult businesses on how to capture opportunities strategically. That gap is what led to GovCon.
      </p>

      <h2 className="text-2xl font-bold text-gov-navy mt-8 mb-4">Founder</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Sean Conway, our founder, has worked with many contractors and has led proposals that resulted in large wins — including guidance on a $640M award. He helps clients write proposals that win and avoid common mistakes.
      </p>

      <h2 className="text-2xl font-bold text-gov-navy mt-8 mb-4">Our Values</h2>
      <p className="text-gray-700 leading-relaxed">
        We follow a PDCA (Plan-Do-Check-Act) mentality and our proprietary 4 C's framework: Concept, Compliance, Consulting, and Continuity — all designed to take a company from registration to sustainable prime performance.
      </p>
    </div>
  );
}
