import { Table } from 'antd';
import { EditOutlined, DeleteColumnOutlined } from '@ant-design/icons';
import { useState } from 'react';
import UserUpdateForm from './user.update'
const UserTable = (props) => {
    const { dataUsers } = props;
    const [isModalUpdateOpen, setOpenUpdateModel] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);

    const columns = [
        {
            title: 'id',
            key: '_id',
            dataIndex: '_id',
        },
        {
            title: 'fullName',
            key: 'fullName',
            dataIndex: 'fullName',
        },
        {
            title: 'email',
            key: 'fullName',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: 'flex', gap: '20px' }}>
                    <EditOutlined style={{ cursor: "pointer", color: "orange" }} onClick={() => {
                        setOpenUpdateModel(true)
                        setDataUpdate(record);
                        console.log(record);
                        

                    }}></EditOutlined>
                    <DeleteColumnOutlined style={{ cursor: "pointer", color: "orange" }}></DeleteColumnOutlined>
                </div>
            ),
        },
    ];
    return (
        <div> <Table columns={columns} dataSource={dataUsers} rowKey="id" />
            <UserUpdateForm 
            isModalUpdateOpen={isModalUpdateOpen}
            setOpenUpdateModel={setOpenUpdateModel}
            dataUpdate={dataUpdate}
            setDataUpdate={setDataUpdate}
            />
        </div>
    );
}

export default UserTable;