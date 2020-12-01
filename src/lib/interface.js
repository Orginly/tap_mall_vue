/*
 * @Author: Orginly
 * @Date: 2020-11-25 13:59:01
 * @LastEditors: Orginly
 * @LastEditTime: 2020-12-01 15:15:07
 */
/*
接口请求函数模块
返回值: promise对象
 */
import { post, get, put } from './http'

//跨域请求服务器变更地址
const url = '/' //本地反向代理
//const url = 'http://mallapi.orginly.top/'
//const url = 'http://mall.orginly.top/'; //Nginx代理
//发送验证码
export const smscode = (data) => post(url + "api/sendcode", data);
//登录
export const login = (data) => post(url + "api/login", data);
//退出登录
export const logout = (data) => get(url + "api/logout", data);
//获取用户基本信息
export const user = (data) => get(url + "api/user", data);
export const updateUser = (data) => put(url + "api/user/1", data);
//获取分类
export const category = (data) => get(url + "api/category", data);
//获取banner
export const banner = (data) => get(url + "api/index/getRotationChart", data);
//获取首页推荐
export const goodsRecommend = (data) => get(url + "api/index/cagegoryGoodsRecommend", data);
//获取分类sku
export const sku = (data) => get(url + "api/sku", data);
//获取分类列表中 二三级分类数据
export const categorySearch = (data) => get(url + "api/category/search/" + data.id);
//根据分类ID获取子分类
export const subcategory = (data) => get(url + "api/subcategory/" + data.id);
//获取分类页面  商品列表
export const lists = (data) => get(url + "api/lists", data);
//搜索关键词
export const searchTop = (data) => get(url + "api/mall.recommend/searchTop", data);
//商品详情
export const detail = (data) => get(url + "api/detail/" + data.id);
//推荐商品
export const recommend = (data) => get(url + "api/mall.recommend");
//加入购物车
export const addCart = (data) => post(url + "api/cart/add", data);
//购物车列表
export const cartList = (data) => get(url + "api/cart/lists", data);
//购物车列表
export const deleteCart = (data) => post(url + "api/cart/delete", data);
//修改购物车数量
export const updateCart = (data) => post(url + "api/cart/update", data);
//购物车总数
export const cartCount = (data) => post(url + "api/mall.init", data);
//用户地址
export const address = (data) => get(url + "api/address", data);
//提交订单
export const order = (data) => post(url + "api/order", data);
//获取订单信息
export const orderList = (data) => get(url + "api/order", data);
//获取订单详情
export const orderInfo = (data) => get(url + "api/order/" + data.id);
//获取订单详情
export const doOrder = (data) => put(url + "api/order/" + data.id, { "type": data.type });
//支付
export const pay = (data) => post(url + "api/pay", data);
//支付结果查询
export const payQuery = (data) => get(url + "api/order.async/queryState", data);

