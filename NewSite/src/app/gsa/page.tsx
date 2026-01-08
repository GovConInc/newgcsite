export const metadata = {
  title: 'GSA Contract Vehicles — GovCon Inc.',
  description: 'Overview and support for GSA Multiple Award Schedules and other contract vehicles.',
};

export default function GsaPage() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-3xl font-extrabold text-gov-navy mb-4">GSA Contract Vehicles</h1>
      <p className="text-gray-700 mb-4 leading-relaxed">
        GSA schedules and other IDIQ vehicles are powerful pathways to federal work. We assist with MAS submissions, Oasis+, and baseline uploads.
      </p>

      <h2 className="text-xl font-bold text-gov-navy mt-6">Services</h2>
      <ul className="list-disc ml-6 mt-3 text-gray-700">
        <li>GSA MAS Submission</li>
        <li>Oasis+ & Other Vehicles</li>
        <li>FCP Baseline Upload</li>
        <li>Contract Management and modifications</li>
      </ul>
    </div>
  );
}
