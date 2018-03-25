
import React from 'react';
import './index.css';
import {Carousel} from 'antd'
class SimpleSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        }
    };

    render() {
    const settings = {
        adaptiveHeight:false,//自动调整滑块的高度
        autoplaySpeed:3000,//每次滚动之间的延迟
        focusOnSelect:false,//点击进入幻灯片
        pauseOnHover:true,//悬停时阻止自动播放
        autoplay:true,//是否自动切换
        dots: true,//是否显示面板指示点
        easing:'linear',//动画切换速率
        effect:'fade',//渐隐&&滑动scrollx
        vertical:false,//垂直显示
    };
    return (
        <Carousel {...settings}>
            <div><img src="/img/home/5.jpg"/></div>
            <div><img src="/img/home/2.jpg"/></div>
            <div><img src="/img/home/3.jpg"/></div>
            <div><img src="/img/home/4.jpg"/></div>
            <div><img src="/img/home/5.jpg"/></div>
            </Carousel>
    );
}
}
export default SimpleSlider;