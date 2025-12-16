export interface Post {
	id: number;
	title: string;
	shortDescription: string;
	image: string;
	tags: number[];
	likes?: number;
}