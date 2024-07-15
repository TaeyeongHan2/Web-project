/*
    js파일도 <script src="./Week4.js"></script>
    html에 연결해주기
    표기법 
    dash-case --->hello-my-name-is-taeyeong
    snake_case --->hello_my_name_is_taeyeong
    ---> 언더바 기호 엄청 많이 씀
    carmelCase -->helloMyNameIsTaeyeong
    ---->겁나 많이 씀

    > Zero-Based-Numbering
> 

:  Zero-Based-Numbering란 우리가 숫자를 셀 때 기본적으로

1(일), 2(이), 3(삼)….. 이렇게 세곤 하는데

개발을 할 때에는 시작점이 1(일)이 아니라 0(영)부터 세는 것을 의미한다

undifined의 경우 값이 없을 때를 나타내지만
Null의 경우 의도적으로 값이 비어있음을 의미한다
즉 Null은 의도적으로 null을 부여하여 값이 없게끔 한다고 보면된다!
*/

let fruit = ["apple", "banana"];
console.log(fruit[0]);

let myName = "taeyeong";
let email = "hantaeyeong-@naver.com";
let hello = `hello ${myName}`;

console.log(myName);
console.log(email);
console.log(hello);

let myNumber = 23018100;

console.log(myNumber);

//Boolean->조건문과 함께 사용하면 매우매우 유용하게 사용
let checked = true;
let unChecked = false;

console.log(checked);
console.log(unChecked);

//undifined
let unDef;
let obj = { abc: 123 };

console.log(unDef);
console.log(obj.abc);
console.log(obj.xyz);

let user = {
  name: "taeyeong",
  age: 20,
  isValid: true,
};

//Null
let empty = null;

console.log(empty);

console.log(user.name);
console.log(user.age);
console.log(user.isVaild);

//Array
let fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

//변수
//let은 재사용이 가능한 변수

//let a = 2;
//console.log(a);

//a = 999;
//console.log(a);

//const는 값(데이터)의 재할당 불가
//재사용이 불가

/*
const와 let중 const를 더 많이 사용한다. 
우리가 변수를 만들 때 어떠한 새로운 값을 다시 할당한다는 것을 전제로 하게 된다면
해당 변수는 언제든지 값을 새롭게 할당할 수 있도록 열려있어야 하는데 
이때 발생하는 어떤 내부적인 낭비가 있을 수 있기 때문에 
주로 const를 사용하고 재할당이 필요할 때만 let으로 바꿔서 사용한다.
*/

//함수선언
function helloMetaWeb() {
  console.log(123);
}

helloMetaWeb();

//return 반환
function helloMetaWeb() {
  return 123;
}

//let a = helloMetaWeb();
//console.log(a);

//매개변수를 사용한 함수 선언
function helloMetaWeb(a, b) {
  return a + b;
}

const friend1 = helloMetaWeb(2, 5);

//익명함수
let test = function () {
  console.log("noName");
};

test();

//조건문
let isTrue = true;
let isFalse = false;

if (isTrue) {
  console.log("이건 true이다");
}

if (isFalse) {
  console.log("이건 false이다");
}

const isTrue2 = true;
if (isTrue2) {
  console.log("뭐가 출력될까?");
} else {
  console.log("출력안됨");
}
