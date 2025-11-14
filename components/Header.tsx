
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'サービス', href: '#services' },
    { name: '機能', href: '#features' },
    { name: '会社概要', href: '#about' },
    { name: 'お問い合わせ', href: '#contact' }
  ];

  return (
    <header className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-xl font-bold text-slate-800">Draftie</span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Link href="/login" className="text-sm font-semibold leading-6 text-slate-700 hover:text-slate-900 px-4 py-2 cursor-pointer">
            ログイン
          </Link>
          <Link href="/signup" className="rounded-md bg-slate-800 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 transition-colors cursor-pointer whitespace-nowrap">
            無料で始める
          </Link>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="space-y-2 px-6 pb-6 pt-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-6 space-y-2">
              <Link href="/login" className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-700 hover:bg-slate-50 cursor-pointer">
                ログイン
              </Link>
              <Link href="/signup" className="block rounded-lg bg-slate-800 px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-slate-700 transition-colors cursor-pointer">
                無料で始める
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
