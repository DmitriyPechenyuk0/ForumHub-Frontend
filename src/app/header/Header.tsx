import styles from "./header.module.css";
import { ICONS } from "../../shared";
import { Link } from "react-router-dom";

export function Header() {
	return (
		<header className={styles.header}>
			<nav className={styles.navHeader}>
				<Link to="/">
					<ICONS.Logo className={styles.logo} />
				</Link>
				<div className={styles.rightHeaderContent}>
					<div className={styles.postMenu}>
						<p>Posts</p>
						<ICONS.ArrowDown/>
					</div>
					<div className={styles.switchLang}>
						<ICONS.FlagOfUkraine className={styles.currentLangFlag} />{" "}
						<ICONS.ArrowDown className={styles.arrowDown} />
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
