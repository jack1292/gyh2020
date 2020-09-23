// import {get, post, qspost, put, deletefn} from '@/api/axios'
import {get} from '@/api/axios'

/*
* 获取问卷列表
* @constructor jack
* paranm pageNum{number}:页码
* paranm pageSize{number}:每页数量
* paranm orderByColumn{string}:排序字端 时间time 数量num
* paranm isAsc{string}:升序 asc 降序 desc
* */
export const getInstitutionInfo = (institution_id) => get('/home/Institutions/get_institution_info', {
  institution_id
})

