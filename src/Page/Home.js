import React from 'react'

function Home({ competitions }) {
    // console.log(competitions);
    return (
        <div>
            <h2 className="highlight">2019 - 20 Season</h2>
            <p>Please select the league or cup you are interested in.</p>
            <p>Or perhaps you are after the fixtures list or player rankings.</p>
            <div>
                {competitions.map(c => { return SubviewCompetition(c); })}
            </div>
            <a href="#fixtures" className="button">Fixtures</a>
            <a href="#players" className="button">Players</a>
            <a href="#rules" className="button">Rules</a>
            <p>Contact: <a href="mailto:results@bromsgrovesnooker.co.uk">results@bromsgrovesnooker.co.uk"</a></p>
            <a href="https://bromsgrovesnooker.co.uk/2018-19">2018-19 results</a>
        </div>
    )
};

const SubviewCompetition = ({ link, name, compType }) => {
    const cup = (compType === 1) ? "" : "🏆 ";
    return <a href="#{link}" className="button">{cup + name}</a>;
};

export default Home
