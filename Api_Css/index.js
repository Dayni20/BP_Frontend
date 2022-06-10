const fetchData = async () => {
    var response = await fetch('https://bp-todolist.herokuapp.com/?id_author=1');
    var json = await response.json();
    return json;
   }
   const setTodoList = async () => {
    var json = await fetchData();
    var element_container = document.querySelector('.container-list');
    element_container.innerHTML ='';
    for (let index = 0; index < json.data.length; index++){
      const element = json.data[index];
      element_container.innerHTML += `
      <div class="item-element" data-id="${element.id}" id="item-element_${element.id}">
      <div class="item-element-content">
        <h2>${element.description}</h2>
        </div>
        <div class="item-element-actions">
        <button class="action-button" id="item-edit_${element.id}">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z"></path></svg>
        </button>
        <button class="action-button" id="item-delete_${element.id}">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"></path></svg>
          </button>
  
        </div>
  
      </div>
      `
    }
  
      console.log(json.data[0]);
   }
  
   window.addEventListener('DOMContentLoaded', function (event){
    setTodoList();
  
   });