import {useState,useEffect} from "react";
import {projectStorage,projectFirestore,timestamp} from "../firebase/config";
const useStorage = file =>{
    const [progress,setProgress] = useState(null);
    const [url,setUrl] = useState(null);
    const [error,setError] = useState(null);

    useEffect(() => {
        const storageRef = projectStorage.ref(file.name);
        const firestoreRef = projectFirestore.collection("images");
        const unsub = storageRef.put(file).on("state_changed", snap =>{
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage)
        }, err =>{
            setError(err)
        },async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            firestoreRef.add({
                name: file.name,
                url,
                createdAt})
            setUrl(url);
        }
    )
    return () => unsub()
    },[file]);

   return {progress,url,error}
}

export default useStorage;
