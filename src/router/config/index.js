export default {
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: () => import('@/components/HelloWorld')
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('@/pages/Login')
        },
        {
            path: '/home',
            name: 'Home',
            component: () => import('@/pages/Home')
        },
        {
            path: '*',
            redirect: {
                path: '/'
            }
        }
    ]
}
