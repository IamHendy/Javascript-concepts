const student = {
    firstname: "Hendy",
    lastname: "Ogema",
    Gradelevel: "campus",

    fullname: function() {
        console.log(this.firstname + this.lastname);
    },

    Gradelevel: function() {
        console.log("my level of education is campus");
    },
}

student.fullname();
student.Gradelevel();