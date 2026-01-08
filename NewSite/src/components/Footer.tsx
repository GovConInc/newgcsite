export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gov-silver mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center gap-2">
        <div>© {new Date().getFullYear()} GovCon LLC — Tampa, FL</div>
        <div className="flex items-center gap-4">
          <a href="tel:8136650308" className="hover:text-gov-crimson">(813) 665-0308</a>
          <a href="mailto:Info@GovCon.Info" className="hover:text-gov-crimson">Info@GovCon.Info</a>
        </div>
      </div>
    </footer>
  );
}
