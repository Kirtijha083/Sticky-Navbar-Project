window.onload = function () {
  window.addEventListener("scroll", function () {
    let navbar = document.getElementById("menu-bar");

    if (window.pageYOffset >= 364) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
};

//.pageYOffset ka use tbhi krte jb page ko uper-nich krna ho
//.pageXOffset ka use tbhi krte jb page ko left-right krna ho
//nav bar uper nhi jyega scroll krne se but fr page niche krne se niche
//v nhi aayega to uske liye navbar remove krna hoga
