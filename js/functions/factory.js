function createUser(name, age){
    return {
        name,
        age,
        greet(){
            console.log("hellow ", this.name)
        }
    }
}

const user1 = createUser("Safwan", 18);
const user2 = createUser("Munnas", 19);

user1.greet();