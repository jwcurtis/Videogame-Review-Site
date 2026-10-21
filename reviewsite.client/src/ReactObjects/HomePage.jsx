import { Thumbnail, Title, TextBox} from './PageObjects.jsx' 
import holderImage from '../assets/hero.png';

const testGame1 = {
    name: "Example Game 1",
    thumbnailUrl: holderImage,
    genre: "Action",
    rating: 6.9,
}
const testGame2 = {
    name: "Example Game 2",
    thumbnailUrl: holderImage,
    genre: "Adventure",
    rating: 8.2,
}
const testGame3 = {
    name: "Example Game 3",
    thumbnailUrl: holderImage,
    genre: "Puzzle",
    rating: 7.5,
}
const testGame4 = {
    name: "Example Game 4",
    thumbnailUrl: holderImage,
    genre: "RPG",
    rating: 9.1,
}
const testGame5 = {
    name: "Example Game 5",
    thumbnailUrl: holderImage,
    genre: "Strategy",
    rating: 7.8,
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
    return (
        <div className="home-page"> 
            <Title titleText="Welcome to the Game Review Site!" className="large" />
            <div className="game-grid">
                <GameSquare game={testGame1} onClick={() => console.log(testGame1.name)} />
                <GameSquare game={testGame2} onClick={() => console.log(testGame2.name)} />
                <GameSquare game={testGame3} onClick={() => console.log(testGame3.name)} />
                <GameSquare game={testGame4} onClick={() => console.log(testGame4.name)} />
                <GameSquare game={testGame5} onClick={() => console.log(testGame5.name)} />

            </div>
        </div>

  );
}