import './App.css';
import { FollowCardComponent } from './FollowCard';

export function App(){
    return (
        <div className='App'>
            <FollowCardComponent userName='midudev'>
                Miguel Angel Duran
            </FollowCardComponent>

            <FollowCardComponent userName='pheralb'>
                Pablo Duran
            </FollowCardComponent>

            <FollowCardComponent userName='elonmusk'>
                Elon Musk
            </FollowCardComponent>
        </div>
    )
}