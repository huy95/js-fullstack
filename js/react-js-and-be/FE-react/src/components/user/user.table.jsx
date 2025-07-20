import { Table,  } from 'antd';
import { useEffect, useState } from 'react';
import { fetchAllUserAPI } from '../../services/axio.customer';
const UserTable = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        loadUser();
    })
    const loadUser = async () => {
        const res = await fetchAllUserAPI();
        setUsers(res);
    }

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
        },
        {
            title: 'fullName',
            dataIndex: 'fullName',
        },
        {
            title: 'email',
            dataIndex: 'email',
        }
    ];
    return (<Table columns={columns} dataSource={users} />);
}

export default UserTable;