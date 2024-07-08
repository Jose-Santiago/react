export function FollowCardComponent({ children, formatUserName, userName, isFollowing }){
    return(
        <article className='followCard'>
            <header className='followCard-header'>
                <img 
                    className='followCard-img'
                    alt="foto perfil" 
                    src={`https://unavatar.io/${userName}`} />
                <div className='followCard-div-dataUser'>
                    <strong>{children}</strong>
                    <span className='followCard-div-dataUser-span'>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className='followCard-button'>
                    seguir
                </button>
            </aside>
        </article>
    );
}