import React from 'react'
import Profile from '../profile/profile'
import Timeline from '../timeline/timeline'
import FriendsAllUsersList from '../friendsAllUsersList/friendsAllUsersList';
import './main.css'


const Main = (props) => {
   return (
      <div className='main'>
         <div>
            <div>
               <Profile currentUser={props.currentUser} loggedInUser={props.loggedInUser} />
            </div>
            <div>
               <Timeline currentUser={props.currentUser} loggedInUser={props.loggedInUser} />
            </div>
            <div>
               <FriendsAllUsersList currentUser={props.currentUser} loggedInUser={props.loggedInUser} friends={props.friends} />
            </div>
         </div>
      </div>
   )
}

export default Main
