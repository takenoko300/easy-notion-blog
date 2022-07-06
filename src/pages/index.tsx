import DocumentHead from '../components/document-head'
import ExtLink from '../components/ext-link'
import styles from '../styles/page.module.css'
import Image from 'next/image'

const RenderPage = () => (
  <div className={styles.container}>
    <DocumentHead />

    <div>
      <h1>techPeck</h1>


      {/* <h2>Welcome!</h2> */}
      <p>Your easy-notion-blog deployed successfully!</p>
      <p>Have fun!</p>
      <p>
        easy-notion-blog powered by{' '}
        <ExtLink href="https://github.com/otoyo/easy-notion-blog">
          otoyo/easy-notion-blog
        </ExtLink>
      </p>
    </div>
  </div>
)

export default RenderPage
