function scuberGreetingForFeet( distance){//block of code
  // Write your code here!
  if(distance<=400){//if the feet is less or equal to 400
    return 'This one is on me!';//return this string
  }
  else if (distance>400 && distance <=2000){//if the feet is equal to 400 and less than 2000
    return 'That will be twenty bucks.';//return this string
  } 
else if (distance >2000 && distance <=2500){//if the feet is grater than 2500
  return 'I will gladly take your thirty bucks.'; //return this string
}
else{
  return 'No can do.';//return this string
}
}

function ternaryCheckCity(city){//block of code
  // Write your code here!
  return city==='NYC' ? 'Ok, sounds good.':'No go.';//using the ternary operator
}

function switchOnCharmFromTip( tip){// block code

  // Write your code here!
  switch(tip){// using the switch statement
    case 'generous':// if the tip is generous
    return "Thank you so much."; //return this string
    case 'not as generous'://
     return "Thank you.";//retun this string
    default:
      return "Bye.";//return this string 
  }
}
  
