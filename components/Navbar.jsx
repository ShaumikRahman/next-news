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
                <Link href="/about">
                    <a>About</a>
                </Link>
            </div>
            <div>
                <Link href="#">
                    <a onClick={() => {
                        document.getElementById('main').classList.toggle('dark');

                        if (document.getElementById('main').classList.contains('dark')) {
                            localStorage.setItem('dark', 'true');
                        } else {
                            localStorage.setItem('dark', 'false');
                        }
                    }}>
                        Theme
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Navbar