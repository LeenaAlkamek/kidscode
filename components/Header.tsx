"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-gray-700 hover:text-blue-500 font-medium transition-colors"
            >
              تسجيل الدخول
            </Link>
            <Link
              href="/dashboard"
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors whitespace-nowrap"
            >
              لوحة التحكم
            </Link>
          </div>

          <nav className="hidden md:flex gap-8" dir="rtl">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-500 font-medium transition-colors"
            >
              الرئيسية
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-500 font-medium transition-colors"
            >
              من نحن
            </Link>
            <Link
              href="/courses"
              className="text-gray-700 hover:text-blue-500 font-medium transition-colors"
            >
              الدورات
            </Link>
            <Link
              href="/playground"
              className="text-gray-700 hover:text-blue-500 font-medium transition-colors"
            >
              ساحة البرمجة
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-blue-500 font-medium transition-colors"
            >
              المدونة
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-500 font-medium transition-colors"
            >
              تواصل معنا
            </Link>
          </nav>

          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <i className="ri-code-s-slash-line text-white text-lg"></i>
            </div>
            <span
              className="text-2xl font-bold text-indigo-900"
              style={{ fontFamily: "Pacifico, serif" }}
            >
              Kidscode
            </span>
          </Link>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-2xl text-gray-700"></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4" dir="rtl">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-500 font-medium"
              >
                الرئيسية
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-500 font-medium"
              >
                من نحن
              </Link>
              <Link
                href="/courses"
                className="text-gray-700 hover:text-blue-500 font-medium"
              >
                الدورات
              </Link>
              <Link
                href="/playground"
                className="text-gray-700 hover:text-blue-500 font-medium"
              >
                ساحة البرمجة
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-blue-500 font-medium"
              >
                المدونة
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-500 font-medium"
              >
                تواصل معنا
              </Link>
              <Link
                href="/login"
                className="text-gray-700 hover:text-blue-500 font-medium"
              >
                تسجيل الدخول
              </Link>
              <Link
                href="/dashboard"
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors inline-block text-center"
              >
                لوحة التحكم
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
