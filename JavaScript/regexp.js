/*
 * @Author: tianchen
 * @Date: 2018-11-12 21:22:47 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-11-12 22:44:58
 */

//正则是以^开头的，$这个为结尾的
//写的是一个匹配是a-y，0-9，-_并且有3-15个字符长度
let reg = /^[a-y0-9_-]{3,15}$/;

//以数字和字母abc结尾的匹配
let reg = /^[0-9]+abc$/;

//或者是下面的，\d == 0-9
let reg =/^[\d]+abc$/;

//对于root+b就是对于+号前面会出现除去0的次数
let reg = /^(root)+b$/;

//root*b，*之前的会出现任意次
let reg = /^(root)*b$/;

//root?b ,?号前会匹配0 或者是 1次
let reg = /^(root)?b$/;

//第一位是匹配到1-9，第二个是匹配到0-9，最少匹配一次，
//最多匹配两次
let reg = /^[1-9][0-9]{1,2}$/;

