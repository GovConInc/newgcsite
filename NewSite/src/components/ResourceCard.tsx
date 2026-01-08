export default function ResourceCard({ title, desc, href }: { title: string; desc?: string; href?: string }) {
  return (
    <a href={href ?? '#'} className="block p-6 border rounded-lg hover:shadow-md transition-shadow bg-white">
      <h3 className="text-lg font-semibold text-gov-navy">{title}</h3>
      {desc && <p className="text-gray-600 mt-2">{desc}</p>}
    </a>
  );
}
