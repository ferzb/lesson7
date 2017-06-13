$.getJSON('users.json', function(data){

 $.each(data, function(i, data){
 	var name = data.name,
	 	age = data.age,
	 	country = data.country,
	 	city = data.city;

	var arr = [name, age, country, city];

	$.each(arr, function(i, data){
		if(data.city !== undefined){
			alert(data.city); 
		}
	})
 })
});