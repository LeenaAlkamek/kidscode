import StatCard from "@/components/StatCard";
import ProjectCard from "@/components/ProjectCard";
import LessonCard from "@/components/LessonCard";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-12" dir="rtl">
      {/* Header */}
      <header className="flex justify-between items-center mb-12 bg-white p-4 rounded-xl shadow">
        <h1 className="text-2xl font-bold text-purple-700">Kidscode</h1>
        <div className="flex items-center gap-3">
          <span className="text-gray-600">مرحباً، أحمد </span>
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
            A
          </div>
        </div>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
        <StatCard title="المشاريع المكتملة" value="12" subtitle="+2 هذا الأسبوع" color="bg-purple-100" />
        <StatCard title="الدروس المحفوظة" value="48" subtitle="+5" color="bg-green-100" />
        <StatCard title="نقاط الإنجاز" value="2,450" subtitle="+150" color="bg-yellow-100" />
        <StatCard title="الشارات المكتسبة" value="8" subtitle="+1 جديدة" color="bg-pink-100" />
      </div>

      {/* Projects & Lessons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Projects */}
        <div>
          <h2 className="text-lg font-semibold mb-3">مشاريعي الأخيرة</h2>
          <div className="space-y-3">
            <ProjectCard title="لعبة الألوان" subtitle="HTML / CSS - منذ 3 ساعات" progress={85} />
            <ProjectCard title="حاسبة الأرقام" subtitle="JavaScript - منذ 5 ساعات" progress={60} />
            <ProjectCard title="صفحة الترحيب" subtitle="HTML - أمس" progress={100} />
          </div>
        </div>

        {/* Lessons */}
        <div>
          <h2 className="text-lg font-semibold mb-3">الدروس القادمة</h2>
          <div className="space-y-3">
            <LessonCard title="أساسيات HTML" time="اليوم - PM 2:00" status="قادم" />
            <LessonCard title="تصميم CSS المتقدم" time="غداً - PM 4:30" status="قادم" />
            <LessonCard title="JavaScript للمبتدئين" time="الأحد - AM 10:00" status="ملغي" />
          </div>
        </div>
      </div>

      {/* Bottom Shortcuts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-6 rounded-xl text-center font-semibold shadow hover:opacity-90">
          ابطالنا
        </div>
        <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6 rounded-xl text-center font-semibold shadow hover:opacity-90">
          الدورات
        </div>
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-6 rounded-xl text-center font-semibold shadow hover:opacity-90">
          الإنجازات
        </div>
      </div>
    </div>
  );
}
