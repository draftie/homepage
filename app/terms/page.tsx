'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TermsOfService() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="py-16 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              利用規約
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Draftieサービス利用規約
            </p>
          </div>
        </section>

        <div className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="prose prose-slate max-w-none">

              <section className="mb-12">
                <p className="text-slate-600 mb-4">
                  株式会社Draftie（以下「当社」という。）は、当社が開発・運営する生成AIを利用した知的財産関連業務支援サービス（以下「本件システム及び本件サービス」という。）の提供に際し、本利用規約を定める。本件システム及び本件サービスを利用する者（以下「利用者」という。）は、本利用規約に同意したうえで本件システム及び本件サービスを利用するものとする。
                </p>
                <p className="text-slate-600 mb-6">
                  本利用規約は、当社がオンライン上で提示するその他の規定（料金表、プライバシーポリシー等）とともに本件システム及び本件サービスの利用条件を構成する。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">第1条（目的）</h2>
                <p className="text-slate-600 mb-4">
                  1. 本利用規約は、当社が利用者に対し本件システム及び本件サービスを提供するにあたり、当社と利用者との間の権利義務関係を定めるものである。
                </p>
                <p className="text-slate-600 mb-4">
                  2. 当社及び利用者は、相互の信頼を基礎とし、信義誠実の原則に従って本利用規約を履行する。
                </p>
                <p className="text-slate-600 mb-4">
                  3. 本件サービスの利用契約（以下「本契約」という。）は、利用者がオンライン申込画面その他当社所定の方法により申込みを行い、当社がこれを承諾したときに成立する。
                </p>
                <p className="text-slate-600 mb-4">
                  4. 当社と利用者が別途契約書（以下「個別契約」という。）を締結した場合、当該個別契約において本利用規約と異なる定めがあるときは、当該定めが本利用規約に優先して適用される。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">第2条（定義）</h2>
                <p className="text-slate-600 mb-4">
                  本利用規約において使用する用語の定義は次のとおりとする。
                </p>
                <ol className="list-decimal list-inside space-y-3 text-slate-600 ml-4">
                  <li><strong>本件システム</strong><br />
                    当社が開発し運営する生成AIを活用した知財業務支援システム（特許出願書類生成支援、アイデア創出支援、その他関連機能を含む）。
                  </li>
                  <li><strong>本件サービス</strong><br />
                    第8条に定める当社が利用者に提供する各種サービス。
                  </li>
                  <li><strong>利用者</strong><br />
                    本利用規約に同意し、オンライン申込により本契約を締結した者。
                  </li>
                  <li><strong>個別ユーザー</strong><br />
                    法人利用者が指定し、本件システムを利用する者。
                  </li>
                  <li><strong>利用者等</strong><br />
                    利用者及び個別ユーザーの総称。
                  </li>
                  <li><strong>本データ</strong><br />
                    利用者等が本件システム及び本件サービスにアップロード又は入力するデータ（発明概要、技術資料、特許公報、非公開発明情報、図面、契約書、メモ等を含む）。
                  </li>
                  <li><strong>生成データ</strong><br />
                    本件システム及び本件サービスにより生成されたデータ（明細書案、請求項案、調査レポート、翻訳、アイデアリスト、解析レポート、その他すべての生成物）。
                  </li>
                  <li><strong>当社既存知的財産権</strong><br />
                    当社が保有するプログラム、モデル、データセット、プロンプト、アルゴリズム、ノウハウその他一切の知的財産権。
                  </li>
                </ol>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">第3条（規約の変更）</h2>
                <p className="text-slate-600 mb-4">
                  1. 当社は、次の場合、利用者の同意なく本利用規約を変更することができる。
                </p>
                <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-8">
                  <li>利用者の一般の利益に適合するとき</li>
                  <li>変更の必要性・内容の相当性があり合理的と認められるとき</li>
                </ol>
                <p className="text-slate-600 mt-4 mb-4">
                  2. 当社は、変更後の本利用規約の効力発生日及び内容をウェブサイト等で周知又は利用者に通知する。
                </p>
                <p className="text-slate-600 mb-4">
                  3. 利用者が本利用規約変更後に本件サービスを利用した場合、当該変更に同意したものとみなす。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">第4条（登録）</h2>
                <p className="text-slate-600 mb-4">
                  1. 利用希望者は、本利用規約に同意のうえ、オンライン申込画面に必要事項を入力する方法により本件サービスの利用申込みを行う。
                </p>
                <p className="text-slate-600 mb-4">
                  2. 当社は、利用登録の可否を審査し、登録を承認した場合には利用希望者に通知する。
                </p>
                <p className="text-slate-600 mb-4">
                  3. 利用者は、登録情報に変更が生じた場合は速やかに当社に通知する。
                </p>
                <p className="text-slate-600 mb-4">
                  4. 当社は、以下の場合、利用登録を拒否または取消すことができる。
                </p>
                <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-8">
                  <li>提供情報に虚偽があるとき</li>
                  <li>過去に当社のサービス利用停止等の処分を受けたとき</li>
                  <li>反社会的勢力等であると判明したとき</li>
                  <li>その他当社が不適当と判断したとき</li>
                </ol>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">第5条（利用許諾）</h2>
                <p className="text-slate-600 mb-4">
                  1. 当社は、本契約期間中、利用者に対し本件システムの非独占的利用権を付与する。
                </p>
                <p className="text-slate-600 mb-4">
                  2. 当社は、本件システムの全部又は一部の利用を第三者に許諾できる。
                </p>
                <p className="text-slate-600 mb-4">
                  3. 本件システムに関する知的財産権は当社または権利者に帰属する。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">第6条（禁止事項）</h2>
                <p className="text-slate-600 mb-4">
                  利用者等は、以下の行為をしてはならない。
                </p>
                <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4">
                  <li>本件システムの改ざん、解析、リバースエンジニアリング等</li>
                  <li>本利用規約で許されていない方法で本件サービスを利用する行為</li>
                  <li>第三者の知的財産権・プライバシー権等を侵害する行為</li>
                  <li>権利者の許諾なく未公開発明・機密情報を入力する行為</li>
                  <li>本件システムを弁理士業務その他の法的助言に代替する目的で利用する行為</li>
                  <li>本件システム・当社の信用を毀損する行為</li>
                  <li>本件システムの再販売又は第三者への無断利用許諾</li>
                  <li>その他当社が不適切と判断する行為</li>
                </ol>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">第7条（料金）</h2>
                <p className="text-slate-600 mb-4">
                  1. 本件サービスの料金及び支払方法は、オンライン申込画面に表示されるプラン内容による。
                </p>
                <p className="text-slate-600 mb-4">
                  2. 利用者が料金を支払わない場合、支払日翌日から年14.6％の遅延損害金を請求できる。
                </p>
                <p className="text-slate-600 mb-4">
                  3. 既払いの料金は返金しない。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">第8条（本件サービスの内容）</h2>
                <p className="text-slate-600 mb-4">
                  1. 本件サービスには以下が含まれる。
                </p>
                <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-8">
                  <li>本件システムの利用</li>
                  <li>本件システムの利用に関する助言</li>
                  <li>本件システムの導入支援</li>
                  <li>前各号に付随する業務</li>
                </ol>
                <p className="text-slate-600 mt-4">
                  2. 当社は法的助言（特許性判断、鑑定、拒絶理由の有無判断等）を提供するものではない。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">第9条（生成データの取扱い）</h2>
                <p className="text-slate-600 mb-4">
                  1. 生成データの知的財産権は利用者に帰属する。
                </p>
                <p className="text-slate-600 mb-4">
                  2. 利用者は生成データの適法性、正確性、内容の妥当性を自ら確認するものとする。
                </p>
                <p className="text-slate-600 mb-4">
                  3. 当社は、個人情報を除き、本データ及び生成データを本件サービスの改善・学習等に利用できる。ただし、利用者が学習除外設定を契約時に希望した場合はこの限りでない。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">第10条（免責）</h2>
                <p className="text-slate-600 mb-4">
                  1. 当社は、生成データの内容（新規性、進歩性、記載要件等）について保証しない。
                </p>
                <p className="text-slate-600 mb-4">
                  2. 生成データを特許庁等に提出する場合の法的適合性は利用者が確認するものとする。
                </p>
                <p className="text-slate-600 mb-4">
                  3. 本件システムの利用に起因して利用者が被った損害について、当社は故意又は重過失がある場合を除き責任を負わない。
                </p>
                <p className="text-slate-600 mb-4">
                  4. 損害賠償額は、損害発生前6か月間に利用者が当社に支払った金額を上限とする。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">第11条（本件サービスの停止・変更）</h2>
                <p className="text-slate-600 mb-4">
                  1. 当社は、以下の場合、事前通知なく本件サービスの全部又は一部を停止できる。
                </p>
                <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-8">
                  <li>システムの保守点検</li>
                  <li>通信障害等の技術的問題</li>
                  <li>天災地変・不可抗力</li>
                </ol>
                <p className="text-slate-600 mt-4 mb-4">
                  2. 当社は停止による損害について責任を負わない。
                </p>
                <p className="text-slate-600 mb-4">
                  3. 当社は、本件サービスの内容を随時変更できる。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">第12条（解約）</h2>
                <p className="text-slate-600 mb-4">
                  1. 利用者は、当社所定の方法により本契約を解約できる。解約後も既払いの料金は返金されない。
                </p>
                <p className="text-slate-600 mb-4">
                  2. 当社は、利用者等が第6条に該当した場合、事前の催告・通知なく本契約を解約できる。
                </p>
                <p className="text-slate-600 mb-4">
                  3. 当社は、前項により生じた損害を利用者に請求できる。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">第13条（秘密保持）</h2>
                <p className="text-slate-600 mb-4">
                  利用者及び当社は、相手方から提供された秘密情報を秘密として保持し、第三者に開示してはならない。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">第14条（個人情報）</h2>
                <p className="text-slate-600 mb-4">
                  個人情報の取扱いはウェブサイト等に提示する当社のプライバシーポリシーによる。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">第15条（公表）</h2>
                <p className="text-slate-600 mb-4">
                  当社は、利用者名を実績として公表できるものとする。利用者ロゴ等の使用については利用者の事前承諾を得る。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">第16条（譲渡禁止）</h2>
                <p className="text-slate-600 mb-4">
                  利用者は、本契約上の地位又は権利義務を当社の承諾なく第三者に譲渡できない。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">第17条（反社会的勢力の排除）</h2>
                <p className="text-slate-600 mb-4">
                  利用者及び当社は、反社会的勢力に該当しないこと及び関与しないことを保証する。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">第18条（準拠法・管轄）</h2>
                <p className="text-slate-600 mb-4">
                  本利用規約の準拠法は日本法とし、本件サービスに関する紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とする。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">第19条（協議）</h2>
                <p className="text-slate-600 mb-4">
                  本利用規約に定めのない事項及び疑義が生じた事項については、当社及び利用者は誠意をもって協議し解決するものとする。
                </p>
              </section>

              <section className="text-right text-slate-500 text-sm mt-12">
                <p>制定日：2025年11月1日</p>
              </section>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
