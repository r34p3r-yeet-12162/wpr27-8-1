let student = {
  name: "Simba",
  surname: "Zengeni",
  language: "English",
  /*  setLanguage : function(newLan) {
    this.lang = newLan;
  }, */
  get lang() {
    return this.language;
  },
  set lang(myLang) {
    this.language = myLang;
  },
};

student.lang = "Zulu"; // If you are assigning, then lang acts as a setter
// if there is no assignment, then it acts as a getter
console.log(student.lang);
