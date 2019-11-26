import axios from 'axios'

let base = "/api";

//请求前拦截
axios.interceptors.request.use(
  config=>{
    return config;
  },
  err=>{
    console.log('请求超时')
    return Promise.reject(err);
  }
)
//返回后拦截
axios.interceptors.response.use(
  data=>{
      if(data.code == 0){
        console.log(data.data,'data')
      }
      return data.data;
  },
  err=>{
    if(err.response.status === 504 || err.response.status === 404){
      console.log('服务器问题');
    }else if(err.response.status === 401) {
      console.log('登陆信息失效');
    }else if(err.response.status === 500) {
      console.log("服务器崩了")
    }
    return Promise.reject(err)
  }
)

// @RequsetBody请求
const postRequestBody = (url,params) => {
  return axios({
    method:"post",
    url:`${base}${url}`,
    data:params,
    headers:{
      "Content-Type":"application/json",
      charset:"utf-8"
    }
  })
}

// @RequsetParam请求
const postRequestParam = (url, params) =>{
  return axios({
    method:"post",
    url:`${base}${url}`,
    data:params,
    transformRequest:[
      function(data) {
        let ret = "";
        for(let it in data){
          ret+= encodeURIComponent(it)+"="+encodeURIComponent(data[it])+ "&";
        }
        return ret
      }
    ],
    headers:{
      "Content-type":"application/x-www-form-urlencoded"
    }
  })
}

const get = url => {
  return axios({
    method:"get",
    url:`${base}${url}`
  })
}

let https = {
  get:get,
  postRequestBody:postRequestBody,
  postRequestParam:postRequestParam
}

export default https