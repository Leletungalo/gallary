import React from 'react';
import firestore from "../hooks/useFirestore";

const Images = () => {
    const {docs} = firestore("images");
    console.log(docs)
    return (
        <div className="gallery">
            {docs && docs.map(element => {
        return (
        <div layout className="image-wrap"> 
        <img
        src={element.url} 
        key={element.id} 
        alt={element.name} 
        ></img>
        </div>);
    })}
        </div>
    )
}

export default Images
