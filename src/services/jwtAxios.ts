import axios from 'axios'

const languageMap = {
  uz: 'uz',
  ru: 'ru',
  cr: 'uz-Cyrl',
}

const jwtAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL, // YOUR_API_URL HERE
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})
jwtAxios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response && err.response.data.msg === 'Token is not valid') {
      console.log('Need to logout user')
      // store.dispatch({type: LOGOUT});
    }
    return Promise.reject(err)
  }
)
export const setAuthToken = (token?: string) => {
  if (token) {
    jwtAxios.defaults.headers.common.Authorization = `Token ${token}`
    localStorage.setItem('token', token)
  } else {
    delete jwtAxios.defaults.headers.common.Authorization
    localStorage.removeItem('token')
  }
}

export const setLanguage = (language?: keyof typeof languageMap) => {
  if (language) {
    jwtAxios.defaults.headers.common['Content-Language'] = languageMap[language]

    return
  }
  delete jwtAxios.defaults.headers.common['Content-Language']
}

export default jwtAxios
