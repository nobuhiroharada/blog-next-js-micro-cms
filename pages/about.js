import Hero from 'components/hero'
import Container from 'components/container'
import Meta from 'components/meta'

export default function About() {
  return (
    <Container>
      <Meta pageTitle="About" pageDesc="About development activities" />
      <Hero title="About" subtitle="aboutページ" />
      <h3 className="text-2xl font-bold mt-10 mb-3">名前</h3>
      <p>原田順啓(はらだのぶひろ)</p>
      <h3 className="text-2xl font-bold mt-6 mb-3">スキル</h3>
      <ul>
        <li>・言語：PHP, JavaScript</li>
        <li>・フレームワーク：Laravel, Zend Framework, CakePHP</li>
        <li>・データベース：MySQL</li>
        <li>・OS：macOS, Linux, Windows</li>
        <li>・その他：Git</li>
      </ul>
      <h3 className="text-2xl font-bold mt-6 mb-3">資格</h3>
      <table className="border-collapse border-1 border-black">
        <thead>
          <tr>
            <th className="border border-black p-2">年月</th>
            <th className="border border-black p-2">内容</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black p-2">2010年8月 </td>
            <td className="border border-black p-2">ITパスポート</td>
          </tr>
          <tr>
            <td className="border border-black p-2">2021年4月 </td>
            <td className="border border-black p-2">基本情報技術者</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
