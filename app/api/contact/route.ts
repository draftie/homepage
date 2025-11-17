import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, subject, message } = body;

    // 入力検証
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'Required fields are missing' },
        { status: 400 }
      );
    }

    // メールアドレスの簡易検証
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const adminEmail = process.env.ADMIN_EMAIL || 'info@draftie.ai';
    const fromEmail = process.env.FROM_EMAIL || 'contact@draftie.ai';

    // お問い合わせ内容のラベル変換
    const subjectLabels: { [key: string]: string } = {
      pricing: '料金・プランについて',
      technical: '技術的なお問い合わせ',
      partnership: 'パートナーシップについて',
      other: 'その他',
    };

    const subjectLabel = subjectLabels[subject] || subject;
    const timestamp = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });

    // 1. 管理者への通知メール
    const adminEmailContent = `【Draftie】新しいお問い合わせ

お問い合わせがありました。

━━━━━━━━━━━━━━━━━━━━
■ お問い合わせ情報
━━━━━━━━━━━━━━━━━━━━
お名前: ${name}
メールアドレス: ${email}
会社名: ${company || '（未入力）'}
電話番号: ${phone || '（未入力）'}
お問い合わせ内容: ${subjectLabel}

━━━━━━━━━━━━━━━━━━━━
■ 詳細・ご要望
━━━━━━━━━━━━━━━━━━━━
${message}

━━━━━━━━━━━━━━━━━━━━
送信日時: ${timestamp}
`;

    // 2. お問い合わせ者への自動返信メール
    const userEmailContent = `${name} 様

この度はDraftieにお問い合わせいただき、誠にありがとうございます。

以下の内容でお問い合わせを承りました。
担当者より2営業日以内にご連絡させていただきます。

━━━━━━━━━━━━━━━━━━━━
■ お問い合わせ内容
━━━━━━━━━━━━━━━━━━━━
お名前: ${name}
メールアドレス: ${email}
会社名: ${company || '（未入力）'}
お問い合わせ内容: ${subjectLabel}

詳細・ご要望:
${message}

━━━━━━━━━━━━━━━━━━━━

今しばらくお待ちくださいませ。

--
Draftie
info@draftie.ai
https://draftie.ai
`;

    // メール送信（2通）
    const [adminEmailResult, userEmailResult] = await Promise.all([
      // 管理者への通知
      resend.emails.send({
        from: fromEmail,
        to: adminEmail,
        subject: '【Draftie】新しいお問い合わせ',
        text: adminEmailContent,
      }),
      // お問い合わせ者への自動返信
      resend.emails.send({
        from: fromEmail,
        to: email,
        subject: '【Draftie】お問い合わせありがとうございます',
        text: userEmailContent,
      }),
    ]);

    console.log('Admin email sent:', adminEmailResult);
    console.log('User email sent:', userEmailResult);

    return NextResponse.json({
      success: true,
      message: 'お問い合わせを受け付けました'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'メール送信に失敗しました。しばらく後でもう一度お試しください。'
      },
      { status: 500 }
    );
  }
}
