// console.log('hello member')
var members = [
    {
        id: 1314,
        name: '黄毅超',
        avatar: "https://mirror-gold-cdn.xitu.io/16db0f60f3e7e817d6d?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
    },
    {
        id: 520,
        name: '徐剑豪',
        avatar: "https://mirror-gold-cdn.xitu.io/16db0f60f3e7e817d6d?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
    },
    {
        id: 10000,
        name: '罗钦太',
        avatar: 'https://mirror-gold-cdn.xitu.io/16b730872769bab7fa6?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1'
    }
];
// console.log(members);
// tbody.innerHTML =
// 从json 数组 变成了 html 数组 tbody 最想要的
var tbody = document.querySelector('#member tbody');
// console.log(
tbody.innerHTML = members.map(function (member) {
    return "\n        <tr>\n          <td>" + member.id + "</td>\n          <td>" + member.name + "</td>\n          <td>\n            <img src=\"" + member.avatar + "\" />\n          </td>\n        </tr>\n      ";
}).join("");
//document.forms 取到所有的表单   document全局变量
var form = document.forms.form;
// console.log(form);
var hobby = form.hobby.value;
// console.log(hobby);
form.addEventListener('submit', function (ev) {
    console.log('提交了');
    //不需要跳转                                                  //整个函数是回调函数
    //event.preventDafault   阻止 html 表单的特点 ，事件
    ev.preventDefault();
    var userName = form.userName.value;
    var pwd = form.pwd.value;
    var repwd = form.repwd.value;
    //console.log(userName,pwd,repwd,sex,hobby);
    //显示：动态构造 html 结构
    var div = document.createElement('div'); //构造一个div标签
    div.innerHTML = "\n    <span>\u7528\u6237\u540D:" + userName + "</span>\n    <span>\u5BC6\u7801:" + pwd + "</span>                              \n    <span>hobby:" + hobby + "</span>\n    ";
    //插到页面上
    document.body.appendChild(div);
});
