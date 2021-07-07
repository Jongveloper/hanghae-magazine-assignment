import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Button} from "../elements";
import { actionCreators as imageActions } from "../redux/modules/image";
import { storage } from "./firebase";
const Upload = (props) => {
    const dispatch = useDispatch();
    const fileInput = React.useRef();

    const selectFile = (e) => {
        console.log(e);
        console.log(e.target);
        console.log(e.target.files);

        console.log(fileInput.current.files[0]);

        const reader = new FileReader();
        const file = fileInput.current.files[0];

        reader.readAsDataURL(file);

        reader.onloadend = () => {
            console.log(reader.result);
            dispatch(imageActions.setPreview(reader.result));
        }
    }

    const uploadFB = () => {
        let image = fileInput.current.files[0];
        const _upload = storage.ref(`images/${image.name}`).put(image);

        _upload.then((snapshot) => {
            console.log(snapshot);

            snapshot.ref.getDownloadURL().then((url) => {
            dispatch(imageActions.uploadImage(url));
            return url;
            })
        })
    }

    return(
        <React.Fragment>
            <input type="file" onChange={selectFile} ref={fileInput}/>
            <Button _onClick={uploadFB}>업로드하기</Button>
        </React.Fragment>
    )
}
export default Upload;