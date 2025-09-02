
'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-indigo-900 to-purple-900 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" 
           style={{
             backgroundImage: `url('/cta.jpg')`
           }}>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div dir="rtl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            هل أنت مستعد لبدء رحلة 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400"> البرمجة لطفلك؟</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            انضم إلى الآلاف من العائلات التي تثق بـ Kidscode لتوفير تعليم برمجي عالي الجودة لأطفالهم. ابدأ بتجربة مجانية اليوم!
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link href="/courses" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 whitespace-nowrap">
            ابدأ التجربة المجانية
          </Link>
          <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-indigo-900 transition-all whitespace-nowrap">
            تواصل معنا
          </Link>
        </div>
        
        <div className="flex items-center justify-center gap-8 text-gray-200" dir="rtl">
          <div className="flex items-center gap-2">
            <i className="ri-shield-check-line text-green-400"></i>
            <span>آمن ومحمي</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-time-line text-blue-400"></i>
            <span>دعم 24/7</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-money-dollar-circle-line text-pink-400"></i>
            <span>ضمان استرداد الأموال</span>
          </div>
        </div>
      </div>
    </section>
  );
}
