const wrapper = document.querySelector('.wrapper'),
      selectBtn = wrapper.querySelector('.select-btn'),
      options = wrapper.querySelector('.options');

let heading = ["Медицина" , "Общество", "Коммуналка", "Политика", "Спорт", "Вектор развития"];

function addHeading() {
  heading.forEach(head => {
    let li = `<li onclick="updateName(this)">${head}</li>`;
    options.insertAdjacentHTML('beforeend', li);
  });
}

addHeading();

function updateName(selectedLi) {
  wrapper.classList.remove('active');
  selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

selectBtn.addEventListener('click', () => {
  wrapper.classList.toggle('active');
});
