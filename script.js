// Get current date and day of the week
let date = new Date();
let dayNumber = date.getDay();
let theDayIs;
let quote;

// Determine the day and quote
switch (dayNumber) {
    case 0:
        theDayIs = 'Sunday';
        quote = 'Time to chillax!';
        break;
    case 1:
        theDayIs = 'Monday';
        quote = 'Monday morning blues!';
        break;
    case 2:
        theDayIs = 'Tuesday';
        quote = 'Taco Time!';
        break;
    case 3:
        theDayIs = 'Wednesday';
        quote = 'Two more days to the weekend.';
        break;
    case 4:
        theDayIs = 'Thursday';
        quote = 'The weekend is almost here…';
        break;
    case 5:
        theDayIs = 'Friday';
        quote = 'Weekend is here!';
        break;
    case 6:
        theDayIs = 'Saturday';
        quote = 'Time to party 🎉';
        break;
}

// Update the HTML elements
document.getElementById("weekday").textContent = theDayIs;
document.getElementById("quote").textContent = quote;
