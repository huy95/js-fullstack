import { Button, Input } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/axio.customer";

const UserForm = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    console.log(fullName)
    const handleClickBtn = async () => {
        try {
            const response = await createUserAPI(fullName, email, password, phoneNumber);

            console.log(response)
            if (response.data) {
                alert(JSON.stringify(response.data))
            } else {
                alert(JSON.stringify(response.message))
            }


        } catch (error) {
            console.error("Lỗi khi gọi API:", error);
            alert("Đã có lỗi xảy ra khi tạo tài khoản" + error);
        }
    }
    return (<div>
        <div style={{ padding: '10px', display: 'flex', flexDirection: 'column' }}>
            <div className="body-text">FullName1</div>
            <Input value={fullName} onChange={(event) => setFullName(event.target.value)} />
            <div className="body-text">Email</div>
            <Input value={email} onChange={(event) => setEmail(event.target.value)} />
            <div className="body-text">Password</div>
            <Input.Password value={password} onChange={(event) => setPassWord(event.target.value)} />
            <div className="body-text">Phone number</div>
            <Input value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
            <div>
                <Button onClick={() => handleClickBtn()}>Create User</Button>
            </div>
        </div>
    </div>)
}


export default UserForm;