showName()
console.log(name)
var name = 'smile'

function showName() {
  console.log('showName()')
}

class Person {
  constructor(age, name) {
    this.age = age
    this.name = name
    this.abc = 111
  }

  get info() {
    return `我的名字是 ${this.name}, 我今年 ${this.age} 岁`
  }

  set abc(num) {
    this.abc += num
  }

  get abc() {
    this.abc -= 1
  }

  // 我只是属于 Person 范围下的一个静态方法
  static eat() {
    console.log('asdf')
  }

  say(sentence) {
    return `我的名字是 ${this.name}，我说：${sentence}`
  }
}

// const obj = {
//   a: 1
// }

// function func() {
//   return ''
// }

// func(obj)

let person1 = new Person(18, 'mxx')
