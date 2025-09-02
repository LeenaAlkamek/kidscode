
'use client';

export default function ValuesSection() {
  const values = [
    {
      icon: 'ri-lightbulb-line',
      title: 'الإبداع',
      description: 'نشجع الأطفال على التفكير خارج الصندوق وإيجاد حلول إبداعية للمشاكل البرمجية.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'ri-team-line',
      title: 'التعاون',
      description: 'نؤمن بقوة العمل الجماعي ونعزز روح التعاون بين الطلاب في بيئة تعليمية آمنة.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'ri-book-open-line',
      title: 'التعلم المستمر',
      description: 'نغرس في الأطفال حب التعلم والاستطلاع لاكتشاف المزيد في عالم التقنية.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'الأمان',
      description: 'نوفر بيئة تعليمية آمنة ومحمية تضمن تجربة تعلم إيجابية لجميع الأطفال.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: 'ri-star-line',
      title: 'التميز',
      description: 'نسعى للتميز في كل ما نقدمه من محتوى تعليمي وخدمات لضمان أفضل تجربة تعلم.',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: 'ri-heart-line',
      title: 'الشغف',
      description: 'نحب ما نعمل به ونسعى لنقل هذا الشغف للبرمجة والتقنية إلى أطفالنا.',
      color: 'from-emerald-500 to-green-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" dir="rtl">
          <h2 className="text-4xl font-bold text-indigo-900 mb-4">
            قيمنا
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نؤمن بمجموعة من القيم الأساسية التي تقود عملنا وتشكل أساس منصتنا التعليمية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow" dir="rtl">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6`}>
                <i className={`${value.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
