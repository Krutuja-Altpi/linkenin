const likeBtn = document.querySelectorAll(".like_Item");
const reactionContainers = document.querySelectorAll(
  ".container_reaction_list"
);
const reactionItems = document.querySelectorAll(".container_reaction_item");
const container = document.querySelector(".container");

const handleMouseEnter = (e) => {
  //   console.log(e.target.parentElement.nextElementSibling);
  const height = e.target.getBoundingClientRect().top;
  if (height < 70) {
    e.target.parentElement.nextElementSibling.style.top = "40px";
  } else {
    e.target.parentElement.nextElementSibling.style.top = "-60px";
  }
  e.target.parentElement.nextElementSibling.style.visibility = "visible";
};

const handleMouseLeave = (e) => {
  // console.log(e.clientX)
  // console.log("screenX",container.clientWidth)
  //   console.log("clientY", e.clientY);
  //   console.log("boundingclient", e.target.getBoundingClientRect());
  const xLeft = e.target.getBoundingClientRect().x;
  const xright =
    e.target.getBoundingClientRect().x + e.target.getBoundingClientRect().width;
  const ybottom = e.target.getBoundingClientRect().bottom;
  if (e.clientX < xLeft || e.clientX > xright || e.clientY > ybottom - 1) {
    e.target.parentElement.nextElementSibling.style.visibility = "hidden";
  }
};
const handleReactionMouseLeave = (e) => {
  e.target.style.visibility = "hidden";
};

// const calculateYscroll = (e) =>{
//     // console.log(window.scrollY)
//    if(window.scrollY > 300){
//      displayBottom = true
//    }else{
//     displayBottom = false
//    }
// }

const handleLike = (e) => {
  e.target.style.color = "blue";
};

// const testCase = (e) => {
//   console.log("screenX", e.screenX)
// }

//EventListeners

likeBtn.forEach((singleBtn) => {
  singleBtn.addEventListener("mouseenter", handleMouseEnter);
  singleBtn.addEventListener("mouseleave", handleMouseLeave);
  singleBtn.addEventListener("click", handleLike);
});

reactionContainers.forEach((reactionContainer) => {
  reactionContainer.addEventListener("mouseleave", handleReactionMouseLeave);
});

// document.addEventListener("scroll",calculateYscroll)

// container.addEventListener("mousemove",testCase)

reactionItems.forEach((reactionitem) => {
  reactionitem.addEventListener("click", (e) => {
    const style = getComputedStyle(e.target.parentElement);
    let color = style.color;

    if (color !== "rgb(0, 0, 0)") {
      let likeBtn =
        e.target.parentElement.parentElement.previousElementSibling
          .firstElementChild;
      likeBtn.style.color = color;

      likeBtn.innerHTML = "";
      const icon = document.createElement("i");
      icon.className = e.target.classList.value;
      likeBtn.appendChild(icon);
      likeBtn.appendChild(
        document.createTextNode(e.target.nextElementSibling.textContent)
      );
    }
  });
});
