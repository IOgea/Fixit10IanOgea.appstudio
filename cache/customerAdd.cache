/*
Created a new form named customerAdd. 
Used a textArea or Dropdown to display the customer names
Hard-coded the customer to add (just to save time). The name is :
Jesse Antiques, 1113 F St, Omaha, NE, 68178
When user clicks a button, the new customer is added to the control and the database.
Tell the user their new customer was added to the database. 
Used a textArea to display the remaining customers. 
Note: make sure you don't add the employee ID since this is an auto-increment field (so the DB creates the number for you automatically).
*/


customerAdd.onshow=function(){
  drpCustomersAdd.clear()
   txtAllCustomers_contents.style.height = "200px"
  query = "SELECT name FROM customer2;"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=iro88883&pass=" + pw + "&database=iro88883&query=" + query)
  if (req.status == 200){
   results = JSON.parse(req.responseText)
   console.log(results)
   console.log(typeof(results))
   for (i = 0; i <= results.length - 1; i++){
            drpCustomersAdd.addItem(results[i])
              }
        } 
}
    
btnAddCustomer.onclick=function(){
  query = "Insert Ignore into `customer2` (`name`,`street`,`city`,`state`,`zipcode`) values ('Jesse Antiques', '1113 F St', 'Omaha', 'NE', 68178);"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=iro88883&pass=" + pw + "&database=iro88883&query=" + query)
  if (req.status ==200){
    if(req.responseText ==500){
    lblMessage.value = `You have successfully added Jesse Antiques to the customers. Here are the remaining customers.` 
  query = "Select name From customer2 "
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=iro88883&pass=" + pw + "&database=iro88883&query=" + query)
    results = JSON.parse(req.responseText)
              for (i = 0; i <= results.length - 1; i++)
                  message = message + results[i] + "\n"
              txtAllCustomers.value = message
              drpCustomersAdd.clear()
              for (i = 0; i <= results.length - 1; i++){
            drpCustomersAdd.addItem(results[i])
            }
    }
  }
}