import "./OverImage.scss"

function OverImage({img, alt, children}) { 
    return (<>
    <div className="OverImage" style={{"backgroundImage" : `url(${img})`}} role="img" alt={alt}>
        <div className="OverImage-chld-container">
            {children}
        </div>
    </div>
    </>)
}

export default OverImage