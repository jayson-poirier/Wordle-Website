import './Game.css'
import {useState} from "react";

export default function Game() {
    const [presentLetter, setPresentLetter] = useState(1);
    const [presentWord, setPresentWord] = useState(1);

    function keyClicked(e) {
        e.preventDefault();
        if (presentLetter <= presentWord*5) {
            document.getElementById("letter-" + (presentLetter)).innerHTML = e.target.id;
            setPresentLetter(presentLetter + 1);
        }
    }

    function delLetter(e) {
        e.preventDefault();
        if (presentLetter%6 >= 2) {
            document.getElementById("letter-" + (presentLetter)).innerHTML = "";
            setPresentLetter(presentLetter - 1);
        }
    }

    function submitWord(e) {
        e.preventDefault();
        if (presentLetter%6 === 5) {
            let word = "";
            for (let i = 5; i > 0; i--) {
                word += document.getElementById("word-" + (presentLetter - i));
            }
            const response = validateWord(word);
            if (true) {
                setPresentLetter(presentLetter + 1);
            }
        }
    }

    function validateWord() {
        //Send word to API
    }

    return (
        <>
            <div className="game-page">
                <div className="game-banner center">
                    <span className="game-banner-letter" style={{color: "red", marginRight: 0}}>W</span>
                    <span className="game-banner-letter" style={{color: "limegreen"}}>O</span>
                    <span className="game-banner-letter" style={{color: "yellow"}}>R</span>
                    <span className="game-banner-letter" style={{color: "red"}}>D</span>
                    <span className="game-banner-letter" style={{color: "yellow"}}>L</span>
                    <span className="game-banner-letter" style={{color: "limegreen"}}>E</span>
                </div>
                <div className="separator"></div>
                <div className="words-grid center">
                    <div className="word">
                        <div className="letter-box" id="letter-1"></div>
                        <div className="letter-box" id="letter-2"></div>
                        <div className="letter-box" id="letter-3"></div>
                        <div className="letter-box" id="letter-4"></div>
                        <div className="letter-box" id="letter-5"></div>

                    </div>
                    <div className="word">
                        <div className="letter-box" id="letter-6"></div>
                        <div className="letter-box" id="letter-7"></div>
                        <div className="letter-box" id="letter-8"></div>
                        <div className="letter-box" id="letter-9"></div>
                        <div className="letter-box" id="letter-10"></div>

                    </div>
                    <div className="word">
                        <div className="letter-box" id="letter-11"></div>
                        <div className="letter-box" id="letter-12"></div>
                        <div className="letter-box" id="letter-13"></div>
                        <div className="letter-box" id="letter-14"></div>
                        <div className="letter-box" id="letter-15"></div>

                    </div>
                    <div className="word">
                        <div className="letter-box" id="letter-16"></div>
                        <div className="letter-box" id="letter-17"></div>
                        <div className="letter-box" id="letter-18"></div>
                        <div className="letter-box" id="letter-19"></div>
                        <div className="letter-box" id="letter-20"></div>

                    </div>
                    <div className="word">
                        <div className="letter-box" id="letter-21"></div>
                        <div className="letter-box" id="letter-22"></div>
                        <div className="letter-box" id="letter-23"></div>
                        <div className="letter-box" id="letter-24"></div>
                        <div className="letter-box" id="letter-25"></div>
                    </div>
                    <div className="word">
                        <div className="letter-box" id="letter-26"></div>
                        <div className="letter-box" id="letter-27"></div>
                        <div className="letter-box" id="letter-28"></div>
                        <div className="letter-box" id="letter-29"></div>
                        <div className="letter-box" id="letter-30"></div>
                    </div>
                </div>
                <div className="keyboard center">
                    <div className="key-row">
                        <button className="key" id="Q" onClick={keyClicked}>Q</button>
                        <button className="key" id="W" onClick={keyClicked}>W</button>
                        <button className="key" id="E" onClick={keyClicked}>E</button>
                        <button className="key" id="R" onClick={keyClicked}>R</button>
                        <button className="key" id="T" onClick={keyClicked}>T</button>
                        <button className="key" id="Y" onClick={keyClicked}>Y</button>
                        <button className="key" id="U" onClick={keyClicked}>U</button>
                        <button className="key" id="I" onClick={keyClicked}>I</button>
                        <button className="key" id="O" onClick={keyClicked}>O</button>
                        <button className="key" id="P" onClick={keyClicked}>P</button>
                    </div>
                    <div className="key-row" style={{margin: "0 33px"}}>
                        <button className="key" id="A" onClick={keyClicked}>A</button>
                        <button className="key" id="S" onClick={keyClicked}>S</button>
                        <button className="key" id="D" onClick={keyClicked}>D</button>
                        <button className="key" id="F" onClick={keyClicked}>F</button>
                        <button className="key" id="G" onClick={keyClicked}>G</button>
                        <button className="key" id="H" onClick={keyClicked}>H</button>
                        <button className="key" id="J" onClick={keyClicked}>J</button>
                        <button className="key" id="K" onClick={keyClicked}>K</button>
                        <button className="key" id="L" onClick={keyClicked}>L</button>
                    </div>
                    <div className="key-row">
                        <button className="key" id="ENTER" onClick={submitWord}>ENTER</button>
                        <button className="key" id="Z" onClick={keyClicked}>Z</button>
                        <button className="key" id="X" onClick={keyClicked}>X</button>
                        <button className="key" id="C" onClick={keyClicked}>C</button>
                        <button className="key" id="V" onClick={keyClicked}>V</button>
                        <button className="key" id="B" onClick={keyClicked}>B</button>
                        <button className="key" id="N" onClick={keyClicked}>N</button>
                        <button className="key" id="M" onClick={keyClicked}>M</button>
                        <button className="key" id="DEL" onClick={delLetter}>DEL</button>
                    </div>
                </div>
            </div>
        </>
    )
}