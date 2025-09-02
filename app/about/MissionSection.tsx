
'use client';

export default function MissionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div dir="rtl">
            <h2 className="text-4xl font-bold text-indigo-900 mb-6">
              رسالتنا
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              نؤمن بأن كل طفل يستحق الفرصة لتعلم البرمجة وتطوير مهارات التفكير النقدي. مهمتنا هي جعل التعليم البرمجي ممتعًا وسهل الوصول إليه لجميع الأطفال، بغض النظر عن خلفيتهم أو مستوى خبرتهم.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              نسعى لبناء جيل واعٍ تقنيًا، قادر على الإبداع والابتكار في عالم رقمي متطور. من خلال منصتنا التفاعلية، نوفر بيئة تعليمية آمنة وممتعة تساعد الأطفال على اكتشاف عالم البرمجة بطريقة مبسطة ومشوقة.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 space-x-reverse">
                <i className="ri-check-line text-green-500 text-xl"></i>
                <span className="text-gray-700">تعليم تفاعلي وممتع</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <i className="ri-check-line text-green-500 text-xl"></i>
                <span className="text-gray-700">منهج متدرج حسب العمر</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <i className="ri-check-line text-green-500 text-xl"></i>
                <span className="text-gray-700">بيئة آمنة ومحمية</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <i className="ri-check-line text-green-500 text-xl"></i>
                <span className="text-gray-700">دعم مستمر للطلاب</span>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="/about.jpg" 
              alt="Mission" 
              className="rounded-2xl shadow-xl object-cover object-top w-full h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
