import styles from './css/postList.module.css'
import { PostCard } from './PostCard'


interface ITag{
    id: number
    name: string
}

export interface Post{
    title: string,
    shortDescription: string,
    image: string,
    tags: string[],
    likes?: string
}
export interface PostStr{
    title: string,
    shortDescription: string,
    image: string,
    tags: string,
    likes?: string
}
const Tags: ITag[] = [
  { id: 1, name: 'JavaScript'},
  { id: 2, name: 'idk'},
  { id: 3, name: 'Ruby'},
  { id: 4, name: 'C#'},
  { id: 5, name: 'HolyC'},
  { id: 6, name: 'Kotlin'},
  { id: 7, name: 'Bash'},
  { id: 8, name: 'C++'},
]

const posts: Post[] = [
    {
        title:'Cologne Boulevard at night',
        shortDescription: 'Cologne Boulevard is a boulevard in the center of Dnipro city, running between Dmitry Yavornytsky Avenue and Taras Shevchenko Street. The boulevard marks the border between the Shevchenko and Soborny districts of the city. It was created in 2004 by separating it from Ispolkomovskaya Street.',
        image: '123',
        tags: ['idk', 'lol']
    }
]

export function PostList(){
    return (

        <div className={styles.listOfPosts} >
            <div>
                {posts.map(
                    (post) => {
                        return <PostCard title = {post.title} shortDescription={post.shortDescription} image={post.image} tags={post.tags.join(', ')}></PostCard>
                    }
                )}
            </div>
        </div>

    )
}