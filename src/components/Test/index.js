import React, { Component } from 'react'

export default class Test extends Component {
    render() {
        return (
            <div style={{zIndex:'99999'}}>
                <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">最美焦作行</a>
            </div>


            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li className="active"><a href="/jiaozuo">焦作区域 <span className="sr-only">(current)</span></a></li>

                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                            aria-expanded="false">选择景点 <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="/yuntai">云台山</a></li>
                            <li><a href="/qingtian">青天河</a></li>
                            <li><a href="/qinglongxia">青龙峡</a></li>

                            <li><a href="#">王屋山</a></li>

                            <li><a href="#">神龙山</a></li>
                            <li><a href="#">太极拳祖祠</a></li>
                            <li><a href="#">黄河小浪底</a></li>
                            <li><a href="#">何塘纪念馆</a></li>

                            <li><a href="#">嘉应观</a></li>

                            <li><a href="#">五龙口</a></li>
                            <li><a href="#">月山寺</a></li>
                            <li><a href="#">药王庙</a></li>
                            <li><a href="#">庙乐寺塔</a></li>

                            <li><a href="#">千佛阁</a></li>

                            <li><a href="#">神仙洞</a></li>
                            <li><a href="#">怪坡园</a></li>
                            <li><a href="#">净影寺</a></li>
                        </ul>
                    </li>
                    <li><a >显示/隐藏实时路况</a></li>
                   
                   
                   <li><a >附近酒店</a></li>
                   <li><a >各类美食</a></li>
                
                </ul>
            
             
            </div>
        </div>
    </nav>
            </div>
        )
    }
}
