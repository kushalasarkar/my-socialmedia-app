import React from 'react'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import "./Feed.css"

function Feed() {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender />
            <Post
                profilePic=""
            message = "Yoo nwew post"
                timestamp='1601493943737'
                // gikgk
            imgName="imgName"
            username="Kushal"
            />
        </div>
    )
}

export default Feed
