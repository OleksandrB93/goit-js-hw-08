

const LOCALSTORAGE_KEY = 'feedback-form-state';
const filterForm = document.querySelector('.feedback-form');

initForm();

filterForm.addEventListener('submit', evt => {
  evt.preventDefault();
  const formData = new FormData(filterForm);
  formData.forEach((value, name) => console.log(value, name));
});

filterForm.addEventListener('change', evt => {
  let persFilters = localStorage.getItem(LOCALSTORAGE_KEY);
  persFilters = persFilters ? JSON.parse(persFilters) : {};
  persFilters[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(persFilters));
});

filterForm.addEventListener('reset', () => {
  localStorage.removeItem(LOCALSTORAGE_KEY);
});

function initForm() {
  let persFilters = localStorage.getItem(LOCALSTORAGE_KEY);
  if (persFilters) {
    persFilters = JSON.parse(persFilters);
    Object.entries(persFilters).forEach(([name, value]) => {
      filterForm.elements[name].value = value;
    });
  }
}
