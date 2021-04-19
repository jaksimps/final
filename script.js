var valu = document.body.querySelector(".val");
var display = document.body.querySelector(".display");
var grade = document.body.querySelector(".grades");
var feedback = document.body.querySelector(".feedback");
var g = document.getElementById("G");
var head = document.getElementById("heading");
var list = [];


function validate(){
  var valEle = document.body.querySelector(".valMess");
  var username = document.body.querySelector(".username").value;
  
  var password = document.body.querySelector(".password").value;
  
  if(username==="cool" && password ==="password"){
    homePage();
  head.style.display="block";
  }else{
    valEle.innerHTML="You didn't type anything valid";
  }
}
document.body.querySelector(".validate").addEventListener("click", function(){
  validate();
})

function homePage(){
  valu.innerHTML = "";
  var listEle = document.body.querySelector(".list");
  listEle.style.display = "none";
  var gradeView = document.createElement("BUTTON");   
   gradeView.innerHTML = "Grade View";                  
   display.appendChild(gradeView); 
 
  var addGrade = document.createElement("BUTTON");   
   addGrade.innerHTML = "Add Grade";                  
   display.appendChild(addGrade); 
  
  gradeView.addEventListener("click", function(){
    g.style.display = "none";
    head.style.display="block";
    listEle.style.display = "block";
})
  addGrade.addEventListener("click", function(){
    listEle.style.display = "none";
    head.style.display="none";
    createNew();
    
})
}

function renderList(){
  var listEle = document.body.querySelector(".list");
  listEle.style.display = "block";
  listEle.innerHTML="";
  for(var i = 0; i < list.length; i++){
    var element = document.createElement("div");
    element.innerHTML = list[i];
    listEle.appendChild(element);
  }
}


  function submit(){
    var name = document.body.querySelector(".name").value;
    var grades = document.body.querySelector(".rank").value;
    if(name.length > 0 && (parseInt(grades) >=0 && parseInt(grades) <= 100)){
       list.push("Student Name: " + name + " | Grade: " + grades);
       feedback.innerHTML = "";
       g.style.display = "none";
      head.style.display="block";
        renderList();
    }else{
      feedback.innerHTML = "Something you entered was wrong.";
    }

  }


function createNew(){
  g.style.display = "block";
}
document.body.querySelector(".submit").addEventListener("click", function(){
  submit();
})