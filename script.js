document.querySelector('[data-value-btn]').onclick = () => {
	const value = document.querySelector('[data-value-input]').value ;
	const ul = document.querySelector('[data-todos]');


	const li = document.createElement('li');
	li.textContent = value
	ul.appendChild(li)
 
 

}

