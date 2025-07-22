import { Table, Popconfirm } from 'antd';
import { EditOutlined, DeleteColumnOutlined, DockerOutlined } from '@ant-design/icons';
import { useState } from 'react';
import UserUpdateForm from './user.update'
import { deleteUserAPI } from '../../services/axio.customer';
import UserDetail from './user.detail';

const UserTable = (props) => {
    const { dataUsers } = props;
    const [isModalUpdateOpen, setOpenUpdateModel] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);
    const [isShowDetailOpen, setOpenDetailModel] = useState(false);

    const handleDelete = async (id) => {
        const res = await deleteUserAPI(id);
        if (res.data) {
            alert("Xóa thành công");
            await props.loadUser();
        } else {
            alert("Xóa thất bại: " + JSON.stringify(res.message));
        }
    }

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
                    <DockerOutlined style={{ cursor: "pointer", color: "orange" }} onClick={() => {
                        setOpenDetailModel(true)
                        setDataUpdate(record);


                    }}></DockerOutlined>
                    <EditOutlined style={{ cursor: "pointer", color: "orange" }} onClick={() => {
                        setOpenUpdateModel(true)
                        setDataUpdate(record);
                        console.log(record);


                    }}></EditOutlined>
                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={() => handleDelete(record._id)}
                        // onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                    >
                        <DeleteColumnOutlined style={{ cursor: "pointer", color: "orange" }}></DeleteColumnOutlined>
                    </Popconfirm>

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
            <UserDetail
                dataUpdate={dataUpdate}
                isShowDetailOpen={isShowDetailOpen}
                setOpenDetailModel={setOpenDetailModel}
            />
        </div>
    );
}

export default UserTable;