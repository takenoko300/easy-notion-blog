import DocumentHead from '../components/document-head'
// hide 20220707
// import ExtLink from '../components/ext-link'
// hide 20220707
import styles from '../styles/page.module.css'

const RenderPage = () => (
  <div className={styles.container}>
    <DocumentHead />

    <div>
      {/* <h1>techPeck</h1> */}

      <h2>About</h2>
      <p>機械、電気、プログラミングなどで遊び、学んだ内容を発信します。<br></br>
      ただし、今はp5.jsにハマっているため、その内容ばかり。</p>
    </div>

    <div>
      <h2>Profile</h2>
      <p>メーカーに勤務する機械系エンジニアです。<br></br>
      プログラミングは趣味ですが、副業できるレベルを目指しています。</p>

      {/* hide 20220707 */}
      {/* <p>
        easy-notion-blog powered by{' '}
        <ExtLink href="https://github.com/otoyo/easy-notion-blog">
          otoyo/easy-notion-blog
        </ExtLink>
      </p> */}
      {/* hide 20220707 */}
    </div>
  </div>
)

export default RenderPage
