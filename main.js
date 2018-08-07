const Class = function(){

	const klass = function() {
		this.init.apply(this, arguments);
	};

	klass.prototype.init = function(){};

	// Сокращенная форма записи для доступа к прототипу
	klass.fn = klass.prototype;

	// Другая форма записи для доступа к классу
	klass.fn.parent = klass;

	klass.extend = function (obj) {
		var extended = obj.extended;

		if (extended) extended(klass)
	};

	klass.include = function (obj) {
		var included = obj.included;

		
		if (included) included(klass)
	};

	return klass;

};

var Person = new Class;

var person = new Person();

console.log(person);