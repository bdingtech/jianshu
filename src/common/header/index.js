import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from 'react-redux';
import  { actionCreator }  from './store'

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSerch,
  Addition,
  Button,
  NavSerchWrapper,
} from "./style";

class Header extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }
  render() {
    return (
      <HeaderWrapper>
        <Logo></Logo>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe65a;</i>
          </NavItem>
          <NavItem className="right">登录</NavItem>
          <NavSerchWrapper>
            <CSSTransition
              in={this.props.focus}
              timeout={200}
              classNames="slide"
            >
              <NavSerch
                className={this.props.focus ? "focus" : ""}
                onFocus={this.props.handelFocus}
                onBlur={this.props.handelBlur}
              ></NavSerch>
            </CSSTransition>
            <i className={this.props.focus ? "iconfont focus" : "iconfont"}>
              &#xe600;
            </i>
          </NavSerchWrapper>
        </Nav>
        <Addition>
          <Button className="reg">注册</Button>
          <Button className="writting">
            <i className="iconfont">&#xe6ea;</i>
            写文章
          </Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    focus:state.header.focus
  }
} 
const mapDispathToProps = (dispath) => {
 return {
  handelFocus() {
    dispath(actionCreator.handelFocusAction())
  },
  handelBlur() {
    dispath(actionCreator.handelBlurAction())
  }
 }
}
export default connect(mapStateToProps,mapDispathToProps)(Header)
