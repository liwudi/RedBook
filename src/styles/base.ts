import { Dimensions } from 'react-native';
import Config from '../config';

const { width, height } =  Dimensions.get('window');

console.log(height);

const baseSize = width / 720;

const fontSize = {
    base: baseSize,
    navTitle: baseSize * 36,  //导航标题
    articleTitle: baseSize * 32,  //文章标题或图标名称
    text: baseSize * 28, //文本字体
    note: baseSize * 24,  //注释最小字体
    mini: baseSize * 20,  //注释最小字体
};

// 这里，应该根据业务，精细化的定制一些预定义样式：按钮、边距、颜色等等。

const color = {
    main: Config.mainColor,  //司机端主色
    auxiliary: '#ff9c00',  //辅色
    bg: '#f5f5f5',  //背景
    line: '#e5e5e5',  //（分隔）线
    navTitle: '#ffffff',  //导航标题
    text: '#666666',  //文本
    note: '#999999',  //注释
    important: '#333333',  //重要信息,
    modalBg: 'rgba(0,0,0,0.6)',  //弹窗或者列表黑色半透明背景
    testColor: '#15c206', //体检开始颜色
    danger:'#ff0000', //积分增加颜色
    integralButtonBg:'#FF7200', //积分界面按钮颜色
};

export default {
    baseSize,
    fontSize,
    color,
};
