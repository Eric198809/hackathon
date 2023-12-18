import charList from '../data.js'
import MysteryCharDesc from '../components/MysteryCharDesc.jsx';
import Char from "../components/Char";

import "./CharChoice.css"

function CharChoice() {
    return (
    <div className="char-choice">
        <h2>Sélectionne ton personnage</h2>
        <div className="mystery-char-wrapper">
            <Char char={charList[6]}/>
        </div>
        <div className="char-choice-container">
            {charList.map((char) => (
                char.desc !== undefined && <MysteryCharDesc charDesc={char.desc} key={char.id}/>
                ))}
        </div>
    </div>
    )
  }

  export default CharChoice;