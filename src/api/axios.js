import axios from 'axios'
import router from '@/router/index'
import { Dialog,Toast } from 'vant';
import store from '../store'
import { getToken } from '@/tools/utils'
import Config from '@/config'
import Qs from 'qs';

// 创建axios实例
const service = axios.create({
  baseURL: Config.baseURL, // api 的 base_url
  // baseURL: process.env.BASE_API, // api 的 base_url
  timeout: Config.timeout, // 请求超时时间
})
// request拦截器
service.interceptors.request.use(
  function(config)  {
    if (getToken()) {
      config.headers['token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    return config
  },
  function (error){
    // Do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    if(response.data.status === 200 || response.data.status === 1 || response.data.code === 1){
      return response.data
    }else if (response.data.code === 500) {
      Dialog.alert(
        {
          title: '系统提示',
          message: '登录状态已过期，请您重新登录',
        }
      ).then(() => {
        store.dispatch('LogOut').then(() => {
          location.reload() // 为了重新实例化vue-router对象 避免bug
        })
      })
    }else {
      Toast(response.data.msg)
      return Promise.reject('error')
    }
  },
  error => {
    let code = 0
    try {
      code = error.response.data.status
    } catch (e) {
      if (error.toString().indexOf('Error: timeout') !== -1) {
        Toast.fail('网络请求超时')
        return Promise.reject(error)
      }
      if (error.toString().indexOf('Error: Network Error') !== -1) {
        Toast.fail('网络请求错误')
        return Promise.reject(error)
      }
    }
    if (code === 500) {
      Dialog.alert(
        {
          title: '系统提示',
          message: '登录状态已过期，请您重新登录',
        }
      ).then(() => {
        store.dispatch('LogOut').then(() => {
          location.reload() // 为了重新实例化vue-router对象 避免bug
        })
      })
    } else if (code === 403) {
      router.push({ path: '/401' })
    } else {
      const errorMsg = error.response.data.message
      if (errorMsg !== undefined) {
        Notification.error({
          title: errorMsg,
          duration: 2500
        })
      }
    }
    return Promise.reject(error)
  }
)
// 封装get方法和post方法

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    service.get(url, {
      params: params
    }).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err)
    })
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    service.post(url, params)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err)
      })
  });
}

/**
 * post方法，参数序列化
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function qspost(url, params) {
  return new Promise((resolve, reject) => {
    service.post(url, Qs.stringify(params))
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err)
      })
  });
}


/**
 * put方法，对应put请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function put(url, params) {
  return new Promise((resolve, reject) => {
    service.put(url, params)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}


/**
 * delete
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function deletefn(url, params) {
  return new Promise((resolve, reject) => {
    service.delete(url, params)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err)
      })
  });
}