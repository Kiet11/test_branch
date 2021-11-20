

// for (var i = 0; i < 10; i++) {
//     //console.log(i)
// }


// console.log(i)  // => kết quả ?

// var lisButton = document.querySelectorAll("button");

// for (let i = 0; i < lisButton.length; i++)
// {
//     // lisButton[i].onclick = showMesg.bind(this, i + 1);
    
//      lisButton[i].onclick = function (ev)
//      {
//         alert( i + 1);
//     //     lisButton[i].onclick = showMesg.bind(this, i + 1);
//      }
// }
// if (i == 1)
// {
//     var x = 10;
//     let y = 20;
// }
// console.log(x);
// console.log(y);

// function showMesg(i)
// {
//      alert(i);
// }

// console.log(i);

// const txtName = document.querySelector("#name");
// const btnHello = document.querySelector("#btn");

// btnHello.onclick = function (ev) {
//     let name = txtName.value;
//     var now = new Date();
//     // let mesg = "Xin chào!!! [" + name + "].Bây giờ là [" + now.toLocaleString() +"]";
//     let mesg = `Xin chào!!! [${name}]. Bây giờ là [${now.toLocaleString()}]`;
//     alert(mesg);
// }

// const arr = [1, 4, 2, 4, 7, 9, 0];

// for (const item of arr)
// {
//     console.log(item);
// }

// const myObj = {
//     a: 2,
//     b: 3,
// };
// myObj.c = 10;

// // for (let key in myObj)
// // {
// //     console.log(key)
// //     console.log(myObj[key])
// // }

// const arr = [1,2,3,4,5];
// for(let item of arr) 
// {
//     console.log(item);
// }


const txtName = document.querySelector("#name");
const btnHello = document.querySelector("#btn");
btnHello.onclick = (ev) =>
{
    
    // console.log(this);
    let name = txtName.value;
    var now = new Date();

    let mesg = `Xin chào!!! [${name}]. Bây giờ là [${now.toLocaleString()}]`;
    alert(mesg);
}
var obj = {
    abc: 10,
    xyz: 1
};

var x = Object.assign({},obj);
x.abc = 999;
console.log(obj);

// let prop1 = "abc";
// let proq2 = "xyz";

// const obj = {
//     [prop1 + "ABC"]: 10,
//     [proq2 + "XYZ"]:20,
// };
// console.log(obj);
// const obj = {
//     a: 10,
//     b:20,
//     sum: function(){
//         return this.a+this.b;
//     }
// }

// const obj2 = {
//     a: 10,
//     b:20,
//     sum: function(){
//         return this.a+this.b;
//     }
// }
// console.log(obj2.sum());

// const myFunc = function myFunc(a){
//     console.log(a);
// }

// const arrowFunc = (a , b) =>  a + b;
//{
//   console.log(a + b);
//   return a + b;
//}
// console.log(arrowFunc(1,2));

// myFunc("Hello 2");

// console.log(myFunc);