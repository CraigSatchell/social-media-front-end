import React from 'react';
import UserPost from './userPost/userPost';
import CreatePost from './createPost/createPost';
import './timeline.css';

const Timeline = (props) => {
   return (
      
      <div className='timeline'>
         <h3>Timeline</h3>
         <div>
            <CreatePost newPosting={props.newPosting} setNewPosting={props.setNewPosting} postings={props.postings} setPostings={props.setPostings} handleNewPostingChange={props.handleNewPostingChange} handleNewPostingSubmit={props.handleNewPostingSubmit}/>
         </div>
         <div>
            <UserPost name='Bradley Cooper'/>
            <UserPost name='Sheila Thomas'/>
            <UserPost name='Tanya Makeover'/>
            <UserPost name='Sara Fisher'/>
            <UserPost name='Breanna Stewart'/>
            <UserPost name='Sheila Thomas'/>
            <UserPost name='Lebron James'/>
            <UserPost name='Sara Fisher'/>
         </div>
      </div>
   )
}

export default Timeline;