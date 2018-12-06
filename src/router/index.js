import Vue from 'vue'  
import Router from 'vue-router'  
import HelloWorld from '@/components/HelloWorld'  
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import params from '@/components/params'
import error from '@/components/Error'


 
Vue.use(Router)
 
export default new Router({
  mode:'history',
  // mode:'hash',
  routes: [            
    {                    
      path: '/',        
      name: 'HelloWorld',    
      component:HelloWorld
    },
    {                    
      path: '/params/:newsId(\\d+)/:newsTitle',        
      name: 'params',    
      component:params,
      // beforeEnter:(to,from,next) => {
      //   console.log(to)
      //   console.log(from)
      //   // next()
      //   // next(true)
      //   next({path:'/hi'})
      // }
    },
    {
      path:'/gohome',
      redirect:'/'
    },
    {
      path:'/goparams/:newsId(\\d+)/:newsTitle',
      redirect:'/params/:newsId(\\d+)/:newsTitle'
    },
    {
      path:'/hi',
      component:Hi,
      alias:'/rainbow'
    },
    {
      path:'/hi',
      component:Hi,
      children:[
        {path:'/',name:'HelloWorld/Hi',component:Hi},
        {path:'hi1',name:'hi1',component:Hi1},
        {path:'hi2',name:'hi2',component:Hi2},
      ]
    },{
      path:'*',
      component:error   
    }
  ]
})