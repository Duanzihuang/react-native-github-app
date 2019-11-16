import {POPULAR_REFRESH} from '../actionTypes'

/**
 * 加载某个分类下面的列表数据
 * @param {*} storeName 分类的名字
 * @param {*} url
 */
export function onLoadPopularData(storeName, url) {
  return dispatch => {
    console.log('发送异步请求，获取数据', storeName, url)
    dispatch({type: POPULAR_REFRESH, storeName})
  }
}
