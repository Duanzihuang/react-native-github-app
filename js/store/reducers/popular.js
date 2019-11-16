import { POPULAR_REFRESH, LOAD_POPULAR_SUCCESS, LOAD_POPULAR_FAIL } from '../actionTypes'

/**
 * 最终的数据格式如下
 * {
 *  java: {
 *      items: [],
 *      isLoading: false
 *  },
 *  ios: {
 *      items: [],
 *      isLoading: false
 *  },
 *  android: {
 *      items: [],
 *      isLoading: false
 *  }
 * }
 */
const initState = { java: { items: [], isLoading: false } }
export default (state = initState, action) => {
    switch (action.type) {
        case POPULAR_REFRESH: // 正在刷新数据
            return {
                ...state,
                [action.storeName]: {
                    ...action.storeName,
                    isLoading: true
                }
            }

        case LOAD_POPULAR_SUCCESS: // 加载成功了
            return {
                ...state,
                [action.storeName]: {
                    ...action.storeName,
                    items: action.data,
                    isLoading: false
                }
            }

        case LOAD_POPULAR_SUCCESS: // 加载失败了
            return {
                ...state,
                [action.storeName]: {
                    ...action.storeName,
                    isLoading: false
                }
            }

        default:

            return state
    }
}