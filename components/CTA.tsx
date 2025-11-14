
'use client';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          特許戦略を変革しませんか？
        </h2>
        <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
          無料デモで実際の機能をお試しください。<br />
          あなたの特許戦略がどれほど効率化されるかを実感してください。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="bg-white text-slate-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-50 transition-colors shadow-lg whitespace-nowrap cursor-pointer">
            <i className="ri-play-circle-line mr-2"></i>
            無料デモを開始
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-slate-800 transition-colors whitespace-nowrap cursor-pointer">
            <i className="ri-calendar-line mr-2"></i>
            個別相談を予約
          </button>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 text-center">
          <div className="text-slate-300">
            <i className="ri-time-line text-3xl mb-3 block"></i>
            <h4 className="font-semibold mb-2">即座に開始</h4>
            <p className="text-sm">アカウント作成から5分で利用開始</p>
          </div>
          <div className="text-slate-300">
            <i className="ri-lightbulb-line text-3xl mb-3 block"></i>
            <h4 className="font-semibold mb-2">簡単に使える</h4>
            <p className="text-sm">直感的なインターフェースで誰でも使えます</p>
          </div>
          <div className="text-slate-300">
            <i className="ri-shield-check-line text-3xl mb-3 block"></i>
            <h4 className="font-semibold mb-2">安全・安心</h4>
            <p className="text-sm">企業級セキュリティで情報を保護</p>
          </div>
        </div>
      </div>
    </section>
  );
}
