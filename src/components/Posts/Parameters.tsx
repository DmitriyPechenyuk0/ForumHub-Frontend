import pstyles from './css/postParameters.module.css'
import LoupeIcon from '../../assets/svg/loupe.svg';
import TagIcon from '../../assets/svg/Tag.svg';
import LikeIcon from '../../assets/svg/Like.svg'
import { tags } from './PostList';
import unfilledCheckbox from '../../assets/svg/unfilledcheckbox.svg'
import radioButtonIcon from '../../assets/svg/radio.svg'

export function DisplayTags(props: {id: number, title: string}){
    const {title, id} = props
    return (
    <div className={pstyles.TagDiv}>
        <input className={pstyles.displaynone} type="checkbox" name="" id={`tagcheck_${id}`} />
        <img src={unfilledCheckbox} id={`tagimg_${id}`} />
        <p>{title}</p>
    </div>)
}
interface IParameters {
    searchValue: string
    setSearchValue: (value: string) => void
    selectedTags: number[]
    setSelectedTags: (tags: number[]) => void
    likesMinimumValue: number
    setLikesMinimumValue: (value: number) => void
}


export function Parameters(props: IParameters){
    return (
        <div className= {pstyles.ParamsSide}>
            <div className={pstyles.mainParametersDiv}>
                <img src={LoupeIcon} alt="loupe" />
                <input 
                    type="text"
                    placeholder='Enter search query'
                    value={props.searchValue}
                    onChange={(e) => {console.log(e.target.value); props.setSearchValue(e.target.value)}}   
                />
            </div>
            <div className={pstyles.Params} >
                <p>Search by parameters</p>
                <div className={pstyles.ParamsTagsDiv}  >
                    <div className={pstyles.tagsTopBar}>
                        <div>
                            <img src={TagIcon} alt="TagIcon" />
                            <p>Tags</p>
                        </div>
                        <div>
                            <img className={pstyles.smallLoupe} src={LoupeIcon}/>
                            <input 
                                type="text"
                            />
                        </div>
                    </div>
                    <div className={pstyles.TagsDiv}>
                        {tags.map((tag) => {
                            return <div>
                                {DisplayTags(tag)}
                            </div>
                        })}
                        
                    </div>
                </div>
                <div className={pstyles.likesDiv} >
                    <div className={pstyles.likesDivTopBar}>
                        <img src={LikeIcon} />
                        <p>Likes</p>
                    </div>
                    <div className={pstyles.likesDivParams}>
                        <div className={pstyles.likeDiv}><img src={radioButtonIcon}/><p>Less than 0</p></div>
                        <div className={pstyles.likeDiv}><img src={radioButtonIcon}/><p>Greater than 0</p></div>
                        <div className={pstyles.likeDiv}><img src={radioButtonIcon}/><p>Greater than 50</p></div>
                        <div className={pstyles.likeDiv}><img src={radioButtonIcon}/><p>Greater than 100</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}