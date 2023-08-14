const employee = {
    firstname: "Sama",
    lastname: "Awindi",
    employeeid: 37,
    section: "HR",
    
    fullname: function () {
        console.log(this.firstname + " " + this.lastname);
    },

    idnsection: function () {
        console.log("employee.no" + this.employeeid + " " + "woks in the" + " " + this.section + " " + "department");
    },
}

employee.fullname();
employee.idnsection();