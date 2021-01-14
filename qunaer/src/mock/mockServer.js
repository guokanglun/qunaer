/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './dataHome.json'
import city from './city.json'

// 返回hopme的接口
Mock.mock('/dataHome', {code:0, data:data});
Mock.mock('/city', {code:0, data:city});


// export default ???  不需要向外暴露任何数据, 只需要保存能执行即可
