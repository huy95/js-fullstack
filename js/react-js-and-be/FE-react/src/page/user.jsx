import UserTable from "../components/user/user.table"
import UserForm from "../components/user/user.form"
import { useState, useEffect } from "react";
import { fetchAllUserAPI } from "../services/axio.customer";
const UserPage = () => {
    const [dataUsers, setDataLoad] = useState();

    useEffect(() => {
        loadUser();
    }, [])

    const loadUser = async () => {
        const res = await fetchAllUserAPI();
        if (res.data)
            setDataLoad(res.data);
    }

    return (<div>
        <div>
            <UserForm loadUser={loadUser} />
        </div>
        <div>
            <UserTable dataUsers={dataUsers} />
        </div></div>)
}

export default UserPage