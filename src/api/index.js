// import {get, post, qspost, put, deletefn} from '@/api/axios'
import {get} from '@/api/axios'




/*
* 获取组织首页列表
* @constructor jack
* */
export const getOrgIndex = () => get('/api/Organization/index', {})

/*
* 获取组织分类列表
* @constructor jack
* paranm page{number}:页码
* paranm limit{number}:每页数量
* paranm keyword{string}:搜索关键字
* paranm area{number}: 地区id  0-16 北京16个区
* paranm org_type{number}:机构类型 0 社会团体 1 社会服务机构 2 基金会
* paranm type{number}: 搜索关联  1 未加搜索进入 2 关键词搜索进入 3 地区搜索进入
* */
export const getOrgList = (page, limit, keyword, area, org_type, type) => get('/api/Organization/query', {
  page,
  limit,
  keyword,
  area,
  org_type,
  type
})

/*
* 机构信息详情
* @constructor jack
* paranm institution_id{number}:机构ID

* */
export const getInstitutionInfo = (institution_id) => get('/home/Institutions/get_institution_info', {
  institution_id
})



/*
* 获取项目展列表
* @constructor jack
* paranm page{number}:页码
* paranm limit{number}:每页数量
* */
export const getProjectList = (page, limit, keyword) => get('/api/Projectinfo/index', {
  page,
  limit,
  keyword
})

/*
* 获取项目展列表
* @constructor jack
* paranm id{number}:项目id
*
* */
export const getProjectDetail = (id) => get('/api/Projectinfo/detail', {
  id
})

/*
* 获取慈善列表
* @constructor jack
* */
export const getCharitable = () => get('/api/Charitable/index', {})


/*
* 获取论坛视频列表
* @constructor jack
* */
export const getForum = () => get('/api/thefront/video', {})




/*
* 获取论坛新闻列表
* @constructor jack
* */
export const getNewsList = (page,limit,type) => get('/api/thefront/index', {
  page,limit,type
})




/*
* 获取消费扶贫列表
* @constructor jack
* paranm page{number}:页码
* paranm limit{number}:每页数量
* */
export const getAlleviationList = (page, limit) => get('/api/consume/index', {
  page,
  limit,
})

/*
* 联系我们信息提交
* @constructor jack
* paranm page{number}:页码
* paranm limit{number}:每页数量
* */
export const submitCall = (name, org, tel, message) => get('/api/index/contact', {
  name, org, tel, message
})