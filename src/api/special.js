// import {get, post, qspost, put, deletefn} from '@/api/axios'
import {get} from '@/api/axios'


/*
* 获取专题风采列表
* @constructor jack
* */
export const elegantList = (special_id, type_sts) => get('/api/special/query', {
  special_id, type_sts
})

/*
* 获取专题案例列表
* @constructor jack
* */
export const caseList = (special_id, type_sts, page, limit) => get('/api/special/query', {
  special_id, type_sts, page, limit
})

/*
* 获取专题案例详情
* @constructor jack
* */
export const caseDetail = (special_id, id) => get('/api/special/detail', {
  special_id, id
})


/*
* 获取当前时间
* */

export const getTime = () => get('/api/index/index', {})

/*
* 获取专题3社会心理
* */
export const getShxl = () => get('/api/special/sociology_query', {})

/*
* 点赞
* */
export const dianzhanAdd = (id,type) => get('/api/thefront/addNum', {id,type})

/*
* 送花
* */
export const songhuaAdd = (id,type) => get('/api/thefront/addNum', {id,type})


/*
* 获取社会心里站点建设
* */

export const addressList = (area_id) => get('/api/special/sociology_web_query', {area_id})

/*
* 获取科技创新
* */

export const getKeji = () => get('/api/special/keji_query', {})


/*
* 获取科技创新
* */

export const getKejiDetail = (id,type,sts) => get('/api/special/keji_detail', {id,type,sts})
