'use client';
import SessionAlert from '@/components/atoms/SessionAlert';
import BasicLayout from '@/components/templates/BasicLayout';
import AuthCheck from '@/components/interactions/AuthCheck';
import { User } from '@/states/auth';

const Component = () => (
  <BasicLayout title="ダッシュボード">
    <div className="bg-white p-6 rounded-md shadow-md">
      <SessionAlert target="status" />
      ログインが成功しました！
    </div>
  </BasicLayout>
);

const Home = () => {
  // TODO 認証情報を渡す
  return <AuthCheck user={{} as User} component={<Component />} />;
};

export default Home;
