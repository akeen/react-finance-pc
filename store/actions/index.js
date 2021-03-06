// 首页
// 获取首页数据
export const HOME = "HOME";
export const getHome = payload => ({
  type: HOME,
  payload
});

// 获取热门搜索
export const HOT_SEARCH = "HOT_SEARCH";
export const getHotSearch = payload => ({
  type: HOT_SEARCH,
  payload
});

// 本地获取我的近期搜索
export const GET_MY_SEARCH = "GET_MY_SEARCH";
export const getMySearch = payload => ({
  type: GET_MY_SEARCH,
  payload
});

// 贷款同城
export const LOANS_HOME = "LOANS_HOME";
export const getLoansHome = payload => ({
  type: LOANS_HOME,
  payload
});
// 贷款极速
export const LOANS_SPEED_HOME = "LOANS_SPEED_HOME"
export const getLoansSpeedHome = payload => ({
  type: LOANS_SPEED_HOME,
  payload
})

// 信用卡
export const CARDS_HOME = "CARDS_HOME";
export const getCardsHome = payload => ({
  type: CARDS_HOME,
  payload
});

// 新闻资讯
export const NEWS_HOME = "NEWS_HOME";
export const getNewsHome = payload => ({
  type: NEWS_HOME,
  payload
})

// 个人中心
// 获取用户信息
export const USER = "USER";
export const getUser = payload => ({
  type: USER,
  payload
});
// 获取用户其他信息
export const USER_OTHER = "USER_OTHER";
export const getUserOther = payload => ({
  type: USER_OTHER,
  payload
});

// 退出登陆
export const LOGOUT = "LOGOUT";
export const getOut = () => ({ type: LOGOUT });

// 模板
// export const EXAMPLE = createRequestTypes('EXAMPLE')
// export const getExample = (id) => ({
//   [CALL_API]: {
//     types: EXAMPLE,
//     endpoint: `loans_filter`,
//     params: { id }， // 可选
//     method: 'put', // 可选，默认get
//     toast: ['处理中', '处理成功', '处理失败'], // 可选
//     options: { headers: { Authorization: `Bearer ${token}` } } // 可选
//   },
// })
