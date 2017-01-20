function human(firstname, lastname) {
	this.firstname = firstname;
	this.lastname = lastname;
};

human.prototype.getFullName = function(){
	var fullName = this.firstname + " " + this.lastname;
	return fullName;
};

var John = new human("John", "Doe");
document.write(John.getFullName());

var Ivan = new human("Ivan", "Sukablyat");
document.write(Ivan.getFullName());