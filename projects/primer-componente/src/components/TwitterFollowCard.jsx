import "../styles/App.css"
export function TwitterFollowCard({name, userName}) {
    
    return(
        <article>
            <header>
                <img src={`https://unavatar.io/${userName}`} alt={`${userName} avatar`} />
                <div>
                    <strong>{name}</strong>
                    <span>@{userName}</span>
                </div>
            </header>
            <aside>
                <button>
                    Follow
                </button>
            </aside>
        </article>
    );
}