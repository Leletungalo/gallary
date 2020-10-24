import React,{useEffect} from 'react';
import useStorage from "../hooks/useStorage"

function Progress({file,setFile}) {
    const {progress,url} = useStorage(file);

    useEffect(() => {
        if(url){
            setFile(null);
        }
    },[url,setFile]);

    return (
        <div style={{
            height: "20px",
            width: progress + "%",
            backgroundColor: "blue",
            borderRadius: "10%",
            transition:"all 1s ease-out"
        }}>
        </div>
    )
}

export default Progress
