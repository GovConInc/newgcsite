import ResourceCard from '@/components/ResourceCard';

export const metadata = {
  title: 'Resources — GovCon Inc.',
  description: 'Helpful resources: SAM registration, DSBS, GSA contract vehicles, and how to find bid opportunities.',
};

export default function ResourcesPage() {
  const resources = [
    { title: 'SAM Registration & DSBS', href: '/resources/sam-dsbs' },
    { title: 'GSA Contract Vehicles', href: '/gsa' },
    { title: 'Find Bid Opportunities', href: '/resources/find-bids' },
    { title: 'Writing Proposals', href: '/resources/writing-proposals' },
  ];

  return (
    <div className="max-w-5xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-extrabold text-gov-navy mb-6">Resources</h1>
      <p className="text-gray-700 mb-8">Practical guides and step-by-step resources to help you register, find, and win government work.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {resources.map((r) => (
          <ResourceCard key={r.title} title={r.title} href={r.href} desc="Learn how to complete the steps needed to be visible and competitive in public sector procurement." />
        ))}
      </div>
    </div>
  );
}
