'use client';

import { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <main className="min-h-screen bg-white">
      {/* Hamburger Menu Button */}
      <div
        className="fixed top-5 left-5 z-50 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Menu className="h-7 w-7 text-primary" />
      </div>

      {/* Slide-in Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40">
          <div
            ref={menuRef}
            className="fixed top-0 left-0 h-full w-[280px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto"
          >
            <div className="flex justify-between items-center p-5 border-b">
              <h2 className="text-xl font-bold text-primary"></h2>
              <button onClick={() => setMenuOpen(false)} className="p-1">
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>
            <nav className="p-5">
              <ul className="space-y-4">
                <li>
                  <a
                    href="/"
                    className="block py-2 text-gray-800 hover:text-primary transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    홈
                  </a>
                </li>
                <li>
                  <Link
                    href="/service"
                    className="block py-2 text-gray-800 hover:text-primary transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    서비스 소개
                  </Link>
                </li>
                <li>
                  <Link
                    href="/review"
                    className="block py-2 text-gray-800 hover:text-primary transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    후기 보기
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="block py-2 text-gray-800 hover:text-primary transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    자주 묻는 질문
                  </Link>
                </li>
                <li>
                  <a
                    href="https://forms.gle/Fdjwn1dSHtngTL7N6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 text-gray-800 hover:text-primary transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    주문하기
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        id="home"
        className="w-full min-h-[70vh] flex items-center justify-center py-20 px-4"
      >
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            SNS 성장.
            <br />
            '리마크랩'으로
            <br />
            펌핑하세요.
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            당신의 콘텐츠를 효과적으로 보이도록
          </p>
          <a
            href="https://forms.gle/Fdjwn1dSHtngTL7N6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-primary/90 transition-colors shadow-md mb-10"
          >
            지금 시작하기
          </a>

          {/* Social Media Logos */}
          <div className="mt-8">
            <p className="text-sm text-gray-500 mb-4">지원하는 SNS 플랫폼</p>
            <div className="grid grid-cols-3 gap-6 place-items-center justify-center max-w-xs mx-auto">
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%9C%A0%ED%8A%9C%EB%B8%8C%20%EB%A1%9C%EA%B3%A0.jpg-HOLoNVEM5rDItNeB2tGN3NhyVFYGpD.jpeg"
                  alt="YouTube"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%9D%B8%EC%8A%A4%ED%83%80%EA%B7%B8%EB%9E%A8%20%EB%A1%9C%EA%B3%A0.jpg-9ka8hmQqWoYrnhrFH0MIxDDx6jjBTP.jpeg"
                  alt="Instagram"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%ED%8B%B1%ED%86%A1%20%EB%A1%9C%EA%B3%A0.jpg-FN4IklCijhn2LiKskvnqVVplrNQICX.jpeg"
                  alt="TikTok"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%ED%8E%98%EC%9D%B4%EC%8A%A4%EB%B6%81%20%EB%A1%9C%EA%B3%A0.jpg-D0PvpPqfs5aXgRfM7uDiXUBZa6C5Ta.jpeg"
                  alt="Facebook"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%ED%8A%B8%EC%9C%84%ED%84%B0%20%EB%A1%9C%EA%B3%A0.jpg-PET2bIBLnebmfQ8OViX2sXKszUp2tt.jpeg"
                  alt="Twitter"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%86%A1%20%EB%A1%9C%EA%B3%A0.jpg-kPf6493QuNxhkXY7SytESSXZeT8b59.jpeg"
                  alt="KakaoTalk"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-bold mb-2">빠른 시작</h3>
              <p className="text-gray-600 text-sm">
                주문 후 24시간 이내 바로 시작되는 빠른 서비스
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-lg font-bold mb-2">실제 계정</h3>
              <p className="text-gray-600 text-sm">
                실제 활동 중인 한국인 계정으로 자연스러운 성장
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-bold mb-2">A/S 보장</h3>
              <p className="text-gray-600 text-sm">
                서비스 완료 후 7일간 무상 A/S 제공
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-lg font-bold mb-2">자연스러운 노출</h3>
              <p className="text-gray-600 text-sm">
                알고리즘에 최적화된 자연스러운 성장 패턴
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 bg-white border-t">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600 text-sm">
                © 2025 리마크랩. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-gray-600 text-sm hover:text-primary"
              >
                이용약관
              </Link>
              <Link
                href="#"
                className="text-gray-600 text-sm hover:text-primary"
              >
                개인정보 처리방침
              </Link>
              <Link
                href="#"
                className="text-gray-600 text-sm hover:text-primary"
              >
                문의하기
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
