import React from 'react';
import {announcements} from './data/Announcements'; 
import './App.css';

function ApplicationsWidget () {

    const data = announcements.map( 
        (announcement, idx) => {
            return (
            <div className='postContainer'>
                <div className='post'>
                    <div className='announcementTitle'>
                        <div className='announcementTitleDisplay'>
                        {announcement.title} &nbsp; &nbsp; &nbsp; <i>updated on:</i> {announcement.posted}   
                        </div>
                    </div>
                    <div className='announcementText'>
                        {announcement.announcement} <a href={announcement.url} target="_blank" rel="noopener noreferrer">Public Files</a>.
                    </div>
                    <div className='urlText'>
                        <a classname="" href={announcement.appurl} target="_blank" rel="noopener noreferrer">{announcement.appurlTitle}</a>
                    </div>
                </div>
            </div>
            )
        }
    )
    return (data)
}

export default ApplicationsWidget; 
