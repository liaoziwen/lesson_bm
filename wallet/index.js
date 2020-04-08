// js es6  class  关键字  面向对象语言
const UUID = require('uuid');    // 引入第三方库，

class Wallet{
    // 属性和方法组成
    constructor(){
        // 构造函数里声明属性
        this._id = UUID.v1().replace(/-/g,'');    // 命名规则来约定， _开头的变量 那么他就是私有的
        // 创建时间 不能改
        this._createTime = + new Date();     // 类型转换
        // 余额 怎么设计
        this._balance = 0; //余额  设计成私有的属性 
        // this 指向实例化过后的对象
        // console.log(this.id);
        // console.log('欢迎使用支付宝钱包');
        // 设计一个支付宝用的钱包，几十亿人都在用的
        // 数字货币的概念  比特币
        // 1. 唯一 id， autoincremnet Node, 绝对不会重复

    }
    getBalance(){
        return this._balance;
    }
    // setBalance(){

    // }
    increaseBalance(increasedAmount){  //
        console.log('多了' + increasedAmount); 
        this._balance += increasedAmount
    }
    decreaseBalance(decreasedAmount){
        this._balance -= decreasedAmount
    }
    getCreateTime(){  // 私有的方法，不能调用，这是public方法，才能调用
        return this._createTime;
    }
    getId(){
        return this._id;
    }
    setId(){
        throw new Error('私有属性 _id 不可以修改');
    }
}

const zzwWallet = new Wallet();     // 实例化
console.log(zzwWallet.getId());
// console.log(zzwWallet.setId());
console.log(zzwWallet.getCreateTime());
console.log(zzwWallet.getBalance());
zzwWallet.increaseBalance(10.0);
zzwWallet.decreaseBalance(8.1);
console.log(zzwWallet.getBalance().toFixed(2));
// zzwWallet._id = '5201314';           // id 属性只读， 但不能修改
// console.log(zzwWallet._id);          // id 是 zzwWallet 的 public 属性
