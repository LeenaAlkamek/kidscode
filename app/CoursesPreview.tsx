
'use client';

import Link from 'next/link';

export default function CoursesPreview() {
  const courses = [
    {
      id: 1,
      title: 'أساسيات البرمجة للمبتدئين',
      description: 'مقدمة مثالية لمفاهيم البرمجة باستخدام كتل ملونة وشخصيات ممتعة.',
      age: '6-8 سنوات',
      duration: '4 أسابيع',
      lessons: 16,
      image: '/image2.jpg',
      difficulty: 'مبتدئ',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'تصميم الألعاب الإبداعية',
      description: 'تعلم إنشاء ألعابك الخاصة مع فهم آليات اللعب والسرد.',
      age: '9-12 سنة',
      duration: '6 أسابيع',
      lessons: 24,
      image: '/image.jpg',
      difficulty: 'متوسط',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'مغامرات تطوير الويب',
      description: 'بناء مواقع ويب رائعة وتعلم كيفية عمل الإنترنت من خلال مشاريع عملية.',
      age: '13-16 سنة',
      duration: '8 أسابيع',
      lessons: 32,
      image: '/image1.jpg',
      difficulty: 'متقدم',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" dir="rtl">
          <h2 className="text-4xl font-bold text-indigo-900 mb-4">
            الدورات الأكثر شعبية
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اكتشف دورات البرمجة الأكثر حباً، المصممة بعناية لمختلف الفئات العمرية ومستويات المهارة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-medium bg-gradient-to-r ${course.color}`}>
                  {course.difficulty}
                </div>
              </div>
              
              <div className="p-6" dir="rtl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <i className="ri-user-3-line ml-1"></i>
                    {course.age}
                  </span>
                  <span className="flex items-center">
                    <i className="ri-time-line ml-1"></i>
                    {course.duration}
                  </span>
                  <span className="flex items-center">
                    <i className="ri-play-circle-line ml-1"></i>
                    {course.lessons} درس
                  </span>
                </div>
                
                <Link href={`/courses/${course.id}`} className={`w-full bg-gradient-to-r ${course.color} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center whitespace-nowrap`}>
                  سجل الآن
                  <i className="ri-arrow-left-line mr-2"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/courses" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all transform hover:scale-105 whitespace-nowrap">
            عرض جميع الدورات
          </Link>
        </div>
      </div>
    </section>
  );
}
