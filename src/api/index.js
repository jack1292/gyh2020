// import {get, post, qspost, put, deletefn} from '@/api/axios'
import {get,qspost} from '@/api/axios'




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
* 获取组织分类列表
* @constructor jack
* paranm page{number}:页码
* paranm limit{number}:每页数量
* paranm keyword{string}:搜索关键字
* */
export const getOrgOtherList = (page, limit, keyword,type) => get('/api/Organization/query_other', {
  page,
  limit,
  keyword,
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
* paranm page{number}:页码
* paranm limit{number}:每页数量
* */
export const query_expert_top = (page, limit, keyword) => get('/api/projectinfo/query_expert_top', {
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
* 获取论坛视频列表
* @constructor jack
* */
export const getForumVideoDetail = (id) => get('/api/thefront/videoDetail', {id})




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

/**
 *-------------------------------消费扶贫---------------------------
 */
/*
* 消费扶贫-视频
* @constructor jack
* */
export const imageList = () => get('/api/Consume/imagelist', {})
/*
* 消费扶贫-商品
* @constructor jack
* */
export const goodsList = () => get('/api/consume/index', {})
/*
* 消费扶贫-商品
* @constructor jack
* */
export const queryGoodsList = (id,page,limit) => get('/api/Consume/query', {id,page,limit})

/*
* 慈善展-详情
* @constructor jack
* */
export const getCharitableDetail = (id) => get('/api/Charitable/detail', {id})

/*
* 留言
* @constructor jack
* */
export const addMessage = (user_id,name,tel,org_name,content) => get('/api/Organization/addMessage', {user_id,name,tel,org_name,content})

/*
* 积分
* @constructor jack
* */
export const zanIntegral = (other_user_id,token) => qspost('index.php/api/Organization/zanIntegral', {other_user_id,token})
/*
* 积分
* @constructor jack
* */
export const addIntegral = (type,video_id,token) => qspost('/home/info/addIntegral', {type,video_id,token})
/*
* 登录
* @constructor jack
* */
export const login = (user_name,pass) => qspost('/index.php/home/User/login', {user_name,pass})
/*
* 登录
* @constructor jack
* */
export const showIntegral = (token) => qspost('/index.php/home/info/showIntegral', {token})
/*
* 登录
* @constructor jack
* */
export const send_phone_code = (phone) => qspost('/index.php/home/User/send_phone_code', {phone})
/*
* 登录
* @constructor jack
* */
export const forget_pass = (user_name ,
    phone ,
    code ,
    new_pass ,
    rel_new_pass) => qspost('/index.php/Home/User/forget_pass', {user_name ,
    phone ,
    code ,
    new_pass ,
    rel_new_pass })