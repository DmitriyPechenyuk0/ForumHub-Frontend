import { PostTag } from ".";

export interface Post {
	id: number;
	title: string;
	description: string;
	image: string;
	tags: PostTag[];
	likes?: number;
}