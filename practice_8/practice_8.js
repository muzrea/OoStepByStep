/**
 * Created by muzrea on 17-7-17.
 */
'use strict';
class Kclass{
    constructor(num){
        this.number = num;
    }
}
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        let str =  `My name is ${this.name}. I am ${this.age} years old.` ;
        return str;
    }
}

class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        var class1 = new Kclass(klass);
        this.klass = {};
        this.klass.number = class1.number;
    }
    introduce(){
        let strStudent =  `${super.introduce()} I am a Student. I am at Class ${this.klass.number}.`;
        return strStudent;
    }
}
class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
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
    introduceWith(student){
        let student1 = Student(name,age,klass);
        if(student1.class == this.class){
            let strTeach =  ` ${super.introduce()} I am a Teacher. I teach No Class. I am a Teacher. I teach ${student1.name}.`;
        }else{
            let strTeach =  ` ${super.introduce()} I am a Teacher. I teach No Class. I am a Teacher. I don't teach ${student1.name}.`;
        }
    }
}
var str =new  Person('Tom',21);
var a = str.introduce();
console.log(a);
var  b =new Student('Gergeo',21,3);
var strStudent = b.introduce();
console.log(strStudent);
