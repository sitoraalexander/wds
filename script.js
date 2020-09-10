//display the current day at the top of the calendar

var interval = setInterval(function() {
    var momentNow = moment();
    $('#currentDay').html(momentNow.format('MMMM Do[,] YYYY') + ' ');
  }, 100);
  
//function readFromLocalStorage ()
//<!-- this is to look for anything saved previously in local storage -->
   // use for loop
       // - read value from time property
       // - assign as text back in element (using its class (.description) and id (specific to each hour)
       // - check current hour vs time slot (to determine color of text area: gray, red or white)
           // - assign proper class (.past .present .future) based on comparison to current hour (,, === or =,=, ===)
//function writeToLocalStorage ()
//<!-- this is to save a value from the text area to local storage, using the hour as the key when save button is clicked -->
    //add click event to save button class to run function
        //- read text from text area (class = "description", should be parent of save button)
        //- read schedule hour
        //- trim text, trim schedule hour
        //- send to local storage
//call readFromLocalStorage(); //