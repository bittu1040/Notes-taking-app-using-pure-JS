
showNotes();
let addBtn= document.getElementById("addBtn");

addBtn.addEventListener("click", function(e){
    let addTxt= document.getElementById("addTxt");
    let notes= localStorage.getItem("notes");
    if(addTxt.value.length==0){
        alert("add some notes")
    }
    else{
    if(notes==null){
        notesObj= [];
    }
    else{
        notesObj= JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value= "";
    showNotes();
}
})


function showNotes(){
    let notes= localStorage.getItem("notes");
    if(notes==null){
        notesObj= [];
    }
    else{
        notesObj= JSON.parse(notes);
    }
    let html= "";
    notesObj.forEach(function(item,index) {
        html+= ` <div class="noteCard my-2 mx-2 card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">Note ${index+1}</h5>
          <p class="card-text">${item}</p>
          <button id= "${index}" onclick= "deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>`
    });

    let notesEle= document.getElementById("notes");
    if(notesObj.length !=0 ){
        notesEle.innerHTML=html;
    }
    else{
        notesEle.innerHTML= `Nothing to show! Use "Add a Note" section to add note`
    }
}


function deleteNote(index){
    let notes= localStorage.getItem("notes");
    if(notes==null){
        notesObj= [];
    }
    else{
        notesObj= JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}