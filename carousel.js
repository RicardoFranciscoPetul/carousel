const testimonialList = document.querySelectorAll('.single__testimonial');
const forward = document.querySelector('#forward');
const back = document.querySelector('#back');
let counter = 1;

forward.addEventListener('click', () => moveForward());
back.addEventListener('click', () => moveBack());
testimonialList[1].classList.add('active');

moveForward = () => {
  if (counter <= testimonialList.length - 2) {
    testimonialList.forEach(testimonial => {
      testimonial.style.transform = `translateX(-${counter}00%)`;
      testimonial.classList.remove('active');
    });
    counter++;
    testimonialList[counter].classList.add('active');
  }
};
moveBack = () => {
  if (counter === 1) {
    testimonialList.forEach(testimonial => {
      testimonial.style.transform = `translateX(100%)`;
      testimonial.classList.remove('active');
      testimonialList[counter].classList.add('active');
    });
  }
  if (counter !== 0) {
    testimonialList.forEach(testimonial => {
      testimonial.style.transform = `translateX(-${counter - 2}00%)`;
      testimonial.classList.remove('active');
    });
    counter--;
    testimonialList[counter].classList.add('active');
  }
};
