import React,{useState} from 'react';
import firestore from "../hooks/useFirestore";
import {Avatar} from "@material-ui/core";
import UploadForm from "./UploadForm";
import Model from "./Model"
const Images = () => {
    const { docs } = firestore("images");
    const [openModel,setOpenModel] = useState("");
    const open = (url) =>{
        setOpenModel(<Model src={url} setOpenModel={setOpenModel} />)
    }

    return (
        <div >
            <UploadForm />
            <div className="gallery">
                {docs && docs.map(element => {
                    return (
                        <Avatar
                            variant="rounded"
                            className="images"
                            key={element.id} >
                            <img
                                style={{
                                    width:"100%",
                                    height:"100%"
                                }}
                                onClick={() => open(element.url) }
                                src={element.url}
                                alt={element.name}
                            />
                        </Avatar>);
                })}
            </div>
            {openModel}
        </div>
    )
}

export default Images
