import pstyles from "./css/postParameters.module.css";
import { ICONS } from "../../shared";
import { useEffect, useState } from "react";

import { ITag } from "../../shared/types";

import { tags } from "./PostList";

interface IDisplayTags {
	id: number;
	title: string;
	isSelected: boolean;
	onToggle: (id: number) => void;
}

export function DisplayTags(props: IDisplayTags) {
	const { title, id, isSelected, onToggle } = props;
	return (
		<div className={pstyles.TagDiv} onClick={() => onToggle(id)}>
			<input
				className={pstyles.displaynone}
				type="checkbox"
				name=""
				id={`tagcheck_${id}`}
				checked={isSelected}
			/>
			{isSelected ? <ICONS.FilledCheckbox id={`tagimg_${id}`} />: <ICONS.UnfilledCheckbox id={`tagimg_${id}`}/>}

			<p>{title}</p>
		</div>
	);
}
interface IParameters {
	searchValue: string;
	setSearchValue: (value: string) => void;
	selectedTags: number[];
	setSelectedTags: (tags: number[]) => void;
	likesMinimumValue: number;
	setLikesMinimumValue: (value: number) => void;
}

export function Parameters(props: IParameters) {
	const [tagSearchValue, setTagSearchValue] = useState<string>("");
	const [filteredTags, setFilteredTags] = useState<ITag[]>(tags);

	useEffect(() => {
		if (tagSearchValue.trim()) {
			const filtered = tags.filter((tag) =>
				tag.title.toLowerCase().includes(tagSearchValue.toLowerCase()),
			);
			setFilteredTags(filtered);
		} else {
			setFilteredTags(tags);
		}
	}, [tagSearchValue]);

	const toggleTag = (tagId: number) => {
		if (props.selectedTags.includes(tagId)) {
			props.setSelectedTags(
				props.selectedTags.filter((id) => id !== tagId),
			);
		} else {
			props.setSelectedTags([...props.selectedTags, tagId]);
		}
	};
	const handleLikesFilter = (value: number) => {
		props.setLikesMinimumValue(value);
	};
	return (
		<div className={pstyles.ParamsSide}>
			<div className={pstyles.mainParametersDiv}>
				<ICONS.Loupe/>
				<input
					type="text"
					placeholder="Enter search query"
					value={props.searchValue}
					onChange={(e) => {
						console.log(e.target.value);
						props.setSearchValue(e.target.value);
					}}
				/>
			</div>
			<div className={pstyles.Params}>
				<p>Search by parameters</p>
				<div className={pstyles.ParamsTagsDiv}>
					<div className={pstyles.tagsTopBar}>
						<div>
							<ICONS.Tag/>
							<p>Tags</p>
						</div>
						<div>
							<ICONS.Loupe className={pstyles.smallLoupe}/>
							<input
								type="text"
								placeholder="Search tag"
								onChange={(e) =>
									setTagSearchValue(e.target.value)
								}
								value={tagSearchValue}
							/>
						</div>
					</div>
					<div className={pstyles.TagsDiv}>
						{filteredTags.length > 0 ? (
							filteredTags.map((tag) => (
								<DisplayTags
									key={tag.id}
									id={tag.id}
									title={tag.title}
									isSelected={props.selectedTags.includes(
										tag.id,
									)}
									onToggle={toggleTag}
								/>
							))
						) : (
							<p className={pstyles.noTagsMessage}>
								No tags found
							</p>
						)}
					</div>
				</div>
				<div className={pstyles.likesDiv}>
					<div className={pstyles.likesDivTopBar}>
						<ICONS.Like/>
						<p>Likes</p>
					</div>
					<div className={pstyles.likesDivParams}>
						<div
							className={pstyles.likeDiv}
							onClick={() => handleLikesFilter(0)}
						>
						{
							props.likesMinimumValue === 0
									? <ICONS.RadioSelected/>
									: <ICONS.Radio/>
						}
							<p>Less than 0</p>
						</div>
						<div
							className={pstyles.likeDiv}
							onClick={() => handleLikesFilter(1)}
						>
						{
							props.likesMinimumValue === 1
									? <ICONS.RadioSelected/>
									: <ICONS.Radio/>
						}
							<p>Greater than 0</p>
						</div>
						<div
							className={pstyles.likeDiv}
							onClick={() => handleLikesFilter(50)}
						>
						{
							props.likesMinimumValue === 50
									? <ICONS.RadioSelected/>
									: <ICONS.Radio/>
						}
							<p>Greater than 50</p>
						</div>
						<div
							className={pstyles.likeDiv}
							onClick={() => handleLikesFilter(100)}
						>
						{
							props.likesMinimumValue === 100
									? <ICONS.RadioSelected/>
									: <ICONS.Radio/>
						}
							<p>Greater than 100</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
