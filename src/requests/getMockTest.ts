// src/requests/getMockTest.js
import axios from 'axios';
import {logDescription} from "@/utils";

const instance = axios.create();
export { instance as mockAxios }; // 导出用于 mock 的实例

export function getResult() {
    return instance.get('/user/list')
        .then(res => logDescription(res.data))
        .catch(err => console.error('Error:', err));
}
