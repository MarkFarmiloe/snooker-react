import React from 'react';

import './resultBox.css';

const ResultBoxPart = ({home, away}) => {
    const stdClasses = 'result-box result-box-left'
    const homeClasses = stdClasses + ((home > away) ? ' result-box-won' : '');
    const awayClasses = stdClasses + ((away > home) ? ' result-box-won' : '');
    return (
        <>
            <span className={homeClasses}>{home}</span>
            <span className={awayClasses}>{away}</span>
        </>
    )
}

const ResultBox = ({hRef, home, away}) => {
    const showA = !!hRef;
    return (<section>
        {showA && <a href={hRef} className='no-padding'><ResultBoxPart home={home} away={away} /></a>}
        {showA || <ResultBoxPart home={home} away={away} />}
    </section>);
}

export default ResultBox;
