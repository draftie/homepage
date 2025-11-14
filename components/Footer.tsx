
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <span className="text-xl font-bold mb-6 block">Draftie</span>
            <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
              AIテクノロジーで特許戦略を革新し、すべての企業が戦略的な知的財産管理を実現できる未来を創造します。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">サービス</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/draftie-idea" className="text-slate-300 hover:text-white transition-colors cursor-pointer">
                  Draftie Idea
                </Link>
              </li>
              <li>
                <Link href="/draftie-document" className="text-slate-300 hover:text-white transition-colors cursor-pointer">
                  Draftie Document
                </Link>
              </li>
              <li>
                <Link href="/draftie-research" className="text-slate-300 hover:text-white transition-colors cursor-pointer">
                  Draftie Research
                </Link>
              </li>
              <li>
                <Link href="/draftie-translate" className="text-slate-300 hover:text-white transition-colors cursor-pointer">
                  Draftie Translate
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">企業情報</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-slate-300 hover:text-white transition-colors cursor-pointer">
                  私たちについて
                </a>
              </li>
              <li>
                <Link href="/news" className="text-slate-300 hover:text-white transition-colors cursor-pointer">
                  ニュース
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-300 hover:text-white transition-colors cursor-pointer">
                  採用情報
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors cursor-pointer">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              2025 Draftie Inc. All rights reserved. www.draftie.ai
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">
                プライバシーポリシー
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">
                利用規約
              </Link>
              <Link href="/security" className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">
                セキュリティ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
