import { ICONS } from "../../shared";
import styles from "./footer.module.css";

export function Footer() {
	return (
		<footer className={styles.footer}>
			<nav>
				<a href="https://github.com/DmitriyPechenyuk0"><ICONS.Github/></a>
				<a href="https://t.me/DmytroPechenyuk"><ICONS.Telegram/></a>
			</nav>
		</footer>
	);
}
