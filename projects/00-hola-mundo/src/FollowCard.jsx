import { useState } from "react";

export function FollowCardComponent({ children, userName}){
    const [isFollowing, setIsFollowing] = useState(false);

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing 
        ? 'followCard-button is-following' 
        : 'followCard-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    };

    return(
        <article className='followCard'>
            <header className='followCard-header'>
                <img 
                    className='followCard-img'
                    alt="foto perfil" 
                    src={`https://unavatar.io/${userName}`} />
                <div className='followCard-div-dataUser'>
                    <strong>{children}</strong>
                    <span className='followCard-div-dataUser-span'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    );
}