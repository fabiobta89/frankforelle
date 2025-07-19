const PageRoutes = {
    main: {
        index: '/',
    },
    auth: {
      login: '/auth/login',
      forgot_password: '/auth/forgot-password',
      reset_password: '/auth/reset-password/[uid]/[token]',
      logout: '/auth/logout',
      sign_up: '/auth/invite',
      send_secure_code: '/auth/send-secure-code',
      activate_user: '/auth/activate-user/[token]',
    },
  }
  
  export default PageRoutes;