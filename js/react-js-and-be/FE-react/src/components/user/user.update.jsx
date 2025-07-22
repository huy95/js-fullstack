import { Button, Input, Modal } from "antd";
import { useState, useEffect } from "react";
import {updateUserAPI} from '../../services/axio.customer'

const UserUpdateForm = (props) => {

    const { loadUser } = props;
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const { isModalUpdateOpen, setOpenUpdateModel, dataUpdate,
        setDataUpdate } = props;

    useEffect(() => {
        if (dataUpdate && isModalUpdateOpen) {
            setFullName(dataUpdate.fullName)
            setEmail(dataUpdate.email)
            setId(dataUpdate._id)
            setPhoneNumber(dataUpdate.phone)
        }
    }, [dataUpdate, isModalUpdateOpen])

    const handleSubmitBtn = async () => {
        try {
        
            const response = await updateUserAPI(fullName, id, phoneNumber);
            
            console.log(response)
        
            if (response.data) {
                setFullName("")
                setEmail("")
                setId("")
                setPhoneNumber("")
                setOpenUpdateModel(false)
                await loadUser();
                await setDataUpdate();

            } else {
                alert(JSON.stringify(response.message))
            }


        } catch (error) {
        
            console.error("Lỗi khi gọi API:", error);
            alert("Đã có lỗi xảy ra khi tạo tài khoản" + error);
        }
    }
    return (<div>
        <Modal title="Basic Modal" open={isModalUpdateOpen} onCancel={() => setOpenUpdateModel(false)} onOk={() => handleSubmitBtn()}>
            <div style={{ padding: '10px', display: 'flex', flexDirection: 'column' }}>
                <div className="body-text">id</div>
                <Input value={id} />
                <div className="body-text">fullName</div>
                <Input value={fullName} onChange={(event) => setFullName(event.target.value)} />
                <div className="body-text">Email</div>
                <Input value={email} onChange={(event) => setEmail(event.target.value)} />
                <div className="body-text">Phone number</div>
                <Input value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
            </div>
        </Modal>

    </div>)
}


export default UserUpdateForm;