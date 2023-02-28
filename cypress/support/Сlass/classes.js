class Comment {
    constructor(text){
        this.text = text;
        this.likesQuantity = 0
    }

    addLike(){ //називається метод Можна викликати на кожен екземпляр класу
        this.likesQuantity +=1; // or this.likesQuantity + 1;
    }
}

const firstComment = new Comment('This is a comment text')
// console.log(firstComment);
// console.log(firstComment.likesQuantity);

firstComment.addLike();
// console.log(firstComment);
// console.log(firstComment.likesQuantity);

const secondComment = new Comment('This is a comment text2');
const thirdComment = new Comment('This is a comment text3');
secondComment.addLike();
console.log(firstComment);
console.log(secondComment);
console.log(thirdComment);