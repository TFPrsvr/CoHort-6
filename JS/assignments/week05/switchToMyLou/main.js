/******************************/
//Your Code Here 
function dayOfWeek(day) {
  switch (day) {
    case 1: return  "Monday";
      break;
    case 2: return "Tuesday";
      break;
    case 3: return "Wednesday";
      break;
    case 4: return "Thursday";
      break;
    case 5: return "Friday";
      break;
    case 6: return "Saturday";
      break;
      case 7: return "Sunday";
      break;
    default: return "Invalid choice";
  }
}

function identifySeason(season){
  switch(season) {
    case 1: 
    case 12:
    case 2: return "Winter";
    break;
    case 3:
    case 4:
    case 5: return "Spring";
    break;
    case 6:
    case 7:
    case 8: return "Summer";
    break;
    case 9:
    case 10: 
    case 11: return "Autumn";  
    break;
    default: return "Invalid choice";      
  }
}


function menuSelection(selection) {
  switch(selection){
    case 1: return "Option 1 selected";
    break;
    case 2: return "Option 2 selected";
    break;
    case 3: return "Option 3 selected";
    break;
    default: return "Invalid choice";
  }
}



/****************************/
// Our code here. Don't touch!
if (typeof dayOfWeek === 'undefined') {
    dayOfWeek = undefined
  }
  
  if (typeof identifySeason === 'undefined') {
    identifySeason = undefined
  }
  
  if (typeof menuSelection === 'undefined') {
    menuSelection = undefined
  }

  
  
  module.exports = {
    dayOfWeek, 
    identifySeason, 
    menuSelection
  }
  