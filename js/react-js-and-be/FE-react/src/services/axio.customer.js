import instance from "./axio.service";


const createUserAPI = async  (fullName, email, password, phone) => {
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

export { createUserAPI, fetchAllUserAPI }