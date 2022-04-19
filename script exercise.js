 // handle the click event for the button//
document.querySelector('[data-btn]').onclick = () => {
 //retrieve user input//
 const value = document.querySelector('[data-value-input]').value;
//find the ul//
 const ul = document.querySelector('[data-ul]');

 //create li and append  it to the ul //
 const li = document.createElement('li');
 li.textContent = value
 ul.appendChild(li)

//on btn click remove the value from the input to enter new value//
 document.querySelector('[data-value-input]').value = "";
}


