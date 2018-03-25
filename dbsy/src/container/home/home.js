/**
 * Created by Administrator on 2018/3/1 0001.
 */
/**
 * Created by Administrator on 2018/3/1 0001.
 */
import React, {Component} from 'react';
import './home.css';
import Carousel from '../pages/component/carouselFigure/index'
import backTop from '../pages/component/backTop/backTop'
import {Card, Col, Row,Icon,Input, Button, notification, Modal, Tooltip, Menu,Divider,LocaleProvider, Radio,TimePicker} from 'antd';
import {
    HashRouter,
    Route,
    Redirect,
    Switch,
    Link
} from 'react-router-dom'
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('en');
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Meta } = Card;
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locale: null,//语言
            current: 'news',//导航栏已经点击的栏目
            url: 'https://ant.design',
            menus1: [{title: '东北石油大学本科生毕业设计（论文）查重工作顺利展开',time:'2014-05-23', id: '1'}, {title: '关于加强本科毕业设计（论文）考核力度的通知',time:'2014-05-25', id: '2'}, {title: '本科毕业论文规范格式',time:'2014-05-24', id: '3'}, {title: '毕业设计（论文）管理工作流程',time:'2014-05-24', id: '4'}, {title: '东北石油大学本科毕业设计（论文）答辩检查',time:'2014-05-24', id: '5'}],//card里的条目
            options_one: [{title: '管理规定', extra: <Link to="/login">More</Link>}],//card的head
            menus2: [{title: '东北石油大学本科生毕业设计（论文）查重工作顺利展开',time:'2014-05-23', id: '1'}, {title: '关于加强本科毕业设计（论文）考核力度的通知',time:'2014-05-25', id: '2'}, {title: '本科毕业论文规范格式',time:'2014-05-24', id: '3'}, {title: '毕业设计（论文）管理工作流程',time:'2014-05-24', id: '4'}, {title: '东北石油大学本科毕业设计（论文）答辩检查',time:'2014-05-24', id: '5'}],//card里的条目
            options_two: [{title: '通知公告', extra: <Link to="/login">More</Link>}],//card的head
        };
    }
// 改变语言begin
    changeLocale = (e) => {
        const localeValue = e.target.value;
        this.setState({ locale: localeValue });
        if (!localeValue) {
            moment.locale('en');
        } else {
            moment.locale('zh-cn');
        }
    }
