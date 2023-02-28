class Parent{
constructor(firstName, age){
    this.firstName = firstName
    this.age = age
    this.lastName = "Yankovska"
}
greeting(){
    console.log('Hey')
}
tellName(){
    console.log(`My name is ${this.firstName}${this.lastName}`)
}
tellAge(){
    console.log(`I am ${this.age} year old`)
}
tellJobTitle(){
    if(this instanceof Child){
        console.log(`I do not have job title`)
    }else{
        this.job = "QA";
        console.log(`My job title is ${this.job}`)
    }
    
}
}

class Child extends Parent{
greeting(){
    console.log('Hey! This is new greeting')
}

goToSchool(){
    console.log('I would like to go to school')
}
}

const parent = new Parent ('Myroslava', 25)
const child = new Child('Nina', 2);

parent.greeting()
parent.tellName()
parent.tellAge()
parent.tellJobTitle()

child.greeting()
child.tellName()
child.tellAge()
child.goToSchool()
child.tellJobTitle()