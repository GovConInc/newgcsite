export const metadata = {
  title: 'SAM Registration & DSBS — GovCon Inc.',
  description: 'Guidance for setting up SAM.gov and DSBS profiles, and best practices for staying compliant.',
};

export default function SamDsbsPage() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-3xl font-extrabold text-gov-navy mb-4">SAM Registration & DSBS</h1>
      <p className="text-gray-700 leading-relaxed mb-4">
        SAM registrations are a critical baseline for doing business with the Federal government. We help clients navigate registrations, maintain profiles, and optimize their DSBS presence.
      </p>

      <h2 className="text-xl font-bold text-gov-navy mt-6">Common Steps</h2>
      <ul className="list-disc ml-6 mt-3 text-gray-700">
        <li>Prepare company documents and NAICS/PSC codes</li>
        <li>Register in SAM and claim your entity</li>
        <li>Complete DSBS profile for discoverability</li>
        <li>Maintain registration and verify SAM renewals</li>
      </ul>
    </div>
  );
}
