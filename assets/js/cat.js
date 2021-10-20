function infSaved() {
    let catForm = new Cat(nameCat, nameHome, nameHuman, telHuman, mailHuman);
    console.log(catForm);
};

class Cat {
    constructor(nameCat, nameHome, nameHuman, telHuman, mailHuman) {

        this.nameCat = nameCat;
        this.nameHome = nameHome;
        this.nameHuman = nameHuman;
        this.telHuman = telHuman;
        this.mailHuman = mailHuman;
    }
};