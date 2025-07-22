import instance from "./axio.service";


const createUserAPI = async (fullName, email, password, phone) => {
    const URL_BE = "/v1/user";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }

    return await instance.post(URL_BE, data)
}

const fetchAllUserAPI = async () => {
    const URL_BE = "/v1/user";
    return await instance.get(URL_BE)
}

const updateUserAPI = async (fullName, id, phone) => {
    const URL_BE = "/v1/user";
    const data = {
        fullName: fullName,
        _id: id,
        phone: phone
    }


    return await instance.put(URL_BE, data)
}

const updateUserAvatarAPI = async (fullName, id, phone, avatar) => {
    const URL_BE = "/v1/user";
    const data = {
        fullName: fullName,
        _id: id,
        phone: phone,
        avatar: avatar
    }


    return await instance.put(URL_BE, data)
}

const pushImage = async (file, folder) => {
    const URL_BE = "/v1/file/upload";
    let config = {
        headers: {
            "upload-type": folder,
            "content-type": "multipart/form-data"
        }
    }
    const bodyFormData = new FormData();
    bodyFormData.append("fileImg", file);
    
    return await instance.post(URL_BE, bodyFormData, config)
}



const deleteUserAPI = async (id) => {
    const URL_BE = `/v1/user/${id}`;
    return await instance.delete(URL_BE)
}


export { createUserAPI, fetchAllUserAPI, updateUserAPI, deleteUserAPI, pushImage, updateUserAvatarAPI };