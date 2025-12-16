import { PostMain } from "../../components";

import styles from "./post.module.css";

export function PostPage() {
	return (
		<main className={styles.main}>
			<div className={styles.centeredContentRow}>
				<PostMain></PostMain>
			</div>
		</main>
	);
}
