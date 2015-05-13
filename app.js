function prepareOrder(ordernumber){
console.log('Prepare my order....');

cookOrder(function(){
console.log('Order  '+ordernumber+' Ready for pickup....');
});
};

function cookOrder(callback){
setTimeout(callback, 5000); 
};


prepareOrder(1);
prepareOrder(2);
prepareOrder(3);
prepareOrder(4);
prepareOrder(5);
prepareOrder(6);

