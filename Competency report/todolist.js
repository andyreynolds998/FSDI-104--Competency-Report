const list={
    tasks:[]
}
class Task{
    constructor(what,when,where,priority){
        this.what=what;
        this.when=when;
        this.where=where;
        this.priority=priority;
    }
}

var laundry = new Task("Do laundry","2:00 PM", "Laundry Room", "High",);
var yardWork = new Task("Do yardwork","8:00 AM", "Front yard", "Low",);
list.tasks.push(laundry);
list.tasks.push(yardWork);
console.log(laundry);
console.log(yardWork);
displayCards(laundry);
displayCards(yardWork);

var txtWhat=document.getElementById('what');
var txtWhen=document.getElementById('when');
var txtWhere=document.getElementById('Where');
var txtPriority=document.getElementById('priority');

function register(){
    var theTask = new Task(txtWhat.value,txtWhen.value,txtWhere.value,txtPriority.value);
    list.tasks.push(theTask);
    displayCards(theTask);
}

function displayCards(aTask);
tmp=`<div class="task">
    <h3> What: ${aTask.what}</h3>
    <p> When: ${aTask.when}</p>
    <p> Where: ${aTask.where}</p>
    <p> Priority: ${aTask.priority}</p>
    </div>
`;
document.getElementById('task').innerHTML+=tmp;