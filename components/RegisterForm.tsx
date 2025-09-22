"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("كلمة المرور وتأكيد كلمة المرور غير متطابقتين");
      return;
    }

    console.log({ name, age, email, password });
    // هنا تقدروا تضيفوا استدعاء API لإنشاء الحساب
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-purple-700">Kidscode</h1>
          <h2 className="text-lg font-semibold mt-2">انضم إلى عائلة البرمجة</h2>
          <p className="text-gray-500 text-sm">
            قم بإنشاء حسابك للبدء برحلتك في البرمجة
          </p>
        </div>

        {/* Tabs */}
        <div className="flex mb-6 border-b">
          <Link
            href="/auth/login"
            className="w-1/2 text-center py-2 font-semibold text-gray-500"
          >
            تسجيل الدخول
          </Link>
          <Link
            href="/auth/register"
            className="w-1/2 text-center py-2 font-semibold text-blue-600 border-b-2 border-blue-600"
          >
            حساب جديد
          </Link>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="الاسم الكامل"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <select
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">اختر عمرك</option>
            {Array.from({ length: 18 }, (_, i) => i + 5).map((num) => (
              <option key={num} value={num}>
                {num} سنة
              </option>
            ))}
          </select>

          <input
            type="email"
            placeholder="البريد الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="password"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="password"
            placeholder="تأكيد كلمة المرور"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
          >
            إنشاء الحساب
          </button>
        </form>

        {/* Back to login */}
        <p className="text-center text-sm text-gray-500 mt-4">
          لديك حساب بالفعل؟{" "}
          <Link href="/auth/login" className="text-blue-500 hover:underline">
            تسجيل الدخول
          </Link>
        </p>
      </div>
    </div>
  );
}
