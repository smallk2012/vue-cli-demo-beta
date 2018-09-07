export default {
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: () => import('@/components/HelloWorld')
        },
        {
            path: '*',
            redirect: {
                path: '/'
            }
        }
    ]
}
