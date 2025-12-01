import styles from './main.module.css'
import { Parameters } from '../Posts/Parameters'
import { PostList } from '../Posts/PostList'
import { ReactNode } from 'react'

interface MainProps {
    // children - специальный проп(необязательно передавать его как атрибут у компонента),
    // позволяет принять контент(от родителя), который мы указываем между открывающим и закрывающим тегом
    // Контент имеет строго тип ReactNode, что является любым тегом/компонентом/текстовым узлом и тд
    // Проп можно сделать необязательным
    children?: ReactNode
    page: string
}

export function Main(props: MainProps){
    
    const {page, children} = props

    if (page == '/'){
        return(
            <main className={styles.main}>
                <div className={styles.centeredContent}>
                    <MainMessage></MainMessage>
                    <Technologia></Technologia>
                </div>
            </main>
        )
    } else{
        return(
            <main className={styles.main}>
                <div className={styles.centeredContentRow}>
                    <PostList></PostList>
                    <Parameters></Parameters>
                </div>
            </main>
        )
    }
}
function MainMessage(){
    return (
        <div className={styles.mainMessage}>
            <p>ForumHub - your go-to spot for chatting, sharing ideas, and finding like-minded folks. Dive into topics you're passionate about, drop some knowledge, and get answers to whatever's on your mind in a friendly community vibe.</p>
        </div>
    )
}
function Technologia(){
    return (
        <div className={styles.technologia}>
            <p>Technologies used in the project</p>
            <div className={styles.bothSidesTech}>
                <div className={styles.frontEnd} >
                    <p>🎨 Frontend</p>
                    <p>React - <span>Library for post-processing UI</span></p>
                </div>
                <div className={styles.backEnd} >
                    <p>🔧 Backend</p>
                    <p>Node.js + Express - <span>server side and API</span></p>
                    <p>JWT - <span>authentication and authorization</span></p>
                    <p>Prisma ORM - <span>modern ORM for work with DB</span></p>
                    <p>bcryptjs - <span>password hashing</span></p>
                    <p>SQLite - <span>lightweight relational database</span></p>
                </div>
            </div>
        </div>
    )
    
}