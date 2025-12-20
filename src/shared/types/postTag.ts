import { ITag } from ".";

export interface PostTag {
	postId: number;
	tagId: number;
	assignedAt: string;
	assignedBy: string;
	tag: ITag;
}