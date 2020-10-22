import React,{useState} from 'react'
import Progress from './Progress';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

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
        <div className="upload-form">
            <h2>Up load Image</h2>
            <form>
                <input type="file" onChange={handleChange} />
            </form>
           <div>
            {error && <div>{error}</div>}
            {file && <div>{file.name}</div>}
            {file && <Progress file={file} setFile={setFile} />}
           </div> 
        </div>
    )
}

export default UploadForm
