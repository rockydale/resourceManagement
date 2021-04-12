import Router from 'koa-router'
import Redis from 'koa-redis'
import User from '../dbs/models/users'
import axios from './utils/axios'

// let router = new Router({prefix:'/users'})
let router = new Router()

let Store = new Redis().client

router.post('/signup',async (ctx)=>{
    const {username,password} = ctx.request.body
    let user = await User.find({username})
    if(user.length){
        ctx.body = {
            code:-1,
            msg:'已被注册'
        }
        return
    }
    let nuser = await User.create({username,passeord})
    if(nuser){
        let res = await axios.post('/users/signin',{username,password})
        if(res.data && res.data.code === 0){
            ctx.body = {
                code:0,
                msg:'注册成功',
                user:res.data.user
            }
        }else{
            ctx.body = {
                code:-1,
                msg:'error'
            }
        }
    }else{
        ctx.body = {
            code:-1,
            msg:'注册失败'
        }
    }
})

router.post('/signin',async (ctx,next)=>{
    //这里的逻辑是根据用户名找密码 一致则通过
})

export default router