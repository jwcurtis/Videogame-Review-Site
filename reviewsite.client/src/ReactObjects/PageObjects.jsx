export function Thumbnail({ imgUrl, altImgText, className }) {

    return <img src={imgUrl} alt={altImgText} className={className} />;
}

export function TextBox({ header = "", text, className }) {
    return <p className={`text-box-${className}`}><strong>{header}</strong>{text}</p>;
}

export function Button({ children, onClick, className }) {
    return <button className={`button-${className}`} onClick={onClick}>{children}</button>;
}

export function Title({ titleText, className }) {
    return <h1 className={`title-${className}`}>{titleText}</h1>;
}