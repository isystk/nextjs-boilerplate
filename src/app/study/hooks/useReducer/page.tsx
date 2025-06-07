import StudyLayout from '@/components/templates/StudyLayout';
import CodeSandbox from '@/components/atoms/CodeSandbox';

export default function UseReducer() {
  return (
    <StudyLayout title="03. UseReducer" sideMenuId="useReducer">
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
    </StudyLayout>
  );
}
