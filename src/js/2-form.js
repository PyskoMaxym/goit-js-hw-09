
let formData = {
    email: "",
    message: ""
  };
  
  
  const STORAGE_KEY = 'feedback-form-state';
  
  
  const form = document.querySelector('.feedback-form');
  const emailInput = document.querySelector('.email');
  const messageInput = document.querySelector('.message');
  
  
  function saveToLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
  
  
  function updateFormData(event) {
    formData[event.target.name] = event.target.value;
    saveToLocalStorage();
  }
  
  
  function populateFormFromLocalStorage() {
    const savedData = localStorage.getItem(STORAGE_KEY);
  
    if (savedData) {
      formData = JSON.parse(savedData);
      emailInput.value = formData.email || '';
      messageInput.value = formData.message || '';
    }
  }
  
  function handleSubmit(event) {
    event.preventDefault();
  
    if (!formData.email || !formData.message) {
      alert('Fill please all fields');
      return;
    }
  
    console.log('Submitted form data:', formData);
  
    localStorage.removeItem(STORAGE_KEY);
    formData = { email: "", message: "" };
    form.reset();
  }
    
  form.addEventListener('input', updateFormData);

  form.addEventListener('submit', handleSubmit);
  
  document.addEventListener('DOMContentLoaded', populateFormFromLocalStorage);
  