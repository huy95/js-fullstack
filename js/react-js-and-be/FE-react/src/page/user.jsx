import UserTable from "../components/user/user.table"
import UserForm from "../components/user/user.form"
const UserPage = () => {
    return (<div>
        <div>
            <UserForm />
        </div>
        <div>
            <UserTable />
        </div></div>)
}

export default UserPage