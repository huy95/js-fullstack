import axios from "axios";

const instance = axios.create({ baseURL: import.meta.env.VITE_BE_URL })

// ✅ Đây là RESPONSE INTERCEPTOR
instance.interceptors.response.use(
    function (response) {    // Xử lý thành công (status 200 - 299)
      
        return response.data;  // Trả về nếu không có lỗi
    },

    function (error) {   // Xử lý lỗi HTTP >= 400
    
        if (error.response && error.response.data) {

            return error.response.data
        }

        alert("Lỗi không xác định.");
        return Promise.reject(error);
    }
);



export default instance