/**
* Leo Guagenti
* 9/24/19
* v1.0
* API to generate 1D noise given a single input value
*/
var noise1D = function(){
	var MAX_VERT 		= 256;
	var MAX_VERT_MASK	= MAX_VERT - 1;
	var amplitude 		= 1;
	var scale 			= 1;
	
	var verts = [];
	
	//fill verts with random numbers
	for(var i = 0; i < MAX_VERT; i++){
		verts.push(Math.random());
	}
	
	/** 
	* Function to generate smoothed y value
	* This is accomplished by choosing two values based on the value of x
	* and interpolating between these values and multipling by the amplitude
	* @param x The value used to determine y
	* @return {number}
	*/
	var get = function(x){
		//initial values to find min, max and mid
		var scaledX = x * scale;
		var xFloor 	= Math.floor(scaledX);
		var t = scaledX - xFloor;
		
		//midpoint
		var midPoint = t * t * (3 - (2 * t));
		
		//max and min values
		var min = xFloor % MAX_VERT_MASK;
		var max = (min + 1) % MAX_VERT_MASK;
		
		//linear interpolate min, max and the midpoint
		var y = verts[min] * (1 - midPoint) + verts[max] * midPoint;
		return y * amplitude; 
	};
	
	//returning API to user
	return{
		get: get,
		setAmplitude: function(newAmplitude){
            amplitude = newAmplitude;
        },
        setScale: function(newScale){
            scale = newScale;
        },
		reset: function(){
			verts = [];
			for ( var i = 0; i < MAX_VERTICES; ++i ){
				verts.push(Math.random());
			}
		}
	}
}