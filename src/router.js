import Vue from 'vue'
import VueRouter from 'vue-router'
import OnlineReporting from './components/online-reporting/OnlineReporting'
import OnlineReportingDetails from './components/online-reporting/OnlineReportingDetails'
import NotFound from './components/not-found/NotFound'


Vue.use(VueRouter)

const creditSuisse = 'Credit Suisse'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/notfound',
            name: 'notfound',
            component: NotFound,
        },
        {
            path: '',
            name: 'Online Reporting',
            component: OnlineReporting,
            meta: {
                title: `${creditSuisse} | Online Reporting`
            }
        },
        {
            path: '/form',
            name: 'Online Reporting GCMC - Details',
            component: OnlineReportingDetails,
            meta: {
                title: `${creditSuisse} | Details`
            }
        },
        {
            path: '*',
            redirect: '/notfound'
        }
    ]
})
