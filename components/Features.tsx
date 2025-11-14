
'use client';

export default function Features() {
  const features = [
    {
      icon: 'ri-brain-line',
      title: 'AI技術分析',
      description: '最新の機械学習アルゴリズムで技術動向を予測'
    },
    {
      icon: 'ri-lightbulb-line',
      title: '5分発明検討時間',
      description: 'AIが短時間で発明の可能性を分析・検討'
    },
    {
      icon: 'ri-file-text-line',
      title: '10分書類作成時間',
      description: '高品質な特許書類を短時間で自動生成'
    },
    {
      icon: 'ri-cloud-line',
      title: 'クラウド連携',
      description: 'いつでもどこでも安全にアクセス'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            なぜDraftieが選ばれるのか
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            最先端AI技術と特許の専門知識を融合し、従来にない支援価値を提供
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:transform hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-800 transition-colors">
                <i className={`${feature.icon} text-slate-800 group-hover:text-white text-2xl transition-colors`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6">
                特許戦略をもっと身近に
              </h3>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                複雑で専門的だった特許業務を、AIツールでサポート。中小企業から大企業まで、すべての組織がより効率的な知的財産活動を実現できる環境を提供します。
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <i className="ri-check-line text-emerald-600"></i>
                  <span className="text-slate-700">コスト削減</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="ri-check-line text-emerald-600"></i>
                  <span className="text-slate-700">品質向上</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="ri-check-line text-emerald-600"></i>
                  <span className="text-slate-700">スピード向上</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://static.readdy.ai/image/f119cb5900d78dd215c8812732671709/46e10d86552e13dbb589b7d5210f49fe.png"
                alt="特許戦略AI支援"
                className="w-full h-80 object-cover object-top rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
