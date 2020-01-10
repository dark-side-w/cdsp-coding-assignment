import Vue from 'vue'
import VueRouter from 'vue-router'
import OnlineReporting from './components/online-reporting/OnlineReporting'
import OnlineReportingDetails from './components/online-reporting/OnlineReportingDetails'
import NotFound from './components/not-found/NotFound'
import Layout from './components/shared/Layout'


Vue.use(VueRouter)

const creditSuisse = 'Credit Suisse'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '',
            component: Layout,
            children: [
                {
                    path: '/online-reporting',
                    component: OnlineReporting,
                    meta: {
                        title: `${creditSuisse} | Online Reporting`
                    }
                },
                {
                    path: '/form',
                    component: OnlineReportingDetails,
                    query: {
                        id: null,
                    },
                    meta: {
                        title: `${creditSuisse} | Online Reporting - details`
                    },
                },
                {
                    path: '/',
                    redirect: '/online-reporting',
                },
            ]
        },
        {
            path: '/notfound',
            component: NotFound,
        },
        {
            path: '*',
            redirect: '/notfound'
        }
    ]
})
