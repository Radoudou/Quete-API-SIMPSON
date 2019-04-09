import React from 'react';


const DisplaySimpson = ({ perso }) => {
    return (
        <div className="DisplaySimpson">
            <img src={perso.image} alt="picture" />
            <ul>
                <li>
                    Character : {perso.character}
                </li>
                <li>
                    Quote : {perso.quote}
                </li>
                <li>
                characterDirection : {perso.characterDirection}
                </li>
            </ul>
        </div>
    );
};

export default DisplaySimpson;