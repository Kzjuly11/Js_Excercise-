
function shuffleArray(array) {
    for (var i=array.length-1 ; i > 0; i--) { 
        var j = Math.floor(Math.random() * (i+1));
        var temp = array[i];
        array[i] = array[j];
         array[j] = temp;
    }   
        console.log(array[j])
        console.log(array[i])
       console.log(array)
       
}
shuffleArray([1,2,3,4,5,6,7,8])