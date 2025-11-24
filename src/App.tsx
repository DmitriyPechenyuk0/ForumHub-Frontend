export function App() {
    return (
        <>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </>
    )
}
function Header(){
    return(
        <header>
            <nav className="nav-header">
                <a href="/">
                <img src="none" className="logo"/>
                </a>
                <div className="right-header-content">
                <div className="posts-menu"><p>Posts</p><img src="../src/assets/svg/arrow-down.svg" /></div>
                <div className="switch-lang"><img src="none" className="current-lang-flag" /> <img src="../src/assets/svg/arrow-down.svg" className="arrow-down" /></div>
                <div className="right-header-user">
                    <a href="/user/login" className="signin"><p>Sign in</p></a>
                    <a href='/user/register' className= "signup"><p>Sign up</p></a>
                </div>
                </div>
            </nav>
        </header>
    )
}
function Main(){
    return(
        <main>
            <div>
                <div>
                    <p>ForumHub - your go-to spot for chatting, sharing ideas, and finding like-minded folks. Dive into topics you're passionate about, drop some knowledge, and get answers to whatever's on your mind in a friendly community vibe.</p>
                </div>
                <div>
                <p>Technologies used in the project</p>
                    <div>
                        <div>
                            <p>🎨 Frontend</p>
                            <p>React - <span>Library for post-processing UI</span></p>
                        </div>
                        <div>
                            <p>🔧 Backend</p>
                            <p>Node.js + Express - <span>server side and API</span></p>
                            <p>JWT - <span>authentication and authorization</span></p>
                            <p>Prisma ORM - <span>modern ORM for work with DB</span></p>
                            <p>bcryptjs - <span>password hashing</span></p>
                            <p>SQLite - <span>lightweight relational database</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
function Footer(){
    return (
        <footer>
            <nav>
                <a href="https://github.com/DmitriyPechenyuk0"><img src="" alt="github" /></a>
                <a href="https://t.me/DmytroPechenyuk"><img src="" alt="telegram" /></a>
            </nav>
        </footer>
    )
}