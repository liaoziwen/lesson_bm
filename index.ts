// console.log('hello member')

// 有什么问题?
// 1.写死了,不能动态更新
// 2.js uuid npm
// 3.数据不合法, 数据不严谨 如何让不严谨的数据守规矩?
// 接口 typescript 约束 对象字面量 用法
interface MembersEntity {
    id: number;
    name: string;
    sex:string;
    avatar: string;
    phone_number:number;
    home_town:string;
}

const members:  MembersEntity[] = [
    {
        id: 1314,
        name: '周子寒',
        sex:'男',
        avatar: 'https://mirror-gold-cdn.xitu.io/16db0f60f3e7e817d6d?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
        phone_number:1314,
        home_town:'江西赣州'
    },
    {
        id: 520,
        name: '章鑫',
        sex:'男',
        avatar: 'https://mirror-gold-cdn.xitu.io/16b730872769bab7fa6?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
        phone_number:520,
        home_town:'江西赣州'
    },
    {
        id: 666,
        name: '邱在杰',
        sex:'男',
        avatar: 'https://mirror-gold-cdn.xitu.io/16b730872769bab7fa6?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
        phone_number:666,
        home_town:'江西赣州'
    },
]

const form = document.forms.myform;
// console.log(form);
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const id = form.idInput.value;
    const name =form.nameInput.value;
    const sex =form.sexInput.value;
    const avatar =form.avatarInput.value;
    const phone_number =parseInt(form.phone_numberInput.value);
    const home_town =form.home_townInput.value;
    if (id.trim().length === 0) {
        alert('id 不能为空');
        return;
    }
    if (name.trim().length === 0) {
        alert('name 不能为空');
        return;
    }
    const ids = parseInt(id);
    members.push({
        id: ids,
        name: name,
        sex:sex,
        avatar: avatar,
        phone_number:phone_number,
        home_town:home_town
    });
    console.log(members);
    render()
})
const tbody = document.querySelector('#member tbody');
// tbody.innerHTML =
// 从json 数组 变成了 html 数组 tbody 最想要的
// console.log(members)
function render(){
    tbody.innerHTML = members
    .map((member) => {
        return `
        <tr>
            <td>${member.id}</td>
            <td>${member.name}</td>
            <td>${member.sex}</td>
            <td><div class="imgbox"><img src=${member.avatar}></div></td>
            <td>${member.phone_number}</td>
            <td>${member.home_town}</td>
        </tr>
        `
    }).join(" ")
}
render();