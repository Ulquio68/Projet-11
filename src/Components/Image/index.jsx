import './index.css';

function Image({ src, alt, className }) {

    return (
        <div className="imageDiv">
            <img src={src} alt={alt} className={className}/>
        </div>
    )
}

export default Image