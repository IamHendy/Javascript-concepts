class Bed {
    constructor(pillows, bedsheets, duvet){
        this.pillows = pillows;
        this.bedsheets = bedsheets;
        this.duvet = duvet;
    }

        comfybed() {
            console.log(`A comfy bed has a pair of ${pillows}, ${bedsheets} and a warm ${duvet}`);
        }
    
}

class Mohawk extends Bed {
    constructor(pillows,bedsheets, duvet){
        super(pillows,bedsheets, duvet);
    }
    comfymohawk(){
        console.log(`A comfy mohawk bed does not require ${this.pillows}, ${this.bedsheets} and a ${this.duvet} during summer`);
    }
}

class Bamboo extends  Bed {
    constructor(pillows, bedsheets,duvet){
        super(pillows, bedsheets, duvet);
    }

    comfybamboo() {
        console.log(`A comfy bamboo bed requires ${this.pillows}, ${this.bedsheets} and a warm ${this.duvet}`);
    }
}

const mohawk =  new Mohawk("any pillows", "any bedsheet", "duvet");
const bamboo =  new Bamboo("two pillows", "a pair of bedsheet", "duvet");

bamboo.comfybamboo();
mohawk.comfymohawk();
