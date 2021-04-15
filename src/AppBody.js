import React from 'react';
import {posts} from './data/Posts'

function AppBody() {
    const data = posts.map( 
        (post, idx) => {
            return (
            <div className='postContainer'>
                <div className='post'>
                    <div className='announcementTitle'>
                        <div className='announcementTitleDisplay'>
                        {post.title}    {post.posted}
                        </div>
                    </div>
                    <div className='announcementText'>
                        {post.announcement}
                    </div>
                    <div className='urlText'>
                        <a classname="" href={post.url} target="_blank" rel="noopener noreferrer">{post.urlTitle}</a>
                    </div>
                </div>
            </div>
            )
        }
    )
    return (data)

}

export default AppBody;