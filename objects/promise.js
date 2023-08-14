//encapulates asynchronous functions

const mypromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve("Operation suceeded!");
        
        }else {
            reject("Operation failed!");
        }
    }, 2000);
});

mypromise.then(
    (resolvedValue) => {
        console.log("Succes:", resolvedValue);
    },
    (rejectedReason) => {
        console.log("Error", rejectedReason);
    }
);