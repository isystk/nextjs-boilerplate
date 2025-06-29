'use client';
import { Url } from '@/constants/url';
import Link from 'next/link';
import LaraECLayout from '@/components/templates/LaraECLayout';

const ContactComplete = () => {
  return (
    <LaraECLayout title="お問い合わせ完了">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="font-bold text-xl text-center">お問い合わせが完了しました</h2>
        <div className="text-center mt-10">
          <p className="mt-5">お問い合わせが完了しました。担当者から連絡があるまでお待ち下さい。</p>
          <Link href={Url.TOP} className="btn btn-primary mt-10">
            商品一覧へ戻る
          </Link>
        </div>
      </div>
    </LaraECLayout>
  );
};

export default ContactComplete;
