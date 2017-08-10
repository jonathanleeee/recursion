// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if ( typeof obj === 'number') {
  	return obj.toString();
  }
  if ( obj === null) {
  	return 'null';
  }
  if ( typeof obj ===  'boolean') {
  	return obj.toString();
  }
  if ( typeof obj === 'string') {
  	return '"' + obj + '"';
  }
  if ( Array.isArray(obj)) {
  	var result = '';
  	for ( var i = 0; i < obj.length; i++) {
  		if ( i === 0) {
  		result += stringifyJSON(obj[i]);
  	  } else {
  	  	result += "," + stringifyJSON(obj[i]);
  	  } 
  	}
  	return '[' + result + ']';
  }else{
  	var result = [];
  	for(var key in obj){
  		if(obj[key] === undefined || typeof(obj[key]) === 'function'){
  			continue;
  		}
  		result.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]))
  	}
  	return "{" + result.join(',') + "}"
  }  
};
