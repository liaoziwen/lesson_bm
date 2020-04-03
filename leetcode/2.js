var addTwoNumbers = function(l1, l2) {
    var list1 = [];
    var list2 = [];
    var l3 = new ListNode(null);
    var node = l3;
    var pre = 0;
    while(l1!=null||l2!=null){
        list1.push((l1!=null)?l1.val:0);
        list2.push((l2!=null)?l2.val:0);
        if(l1 != null) l1 = l1.next
        if(l2 != null) l2 = l2.next
    }
    for(var i = 0;i<list1.length;i++){
        let sum = 0;
        sum = list1[i]+list2[i]+pre;
        if(sum>=10){
            pre=1;
            sum = sum -10;
        }else{
            pre = 0;
        }
        node.next=new ListNode(sum);
        node = node.next;
        if(i == (list1.length-1) &&pre==1){
        node.next=new ListNode(1);
        node = node.next;
        }
    }
    return l3.next;
};
