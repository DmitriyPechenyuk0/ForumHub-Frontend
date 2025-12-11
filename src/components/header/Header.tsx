import styles from "./header.module.css";
import logo from "../../assets/svg/Logo.svg";
import UAFlag from "../../assets/svg/Flag_of_Ukraine.svg";
import downArrow from "../../assets/svg/arrow down.svg";
import { Link } from "react-router-dom";

export function Header() {
	return (
		<header className={styles.header}>
			<nav className={styles.navHeader}>
				<Link to="/">
					<img src={logo} className={styles.logo} />
				</Link>
				<div className={styles.rightHeaderContent}>
					<div className={styles.postMenu}>
						<p>Posts</p>
						<img src={downArrow} />
					</div>
					<div className={styles.switchLang}>
						<img src={UAFlag} className={styles.currentLangFlag} />{" "}
						<img src={downArrow} className={styles.arrowDown} />
					</div>
					<div className={styles.rightHeaderUser}>
						<Link to="/user/login" className={styles.signin}>
							<p>Sign in</p>
						</Link>
						<Link to="/user/register" className={styles.signup}>
							<p>Sign up</p>
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
}
