import StudyLayout from '@/components/templates/StudyLayout';
import CodeSandbox from '@/components/atoms/CodeSandbox';

export default function useMemo() {
  return (
    <StudyLayout title="06. UseMemo" sideMenuId="useMemo">
      <h3 className="font-bold text-xl">概要</h3>
      <p>計算結果をメモ化し、不要な再計算を防ぐフック</p>
      <p>
        利用シーン：パフォーマンス最適化、重い計算処理
        <br />
        <span className="text-red-600">(React19以降を利用している場合は不要)</span>
      </p>
      <h3 className="font-bold text-xl mt-10">基本的な使い方</h3>
      <p>
        useMemo を使うと、依存関係が変わらない限り、前回の計算結果がキャッシュされて再利用できる。
        <br />
        React19以降は自動的にメモ化される為、明示的な使用は不要となる。
      </p>
      <CodeSandbox id="s7zrg2" className="mt-10"></CodeSandbox>
    </StudyLayout>
  );
}
