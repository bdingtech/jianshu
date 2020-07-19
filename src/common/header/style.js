import styled from 'styled-components'
import logoPic from '../../static/logo.png'

export const HeaderWrapper = styled.div`
    position:relative;
    height:56px;
    border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.a`
    position:absolute;
    top:0;
    left:0;
    display:block;
    height:56px;
    width: 100px;
    background:url(${logoPic});
    background-size:contain;
`
export const Nav = styled.div`
    /* position: absolute; */
    width: 960px;
    height:56px;
    margin:0 auto;
    padding-right:70px;
`
export const NavItem = styled.div`
    line-height:56px;
    padding: 0 15px;
    font-size:18px;
    color:333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
    }
    &.active{
        color:#ea6f5a
    }
`
export const NavSerchWrapper = styled.div`
    height:56px;
    float:left;
    position:relative;
    .iconfont {
        width:30px;
        height:30px;
        border-radius:15px;
        line-height:30px;
        text-align:center;
        font-size:18px;
        position:absolute;
        right:5px;
        bottom:13px; 
        &.focus{
            background-color:#777;
            color:#fff;
        }
        /* background-color:blue; */
    }
`
export const NavSerch = styled.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    height:38px;
    margin-top:9px;
    margin-left:20px;
    color:#333;
    padding: 0 35px 0 20px;
    box-sizing:border-box;
    border:none;
    outline:none;
    border-radius:19px;
    background-color:#eee;
    &::placeholder{
        color: #999;
    }
    &.focus{
        width:240px;
    }
    &.slide-enter {
        transition: all .2s ease-out;
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition: all .2s ease-out
    }
    &.slide-exit-active{
        width:160px;
    }
`
export const Addition = styled.div`
    height:56px;
    position:absolute;
    top:0;
    right:0;
`
export const Button = styled.div`
    float:left;
    line-height:38px;
    margin-top:9px;
    margin-right:20px;
    padding:0 20px;
    border-radius:19px;
    border:1px solid #ea6f5a;
    &.reg{
        color:#ea6f5a;
    }
    &.writting{
        background-color:#ea6f5a;
        color:#fff;
    }
`
export const Test = styled.div`
    /* height:56px; */
    background-color:blue;
`