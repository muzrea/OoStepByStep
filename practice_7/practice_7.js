/**
 * Created by muzrea on 17-7-17.
 */

'use strict';

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
        this.klass = klass;
    }
    introduce(){
        let strStudent =  ` ${super.introduce()} I am a Student. I am at Class ${this.klass}.`;
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
}