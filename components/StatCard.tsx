interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  color: string;
  icon?: React.ReactNode;
}

export default function StatCard({ title, value, subtitle, color, icon }: StatCardProps) {
  return (
    <div className="flex-1 bg-white p-4 rounded-xl shadow hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm text-gray-500">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
          <span className="text-xs text-gray-400">{subtitle}</span>
        </div>
        <div className={`w-10 h-10 flex items-center justify-center rounded-lg ${color}`}>
          {icon}
        </div>
      </div>
    </div>
  );
}
