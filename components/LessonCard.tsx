interface LessonCardProps {
  title: string;
  time: string;
  status: "قادم" | "ملغي";
}

export default function LessonCard({ title, time, status }: LessonCardProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center hover:shadow-md transition">
      <div>
        <h4 className="font-semibold text-gray-700">{title}</h4>
        <p className="text-sm text-gray-500">{time}</p>
      </div>
      <span
        className={`px-3 py-1 text-xs font-semibold rounded-full ${
          status === "قادم" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
        }`}
      >
        {status}
      </span>
    </div>
  );
}