//     改变语言end
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        this.state.menus1.sort(function (a,b) {
           return (new Date(b.time)) .getTime()-(new Date(a.time)).getTime()
        });
        let items1 = this.state.menus1.map((v, i) => {
            // alert(JSON.stringify(v));
            let b = [];
            b.push(<p key={i} className="strip"><label><Icon type="caret-right"/>{v.title}</label><label>{v.time}</label></p>);
            // b.push(<p key={v.id} style={{border:"1px solid red"}}><Icon type="caret-right"/><label style={{display:"inline-block",width:"250px",border:"1px solid blue"}}>{v.title}</label><label  style={{width:"80px",border:"1px solid yellow",display:"inline-block"}}>{v.time}</label></p>);
            if(i<4){
                b.push(<Divider/>);
            }
            return b;
        });


            let items2 = this.state.menus2.map((v, i) => {
                // alert(JSON.stringify(v));
                let b = [];
                b.push(<p key={v.id} className="strip"><label><Icon type="caret-right"/>{v.title}
                </label><label>{v.time}</label></p>);
                // b.push(<p key={v.id} style={{border:"1px solid red"}}><Icon type="caret-right"/><label style={{display:"inline-block",width:"250px",border:"1px solid blue"}}>{v.title}</label><label  style={{width:"80px",border:"1px solid yellow",display:"inline-block"}}>{v.time}</label></p>);
                if (i < 4) {
                    b.push(<Divider/>);
                }
                return b;
            });

        return (
            <LocaleProvider locale={this.state.locale}>
            <div className="outer-container">
                <div className="inner-container">
                    <div className="home">
                        <div className="top">
                            <div className="head" >
                            </div>
                            {/*轮播图begin*/}
                            <div className="carousel_figure" >
                                <Carousel/>
                            </div>
                            {/*轮播图end*/}
                            {/*导航栏begin*/}
                            <div className="navigation_bar">
                                <Menu
                                    onClick={this.handleClick}
                                    selectedKeys={[this.state.current]}
                                    mode="horizontal"
                                    // theme="dark"
                                    style={{background:"transparent",border:"1px solid #cccccc"}}
                                >
                                    <Menu.Item key="news" disabled>
                                        <Link to="/login" target="_blank" >最新动态</Link>
                                    </Menu.Item>
                                    <SubMenu title={<span><Icon type="setting"/>毕设管理</span>}>
                                        <MenuItemGroup>
                                            <Menu.Item key="setting:1">上传</Menu.Item>
                                            <Menu.Item key="setting:2">查看成绩</Menu.Item>
                                            <Menu.Item key="setting:3">查看文档</Menu.Item>
                                            <Menu.Item key="setting:4">沟通导师</Menu.Item>
                                        </MenuItemGroup>
                                    </SubMenu>
                                    <Menu.Item key="regulations">
                                        <Link to="/login" target="_blank" >管理规定</Link>
                                    </Menu.Item>
                                    <Menu.Item key="notice" >
                                        <Link to="/login" target="_blank" >通知公告</Link>
                                    </Menu.Item>
                                    <Menu.Item key="about" >
                                        <Link to="/login" target="_blank" >关于我们</Link>
                                    </Menu.Item>
                                    <Menu.Item key="message" >
                                        <Link to="/dynamicDetails/liuxin" target="_blank" >留言</Link>
                                    </Menu.Item>
                                    <Menu.Item key="download">
                                        <a href="https://ant.design" target="_blank" >表格下载</a>
                                    </Menu.Item>
                                </Menu>
                            </div>
                            {/*导航栏end*/}
                        </div>
                        <div className="middle" >
                            <Row gutter={16} className="left">
                                <Col span={8}>
                                    <Card {...this.state.options_one[0]} bordered={true} hoverable={true} loading={false}>{items1}</Card>
                                </Col>
                                <Col span={8} className="right">
                                    <Card {...this.state.options_two[0]} bordered={true} hoverable={true} loading>{items2}</Card>
                                </Col>
                                <Col span={8} className="center">
                                    <Card
                                        {...this.state.options_one[0]}
                                        className="centerCard"
                                        bordered={true} hoverable={true} loading={false}
                                    >
                                        <div style={{border:"1px solid red"}}>
                                        <img style={{width:"100%"}} alt="example" src="/img/home/girl.png"  />
                                        {/*<Meta*/}
                                            {/*title="Europe Street beat"*/}
                                            {/*description="www.instagram.com"*/}
                                        {/*/>*/}
                                        </div>
                                        <div></div>
                                        <div style={{border:"1px solid red"}}>
                                            <img style={{width:"100%"}} alt="example" src="/img/home/girl.png" />
                                            {/*<Meta*/}
                                                {/*title="Europe Street beat"*/}
                                                {/*description="www.instagram.com"*/}
                                            {/*/>*/}
                                        </div>
                                        <div></div>
                                        <div style={{border:"1px solid red"}}>
                                            <img style={{width:"100%"}} alt="example" src="/img/home/girl.png"  />
                                            {/*<Meta*/}
                                                {/*title="Europe Street beat"*/}
                                                {/*description="www.instagram.com"*/}
                                            {/*/>*/}
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                        <div className="bottom">
                            {/*改变语言begin*/}
                            <div className="change-locale">
                                <span style={{ marginRight: 16 }}>Change locale of components: </span>
                                <Radio.Group defaultValue={null} onChange={this.changeLocale}>
                                    <Radio.Button key="en" value={null}>English</Radio.Button>
                                    <Radio.Button key="cn" value={zhCN}>中文</Radio.Button>
                                </Radio.Group>
                            </div>
                            <backTop>gggg</backTop>
                            {/*改变语言end*/}
                        </div>
                    </div>
                </div>
            </div>
            </LocaleProvider>
        );
    }
}

export default Home;