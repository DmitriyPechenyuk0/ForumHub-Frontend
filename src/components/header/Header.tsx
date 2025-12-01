import styles from './header.module.css'
import logo from '../../assets/svg/Logo.svg';
import UAFlag from '../../assets/svg/Flag_of_Ukraine.svg';
import downArrow from '../../assets/svg/arrow down.svg';

export function Header(){
    return(
        <header className={styles.header}>
            <nav className={styles.navHeader}>
                <a href="/">
                    <img src={logo} className={styles.logo}/>
                </a>
                <div className={styles.rightHeaderContent}>
                    <div className={styles.postMenu}><p>Posts</p><img src={downArrow} /></div>
                    <div className={styles.switchLang}><img src={UAFlag} className={styles.currentLangFlag}/> <img src={downArrow} className={styles.arrowDown} /></div>
                    <div className={styles.rightHeaderUser}>
                        <a href="/user/login" className={styles.signin}><p>Sign in</p></a>
                        <a href='/user/register' className={styles.signup}><p>Sign up</p></a>
                    </div>
                </div>
            </nav>
        </header>
    )
}