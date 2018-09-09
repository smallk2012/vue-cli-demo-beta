export default {
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: () => import('@/components/HelloWorld')
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
