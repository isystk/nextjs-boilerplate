import StudyLayout from '@/components/templates/StudyLayout';
import CodeSandbox from '@/components/atoms/CodeSandbox';

export default function useRef() {
  return (
    <StudyLayout title="05. UseRef" sideMenuId="useRef">
      <h3 className="font-bold text-xl">概要</h3>
      <p>値を保持しつつ再レンダリングを発生させないフック</p>
      <p>利用シーン：DOM要素の参照、過去の値の保持</p>
      <h3 className="font-bold text-xl mt-10">基本的な使い方</h3>
      <p>useRef を使うと、再レンダリングなしで値を維持できるため、パフォーマンスが向上する。</p>
      <CodeSandbox id="xsmyry" className="mt-10"></CodeSandbox>
    </StudyLayout>
  );
}
