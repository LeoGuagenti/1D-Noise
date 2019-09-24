# 1D-Noise
## Description
A javascript object capable of returning a smooth noise values between 0 and 1 for regular intervals of input.<br>
Example: `1, 2, 3, 4, ...` or `5, 10, 15, 20, ...`
## Installation
To use this object, simply include the `1D_Noise.js` as a script source in your html document.<br>
```html
  index.html
  <body>
    <script src="1D_Noise.js"></script>
    <script src="yourScript.js"></script>
  </body>  

```
## Usage
Generation of an array of 1D noise.
```javascript
  //creation of new noise generator object
  var generator = new noise_1D();
  
  //generating noise values for x from 0 to 99
  var noise = [];
  for(var x = 0; x < 100; x++){
    noise.push(generator.get(x));
  }
```
Noise object member functions.
```javascript
  //amplitude getters and setters
  generator.setAmplitude(val);
  generator.getAmplitude();
  
  //frequency getters and setters
  generator.setFrequency(val);
  generator.getFrequency();
  
  //scaling getters and setters
  generator.setScale(val);
  generator.getScale();
  
  //returns a noise value between 0 and 1
  generator.get(x);
  
  //Refreshes the sample values of the generator
  //Allows for a sudden change in noise
  generator.reset();
  
  //Refreshes the same values of the generator
  //and sets the amplitude, frequency, and scale to 1
  generator.resetAll();
```

