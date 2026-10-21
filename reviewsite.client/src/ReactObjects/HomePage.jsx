import { Thumbnail, Title, TextBox} from './PageObjects.jsx' 
import holderImage from '../assets/hero.png';

function GameSquare({ game, onClick }) {
    return (
        <div className="game-square" onClick={onClick}>
            <Thumbnail className = "game-thumbnail" imgUrl={game.thumbnailUrl} altImgText={game.name} />
            <Title titleText={game.name} className="small" />
            <TextBox header="Genre: " text="Action" className="small" />
            <TextBox header="Rating: " text="0.0" className="small" />
        </div>
    );
}

export function HomePage() {
    return (
        <div className="home-page"> 
            <Title titleText="Welcome to the Game Review Site!" className="large" />
            <div className="game-grid">
                <GameSquare game={{ name: "Example Game", thumbnailUrl: holderImage }} onClick={() => console.log('Game clicked')} />
                <GameSquare game={{ name: "Example Game", thumbnailUrl: holderImage }} onClick={() => console.log('Game clicked')} />
                <GameSquare game={{ name: "Example Game", thumbnailUrl: holderImage }} onClick={() => console.log('Game clicked')} />
                <GameSquare game={{ name: "Example Game", thumbnailUrl: holderImage }} onClick={() => console.log('Game clicked')} />
                <GameSquare game={{ name: "Example Game", thumbnailUrl: holderImage }} onClick={() => console.log('Game clicked')} />

            </div>
        </div>

  );
}