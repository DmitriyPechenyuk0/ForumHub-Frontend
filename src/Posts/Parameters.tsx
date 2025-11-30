import pstyles from './css/postParameters.module.css'
import LoupeIcon from '../assets/svg/loupe.svg';
import TagIcon from '../assets/svg/Tag.svg';
import { Tags } from './PostList';
import unfilledCheckbox from '../assets/svg/unfilledcheckbox.svg'

export function DisplayTags(props: {id: number, title: string}){
    const {title, id} = props
    return (
    <div className={pstyles.TagDiv}>
        <img src={unfilledCheckbox}/>
        <p>{title}</p>
    </div>)
}
export function Parameters(){
    return (
        <div className= {pstyles.ParamsSide}>
            <div className={pstyles.mainParametersDiv}>
                <img src={LoupeIcon} alt="loupe" />
                <input type="text" placeholder='Enter search query' />
            </div>
            <div className={pstyles.Params} >
                <p>Search by parameters</p>
                <div>
                    <div className={pstyles.tagsTopBar}>
                        <div>
                            <img src={TagIcon} alt="TagIcon" />
                            <p>Tags</p>
                        </div>
                        <div>
                            <img className={pstyles.smallLoupe} src={LoupeIcon}/>
                            <input type="text" />
                        </div>
                    </div>
                    <div className={pstyles.TagsDiv}>
                        {Tags.map((tag) => {
                            return <div>
                                {DisplayTags(tag)}
                            </div>
                        })}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}