// let arr = [9, 5, 3];

// let x = arr[2];
// let y = arr[1];
// let z = arr[0];

// let [x, ,y] = [9, 5, 3];

// console.log(x, y);

// let obj = {
//     _name: "Jonh",
//     age: 12
// };

// let {_name, age} = obj;

// console.log(_name);
// console.log(age);


// let a = 1;
// let b = 2;
// let c = a;
// a = b;
// b = c;
// console.log(a ,b);

// function show() {

//     for (let i = 0; i < arguments.length; i ++)
//     {

//         console.log(arguments[i]);

//     }

// }

// function showES6 ( ...data)

// {
//     console.log(data);
// }

// showES6 (1, 2, 3);
// show (1, 2, 3);

// const arr1 = [1, 2, 4];
// const arr2 = [7, 8, 9];

// let newArr = arr1.concat(arr2);
// let newArr_ES6 = [...arr1, ...arr2];

// console.log(newArr);
// console.log(newArr_ES6);

function spread(a, b, c, d)
{
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

const arr = [9, 8, 7];
spread(...arr,1);

var a = {
    _name: "ABC",
    age: 100
};

var b = {...a};
b.age = 1;
console.log(a.age);