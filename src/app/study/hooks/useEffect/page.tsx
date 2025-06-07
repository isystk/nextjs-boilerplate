import BasicLayout from '@/components/templates/StudyLayout';
import CodeSandbox from '@/components/atoms/CodeSandbox';

export default function useEffect() {
  return (
    <BasicLayout title="02. UseEffect" sideMenuId="useEffect">
      <h3 className="font-bold text-xl">概要</h3>
      <p>副作用（データ取得やイベント処理など）を実行するフック</p>
      <p>
        利用シーン：APIリクエスト、イベントリスナーの登録・解除
        <br />
        <span className="text-red-600">(現在はあまり利用されない)</span>
      </p>
      <h3 className="font-bold text-xl mt-10">基本的な使い方</h3>
      <p>
        useEffect を使うことで、コンポーネントのマウント・アンマウント・更新時に処理を実行できる。
        <br />
        API を呼び出す用途においては、Next.js を使用してる場合は、React Server
        Components（RSC）を利用するのが最適です。
        <br />
        Next.js
        を使っていない場合や、クライアントでデータ取得・キャッシュを管理したい場合は、useEffect
        の代わりに SWR や React Query を使うのがベストです。
        <br />
        また、サーバーコンポーネントの場合は、useを利用するとPromiseを直接利用することが出来て非常に便利です。
        <br />
        外部ストアの状態を管理する用途においては、useState + useSyncExternalStore
        を利用することでより適切に状態を管理できます。
        <br />
      </p>
      <CodeSandbox id="useeffect-79t3sx" className="mt-10"></CodeSandbox>
    </BasicLayout>
  );
}
