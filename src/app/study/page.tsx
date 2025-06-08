import StudyLayout from '@/components/templates/StudyLayout';
import CodeSandbox from '@/components/atoms/CodeSandbox';

export default function Study() {
  return (
    <StudyLayout title="React Hooks 全19種の解説とサンプル">
      <div className="flex items-center mt-5">
        <h2 className="font-bold text-2xl">はじめに</h2>
      </div>
      <hr className="mb-5" />
      <p>
        Reactを勉強するとまず最初に勉強するのがuseStateなどのHooksだったと思います。
        <br />
        useStateやuseEffectなどは利用する場面が多く慣れている方も多いと思いますが、その他のHooksはどうでしょうか？そもそも名前すら知らないというHooksがたくさんあるかと思います。
        <br />
        その中には利用することでパフォーマンスを向上させたり、ステートを簡単に扱えるようになるものなど便利なものがたくさん用意されています。
        <br />
        React19の登場でuseActionStateやuseOptimisticなど絶対に覚えて活用していきたい重要なHooksも登場しております。
        <br />
        最後まで読めばどのタイミングでどのHooksを選択すればよいかわかるようになるので、よりReactを使いこなせるようになり差別化できるかと思います。
      </p>
      <h3 className="font-bold text-xl mt-10">対象者</h3>
      <ul>
        <li>Reactを勉強し始めた方</li>
        <li>もっとReactを深く理解したい方</li>
        <li>新しいHooksを理解したい方</li>
        <li>短時間で学びたい方</li>
      </ul>

      <div className="flex items-center mt-20">
        <h2 className="font-bold text-2xl">01. UseState</h2>
      </div>
      <hr className="mb-5" />
      <h3 className="font-bold text-xl">概要</h3>
      <p>状態(State)を管理するための最も基本的なフック</p>
      <p>利用シーン：フォーム入力、カウンター、ボタンの切り替え</p>
      <h3 className="font-bold text-xl mt-10">基本的な使い方</h3>
      <p>
        useState
        を使って状態管理をすると、ステートが変更される度に再レンダリングが行われ、画面が更新される。
      </p>
      <CodeSandbox id="tx3f8k" className="mt-10"></CodeSandbox>

      <div className="flex items-center mt-20">
        <h2 className="font-bold text-2xl">02. UseEffect</h2>
      </div>
      <hr className="mb-5" />
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

      <div className="flex items-center mt-20">
        <h2 className="font-bold text-2xl">03. UseReducer</h2>
      </div>
      <hr className="mb-5" />
      <h3 className="font-bold text-xl">概要</h3>
      <p>複雑な状態管理を行うためのフック</p>
      <p>
        利用シーン：大規模なフォーム管理、状態管理ライブラリの代替
        <br />
        <span className="text-red-600">(現在はあまり利用されない)</span>
      </p>
      <h3 className="font-bold text-xl mt-10">基本的な使い方</h3>
      <p>
        useReducer は useState
        よりも柔軟な状態管理を提供し、アクションという概念で状態更新を整理できる。
        <br />
        状態更新ロジックを1箇所(reducer関数に纏められる)
      </p>
      <p>
        現在では、リデューサー関数・アクション定義 が必要になり、コードが冗長になる為、
        <br />
        useContext + useState の組み合わせ の方が簡潔で利用されることが多い。
      </p>
      <CodeSandbox id="cjfk8y" className="mt-10"></CodeSandbox>

      <div className="flex items-center mt-20">
        <h2 className="font-bold text-2xl">04. UseContext</h2>
      </div>
      <hr className="mb-5" />
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

      <div className="flex items-center mt-20">
        <h2 className="font-bold text-2xl">05. UseRef</h2>
      </div>
      <hr className="mb-5" />
      <h3 className="font-bold text-xl">概要</h3>
      <p>値を保持しつつ再レンダリングを発生させないフック</p>
      <p>利用シーン：DOM要素の参照、過去の値の保持</p>
      <h3 className="font-bold text-xl mt-10">基本的な使い方</h3>
      <p>useRef を使うと、再レンダリングなしで値を維持できるため、パフォーマンスが向上する。</p>
      <CodeSandbox id="xsmyry" className="mt-10"></CodeSandbox>

      <div className="flex items-center mt-20">
        <h2 className="font-bold text-2xl">06. UseMemo</h2>
      </div>
      <hr className="mb-5" />
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
