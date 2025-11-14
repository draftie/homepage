'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            お問い合わせ
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            サービスに関するご質問やご相談がございましたら、お気軽にお問い合わせください。
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-slate-50 rounded-2xl p-8">
          <div className="space-y-6 mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-slate-800 rounded-lg">
                <i className="ri-mail-line text-white text-xl"></i>
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-1">メールアドレス</h3>
                <p className="text-slate-600">info@draftie.ai</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-slate-800 rounded-lg">
                <i className="ri-time-line text-white text-xl"></i>
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-1">営業時間</h3>
                <p className="text-slate-600">平日 9:00-18:00</p>
              </div>
            </div>
          </div>

          <a 
            href="/contact" 
            className="block w-full bg-slate-800 text-white text-center py-4 rounded-lg font-semibold hover:bg-slate-700 transition-colors cursor-pointer whitespace-nowrap"
          >
            お問い合わせフォームへ
          </a>
        </div>
      </div>
    </section>
  );
}
