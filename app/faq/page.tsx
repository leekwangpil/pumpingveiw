'use client';

import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

export default function FAQPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
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

  // Toggle accordion item
  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // FAQ data
  const faqItems = [
    {
      question: '가짜 계정인가요?',
      answer: '아닙니다. 펌핑뷰는 실제 활동 중인 한국인 계정만 사용합니다.',
    },
    {
      question: '언제부터 적용되나요?',
      answer: '결제 후 1~3분 이내 자동 적용됩니다. 24시간 365일 운영 중입니다.',
    },
    {
      question: '팔로워/좋아요 유지되나요?',
      answer:
        '자연스러운 계정 활동을 통해 유지율을 높였으며, A/S도 30일 보장합니다.',
    },
    {
      question: '가격은 얼마인가요?',
      answer: '서비스별로 상이하며, 곧 정식 가격이 공개될 예정입니다.',
    },
    {
      question: '계정 제재 위험은 없나요?',
      answer:
        '펌핑뷰는 실제 활동 계정을 통한 자연스러운 성장을 지원하므로 제재 위험이 매우 낮습니다. 안전한 범위 내에서 서비스를 제공합니다.',
    },
    {
      question: '여러 SNS 플랫폼을 동시에 이용할 수 있나요?',
      answer:
        '네, 가능합니다. 유튜브, 인스타그램, 틱톡 등 여러 플랫폼을 동시에 성장시킬 수 있는 패키지 상품도 준비되어 있습니다.',
    },
  ];

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
                    className="block py-2 text-gray-800 hover:text-primary transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    후기 보기
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
                    className="block py-2 text-primary font-medium"
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
      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
            자주 묻는 질문
          </h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            펌핑뷰 사용 전 궁금하셨죠?
          </p>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="font-medium text-gray-900">
                    {item.question}
                  </span>
                  {openAccordion === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openAccordion === index && (
                  <div className="p-5 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-12 text-center">
            <a
              href="https://forms.gle/Fdjwn1dSHtngTL7N6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-primary/90 transition-colors shadow-md"
            >
              더 궁금한 점이 있으신가요?
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
