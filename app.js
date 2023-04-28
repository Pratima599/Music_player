const search = () =>{
    //  alert("Hello")

    const searchbox =document.getElementById("searchbox").value.toUpperCase();
    const storeitems = document.getElementsByClassName(".row")
    const song = document.querySelectorAll(".column")
    const songname = document.getElementsByTagName('h6')

    for(var i=0;i<= songname.length;i++){
        let match = song[i].getElementsByTagName('h6')[0];
          if(match){
            let textvalue = match.textContent||match.innerHTML
            if(textvalue.toUpperCase().indexOf(searchbox)>-1){
                song[i].style.display ="";

            } else{
                song[i].style.display ="none";

            }


          }
    }
}
