import { useEffect, useState } from "react";
import { Parameters } from "./Parameters";
import { Post, PostList, posts, tags } from "./PostList";

export function PostMain(props: {}) {
	const [searchValue, setSearchValue] = useState<string>("");
	const [selectedTags, setSelectedTags] = useState<number[]>([]);
	const [likesMinimumValue, setLikesMinimumValue] = useState<number>(0);
	const [postArray, setPostArray] = useState<Post[]>(posts);
	const [tagsArray, setTagsArray] = useState<{}[]>(tags);

	useEffect(() => {
		let filteredPosts: Post[] = posts;

		if (searchValue.trim()) {
			filteredPosts = filteredPosts.filter((post) =>
				post.title.toLowerCase().includes(searchValue.toLowerCase()),
			);
		}
		if (selectedTags.length > 0) {
			filteredPosts = filteredPosts.filter((post) =>
				selectedTags.some((tagId) => post.tags.includes(tagId)),
			);
		}
		if (likesMinimumValue > 0) {
			filteredPosts = filteredPosts.filter(
				(post) => (post.likes || 0) >= likesMinimumValue,
			);
		}
		setPostArray(filteredPosts);
	}, [searchValue, selectedTags, likesMinimumValue]);
	return (
		<>
			<PostList postArray={postArray}></PostList>
			<Parameters
				searchValue={searchValue}
				setSearchValue={setSearchValue}
				selectedTags={selectedTags}
				setSelectedTags={setSelectedTags}
				likesMinimumValue={likesMinimumValue}
				setLikesMinimumValue={setLikesMinimumValue}
			></Parameters>
		</>
	);
}
