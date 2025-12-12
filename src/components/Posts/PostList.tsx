import { useState, useEffect } from "react";
import styles from "./css/postList.module.css";
import { PostCard } from "./PostCard";

interface ITag {
	id: number;
	title: string;
}

export interface Post {
	id: number;
	title: string;
	shortDescription: string;
	image: string;
	tags: number[];
	likes?: number;
}
export interface PostStr {
	title: string;
	shortDescription: string;
	image: string;
	tags: string;
	likes?: number;
}
export const tags: ITag[] = [
	{ id: 1, title: "JavaScript" },
	{ id: 2, title: "idk" },
	{ id: 3, title: "Ruby" },
	{ id: 4, title: "C#" },
	{ id: 5, title: "HolyC" },
	{ id: 6, title: "Kotlin" },
	{ id: 7, title: "Bash" },
	{ id: 8, title: "C++" },
	{ id: 9, title: "JavaScript" },
	{ id: 10, title: "idk" },
	{ id: 11, title: "Ruby" },
	{ id: 12, title: "C#" },
	{ id: 13, title: "HolyC" },
	{ id: 14, title: "Kotlin" },
	{ id: 15, title: "Bash" },
	{ id: 16, title: "C++" },
];

export const posts: Post[] = [
	{
		id: 1,
		title: "Cologne Boulevard at night",
		shortDescription:
			"Cologne Boulevard is a boulevard in the center of Dnipro city, running between Dmitry Yavornytsky Avenue and Taras Shevchenko Street. The boulevard marks the border between the Shevchenko and Soborny districts of the city. It was created in 2004 by separating it from Ispolkomovskaya Street.",
		image: "123",
		tags: [1, 2],
		likes: 41,
	},
];
interface IPostList {
	postArray: Post[];
}

export function PostList({ postArray }: IPostList) {
	return (
		<div className={styles.listOfPosts}>
			<div>
				{postArray.map((post) => {
					let postTags: string[] = [];
					post.tags.forEach((ptag) => {
						tags.forEach((gtag) => {
							if (gtag.id == ptag) {
								postTags = [...postTags, gtag.title];
							}
						});
					});
					return (
						<PostCard
							key={post.id}
							title={post.title}
							shortDescription={post.shortDescription}
							image={post.image}
							tags={postTags.join(", ")}
							likes={post.likes}
						></PostCard>
					);
				})}
			</div>
		</div>
	);
}
