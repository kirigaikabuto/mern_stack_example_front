import axios from "axios";

export const registerAction = async (email, password) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/auth/register`, {
            email: email,
            password: password
        })
        console.log(response)
        alert(response.data.message)
    } catch (e) {
        console.log(e)
        alert(e.response.data.message)
    }
}