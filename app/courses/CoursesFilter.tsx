
'use client';

interface CoursesFilterProps {
  selectedAge: string;
  selectedLevel: string;
  onAgeChange: (age: string) => void;
  onLevelChange: (level: string) => void;
}

export default function CoursesFilter({ selectedAge, selectedLevel, onAgeChange, onLevelChange }: CoursesFilterProps) {
  const ageGroups = [
    { value: 'all', label: 'جميع الأعمار' },
    { value: '6-8', label: '6-8 سنوات' },
    { value: '9-12', label: '9-12 سنة' },
    { value: '13-16', label: '13-16 سنة' }
  ];

  const levels = [
    { value: 'all', label: 'جميع المستويات' },
    { value: 'beginner', label: 'مبتدئ' },
    { value: 'intermediate', label: 'متوسط' },
    { value: 'advanced', label: 'متقدم' }
  ];

  return (
    <section className="py-12 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between" dir="rtl">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <span className="text-lg font-semibold text-gray-900">تصفية حسب:</span>
            
            <div className="flex items-center gap-2">
              <span className="text-gray-700">العمر:</span>
              <div className="flex gap-2">
                {ageGroups.map((age) => (
                  <button
                    key={age.value}
                    onClick={() => onAgeChange(age.value)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                      selectedAge === age.value
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {age.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-gray-700">المستوى:</span>
              <div className="flex gap-2">
                {levels.map((level) => (
                  <button
                    key={level.value}
                    onClick={() => onLevelChange(level.value)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                      selectedLevel === level.value
                        ? 'bg-pink-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {level.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-gray-700">ترتيب:</span>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
              <span>الأحدث</span>
              <i className="ri-arrow-down-s-line"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
