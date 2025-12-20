import { useEffect, useState } from "react";
import { Parameters } from "./Parameters";
import { PostList } from "./PostList";
import { href } from "../../shared";
import { ITag, Post } from "../../shared/types";
import axios from 'axios';

export function PostMain() {
	const [searchValue, setSearchValue] = useState<string>("");
	const [selectedTags, setSelectedTags] = useState<number[]>([]);
	const [likesMinimumValue, setLikesMinimumValue] = useState<number>(0);
	
	const [tagsArray, setTagsArray] = useState<ITag[]>([]);
	const [tagsLoading, setTagsLoading] = useState(false);

	const [postArray, setPostArray] = useState<Post[] | undefined>(undefined);
	const [allPosts, setAllPosts] = useState<Post[]>([]);
	const [postsLoading, setPostsLoading] = useState(false);

	useEffect(() => {
		const getPostsFromBack = async () => {
			setPostsLoading(true);
			try {
				const response = await axios.get(`${href}/posts`);
				console.log('Response data:', response.data)
				setAllPosts(response.data);
				setPostArray(response.data);
			} catch (err) {
				console.log(err)
			} finally {
				setPostsLoading(false);
			}
		};
		const getTagsFromBack = async () => {
			setTagsLoading(true);
			try {
				const response = await axios.get(`${href}/tags`);
				console.log('Response data:', response.data);
				setTagsArray(response.data);
			} catch (err) {
				console.log(err);
			} finally {
				setTagsLoading(false);
			}
		};

		
		getPostsFromBack();
		getTagsFromBack();
	}, []);
	useEffect(() => {
		if (allPosts.length === 0) return;

		let filteredPosts: Post[] = allPosts;

		if (searchValue.trim()) {
			filteredPosts = filteredPosts.filter((post) =>
				post.title.toLowerCase().includes(searchValue.toLowerCase()),
			);
		}
		if (selectedTags.length > 0) {
			filteredPosts = filteredPosts.filter((post) =>
				selectedTags.some((tagId) => 
					post.tags.some((tagRelation) => tagRelation.tagId === tagId)
				)
			);
		}
		if (likesMinimumValue > 0) {
			filteredPosts = filteredPosts.filter(
				(post) => (post.likes || 0) >= likesMinimumValue,
			);
		}
		setPostArray(filteredPosts);
	}, [searchValue, selectedTags, likesMinimumValue, allPosts]);
	return (
		<>
			{postsLoading || !postArray ? (
				<PostList preloader={true}></PostList>
			) : (
				<PostList postArray={postArray} preloader={false}></PostList>
			)}
			<Parameters
				searchValue={searchValue}
				setSearchValue={setSearchValue}
				selectedTags={selectedTags}
				setSelectedTags={setSelectedTags}
				likesMinimumValue={likesMinimumValue}
				setLikesMinimumValue={setLikesMinimumValue}
				tagsArray={tagsArray}
				tagsLoading={tagsLoading}
			></Parameters>
		</>
	);
}
