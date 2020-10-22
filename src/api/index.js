// import {get, post, qspost, put, deletefn} from '@/api/axios'
import {get} from '@/api/axios'

/*
* 机构信息详情
* @constructor jack
* paranm institution_id{number}:机构ID

* */
export const getInstitutionInfo = (institution_id) => get('/home/Institutions/get_institution_info', {
  institution_id
})


/*
* 获取组织首页列表
* @constructor jack
* */
export const getOrgIndex = () => get('/api/Organization/index', {})

/*
* 获取组织分类列表
* @constructor jack
* */
export const getOrgList = (page,limit,keyword,area,org_type,type) => get('/api/Organization/query', {page,limit,keyword,area,org_type,type})