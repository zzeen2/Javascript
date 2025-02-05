// > 클래스로 동물 클래스를 만들고, 좋아하는 동물 3종류를 만드는데, 
// 울음소리는 각각의 동물들이 내는 울음소리를 내고, 
// 3종류 중에서 1 종류의 동물은 날 수 있다. 달리는 메서드 멈추는 메서드 
// 클래스 4개를 만들어서

class Animal {
    constructor(charac){
        this.charac = charac;
        this.speed = 0;
    }
    run(){
        this.speed +=this.speed;
        console.log((`${this.charac}은 ${this.speed}로 달리고 있다. (부모의 함수임)`));
    }
    stop(){
        this.speed = 0;
        console.log(`${this.charac}이 멈췄다(부모의 메서드임)`)
    }
}

class Cat extends Animal {
    constructor(charac){
        super(charac)
    }
    run(speed){
        this.speed = speed;
        console.log(`${this.charac}은 ${this.speed}로 달리는 중이다 (나는 자식1의 오버라이딩 함수)`)
    }
    fly(speed){
        this.speed = speed;
        console.log(`${this.charac}은 ${this.speed}로 나는는 중이다 (나는 자식1의 오버라이딩 함수)`)
    }
    speak (){
        console.log("애용")
    }xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
}

class Dog extends Animal {
    constructor(charac){
        super(charac)
    }
    run(speed){
        this.speed = speed;
        console.log(`${this.charac}은 ${this.speed}로 달리는 중이다 (나는 자식2의 오버라이딩 함수)`)
    }
    speak (){
        console.log ("왈왈")
    }

}

class Bird extends Animal{
    constructor(charac){
        super(charac)
    }
    fly(speed){
        this.speed = speed;
        console.log(`${this.charac}은 ${this.speed}로 나는는 중이다 (나는 자식3의 오버라이딩 함수)`)
    }
    speak (){
        console.log ("끼룩끼룩")
    }

}

const cat = new Cat("뗴껄룩")
const dog = new Dog("댕댕이")
const bird = new Bird("동동이")
cat.run(10);
cat.stop();
cat.speak();
dog.run(13);
dog.stop();
dog.speak();
bird.fly(40);
bird.stop();
bird.speak();
