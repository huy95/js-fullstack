import { Button, Input, Modal } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/axio.customer";

const UserForm = (props) => {

    const {loadUser} = props;
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [isModalOpen, setOpenModel] = useState(false);

    console.log(fullName)
    const handleSubmitBtn = async () => {
        try {
            const response = await createUserAPI(fullName, email, password, phoneNumber);

            console.log(response)
            if (response.data) {
                setFullName("")
                setEmail("")
                setPassWord("")
                setPhoneNumber("")
                setOpenModel(false)
                await loadUser();
                alert("Tạo tài khoản thành công!");
            } else {
                alert(JSON.stringify(response.message))
            }


        } catch (error) {
            console.error("Lỗi khi gọi API:", error);
            alert("Đã có lỗi xảy ra khi tạo tài khoản" + error);
        }
    }
    return (<div>

        <div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
            <div>Table User</div>
            <Button onClick={() => setOpenModel(true)}>Create User</Button>
        </div>
        <Modal title="Basic Modal" open={isModalOpen} onCancel={() => setOpenModel(false)} onOk={() => handleSubmitBtn()}>
            <div style={{ padding: '10px', display: 'flex', flexDirection: 'column' }}>
                <div className="body-text">FullName1</div>
                <Input value={fullName} onChange={(event) => setFullName(event.target.value)} />
                <div className="body-text">Email</div>
                <Input value={email} onChange={(event) => setEmail(event.target.value)} />
                <div className="body-text">Password</div>
                <Input.Password value={password} onChange={(event) => setPassWord(event.target.value)} />
                <div className="body-text">Phone number</div>
                <Input value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
            </div>
        </Modal>

    </div>)
}


export default UserForm;