function adds( x, y){
    if (arguments.length < 2) {
        console.error('参数不够');
        throw new Error('参数不够');
        return;
      }
        
      if (typeof x != 'number' || typeof y != 'number') {
        throw new Error('参数类型有误');
        return;
      }
    
      return x + y;
    }
    
console.log(adds(3.2, 4.6));