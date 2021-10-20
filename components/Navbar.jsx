import styles from '../styles/Navbar.module.scss'
import Link from 'next/link'

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </div>
            <div>
                <Link href="/top">
                    <a>Top</a>
                </Link>
            </div>
            <div>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </div>
        </div>
    )
}

export default Navbar