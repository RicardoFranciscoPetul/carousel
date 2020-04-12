const testimonialList = document.querySelectorAll(".single-testimonial");
const forward = document.querySelector("#forward");
const back = document.querySelector("#back");
let counter = 1;

forward.addEventListener("click", () => moveForward());
back.addEventListener("click", () => moveBack());
testimonialList[1].classList.add("active");

moveForward = () => {
  if (counter <= testimonialList.length - 2) {
    testimonialList.forEach((testimonial) => {
      testimonial.style.transform = `translateX(-${counter}00%)`;
      testimonial.classList.remove("active");
      console.log("adelante: " + counter);
    });
    counter++;
    testimonialList[counter].style.transform = `translate(-${
      counter - 1
    }00%,-50%)`;
  }
};

moveBack = () => {
  if (counter === 1) {
    testimonialList.forEach((testimonial) => {
      testimonial.style.transform = `translate(100%, 0%)`;
      testimonial.classList.remove("active");
      testimonialList[counter].style.transform = `translate(100%, 0%)`;
      
    });
    testimonialList[0].style.transform=`translate(100%, -50%)`
  }
  if (counter !== 0) {
    testimonialList.forEach((testimonial) => {
      testimonial.style.transform = `translateX(-${counter - 2}00%)`;
      testimonial.classList.remove("active");
      console.log("atras: " + counter);
    });
    counter--;
    testimonialList[counter].style.transform = `translate(-${
      counter - 1
    }00%,-50%)`;
  }
};
