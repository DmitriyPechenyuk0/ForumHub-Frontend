import { useState, useEffect } from "react";
import styles from "./css/postList.module.css";
import { PostCard } from "./PostCard";
import { IPostList, ITag, Post } from "../../shared/types";
import { ICONS } from "../../shared";

export function PostList({ postArray, preloader }: IPostList) {
	
	return (
		<div className={styles.listOfPosts}>
			<div>
				{preloader
				? 
				(<div className={styles.preloaderpostsDiv}><ICONS.preloader></ICONS.preloader></div>)
				: (
					postArray?.map((post) => {
						let postTags: string[] = post.tags?.map((tagRelation) => tagRelation.tag.tag) || [];

						return (
							<PostCard
								key={post.id}
								title={post.title}
								shortDescription={post.description}
								image={post.image}
								tags={postTags.join(", ")}
								likes={post.likes}
							></PostCard>
						);
					})
				)}
			</div>
		</div>
	);
}
