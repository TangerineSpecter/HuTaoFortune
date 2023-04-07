import axios from 'axios'

/**
 * 数据请求相关配置
 */
const api = axios.create({
    baseURL: import.meta.url,
    headers: {
        'Content-Type': 'application/json,charset=UTF-8'
    },
    // `withCredentials` 表示跨域请求时是否需要使用凭证
    withCredentials: true,
    // `responseType` 表示浏览器将要响应的数据类型
    // 选项包括: 'arraybuffer', 'document', 'json', 'text', 'stream'
    // 浏览器专属：'blob'
    responseType: 'json', // 默认值

    // `responseEncoding` 表示用于解码响应的编码 (Node.js 专属)
    // 注意：忽略 `responseType` 的值为 'stream'，或者是客户端请求
    // Note: Ignored for `responseType` of 'stream' or client-side requests
    responseEncoding: 'utf8', // 默认值
});

export default api;