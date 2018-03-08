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
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locale: null,//语言
            current: 'mail',//导航栏已经点击的栏目
            url: 'https://ant.design',
            menus: [{title: '我是title1', id: '1'}, {title: '我是title2', id: '2'}, {title: '我是title3', id: '3'}],//card里的条目
            options_one: [{title: '请选择类目', extra: <Link to="/login">More</Link>}],//card的head
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
        let items = this.state.menus.map((v, i) => {
            // alert(JSON.stringify(v));
            let a = this.state.menus.length;
            // alert(v.title) ;
            let b = [];
            b.push(<p key={v.id}><Icon type="setting" />{v.title}</p>);
            if(i<2){
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
                                    theme="dark"
                                >
                                    <Menu.Item key="mail">
                                        <Link to="/login">Navigation One</Link>
                                    </Menu.Item>
                                    <Menu.Item key="app" disabled>
                                        <Link to="/login">Navigation Two</Link>
                                    </Menu.Item>
                                    <SubMenu title={<span><Icon type="setting"/>Navigation Three - Submenu</span>}>
                                        <MenuItemGroup title="Item 1">
                                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                                        </MenuItemGroup>
                                        <MenuItemGroup title="Item 2">
                                            <Menu.Item key="setting:3">Option 3</Menu.Item>
                                            <Menu.Item key="setting:4">Option 4</Menu.Item>
                                        </MenuItemGroup>
                                    </SubMenu>
                                    <Menu.Item key="alipay">
                                        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation
                                            Four - Link</a>
                                    </Menu.Item>
                                </Menu>
                            </div>
                            {/*导航栏end*/}
                        </div>
                        <div className="middle">
                            <Row gutter={16} className="left">
                                <Col span={8}>
                                    <Card {...this.state.options_one[0]} bordered={true} hoverable={true} loading={false}>{items}</Card>
                                </Col>
                                <Col span={8} className="center">
                                    <Card {...this.state.options_one[0]} bordered={true} hoverable={true} >
                                        <p><Icon type="setting" />中国共产党万岁</p>
                                        <Divider />
                                        <p><Icon type="setting" />中国共产党万岁</p>
                                        <Divider />
                                        <p><Icon type="setting" />中国共产党万岁</p>
                                    </Card>
                                </Col>
                                <Col span={8} className="right">
                                    <Card {...this.state.options_one[0]} bordered={true} hoverable={true} loading>{items}</Card>
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