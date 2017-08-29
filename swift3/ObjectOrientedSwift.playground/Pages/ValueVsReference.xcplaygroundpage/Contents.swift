struct User {
    var fullName: String
    var email: String
    var age: Int
}

var someUser = User(fullName: "aaron miller", email: "aaronmiller822028@gmail.com" , age: 21)

var anotherUser = someUser

someUser.email = "miller_boy82@hotmail.com"

class Person {
    var fullName : String
    var email: String
    var age: Int
    
    init (name: String, email: String, age: Int){
        self.fullName = name
        self.email = email
        self.age = age
    }
}



var somePerson = Person(name: "mikana montagnino", email: "mikIsCool@cool.com", age: 20)
var anotherPerson = somePerson
anotherPerson.email








struct Tag {
    let name: String
}

struct Post {
    let title: String
    let author: String
    let tag: Tag
    
    func description() ->String {
        return "\(title) by \(author). Filed under \(tag.name)"
    }
}

let firstPost = Post(title: "hello", author: "aaron", tag: Tag(name: "world"))
let postDescription = firstPost.description()
print(postDescription)












