/**
 * Created by muzrea on 17-7-17.
 */

'use strict';
class Kclass{
    constructor(num){
        this.number = num;
    }
    assignLeader(leader){
        let student1 = new Student(id,name,age,klass);
        this.leader = student1.id;
    }
}
class Person {
    constructor(id,name,age){
        this.id = id;
        this.name = name;
        this.age = age;
    }
    introduce(){
        let str =  `My name is ${this.name}. I am ${this.age} years old.` ;
        return str;
    }
}

class Student extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        var class1 = new Kclass(klass);
        this.klass = {};
        this.klass.number = class1.number;
        this.klass.leader = class1.leader;
    }
    introduce(){
        if(this.id = this.klass.leader){
            let strStudent =  `${super.introduce()} I am a Student. I am Leader of Class ${this.klass.number}.`;
        }else{
            let strStudent =  `${super.introduce()} I am a Student. I am Leader of Class ${this.klass.number}.`;
        }
        return strStudent;
    }
}
class Teacher extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass = klass;
    }
    introduce(){
        if(this.klass != null){
            let strTeacher =  ` ${super.introduce()} I am a Teacher. I teach Class ${this.klass}.`;
        }else{
            let strTeacher =  ` ${super.introduce()} I am a Teacher. I teach No Class`;
        }
        return strTeacher;
    }
}
var str =new  Person('Tom',21);
var a = str.introduce();
console.log(a);
var  b =new Student('Gergeo',21,3);
var strStudent = b.introduce();
console.log(strStudent);
