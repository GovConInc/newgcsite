export const metadata = {
  title: 'Services — GovCon Inc.',
  description: 'Registration management, capture management, proposal writing, and more to help you win government contracts.',
};

import FeatureCard from '@/components/FeatureCard';

export const metadata = {
  title: 'Services — GovCon Inc.',
  description: 'Registration management, capture management, proposal writing, and more to help you win government contracts.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Registration Management',
      desc: 'SAM, DSBS, and SBA certification assistance to maintain a clean compliance posture.',
    },
    {
      title: 'Capture Management',
      desc: 'Pursuit thesis and targeting to increase your Win Probability for each opportunity.',
    },
    {
      title: 'Proposal Writing',
      desc: 'Crafted proposals that match evaluation factors and clearly communicate your past performance.',
    },
    {
      title: 'Process Improvement',
      desc: 'Operational improvements to scale your contracting capability and continuity.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-extrabold text-gov-navy mb-6">Services</h1>
      <p className="text-gray-700 mb-8">We package services to take you from registration to continuity and prime-ready performance.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map((s) => (
          <FeatureCard key={s.title} title={s.title} desc={s.desc} />
        ))}
      </div>
    </div>
  );
}
