import StudyLayout from '@/components/templates/StudyLayout';
import CodeSandbox from '@/components/atoms/CodeSandbox';

export default function useContext() {
  return (
    <StudyLayout title="04. UseContext" sideMenuId="useContext">
      <h3 className="font-bold text-xl">概要</h3>
      <p>コンテキスト（グローバルな状態）を利用するフック</p>
      <p>利用シーン：テーマの切り替え、認証情報の管理</p>
      <h3 className="font-bold text-xl mt-10">基本的な使い方</h3>
      <p>
        useContext を使うことで、コンポーネント間でデータを簡単に共有できる。
        <br />
        Props バケツリレーを避けてグローバルな状態管理を実現する
      </p>
      <CodeSandbox id="l97jm8" className="mt-10"></CodeSandbox>
    </StudyLayout>
  );
}
