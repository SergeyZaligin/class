const Class = function(){

	const klass = function() {
		this.init.apply(this, arguments);
	};

	klass.prototype.init = function(){};

	// Сокращенная форма записи для доступа к прототипу
	klass.fn = klass.prototype;

	// Другая форма записи для доступа к классу
	klass.fn.parent = klass;

	return klass;

};

var Person = new Class;
console.log(Person);