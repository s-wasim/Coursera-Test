function say(name) {
	temp_name = name.trim();
	if (temp_name[0] == 'j' || temp_name[0] == 'J') {
		console.log('hello ' + temp_name);
	}
	else {
		console.log('Goodbye ' + temp_name);
	}
}


name_arr = ['Jason', 'johnathan', 'samantha', 'Alex', 'Jonas', 'koji', 'jean']

for (var i=0; i < name_arr.length; i++) {
	say(name_arr[i]);
}