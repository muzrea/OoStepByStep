/**
 * Created by muzrea on 17-7-17.
 */
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        let str = ` My name is ${this.name}. I am ${this.age} years old. `;
        return str;
    }
}
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }
    basicIntroduce(){
        let strStudent = ` ${super.introduce()} I am a Student. I am at Class ${this.klass}.`;
        return strStudent;
    }
}