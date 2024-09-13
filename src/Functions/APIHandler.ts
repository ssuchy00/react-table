import axios from "axios"

const APIHandler = {
    URL: "https://jsonplaceholder.typicode.com/users",
    getUsers: async ()=>{
        try {
            const res = await axios.get(APIHandler.URL);
            if(res.status==200)
                return res.data
            return []
        }
        catch(e){
            return []
        }
    }
}

export default APIHandler