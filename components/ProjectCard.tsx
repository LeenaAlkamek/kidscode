interface ProjectCardProps {
  title: string;
  subtitle: string;
  progress: number;
}

export default function ProjectCard({ title, subtitle, progress }: ProjectCardProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
      <h4 className="font-semibold text-gray-700">{title}</h4>
      <p className="text-sm text-gray-500">{subtitle}</p>
      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
        <div
          className="bg-blue-500 h-2 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-right text-sm text-gray-500 mt-1">{progress}%</p>
    </div>
  );
}
