import React from 'react';
import useStorage from "../firebase/useStorage"

function Progress({file,setFile}) {
    const {progress,url} = useStorage(file);

    return (
        <div style={{
            height: "20px",
            width: progress + "%",
            backgroundColor: "blue",
            borderRadius: "10%",
            transition:"all 1s ease-out"
        }}>
            <h2>{progress,url}</h2>
        </div>
    )
}

export default Progress
