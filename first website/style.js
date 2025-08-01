const typingText = document.querySelector(".typing-text");
const roles = ["Web Developer", "Student", "Creator"];
let i = 0, j = 0, isDeleting = false;

function type() {
  const current = roles[i];
  if (isDeleting) {
    typingText.textContent = current.substring(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % roles.length;
    }
  } else {
    typingText.textContent = current.substring(0, j++);
    if (j === current.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  }
  setTimeout(type, isDeleting ? 50 : 100);
}

type();