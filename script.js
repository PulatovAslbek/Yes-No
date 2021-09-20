const elYes = document.querySelector('.yes');
const elNo = document.querySelector('.no');
const elForm = document.querySelector('.yes-no__form');
const elFormInput = document.querySelector('.yes-no__form-input');
const elCheckboxRain = document.querySelector('.yes-no__form-checkbox-rain');
const elCheckboxGym = document.querySelector('.yes-no__form-checkbox-gym');

elForm.addEventListener('change', function (evt) {
    evt.preventDefault();

    const elInputValue = Number(elFormInput.value.trim());

    if (elInputValue >= 5 && elInputValue <= 30){
        elYes.classList.add('text_success');
      }else{
        elYes.classList.remove('text_success');
        elNo.classList.add('text_danger');
      }
    
      if (elCheckboxRain.checked){
        elNo.classList.add('text_danger');
      }
    
      if (elCheckboxGym.checked){
        elYes.classList.add('text_success');
        elNo.classList.add('text_dark')
      }
    
      if (elCheckboxGym.checked && elCheckboxGym.checked){
        elYes.classList.add('text_success');
      }
    
      if (elInputValue < 5 && elCheckboxGym.checked){
        elNo.classList.add('text_danger');
      }

})