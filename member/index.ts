// console.log('hello member')

// 有什么问题？ 
// 1. 写死了， 不能动态更新， 
// 2. js   uuid npm 
// 3. 数据不合法， 数据不严谨  如何让不严谨的数据守规矩？ 
// 接口
interface MembersEntity {
    id: number;
    name: string;
    avatar: string;
  }  
  
  
  const members: MembersEntity[] = [
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
  ]
  // console.log(members);
  // tbody.innerHTML =
  // 从json 数组 变成了 html 数组 tbody 最想要的
  const  tbody = document.querySelector('#member tbody');
    // console.log(
  tbody.innerHTML = members.map((member) => {
      return `
        <tr>
          <td>${member.id}</td>
          <td>${member.name}</td>
          <td>
            <img src="${member.avatar}" />
          </td>
        </tr>
      `
    }).join("");
    //document.forms 取到所有的表单   document全局变量
    const form = document.forms.form;
    // console.log(form);
    const hobby  = form.hobby.value;
    // console.log(hobby);
    form.addEventListener('submit',function(ev){                   //event 是形参 调用方法用的
        console.log('提交了');
        //不需要跳转                                                  //整个函数是回调函数
        //event.preventDafault   阻止 html 表单的特点 ，事件
        ev.preventDefault();
    const userName = form.userName.value;
    const pwd = form.pwd.value;
    const repwd = form.repwd.value;
    //console.log(userName,pwd,repwd,sex,hobby);
    //显示：动态构造 html 结构
    const div = document.createElement('div');           //构造一个div标签
    div.innerHTML = `
    <span>用户名:${userName}</span>
    <span>密码:${pwd}</span>                              
    <span>hobby:${hobby}</span>
    `
    //插到页面上
    document.body.appendChild(div)
    })