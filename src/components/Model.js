import React from 'react'

const Model = ({src,setSrc}) => {
    console.log(src);
    
    const close = (e) =>{
        if(e.target.getAttribute("name") === "backdrop"){
            setSrc(null);
        }
    }
    return (
        <div name="backdrop" className="backgrop" onClick={close}>
            <div className="model">
                <img alt="model name" src={src} />
            </div>
        </div>
    )
}

export default Model
