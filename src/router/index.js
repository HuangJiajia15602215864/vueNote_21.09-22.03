import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [{
    path: '/transitions',
    name: 'transitions',
    component: () => import('@/views/transitions/index'),
    meta: {
        title: 'transitions',
        allowBack: false
    }
}]

const createRouter = () =>
    new Router({
        mode: 'history',
        scrollBehavior: () => ({
            y: 0
        }),
        routes: constantRoutes
    })
const router = createRouter()

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
    if (!to.meta.allowBack) { // allowBack属性存在且为false
        history.pushState(null, null, location.href)
    }
})

export default router