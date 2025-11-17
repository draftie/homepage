'use client';

export default function About() {
  const companyInfo = [
    { label: '会社名', value: '株式会社Draftie' },
    { label: '設立', value: '2025年8月22日' },
    { label: '所在地', value: '〒107-0061 東京都港区北青山1丁目3番1号 アールキューブ青山3階' },
    { label: '事業内容', value: 'AI特許支援サービスの開発・提供' }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            私たちについて
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            AI技術でユーザの知的財産活動を支援します
          </p>
        </div>

        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6">
                私たちのビジョン・ミッション
              </h3>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                「特許戦略をもっと身近に」をビジョンに掲げ、従来の複雑で時間のかかる特許業務をAI技術で効率化し、イノベーションを加速させます。
              </p>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                私たちは、知的財産が企業の競争優位性を左右する重要な資産であると考え、その管理と活用を支援することで、日本の産業界全体の発展に貢献します。
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="ri-lightbulb-line text-slate-800 text-xl mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-slate-800">革新的技術</h4>
                    <p className="text-slate-600">最新のAI技術でユーザの特許業務を支援</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-user-heart-line text-slate-800 text-xl mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-slate-800">お客様第一</h4>
                    <p className="text-slate-600">ユーザビリティを重視したツール開発</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/about-team.png"
                alt="Draftie本社ビル"
                className="w-full h-96 object-cover object-top rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-800 mb-8">会社概要</h3>
          <div className="space-y-6">
            {companyInfo.map((info, index) => (
              <div key={index} className="flex flex-col space-y-1">
                <dt className="text-sm font-semibold text-slate-600">{info.label}</dt>
                <dd className="text-slate-800">{info.value}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
