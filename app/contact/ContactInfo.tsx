
'use client';

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: 'ri-mail-line',
      title: 'メールでのお問い合わせ',
      info: 'info@draftie.ai',
      action: 'mailto:info@draftie.ai'
    }
  ];

  const faqs = [
    {
      question: '請求項は作成できますか？',
      answer: 'はい。Draftie Ideaでは、アイデアから請求項を生成させることができます。'
    },
    {
      question: '明細書の作成は対話しながらですか？',
      answer: 'いいえ。Draftie Documentでは、請求項から完成した明細書を生成します。'
    },
    {
      question: '図面は作成できますか？',
      answer: 'はい。Draftie Documentでは、請求項から明細書とともに図面も生成します。'
    },
    {
      question: '作成された明細書の修正はできますか？',
      answer: 'はい。手動でご修正いただけます。'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-xl font-bold text-slate-900 mb-6">
          その他のお問い合わせ方法
        </h3>
        
        <div className="space-y-6">
          {contactMethods.map((method, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 hover:bg-slate-50 rounded-lg transition-colors">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className={`${method.icon} text-slate-700 text-xl`}></i>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 mb-1">{method.title}</h4>
                <p className="text-slate-700 font-medium">
                  {method.action ? (
                    <a href={method.action} className="hover:text-slate-800 cursor-pointer">
                      {method.info}
                    </a>
                  ) : (
                    method.info
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-xl font-bold text-slate-900 mb-6">
          よくあるご質問
        </h3>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-slate-100 pb-6 last:border-b-0">
              <h4 className="font-semibold text-slate-900 mb-3 flex items-start">
                <i className="ri-question-line text-slate-700 mr-2 mt-1 flex-shrink-0"></i>
                {faq.question}
              </h4>
              <p className="text-slate-600 leading-relaxed ml-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
