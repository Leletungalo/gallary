import React from 'react';
import firestore from "../hooks/useFirestore";

const Images = () => {
    const {docs} = firestore("images");
    console.log(docs)
    return (
        <div className="gallery">
            {docs && docs.map(element => {
        return (
        <div layout className="image-wrap" key={element.id} > 
        <img
            src={element.url} 
            
            alt={element.name} 
        />
        </div>);
    })}
        </div>
    )
}

export default Images
