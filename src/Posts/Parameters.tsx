import pstyles from './css/postParameters.module.css'
import LoupeIcon from '../assets/svg/loupe.svg';
import TagIcon from '../assets/svg/Tag.svg';
export function Parameters(){
    return (
        <>
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
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}