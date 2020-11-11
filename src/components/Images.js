import React from 'react';
import firestore from "../hooks/useFirestore";
import {Avatar,makeStyles} from "@material-ui/core";
import UploadForm from "./UploadForm"
const Images = ({setSrc}) => {
    const classes = useStyles();
    const { docs } = firestore("images");
 //   const docs = [];
    console.log(setSrc)
    return (
        <div className="gallery">
            <UploadForm />
            {docs && docs.map(element => {
                return (
                    <Avatar
                        variant="rounded"
                        className={classes.image}
                        key={element.id} >
                        <img
                            onClick={() => setSrc(element.url) }
                            src={element.url}
                            alt={element.name}
                        />
                    </Avatar>);
                })}
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
  image:{
      width:"100%",
      height:"100%"
  }
}));

export default Images
