import { routerRedux } from 'dva/router';
import { fakeAccountLogin } from '../services/api';
import { setAuthority, setUserid, getUserid } from '../utils/authority';
import { reloadAuthorized } from '../utils/Authorized';

let userid = '';
if (getUserid() !== 'undefined') {
  userid = getUserid();
}

export default {
  namespace: 'login',

  state: {
    status: undefined,
    userid,
  },

  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(fakeAccountLogin, payload);
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      });
      // Login successfully
      if (response.status === 'ok') {
        reloadAuthorized();
        yield put(routerRedux.push('/'));
      }
    },
    *logout(_, { put, select }) {
      try {
        // get location pathname
        const urlParams = new URL(window.location.href);
        const pathname = yield select(state => state.routing.location.pathname);
        // add the parameters in the url
        urlParams.searchParams.set('redirect', pathname);
        window.history.replaceState(null, 'login', urlParams.href);
      } finally {
        yield put({
          type: 'changeLoginStatus',
          payload: {
            status: false,
            currentAuthority: 'guest',
          },
        });
        reloadAuthorized();
        yield put(routerRedux.push('/user/login'));
      }
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      setAuthority(payload.currentAuthority);
      if (payload.userid === undefined) {
        localStorage.removeItem('userid');
      } else {
        setUserid(payload.userid);
      }
      return {
        ...state,
        status: payload.status,
        type: payload.type,
        userid: payload.userid,
      };
    },
  },
};
