'use client';

import { useState, useRef, useEffect } from 'react';
import { Menu, X, Star } from 'lucide-react';
import Link from 'next/link';

export default function ReviewPage() {
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
            <div className="flex justify-end items-center p-5 border-b">
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
                  <a
                    href="/service"
                    className="block py-2 text-gray-800 hover:text-primary transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    서비스 소개
                  </a>
                </li>
                <li>
                  <a
                    href="/review"
                    className="block py-2 text-primary font-medium"
                    onClick={() => setMenuOpen(false)}
                  >
                    후기 보기
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
                    className="block py-2 text-gray-800 hover:text-primary transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    자주 묻는 질문
                  </a>
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

      {/* Main Content */}
      <section id="testimonial" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
            후기 보기
          </h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            실사용자들의 진짜 반응을 확인하세요!
          </p>

          {/* Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Review Card 1 */}
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex text-yellow-400 mb-3">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-gray-700 mb-4">
                "팔로워가 티 안 나게 자연스럽게 늘어서 너무 좋았어요!"
              </p>
              <p className="text-primary font-medium">@k__immm</p>
            </div>

            {/* Review Card 2 */}
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex text-yellow-400 mb-3">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-gray-700 mb-4">
                "틱톡 좋아요 구매했는데 자연 유입까지 늘었어요!"
              </p>
              <p className="text-primary font-medium">@flex_tok</p>
            </div>

            {/* Review Card 3 */}
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex text-yellow-400 mb-3">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-gray-700 mb-4">
                "유튜브 구독자 증가 효과 진짜 있었어요. 만족!"
              </p>
              <p className="text-primary font-medium">@real_creator</p>
            </div>

            {/* Review Card 4 */}
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex text-yellow-400 mb-3">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-gray-700 mb-4">
                "릴스 조회수도 같이 늘어나서 진짜 신기해요!"
              </p>
              <p className="text-primary font-medium">@wowgram</p>
            </div>

            {/* Review Card 5 */}
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex text-yellow-400 mb-3">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-gray-700 mb-4">
                "카카오 채널 친구 수가 일주일 만에 두 배로 늘었어요. 마케팅
                효과가 확실히 좋아졌습니다."
              </p>
              <p className="text-primary font-medium">@kakao_biz</p>
            </div>

            {/* Review Card 6 */}
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex text-yellow-400 mb-3">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-gray-700 mb-4">
                "페이스북 페이지 좋아요 늘리고 나서 광고 효율이 확실히
                좋아졌어요. 다음에도 이용할게요!"
              </p>
              <p className="text-primary font-medium">@fb_marketer</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12 text-center">
            <a
              href="https://forms.gle/Fdjwn1dSHtngTL7N6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-primary/90 transition-colors shadow-md"
            >
              지금 시작하기
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 bg-white border-t">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600 text-sm">
                © 2025 펌핑뷰. All rights reserved.
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
