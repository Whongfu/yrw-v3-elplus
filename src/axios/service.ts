import axios from 'axios'
import { REQUEST_TIMEOUT } from '@/constants'
import { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, RequestConfig } from './types'
import { useGlobSetting } from '@/hooks/useGlobSetting';
const globSetting = useGlobSetting();
const PATH_URL = globSetting.apiUrl
const axiosInstance: AxiosInstance = axios.create({ 
    baseURL: PATH_URL, // 所有的请求地址前缀部分 
    timeout: REQUEST_TIMEOUT, // 请求超时时间（毫秒）
    // withCredentials: true, // 异步请求携带cookie
    // headers: {}, // 设置后端需要的请求头参数
})

/** 请求/响应拦截器 **/
axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    console.log(1111, config)

    // 每次发送请求之前判断vuex中是否存在token        
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
    // config.headers.token = sessionStorage.getItem('Token')

    return config
})
axiosInstance.interceptors.response.use((res: AxiosResponse) => {
    console.log(res)
    return res.data
})

const request = <T = any>(config: RequestConfig): Promise<T> => {
    return new Promise((resolve, reject) => {
        if (config.interceptors?.requestInterceptors) {
            config = config.interceptors.requestInterceptors(config as any)
        }
        axiosInstance.request<any, T>(config).then((res) => {
            resolve(res)
        }).catch((err: any) => {
            reject(err)
        })
    })
}

const service = {
    get<T = any> (config: RequestConfig): Promise<T> {
        return request({ method: 'get', ...config })
    },
    post<T = any>(config: RequestConfig): Promise<T> {
        return request({ method: 'post', ...config })
    }
}

export default service

