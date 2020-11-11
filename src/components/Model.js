import React from 'react'

const Model = ({src,setOpenModel}) => {
    
    const close = (e) =>{
        if(e.target.getAttribute("name") === "backdrop"){
            setOpenModel("");
        }
    }
    return (
        <div name="backdrop" className="backgrop" onClick={close} >
            <div className="model">
                <img alt="model name" src={src} />
            </div>
        </div>
    )
}

export default Model
