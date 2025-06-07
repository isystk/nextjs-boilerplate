import StudyLayout from '@/components/templates/StudyLayout';
import CodeSandbox from '@/components/atoms/CodeSandbox';

export default function useState() {
  return (
    <StudyLayout title="01. UseState" sideMenuId="useState">
      <h3 className="font-bold text-xl">概要</h3>
      <p>状態(State)を管理するための最も基本的なフック</p>
      <p>利用シーン：フォーム入力、カウンター、ボタンの切り替え</p>
      <h3 className="font-bold text-xl mt-10">基本的な使い方</h3>
      <p>
        useState
        を使って状態管理をすると、ステートが変更される度に再レンダリングが行われ、画面が更新される。
      </p>
      <CodeSandbox id="tx3f8k" className="mt-10"></CodeSandbox>
    </StudyLayout>
  );
}
