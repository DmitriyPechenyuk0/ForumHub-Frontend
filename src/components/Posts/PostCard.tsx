import { ICONS } from "../../shared";
import styles from "./css/postCard.module.css";
import { Post, PostStr } from "../../shared/types";


export function PostCard(props: PostStr) {
	return (
		<div className={styles.postCard}>
			<div className={styles.imageAndTextDiv}>
				<ICONS.Dnipro />
				<div>
					<p className={styles.headP}>{props.title}</p>
					<p className={styles.descP}>{props.shortDescription}</p>
				</div>
			</div>
			<div className={styles.tagAndLikesDiv}>
				<div className={styles.tagsDiv}>
					<ICONS.Tag />
					<p className={styles.tagsP}>{props.tags}</p>
				</div>
				<div className={styles.likesDiv}>
					<ICONS.Like />
					<p>{props.likes}</p>
				</div>
			</div>
		</div>
	);
}
