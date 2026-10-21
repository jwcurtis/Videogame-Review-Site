export function Thumbnail({ imgUrl, altImgText, className }) {

    return <img src={imgUrl} alt={altImgText} className={className} />;
}

export function TextBox({ header = "", text, className }) {
    return <p className={`text-box-${className}`}><strong>{header}</strong>{text}</p>;
}

export function Button({ children, onClick, className, text = "" }) {
    return <button className={`button-${className}`} onClick={onClick}>{text}</button>;
}

export function Title({ titleText, className }) {
    return <h1 className={`title-${className}`}>{titleText}</h1>;
}

export function GameModal({ game, onClose }) {
    if (!game) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="game-modal" role="dialog" aria-modal="true" aria-aria-labelledby="game-modal-title"
                onClick={(event) => event.stopPropagation()}>

                <Button className="close" onClick={onClose} aria-label="Close Modal" text = "X" />
                
                <div className="game-modal-header">

                </div>

                <div className="game-modal-content">

                </div>

                <div className="game-modal-footer">

                </div>
                <Title titleText={game.name} className="large" />

                <TextBox header="Description: " text={game.description} className="small" />
                <TextBox header="Genre: " text={game.genre} className="small" />
                <TextBox header="Rating: " text={game.rating} className="small" />
            </div>
        </div>
    )

}