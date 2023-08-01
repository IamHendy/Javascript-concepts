//if you have many if else statements it is preferentila to use the switch case statement

let score = 80;

switch(true){
    case score >= 70:
        console.log("A");
        break;

    case score >= 60:
        console.log("B");
        break;

    case score >= 50:
        console.log("C");
        break;

    case score >= 40:
        console.log("D");
        break;

    case score <40:
        console.log("F");
        console.log("Take a supplementary");
} 