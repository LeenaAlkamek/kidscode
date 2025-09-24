
'use client';

import Link from 'next/link';

interface CoursesListProps {
  selectedAge: string;
  selectedLevel: string;
}

export default function CoursesList({ selectedAge, selectedLevel }: CoursesListProps) {
  const courses = [
    {
      id: 1,
      title: 'أساسيات البرمجة للاطفال',
      description: 'مقدمة مثالية لمفاهيم البرمجة باستخدام كتل ملونة وشخصيات ممتعة.',
      age: '9-7',
      level: 'beginner',
      duration: '8 أسابيع',
      lessons: 12,
      students: 100,
      rating: 4.9,
      image: '/image2.jpg',
      color: 'from-blue-500 to-cyan-500',
      goals: ['تعلم المفاهيم الأساسية', 'التفكير المنطقي', 'حل المشكلات', 'الإبداع والخيال']
    },
    {
      id: 2,
      title: 'تصميم الألعاب الإبداعية',
      description: 'تعلم إنشاء ألعابك الخاصة مع فهم آليات اللعب والسرد.',
      age: '9-12',
      level: 'intermediate',
      duration: '6 أسابيع',
      lessons: 24,
      students: 980,
      rating: 4.8,
      image: '/image.jpg',
      color: 'from-purple-500 to-pink-500',
      goals: ['تصميم الألعاب', 'إنشاء الشخصيات', 'القصص التفاعلية', 'النشر والمشاركة']
    },
    {
      id: 3,
      title: 'مغامرات تطوير الويب',
      description: 'بناء مواقع ويب رائعة وتعلم كيفية عمل الإنترنت من خلال مشاريع عملية.',
      age: '13-15',
      level: 'advanced',
      duration: '8 أسابيع',
      lessons: 32,
      students: 756,
      rating: 4.9,
      image: '/image1.jpg',
      color: 'from-pink-500 to-rose-500',
      goals: ['HTML و CSS', 'JavaScript التفاعلي', 'تصميم متجاوب', 'مشاريع حقيقية']
    },
    {
      id: 4,
      title: 'الروبوتات والأتمتة',
      description: 'استكشف عالم الروبوتات وتعلم كيفية برمجة الآلات الذكية.',
      age: '10-14',
      level: 'intermediate',
      duration: '7 أسابيع',
      lessons: 28,
      students: 643,
      rating: 4.7,
      image: '/image5.jpg',
      color: 'from-indigo-500 to-blue-500',
      goals: ['برمجة الروبوتات', 'الاستشعار والحركة', 'المشاريع التطبيقية', 'الذكاء الاصطناعي']
    },
    {
      id: 5,
      title: 'تطبيقات الهاتف الذكي',
      description: 'تعلم تطوير تطبيقات الهاتف المحمول وانشر إبداعاتك في متجر التطبيقات.',
      age: '12-15',
      level: 'advanced',
      duration: '10 أسابيع',
      lessons: 40,
      students: 524,
      rating: 4.8,
      image: '/image4.jpg',
      color: 'from-cyan-500 to-teal-500',
      goals: ['تطوير التطبيقات', 'واجهة المستخدم', 'النشر في المتاجر', 'التسويق الرقمي']
    },
    {
      id: 6,
      title: 'الذكاء الاصطناعي للأطفال',
      description: 'مقدمة مبسطة لعالم الذكاء الاصطناعي والتعلم الآلي.',
      age: '11-15',
      level: 'intermediate',
      duration: '6 أسابيع',
      lessons: 24,
      students: 412,
      rating: 4.9,
      image: '/image3.jpg',
      color: 'from-emerald-500 to-green-500',
      goals: ['مفاهيم الذكاء الاصطناعي', 'التعلم الآلي', 'معالجة البيانات', 'التطبيقات العملية']
    }
  ];

  const filteredCourses = courses.filter(course => {
    const ageMatch = selectedAge === 'all' || course.age === selectedAge;
    const levelMatch = selectedLevel === 'all' || course.level === selectedLevel;
    return ageMatch && levelMatch;
  });

  return (
    <section className="py-20 bg-gray-50" dir='rtl'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8" dir="rtl">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {filteredCourses.length} دورة متاحة
          </h2>
          <p className="text-gray-600">
            اختر الدورة التي تناسب عمر ومستوى طفلك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-medium bg-gradient-to-r ${course.color}`}>
                  {course.level === 'beginner' ? 'مبتدئ' : course.level === 'intermediate' ? 'متوسط' : 'متقدم'}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center">
                  <i className="ri-star-fill text-yellow-500 text-sm mr-1"></i>
                  <span className="text-sm font-medium">{course.rating}</span>
                </div>
              </div>
              
              <div className="p-6" dir="rtl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <i className="ri-user-3-line ml-1"></i>
                    {course.age} سنة
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

                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <i className="ri-group-line ml-1"></i>
                  <span>{course.students} طالب مسجل</span>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">ما ستتعلمه:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {course.goals.map((goal, index) => (
                      <li key={index} className="flex items-center">
                        <i className="ri-check-line text-green-500 ml-2"></i>
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link href={`/courses/${course.id}`} className={`w-full bg-gradient-to-r ${course.color} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center whitespace-nowrap`}>
                  سجل الآن
                  <i className="ri-arrow-left-line mr-2"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12" dir="rtl">
            <i className="ri-search-line text-6xl text-gray-400 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">لا توجد دورات متاحة</h3>
            <p className="text-gray-600">جرب تغيير المرشحات للعثور على دورات أخرى</p>
          </div>
        )}
      </div>
    </section>
  );
}
