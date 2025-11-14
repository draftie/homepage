
'use client';

import { useState } from 'react';
import { SUPABASE_CONFIG } from '../../lib/supabase-config';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const formBody = new FormData();
      Object.keys(formData).forEach(key => {
        formBody.append(key, formData[key as keyof typeof formData]);
      });

      const response = await fetch(`${SUPABASE_CONFIG.url}/functions/v1/contact-form`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${SUPABASE_CONFIG.anonKey}`
        },
        body: formBody
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        お問い合わせフォーム
      </h2>

      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
              お名前 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent text-sm"
              placeholder="山田太郎"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent text-sm"
              placeholder="example@company.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
              会社名・組織名
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent text-sm"
              placeholder="株式会社サンプル"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
              電話番号
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent text-sm"
              placeholder="03-1234-5678"
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
            お問い合わせ内容 <span className="text-red-500">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent text-sm pr-8"
          >
            <option value="">選択してください</option>
            <option value="demo">無料デモのお申し込み</option>
            <option value="consultation">個別相談のお申し込み</option>
            <option value="pricing">料金・プランについて</option>
            <option value="technical">技術的なお問い合わせ</option>
            <option value="partnership">パートナーシップについて</option>
            <option value="other">その他</option>
          </select>
        </div>

        <div className="mb-8">
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
            詳細・ご要望 <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            maxLength={500}
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent text-sm resize-none"
            placeholder="具体的なご要望やご質問をお聞かせください（500文字以内）"
          />
          <div className="text-right text-sm text-slate-500 mt-1">
            {formData.message.length}/500文字
          </div>
        </div>

        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            <div className="flex items-center">
              <i className="ri-check-circle-line mr-2"></i>
              お問い合わせありがとうございます。担当者より2営業日以内にご連絡いたします。
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            <div className="flex items-center">
              <i className="ri-error-warning-line mr-2"></i>
              送信に失敗しました。しばらく後でもう一度お試しください。
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting || formData.message.length > 500}
          className="w-full bg-slate-800 text-white py-4 rounded-lg font-bold text-lg hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <i className="ri-loader-4-line animate-spin mr-2"></i>
              送信中...
            </div>
          ) : (
            <>
              <i className="ri-send-plane-line mr-2"></i>
              お問い合わせを送信
            </>
          )}
        </button>
      </form>
    </div>
  );
}
