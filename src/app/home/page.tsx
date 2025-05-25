'use client';
import SessionAlert from '@/components/atoms/SessionAlert';
import LaraECLayout from '@/components/templates/LaraECLayout';
import AuthCheck from '@/components/interactions/AuthCheck';

const Component = () => (
  <LaraECLayout title="ダッシュボード">
    <div className="bg-white p-6 rounded-md shadow-md">
      <SessionAlert target="status" />
      ログインが成功しました！
    </div>
  </LaraECLayout>
);

const Home = () => {
  return <AuthCheck component={<Component />} />;
};

export default Home;
