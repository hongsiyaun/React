import React,{Component} from 'react'
import css from './index.module.scss'
import {NavLink} from 'react-router-dom'
class Navbar extends Component{
    render(){
       return <div className={css.navlist}>
            <ul>
                <li><NavLink to="/home" replace activeClassName={css.myactive}>首页</NavLink></li>
                <li><NavLink to="/paging" replace activeClassName={css.myactive}>分类</NavLink></li>
                <li><NavLink to="/shopcar" replace activeClassName={css.myactive}>购物车</NavLink></li>
                <li><NavLink to="/mine" replace activeClassName={css.myactive}>我的</NavLink></li>
            </ul> 
       </div> 
    }
}
export default Navbar