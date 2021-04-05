import React, { useState } from 'react';

// { "id": 1, 
// "name": "Alvechurch", 
// "nickname": "Alvechurch", 
// "link": "Alvechurch", 
// "website": "https://www.alvechurchsocial.co.uk/", 
// "mapLink": "https://goo.gl/maps/zVgQN" 
// },

const Clubs = (props) => {
    const [asc, setAsc] = useState(true);
    const sortedClubs = props.clubs.sort((a, b) => {
        return (asc) ?
            (a.name < b.name ? -1 : 1) :
            (a.name < b.name ? 1 : -1);
    });
    return <>
        <button onClick={() => { setAsc((asc) => !asc) }} >Switch to {asc ? 'descending' : 'ascending'}</button>
        <ul className='clubs' >
            {
                sortedClubs.filter(club => club.id !== 0)
                    .map(club => {
                        return <li key={club.id} >{club.name} -
                        <a href={club.website} target='_blank' rel="noreferrer" > Website </a>
                        ( <a href={club.mapLink} target='_blank' rel="noreferrer" >Map</a> )
                    </li>;
                    })
            }
        </ul>
    </>;
};

export default Clubs;
