import { Button, Input, Modal } from "antd";
import { useState } from "react";
import { pushImage, updateUserAvatarAPI } from "../../services/axio.customer";


const UserDetail = (props) => {
    const { dataUpdate, isShowDetailOpen, setOpenDetailModel, loadUser } = props;
    const [fileSelected, setFileSelected] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    const hanldeFile = (event) => {
        console.log("file");
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            setFileSelected(file);
            setPreviewImage(URL.createObjectURL(file))
            console.log(file);
        }
    }

    const handlePushImage = async () => {
        const newUpload = await pushImage(fileSelected, "avatar");
        
        if (newUpload.data) {
            const newData = await updateUserAvatarAPI(dataUpdate.fullName, dataUpdate._id, dataUpdate.phone, newUpload.data.fileUpLoad);
            if (newData.data) {
                setOpenDetailModel(false);
                setFileSelected(null);
                setPreviewImage(null);
                loadUser()
                alert("Cập nhật thành công");
            
            } else {
                alert("Cập nhật thất bại: " + JSON.stringify(newData.message));
            }
        } else {
            alert("Cập nhật thất bại: " + JSON.stringify(newUpload.message));
        }

    }
    console.log(previewImage);


    // debugger
    return (<div>

        <Modal title="Basic Modal" open={isShowDetailOpen} onCancel={() => setOpenDetailModel(false)} >
            {(dataUpdate) ? <>
                <div style={{ padding: '10px', display: 'flex', flexDirection: 'column' }}>
                    <p> ID: {dataUpdate.id}</p>
                    <p> fullName : {dataUpdate.fullName}</p>
                    <p>Email: {dataUpdate.email}</p>
                    <p>Phone number: {dataUpdate.phone}</p>
                    <div>
                        <img height={250} width={300} src={`http://localhost:8080/images/avatar/${dataUpdate.avatar}`}></img>
                    </div>
                </div>
            </> : <div>Loading...</div>}
            <div>
                <label htmlFor="btnUpLoad" style={{
                    display: "block",
                    width: "fit-content",
                    marginTop: "10px",
                    cursor: "pointer",
                }}>
                    Upload avatar
                </label>
                <input type="file" id="btnUpLoad" onChange={(event) => hanldeFile(event)} style={{ display: "none" }}></input>
            </div>
            {previewImage && <div style={{ padding: '10px', display: 'flex', flexDirection: 'column' }}>

                <div>
                    <img height={250} width={300} src={previewImage}></img>
                </div>
                <Button style={{ paddingTop: '18px', backgroundColor: "black", color: 'white' }} onClick={() => handlePushImage()}>Save</Button>
            </div>}
        </Modal>

    </div>)
}


export default UserDetail;