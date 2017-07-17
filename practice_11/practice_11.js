/**
 * Created by muzrea on 17-7-17.
 */


'use strict';
class Kclass{
    constructor(num){
        this.number = num;
    }

    appendMember(member){
        let student1 = new Student(id,name,age,klass);
        this.member = [];
        this.member.push(student1.id);
    }
    assignLeader(leader){
        let student1 = new Student(id,name,age,klass);
        if(this.klass.member==null){
            let strLeader =  'It is not one of us.';
        }

        this.leader = student1.id;
    }
    isIN(isMember){
        let student1 = new Student(id,name,age,klass);
        this.member= [];
        if(this.num = student1.klass){
            this.isMember.push(true);
        }else{
            this.isMember.push(false);
        }
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
        this.klass.member = class1.member;
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
    constructor(id,name,age,klasses){
        super(id,name,age);
        this.klasses = [];
        this.klasses = klasses;
    }
    introduce(){
        if(this.klasses != null){
            let strTeacher =  ` ${super.introduce()} I am a Teacher. I teach Class ${this.klasses}.`;
        }else{
            let strTeacher =  ` ${super.introduce()} I am a Teacher. I teach No Class`;
        }
        return strTeacher;
    }
    /*isTeaching(teach){
        let student1 = Student(name,age,klass);
        for(let i in this.klasses){
            if(student1.class == this.klasses[i]){
                this.teach = true;
                break
            }else{
                this.teach = false;
            }
        }
    }*/
    //直接用isTeaching来判断老师是否教这个学生
    isTeaching(teach){
        let student1 =new Student(id,name,age,klass);
        let class1 =[];
        for(let i in this.klasses){
            class1[i] = new Kclass(this.klasses[i]);
            if(class1[i].member == student1.id){
                if(class1[i].isMember = true){
                    this.teach = true;
                }else{
                    this.teach = false;
                }
            }
        }
    }
}
var str =new  Person('Tom',21);
var a = str.introduce();
console.log(a);
var  b =new Student('Gergeo',21,3);
var strStudent = b.introduce();
console.log(strStudent);
