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
