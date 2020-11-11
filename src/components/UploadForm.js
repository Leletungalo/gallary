import React,{useState} from 'react'
import Progress from './Progress';
import {Typography,makeStyles} from "@material-ui/core"

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const classes = useStyles();

    const handleChange = e => {
        const selected = e.target.files[0];
        const types = ["image/png","image/jpeg"];

        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError(null);
        }else{
            setFile(null);
            setError("Please upload png or jpeg");
        }
    }

    return (
        <div className={classes.root}>
            <div>
                <Typography className={classes.heading} variant="h5">
                    Up load Image
                </Typography>
                <form>
                    <input type="file" onChange={handleChange} />
                </form>
            </div>
           <div>
            {error && <div>{error}</div>}
            {file && <div>{file.name}</div>}
            {file && <Progress file={file} setFile={setFile} />}
           </div> 
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column"
  },
  heading:{
    textAlign:"center",
  }
}));

export default UploadForm
