import "../styles/App.css"
import { useState } from "react"
export function TwitterFollowCard({name, userName, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(false);
    const text = isFollowing? 'Following' : 'Follow'
    const buttonClass = isFollowing? 'tw-followCard-button is-following' : 'tw-followCard-button'
    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }
    return(
        <article className="tw-followCard">
            <header className="tw-followCard-user">
                <img className="tw-followCard-avatar" src={`https://unavatar.io/${userName}`} alt={`${userName} avatar`} />
                <div className="tw-followCardInfo">
                    <strong>{name}</strong>
                    <span className="tw-followCard-userName">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClass} onClick={handleClick}>
                    <span className="tw-followCard-button-text">{text}</span>
                    <span className="tw-followCard-button-stopFollow">Unfollow</span>
                </button>
            </aside>
        </article>
    );
}