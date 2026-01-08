export const metadata = {
  title: 'Contact — GovCon Inc.',
  description: 'Get in touch with GovCon for a strategy session or to learn how we can help you win government business.',
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-4">
      <h1 className="text-3xl font-extrabold text-gov-navy mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-6">Call us at <a className="text-gov-crimson" href="tel:8136650308">(813) 665-0308</a> or email <a className="text-gov-crimson" href="mailto:Info@GovCon.Info">Info@GovCon.Info</a>.</p>

      <div className="bg-white border p-6 rounded-lg">
        <form action="#" className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input className="mt-1 block w-full border rounded-md px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input className="mt-1 block w-full border rounded-md px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea className="mt-1 block w-full border rounded-md px-3 py-2" rows={4} />
          </div>

          <div className="flex justify-end">
            <button className="inline-flex items-center px-4 py-2 cta">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}
