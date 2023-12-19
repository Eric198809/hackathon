import { useState } from 'react';
import charList from '../data.js'
import MysteryCharDesc from '../components/MysteryCharDesc.jsx';
import Char from "../components/Char";
import CharResult from './CharResult.jsx';

import "./CharChoice.css"

function CharChoice() {
    const [selectedChar, setSelectedChar] = useState(undefined);

    const handleClick = (index) => {
        setSelectedChar(index);
        console.log(index);
    };

    return (
    <>
        {selectedChar === undefined ? 
        (<div className="char-choice">
        <h1>Sélectionne ton personnage</h1>
        <div className="mystery-char-wrapper">
            <Char char={charList[6]}/>
        </div>
        <div className="char-choice-container">
                {charList.map((char, index) => (
                    char.desc !== undefined && <MysteryCharDesc charDesc={char.desc} key={char.id} handleClick={() => handleClick(index)} />
                    ))}
        </div>
    </div>)
    : (<CharResult selectedChar={selectedChar} />)}
    </>
    )
  };

  export default CharChoice;