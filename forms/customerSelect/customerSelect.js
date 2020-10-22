/*
Used a new form named customerSelect.
Used a Select query and AJAX call to get all the customers from the database. 
Displayed all the customers in a textArea or Dropdown so user can pick one. 
Used a sql Select  query to get all of the customers whose state matches the state of the customer chosen by the user. 
Used a textArea to show the user the matching customers, one per line, using a template literal. 
*/

let pw = "bIa375Password"
let results = ""
let req = ""
let state = ""
let message = ""
customerSelect.onshow=function(){
  txtStates_contents.style.height = "200px"
  query = "SELECT name FROM customer2;"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=iro88883&pass=" + pw + "&database=iro88883&query=" + query)
   if (req.status == 200){
   console.log(req.responseText)
   results = JSON.parse(req.responseText)
    for (i = 0; i <= results.length - 1; i++){
            drpCustomers.addItem(results[i])
              }
        }
}
drpCustomers.onclick=function(s){
    if (typeof(s) == "object"){  // means the control was clicked but no selection made yet
    return                     // do nothing
  } else {
    drpCustomers.value = s   // make dropdown show the choice the user made
    query = "Select state From customer2 Where name ="+'"' + drpCustomers.value + '"'
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=iro88883&pass=" + pw + "&database=iro88883&query=" + query)
    state = JSON.parse(req.responseText)
    
    query = "Select name From customer2 Where state = "+'"' +state[0] + '"'
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=iro88883&pass=" + pw + "&database=iro88883&query=" + query)
    results = JSON.parse(req.responseText)
              for (i = 0; i <= results.length - 1; i++)
                  message = message + results[i] + "\n"
              txtStates.value = message
}
}