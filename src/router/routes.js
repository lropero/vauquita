import { Login, Start } from 'vauquita/components'

const routes = {
  protected: [
    {
      path: '/',
      redirect: '/start'
    },
    {
      path: '/start',
      component: Start
    }
  ],
  public: [
    {
      path: '/login',
      component: Login
    }
  ]
}

export default routes
