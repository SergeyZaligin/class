const Class = function (parent){

	const klass = function () {
		this.init.apply(this, arguments);
	};

	if (parent) {
		var subclass = function() {};
		subclass.prototype = parent.prototype;
		klass.prototype = new subclass;
	}

	klass.prototype.init = function(){};

	// Сокращенная форма записи для доступа к прототипу
	klass.fn = klass.prototype;

	// Другая форма записи для доступа к классу
	klass.fn.parent = klass;

	klass.extend = function (obj) {
		var extended = obj.extended;
		for(var i in obj){
			klass[i] = obj[i];
		}
		if (extended) extended(klass)
	};

	klass.include = function (obj) {
		var included = obj.included;
		for(var i in obj){
			klass[i] = obj[i];
		}
		if (included) included(klass)
	};

	return klass;

};

var Person = new Class;

var person = new Person();

console.log(person);