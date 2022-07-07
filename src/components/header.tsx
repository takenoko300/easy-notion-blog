import Link from 'next/link'
import { useRouter } from 'next/router'

// hide 20220707
// import { SITE_TITLE } from './document-head'
// hide 20220707

import styles from '../styles/header.module.css'

interface NavItem {
  label: string
  path: string
}

const Header = () => {
  const { asPath } = useRouter()

  const navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog' },
  ]

  return (
    <header className={styles.header}>
      <h1>
        <Link href="/" passHref>
          {/* add 20220707 */}
          <div className={styles.logo}></div>
          {/* add 20220707 */}

          {/* hide 20220707 */}
          {/* <a>{SITE_TITLE}</a> */}
          {/* hide 20220707 */}
        </Link>
      </h1>

      <ul>
        {navItems.map(({ label, path }) => (
          <li key={label}>
            <Link href={path} passHref>
              <a className={asPath === path ? 'active' : null}>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
