
  let myLeads = [];
  const inputEl = document.getElementById("input-el");
  const inputBtn = document.getElementById("in-btn");
  const ulEl = document.getElementById("ul-el");
  const deleteBtn = document.getElementById("delete-btn");
  const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
  const tabBtn = document.getElementById("tab-btn")


  if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads); //truthy falsy
  }
 
  tabBtn.addEventListener('click', function() {
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
   myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);


   })
  
    })
   
function render(leads) {
    let listItems = "";
    for (let index = 0; index < leads.length; index++) {
      // console.log(myLeads[index]);
      // listItems += "<li><a target='_blank' href= '" + myLeads +"'>" +  myLeads[index] + "</a></li>"
      listItems += `
         <li>
         <a target='_blank' href= '${leads[index]}'>
         ${leads[index]}
         </a>
         </li>`; //backtick to make html in multiple lines
    
    
      //creat element
      //set text content
      //append to ul

      //    const li = document.createElement("li")
      //    li.textContent = myLeads[[index]]
      //    ulEl.append(li)

      //DONT FORGET DOCUMENT CUZ THATS WHERE THE ELEMENT IS CREATED AND SAME WHEN FETCHING YOURE FETCHING FROM THE DOCUMENT
      //ALWAYS APPEND AFTER YOU CREATE AN ELEMENT CUZ OTHERWISE THE
    }
    ulEl.innerHTML = listItems;
  }


  deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear() 
    myLeads = []
    render(myLeads)

  })

  inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));

    render(myLeads);

    // console.log(localStorage.getItem("myLeads"));
  });

