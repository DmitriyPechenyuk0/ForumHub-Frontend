import { useEffect, useState } from "react"
import { Parameters } from "./Parameters"
import { Post, PostList, posts, tags } from "./PostList"

export function PostMain(props: {}){
    const [searchValue, setSearchValue] = useState<string>("")
    const [selectedTags, setSelectedTags] = useState<number[]>([])
    const [likesMinimumValue, setLikesMinimumValue] = useState<number>(0)
    const [postArray, setPostArray] = useState<Post[]>(posts)
    const [tagsArray, setTagsArray] = useState<{}[]>(tags)

    useEffect( () => {
        const foundedPosts = posts.filter( post => {
            return post.title.toLowerCase().includes(searchValue.toLowerCase())
        })
        const newFilteredPosts = foundedPosts
        setPostArray(foundedPosts)

    }, [searchValue])
    useEffect(()=> {
        let filteredPosts:  Post[] = posts
        if (selectedTags.length > 0) {
            filteredPosts = filteredPosts.filter(post => 
                selectedTags.some(tagId => post.tags.includes(tagId)))
        } else{
            filteredPosts = posts 
        }
    }, [selectedTags])
    return(
        <>
            <PostList
                searchValue={searchValue}
                selectedTags={selectedTags}
                likesMinimumValue={likesMinimumValue}
            ></PostList>
            <Parameters
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
                likesMinimumValue={likesMinimumValue}
                setLikesMinimumValue={setLikesMinimumValue}
            ></Parameters>
        </>
    )
    
}