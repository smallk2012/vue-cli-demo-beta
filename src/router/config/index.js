export default {
    routes: [
        {
            path: '*',
            redirect: {
                path: '/demo'
            }
        },
        {
            path: '/hello',
            name: 'hello',
            component: () => import('@/components/HelloWorld')
        },
        {
            path: '/demo',
            name: 'demo',
            component: () => import('@/pages/Demo')
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
        }
    ]
}
