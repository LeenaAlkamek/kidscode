
'use client';

export default function FeaturesSection() {
  const features = [
    {
      icon: 'ri-gamepad-line',
      title: 'التعلم التفاعلي',
      description: 'حول البرمجة إلى لعبة مثيرة مع الإنجازات والشارات والتحديات التفاعلية التي تحفز الأطفال.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'ri-palette-line',
      title: 'البرمجة المرئية',
      description: 'كتل البرمجة التي تُسحب وتُترك تجعل مفاهيم البرمجة سهلة الفهم وممتعة للاستكشاف.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'ri-parent-line',
      title: 'لوحة تحكم الوالدين',
      description: 'تتبع تقدم طفلك، واطلع على الإنجازات، واحصل على رؤى حول رحلة التعلم.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: 'ri-graduation-cap-line',
      title: 'معلمون خبراء',
      description: 'تعلم من المعلمين ذوي الخبرة المتخصصين في تدريس البرمجة للأطفال.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: 'ri-group-line',
      title: 'مجتمع آمن',
      description: 'تواصل مع المبرمجين الصغار الآخرين في بيئة آمنة ومراقبة مصممة للأطفال.',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: 'ri-certificate-line',
      title: 'الشهادات',
      description: 'احصل على شهادات وشارات عند إكمال الدورات وإتقان مهارات البرمجة الجديدة.',
      color: 'from-emerald-500 to-green-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" >
          <h2 className="text-4xl font-bold text-indigo-900 mb-4">
            لماذا تختار منصة Kidscode؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            صممنا كل جانب من جوانب منصتنا لجعل البرمجة ممتعة وجذابة وسهلة الوصول للمتعلمين الصغار.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}>
                <i className={`${feature.icon} text-white text-2xl`}></i>
              </div>
              <div >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
