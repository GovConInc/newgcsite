export const metadata = {
  title: 'Book a Strategy Session — GovCon Inc.',
  description: 'Schedule a strategy session to build your pursuit thesis and start winning government business.',
};

export default function StrategyPage() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-4">
      <h1 className="text-3xl font-extrabold text-gov-navy mb-4">Book a Strategy Session</h1>
      <p className="text-gray-700 mb-6">We offer a focused 45-minute strategy session to review your capabilities, identify target agencies, and propose an action plan.</p>

      <div className="bg-white border p-6 rounded-lg">
        <p className="text-gray-700 mb-4">To schedule, replace the placeholder below with your calendar or remove the iframe and link to your scheduling tool (Calendly, Acuity, etc.).</p>
        <div className="w-full h-64 bg-gray-100 rounded-md flex items-center justify-center text-gray-500">Calendar Embed Placeholder</div>

        <div className="mt-6 flex gap-4">
          <a href="mailto:Info@GovCon.Info?subject=Strategy%20Session%20Request" className="cta">Request by Email</a>
          <a href="tel:8136650308" className="inline-flex items-center px-4 py-2 border rounded-md">Call</a>
        </div>
      </div>
    </div>
  );
}
