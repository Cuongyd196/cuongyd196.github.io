// export const HOST_API = 'https://apimyblog.herokuapp.com'

export const HOST_API = 'http://localhost:3333'


export const API = {
  FILE: '/api/files',

  LOGIN: '/api/users/login',

  USER_INFO: '/api/users/me',
  USER: '/api/users',
  USER_QUERY: '/api/users?page={0}&limit={1}{2}',
  USER_ID: '/api/users/{0}',

  THONG_TIN_CHUNG: '/api/thong-tin-chung',
  THONG_TIN_CHUNG_ID: '/api/thong-tin-chung/{0}',
  THONG_TIN_CHUNG_QUERY: '/api/thong-tin-chung?page={0}&limit={1}{2}',

  USER_RESET_PASSWORD: '/api/users/reset-password',
  USER_CHANGE_PASSWORD: '/api/users/change-password',
  USER_FORGET_PASSWORD: '/api/users/forgot-password-mail',

  TINH_THANH: '/api/tinh-thanh',
  TINH_THANH_QUERY: '/api/tinh-thanh?page={0}&limit={1}{2}',
  TINH_THANH_ID: '/api/tinh-thanh/{0}',

  QUAN_HUYEN: '/api/quan-huyen',
  QUAN_HUYEN_QUERY: '/api/quan-huyen?page={0}&limit={1}{2}',
  QUAN_HUYEN_ID: '/api/quan-huyen/{0}',

  PHUONG_XA: '/api/phuong-xa',
  PHUONG_XA_QUERY: '/api/phuong-xa?page={0}&limit={1}{2}',
  PHUONG_XA_ID: '/api/phuong-xa/{0}',

  TINTUC: '/api/tintuc',
  TINTUC_QUERY: '/api/tintuc?page={0}&limit={1}{2}',
  TINTUC_ID: '/api/tintuc/',

  CATEGORY_BLOG: '/api/category-blog',
  CATEGORY_BLOG_QUERY: '/api/category-blog?page={0}&limit={1}{2}',
  CATEGORY_BLOG_ID: '/api/category-blog/{0}',

  DEV: '/api/dev',
  DEV_QUERY: '/api/dev?page={0}&limit={1}{2}',
  DEV_ID: '/api/dev/',

  TECHNOLOGY: '/api/technology',
  TECHNOLOGY_QUERY: '/api/technology?page={0}&limit={1}{2}',
  TECHNOLOGY_ID: '/api/technology/',
};

