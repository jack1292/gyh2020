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

