/**
 * 问卷投放状态
 */
export const questionnaireType = (num) => {

  switch (num) {
    case 0:
      return '新建'
    case 1:
      return '开始投放'
    case 2:
      return '结束投放'
  }
}

/*
* 问题类型
* */
export const questionType = num => {
  switch (Number(num)) {
    case 0:
      return '单选题'
    case 1:
      return '多选题'
    case 2:
      return '下拉题'
    case 3:
      return '单行文本题'
    case 4:
      return '多行文本题'
  }
}


/**
 * 获取Token
 */
export const getToken = () => {
  return window.localStorage.getItem('token');
}
