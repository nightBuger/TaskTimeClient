import request from "@/axios/index.js";

export const ApiRequest = async function(apiData){
    let data = {
        url:"/api/user/userlist",
        method:"get",
        params:{
            pageno:1,
            pagecount:20
        }
    }
    await request(data);
}