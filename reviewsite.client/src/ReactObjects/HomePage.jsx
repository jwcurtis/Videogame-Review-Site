import React from 'react';
import { useState } from 'react';
import { Thumbnail, Title, TextBox, GameModal } from './PageObjects.jsx' 
import holderImage from '../assets/hero.png';

const testGame1 = {
    name: "Example Game 1",
    thumbnailUrl: holderImage,
    genre: "Action",
    rating: 6.9,
    description: "This is a description of Example Game 1. It is an action-packed adventure that will keep you on the edge of your seat. Explore vast worlds, battle formidable foes, and uncover hidden secrets in this thrilling game."
}
const testGame2 = {
    name: "Example Game 2",
    thumbnailUrl: holderImage,
    genre: "Adventure",
    rating: 8.2,
    description: "This is a description of Example Game 2. Embark on an epic journey through uncharted lands, solve intricate puzzles, and forge alliances with memorable characters in this captivating adventure game."
}
const testGame3 = {
    name: "Example Game 3",
    thumbnailUrl: holderImage,
    genre: "Puzzle",
    rating: 7.5,
    description: "This is a description of Example Game 3. Challenge your mind with a variety of brain-teasing puzzles, from logic riddles to spatial challenges, and enjoy hours of engaging gameplay in this innovative puzzle game."
}
const testGame4 = {
    name: "Example Game 4",
    thumbnailUrl: holderImage,
    genre: "RPG",
    rating: 9.1,
    description: "This is a description of Example Game 4. Immerse yourself in a rich role-playing experience, where you can create your own character, embark on epic quests, and shape the fate of a fantastical world through your choices and actions."
}
const testGame5 = {
    name: "Example Game 5",
    thumbnailUrl: holderImage,
    genre: "Strategy",
    rating: 7.8,
    description: "This is a description of Example Game 5. Test your strategic thinking and decision-making skills in this challenging strategy game, where you must manage resources, build armies, and outwit your opponents to achieve victory."
}

function GameSquare({ game, onClick }) {
    return (
        <div className="game-square" onClick={onClick}>
            <Thumbnail className = "game-thumbnail" imgUrl={game.thumbnailUrl} altImgText={game.name} />
            <Title titleText={game.name} className="small" />
            <TextBox header="Genre: " text={game.genre} className="small" />
            <TextBox header="Rating: " text={game.rating} className="small" />
        </div>
    );
}

export function HomePage() {
    const [selectedGame, setSelectedGame] = useState(null);
    return (
        <div className="home-page"> 
            <Title titleText="Welcome to the Game Review Site!" className="large" />
            <div className="game-grid">
                <GameSquare game={testGame1} onClick={() => setSelectedGame(testGame1)} />
                <GameSquare game={testGame2} onClick={() => setSelectedGame(testGame2)} />
                <GameSquare game={testGame3} onClick={() => setSelectedGame(testGame3)} />
                <GameSquare game={testGame4} onClick={() => setSelectedGame(testGame4)} />
                <GameSquare game={testGame5} onClick={() => setSelectedGame(testGame5)} />

            </div>
            <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />
        </div>

  );
}