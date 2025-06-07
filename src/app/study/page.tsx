import StudyLayout from '@/components/templates/StudyLayout';

export default function Study() {
  return (
    <StudyLayout title="はじめに" sideMenuId="first">
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
    </StudyLayout>
  );
}
