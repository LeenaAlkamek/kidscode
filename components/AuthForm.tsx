"use client";

import { useState } from "react";
import Link from "next/link";

interface AuthFormProps {
  type: "login" | "register";
}

export default function AuthForm({ type }: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    // هنا لاحقاً تستخدمي API حقيقية
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        {/* Logo + Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-purple-700">Kidscode</h1>
          <h2 className="text-lg font-semibold mt-2">
            {type === "login" ? "مرحباً بعودتك!" : "إنشاء حساب جديد"}
          </h2>
          <p className="text-gray-500 text-sm">
            {type === "login"
              ? "سجل دخولك لمتابعة رحلتك في البرمجة"
              : "قم بإنشاء حسابك للبدء برحلتك في البرمجة"}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex mb-6 border-b">
          <Link
            href="/auth/login"
            className={`w-1/2 text-center py-2 font-semibold ${
              type === "login"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500"
            }`}
          >
            تسجيل الدخول
          </Link>
          <Link
            href="/auth/register"
            className={`w-1/2 text-center py-2 font-semibold ${
              type === "register"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500"
            }`}
          >
            حساب جديد
          </Link>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="أدخل بريدك الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            placeholder="أدخل كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          {type === "login" && (
            <div className="flex justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" /> تذكرني
              </label>
              <Link href="#" className="text-blue-500 hover:underline">
                نسيت كلمة المرور؟
              </Link>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
          >
            {type === "login" ? "تسجيل الدخول" : "إنشاء الحساب"}
          </button>
        </form>

        {/* OR */}
        <div className="my-4 flex items-center">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-2 text-gray-400 text-sm">أو</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Social login */}
        <div className="flex gap-3">
          <button className="flex-1 py-2 border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50">
            <span className="text-red-500">G</span> Google
          </button>
          <button className="flex-1 py-2 border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50">
            <span className="text-blue-600">f</span> Facebook
          </button>
        </div>

        {/* Help */}
        <p className="text-center text-sm text-gray-500 mt-4">
          تحتاج مساعدة؟{" "}
          <Link href="#" className="text-blue-500 hover:underline">
            تواصل معنا
          </Link>
        </p>
      </div>
    </div>
  );
}
