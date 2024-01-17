
function searchEmoji(){
    let searchFiledValue =  searchField.value;
    // console.log(searchFiledValue);
    showResult(searchFiledValue);
}
function showResult(searchFiledValue = ""){
    let filterData = emojiList.filter((e)=>{ // hear use filter bcz we are find only searching common data inside whole database
        if(e.description.indexOf(searchFiledValue) != -1){
            return true;
        }

        if(e.tags.some(elem=>elem.startsWith(searchFiledValue))){
            return true;
        }

        if(e.aliases.some(elem=>elem.startsWith(searchFiledValue))){
            return true;
        }
    })

    let parent = document.getElementById("search_result"); 
    // console.log(emojiList);
    parent.innerHTML = "";
    filterData.forEach((e) => { // hear use foreach bcz we are find all object of whole database
        let new_row = document.createElement("tr");
        let new_emoji = document.createElement("td");
        let new_aliases = document.createElement("td");
        let new_desc = document.createElement("td");

        new_emoji.innerText = e.emoji;
        new_aliases.innerText = e.aliases;
        new_desc.innerText = e.description;

        new_row.appendChild(new_emoji);
        new_row.appendChild(new_aliases);
        new_row.appendChild(new_desc);

        parent.appendChild(new_row);
    });
}

let searchField = document.getElementById("search_field");
// console.log(searchField);
searchField.addEventListener("keyup", searchEmoji);
window.onload = () => showResult(); 