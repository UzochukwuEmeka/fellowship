const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress-line");
const formStep = document.querySelectorAll(".form-step");
const pogressSteps = document.querySelectorAll(".progress-step ");

const formElements = document.querySelectorAll('form .inner-form .form-step')
const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgessbar();
  });
});
prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgessbar();
  });
});

function updateFormSteps() {
  formStep.forEach((formstep) => {
    formstep.classList.contains("formstep-active") &&
      formstep.classList.remove("formstep-active");
  });
  formStep[formStepsNum]?.classList.add("formstep-active");
}

function updateProgessbar() {
  pogressSteps.forEach((pogressStep, idx) => {
    if (idx < formStepsNum + 1) {
      pogressStep.classList.add("progress-step-active");
    } else {
      pogressStep.classList.remove("progress-step-active");
    }
    const progressActive = document.querySelectorAll(".progress-step-active");

    progress.style.width =
      ((progressActive.length - 1) / (pogressSteps.length - 1)) * 100 + "%";
  });
}
const acc = document.querySelector(".formstep-active");
const ick = document.querySelector(".back-btn");

function dd() {
  if (acc.classList.contains("personal-details")) {
    ick.classList.add("remove-btn");
  } else {
    ick.classList.remove("remove-btn");
  }
}



let firstFormElem = formElements[0].classList.contains('formstep-active')

if (firstFormElem) prevBtn.style.display = 'none'

prevBtn.addEventListener('click', () => {
  firstFormElem = formElements[0].classList.contains('formstep-active')
  if (firstFormElem) prevBtn.style.display = 'none'
})

nextBtn.addEventListener('click', () => {
  firstFormElem = formElements[0].classList.contains('formstep-active')
  if (!firstFormElem) prevBtn.style.display = 'inline-block'
})