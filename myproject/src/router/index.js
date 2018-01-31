import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import params from '@/components/params'
import chongdingxiang from '@/components/chongdingxiang'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/hi1',
            name: 'hi1',
            component: Hi1
        },
        {
            path: '/hi',
            components: {
                default: HelloWorld,
                left: Hi1,
                right: Hi2
            }
        },
        {
            path: '/params/:newsId(\\d+)/:newsTitle',
            component: params
        },
        {
            path:'/chongdingxiang',
            redirect:'/'
        }

    ]
})
