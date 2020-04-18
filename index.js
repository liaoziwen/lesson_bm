// console.log('hello member')
var members = [
    {
        id: 1314,
        name: '周子寒',
        sex: '男',
        avatar: 'https://mirror-gold-cdn.xitu.io/16db0f60f3e7e817d6d?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
        phone_number: 1314,
        home_town: '江西赣州'
    },
    {
        id: 520,
        name: '章鑫',
        sex: '男',
        avatar: 'https://mirror-gold-cdn.xitu.io/16b730872769bab7fa6?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
        phone_number: 520,
        home_town: '江西赣州'
    },
    {
        id: 666,
        name: '邱在杰',
        sex: '男',
        avatar: 'https://mirror-gold-cdn.xitu.io/16b730872769bab7fa6?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
        phone_number: 666,
        home_town: '江西赣州'
    },
];
var form = document.forms.myform;
// console.log(form);
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var id = form.idInput.value;
    var name = form.nameInput.value;
    var sex = form.sexInput.value;
    var avatar = form.avatarInput.value;
    var phone_number = parseInt(form.phone_numberInput.value);
    var home_town = form.home_townInput.value;
    if (id.trim().length === 0) {
        alert('id 不能为空');
        return;
    }
    if (name.trim().length === 0) {
        alert('name 不能为空');
        return;
    }
    var ids = parseInt(id);
    members.push({
        id: ids,
        name: name,
        sex: sex,
        avatar: avatar,
        phone_number: phone_number,
        home_town: home_town
    });
    console.log(members);
    render();
});
var tbody = document.querySelector('#member tbody');
// tbody.innerHTML =
// 从json 数组 变成了 html 数组 tbody 最想要的
// console.log(members)
function render() {
    tbody.innerHTML = members
        .map(function (member) {
        return "\n        <tr>\n            <td>" + member.id + "</td>\n            <td>" + member.name + "</td>\n            <td>" + member.sex + "</td>\n            <td><div class=\"imgbox\"><img src=" + member.avatar + "></div></td>\n            <td>" + member.phone_number + "</td>\n            <td>" + member.home_town + "</td>\n        </tr>\n        ";
    }).join(" ");
}
render();
