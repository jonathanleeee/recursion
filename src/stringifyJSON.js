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
  } else {
  	var result2 = '';
  	var counter = 0;
  	for ( var key in obj) {
  		if (obj.hasOwnProperty(key)) {
  		if ( counter === 0 ) {
  		    result2 += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
  		}else{
  			result2 += ',' + stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
  		}
  		counter ++;
  		}	
  	}
  	return '{' + result2 + '}';
  }


  
};
