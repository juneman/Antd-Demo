import { query } from '../services/dashboard'
import { parse } from 'qs'

export default {
  namespace: 'dashboard',

  state: {
  	consumeCount:{},
  },

  subscriptions: {
    setup({dispatch}) {
   		dispatch({type: 'query'})
    }
  },

  effects: {
    *query ({
    	payload
    }, {call, put}) {
    	const data = yield call(query, parse(payload))
    	
      yield put({ type: 'queryConsumeCount', payload: { ...data } })
    }
  },

  reducers: {
    queryConsumeCount (state, action) {
    	return {
        ...state,
        ...action.payload,
      }
    }
  },

};
