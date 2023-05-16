function myFunction(x) {
  x.classList.toggle("change");
  const dropdown = document.querySelector(".dropdown-content");
	dropdown.classList.toggle("active");

  let item = document.querySelectorAll(".dropdown-content ul li a");

  for(let i = 0; i < item.lengh; i++) {
  	item.classList.toggle("active-link");
  }
}


