import React from 'react';
import firestore from "../hooks/useFirestore";
import {Avatar,makeStyles} from "@material-ui/core"

const Images = ({openModel}) => {
    const classes = useStyles();
    const { docs } = firestore("images");
    console.log(docs);
    console.log(openModel)
    return (
        <div className="gallery">
            {docs && docs.map(element => {
                return (
                    <Avatar
                        variant="rounded"
                        className={classes.image}
                        key={element.id} >
                        <img
                            onClick={() => openModel(element.url) }
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
