// Define the constructor function
function Book(title, author){
    this.title = title;
    this.author = author;
    this.getDescription = function(){
        return `${this.title} by ${this.author}`;
    }
}

// Create instances of the constructor
const book1 = new Book("Hamlet", "William Shakespeare");
const book2 = new Book("Muder on the orient express", "Agatha Christie");

// Use the object instances
console.log(book1.getDescription());
console.log(book2.getDescription());