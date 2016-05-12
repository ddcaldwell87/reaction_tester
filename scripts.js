// Scripts for Reaction Tester.

// Function to randomize color.
function getRandomColor() {
    var letters = "0123456789ABCDEF".split('');
    var color = "#";
    for ( var i = 0; i < 6; i++ ) {
        color += letters[ Math.round(Math.random() * 15) ];
    }
    return color;
}

// Variables to use in later functions.
var clickedTime;
var createdTime;
var reactionTime;

// Function to make the object show.
function makeObject() {
    
    // Randomizes the time it takes to show object.
    var time = Math.random();
    time = time * 3000;
    
        setTimeout(function() {
            
            // Makes object a square or cirlce.
            if ( Math.random() > 0.5 ) {
                document.getElementById('object').style.borderRadius = "50%";
            } else {
                document.getElementById('object').style.borderRadius = "0";
            }
            
            // Randomizes the positon of the object.
            var top = Math.random();
            top = top * 300;
            
            var left = Math.random();
            left = left * 500;
            
            // Calls the variables above and concatenates them with pixals.
            document.getElementById('object').style.top = top + "px";
            document.getElementById('object').style.left = left + "px";
            
            // Randomizes object color from getRandomColor function above.
            document.getElementById('object').style.backgroundColor = getRandomColor();
            
            // Displays object.
            document.getElementById('object').style.display = "block";
            
            // Captures time from when object is created.
            createdTime = Date.now();
            
        }, time);
}

// Function to make object disappear when clicking.
document.getElementById('object').onclick = function() {
    
    // Captures time from when object is clicked.
    clickedTime = Date.now();
    
    // Calculates the difference from when the object was created to when it is clicked. Dividing by 1000 turns time into seconds.
    reactionTime = ( clickedTime - createdTime ) / 1000;
    
    // Displays time into the DOM and makes object disappear.
    document.getElementById('time').innerHTML = reactionTime;
    this.style.display = "none";
    
    // Runs the function to created the object again.
    makeObject();
    
}

// Runs the function to create the object.
makeObject();