import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head />
        {/* add 20220707 */}
        <link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+Antique:wght@500&display=swap" rel="stylesheet"></link>
        {/* add 20220707 */}

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
