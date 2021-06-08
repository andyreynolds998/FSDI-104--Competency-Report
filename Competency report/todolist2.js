const list={
    tasks:[]
}
var c=0;
class Task{
    constructor(what,when,where,priority){
        this.what=what;
        this.when=when;
        this.where=where;
        this.priority=priority;
        this.id=c++;
    }
}
var txtWhat=document.getElementById('what');
var txtWhen=document.getElementById('when');
var txtWhere=document.getElementById('where');
var txtPriority=document.getElementById('priority');

function register(){
    var theTask = new Task(txtWhat.value,txtWhen.value,txtWhere.value,txtPriority.value);
    console.log(theTask);
    list.tasks.push(theTask);
    clearTasks();
    displayTask(theTask);
}
function clearTasks(){
    txtWhat.value="";
    txtWhen.value="";
    txtWhere.value="";
    txtPriority.value="";
}


var laundry = new Task("Do laundry","2:00 PM", "Laundry Room", "High",);
var yardWork = new Task("Do yardwork","8:00 AM", "Front yard", "Low",);
list.tasks.push(laundry);
list.tasks.push(yardWork);

function displayTask(theTask){
        card=`<div id="${theTask.id}" class="card">
          <h3> What: ${theTask.what}</h3>
          <p> When: ${theTask.when}</p>
          <p> Where: ${theTask.where}</p>
          <p> Priority: ${theTask.priority}</p>
          <p><button onClick="deleteTask(${theTask.id})">🗑️</button></p>
          </div>  
          `;
document.getElementById('task').innerHTML+=card;
}
displayTask(laundry);
displayTask(yardWork);

function deleteTask(taskId){
    console.log("delete task"+taskId);
    var card = document.getElementById(taskId);
    var indexDelete;
    console.log(indexDelete);
    list.tasks.splice(indexDelete,1);
    card.remove();
}
