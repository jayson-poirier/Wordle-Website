import './Game.css'

export default function Game() {
    return (
        <div className="game-page">
            <div className="game-banner center">
                <label className="game-banner-letter" style="color: red; margin-right: 0">W</label>
                <label className="game-banner-letter" style="color: limegreen">O</label>
                <label className="game-banner-letter" style="color: yellow">R</label>
                <label className="game-banner-letter" style="color: red">D</label>
                <label className="game-banner-letter" style="color: yellow">L</label>
                <label className="game-banner-letter" style="color: limegreen">E</label>
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
                    <button className="key" id="Q">Q</button>
                    <button className="key" id="W">W</button>
                    <button className="key" id="E">E</button>
                    <button className="key" id="R">R</button>
                    <button className="key" id="T">T</button>
                    <button className="key" id="Y">Y</button>
                    <button className="key" id="U">U</button>
                    <button className="key" id="I">I</button>
                    <button className="key" id="O">O</button>
                    <button className="key" id="P">P</button>
                </div>
                <div className="key-row">
                    <button className="key" id="A">A</button>
                    <button className="key" id="S">S</button>
                    <button className="key" id="D">D</button>
                    <button className="key" id="F">F</button>
                    <button className="key" id="G">G</button>
                    <button className="key" id="H">H</button>
                    <button className="key" id="J">J</button>
                    <button className="key" id="K">K</button>
                    <button className="key" id="L">L</button>
                </div>
                <div className="key-row">
                    <button className="key" id="ENTER">ENTER</button>
                    <button className="key" id="Z">Q</button>
                    <button className="key" id="X">W</button>
                    <button className="key" id="C">E</button>
                    <button className="key" id="V">R</button>
                    <button className="key" id="B">T</button>
                    <button className="key" id="N">Y</button>
                    <button className="key" id="M">U</button>
                    <button className="key" id="DEL">DEL</button>
                </div>
            </div>
        </div>
    )
}