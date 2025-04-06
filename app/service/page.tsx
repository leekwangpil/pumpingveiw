'use client';

import { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ServicePage() {
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
                    className="block py-2 text-primary font-medium"
                    onClick={() => setMenuOpen(false)}
                  >
                    서비스 소개
                  </a>
                </li>
                <li>
                  <a
                    href="/review"
                    className="block py-2 text-gray-800 hover:text-primary transition-colors"
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
      <section id="service" className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
            서비스 소개
          </h1>

          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              펌핑뷰는 유튜브, 인스타그램, 틱톡, 페이스북, 카카오, 트위터까지
              <br className="hidden md:block" />
              다양한 SNS 채널을 실제 활동 중인 한국인 계정 기반으로 성장시켜주는
              서비스입니다.
              <br className="hidden md:block" />
              팔로워, 좋아요, 댓글, 조회수, 도달률까지
              <br className="hidden md:block" />
              콘텐츠가 묻히지 않도록 자연스럽고 안전하게 펌핑해드립니다.
            </p>
          </div>

          {/* SNS Platform Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* YouTube Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 relative mr-4 flex-shrink-0">
                  <Image
                    src="/images/youtube-logo.png"
                    alt="YouTube 로고"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold">YouTube</h3>
              </div>
              <p className="text-gray-600">
                조회수, 구독자, 댓글, 시청시간을 자연스럽게 증가시켜 알고리즘에
                노출될 수 있도록 도와드립니다.
              </p>
            </div>

            {/* Instagram Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 relative mr-4 flex-shrink-0">
                  <Image
                    src="/images/instagram-logo.png"
                    alt="Instagram 로고"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold">Instagram</h3>
              </div>
              <p className="text-gray-600">
                팔로워, 좋아요, 도달, 댓글을 증가시켜 인스타그램 계정의 영향력을
                키워드립니다.
              </p>
            </div>

            {/* TikTok Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 relative mr-4 flex-shrink-0">
                  <Image
                    src="/images/tiktok-logo.png"
                    alt="TikTok 로고"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold">TikTok</h3>
              </div>
              <p className="text-gray-600">
                팔로워, 좋아요, 조회수를 늘려 틱톡 For You Page에 더 자주
                노출되도록 최적화합니다.
              </p>
            </div>

            {/* Facebook Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 relative mr-4 flex-shrink-0">
                  <Image
                    src="/images/facebook-logo.png"
                    alt="Facebook 로고"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold">Facebook</h3>
              </div>
              <p className="text-gray-600">
                팔로워, 좋아요, 공유를 증가시켜 페이스북 페이지의 도달률과
                참여도를 높입니다.
              </p>
            </div>

            {/* Kakao Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 relative mr-4 flex-shrink-0">
                  <Image
                    src="/images/kakaotalk-logo.png"
                    alt="KakaoTalk 로고"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold">Kakao</h3>
              </div>
              <p className="text-gray-600">
                채널 친구 수를 증가시켜 카카오 채널의 영향력과 마케팅 효과를
                극대화합니다.
              </p>
            </div>

            {/* Twitter Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 relative mr-4 flex-shrink-0">
                  <Image
                    src="/images/twitter-logo.png"
                    alt="Twitter 로고"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold">Twitter</h3>
              </div>
              <p className="text-gray-600">
                팔로워, 좋아요, 리트윗을 늘려 트위터에서의 영향력과 도달률을
                향상시킵니다.
              </p>
            </div>
          </div>

          {/* Order Button */}
          <div className="text-center mt-12">
            <a
              href="https://forms.gle/Fdjwn1dSHtngTL7N6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-primary/90 transition-colors shadow-md"
            >
              주문하기
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
