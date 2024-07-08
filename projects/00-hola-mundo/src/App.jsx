import './App.css';
import { FollowCardComponent } from './FollowCard';

export function App(){
    const format = (userName) => `@${userName}`;
    return (
        <div className='App'>
            <FollowCardComponent 
                formatUserName={format} 
                isFollowing 
                userName='midudev' 
            >
                Miguel Angel Duran
            </FollowCardComponent>

            <FollowCardComponent 
                formatUserName={format} 
                isFollowing 
                userName='pheralb'
            >
                Pablo Duran
            </FollowCardComponent>

            <FollowCardComponent 
                formatUserName={format} 
                isFollowing 
                userName='elonmusk' 
            >
                Elon Musk
            </FollowCardComponent>
        </div>
    )
}