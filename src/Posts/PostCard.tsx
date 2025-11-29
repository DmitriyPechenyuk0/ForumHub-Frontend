import styles from './css/postCard.module.css'
import { Post, PostStr } from './PostList'
import TagIcon from '../assets/svg/Tag.svg';
import LikeIcon from '../assets/svg/Like.svg';
import PostIcon from '../assets/svg/Dnipro.svg';

export function PostCard(props: PostStr){
    return (
        <div className={styles.postCard} >
            <div className={styles.imageAndTextDiv} >
                <img src={PostIcon}/>
                <div>
                    <p className={styles.headP} >{props.title}</p>
                    <p className={styles.descP}>{props.shortDescription}</p>
                </div>
            </div>
            <div className={styles.tagAndLikesDiv}>
                <div className={styles.tagsDiv} >
                    <img src={TagIcon}/>
                    <p className={styles.tagsP} >{props.tags}</p>
                </div>
                <div className={styles.likesDiv} >
                    <img src={LikeIcon}/>
                    <p>{props.likes}</p>
                </div>
            </div>
        </div>
    )
}