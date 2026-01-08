export default function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gov-silver shadow-sm hover:shadow-md transition-shadow">
      <div className="h-2 w-10 bg-gov-crimson mb-4 rounded-full"></div>
      <h4 className="text-lg font-semibold text-gov-navy">{title}</h4>
      <p className="text-gray-600 mt-2">{desc}</p>
    </div>
  );
}
