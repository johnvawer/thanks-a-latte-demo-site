let isVisible = false;

function hideBasket() {
  const basketView = document.getElementById('basket-view');
  const wrapper = document.getElementById('page-wrapper');

  wrapper.classList.remove('modal-overlay');
  basketView.classList.remove('basket-is-visible');
}

function showBasket() {
  const basketView = document.getElementById('basket-view');
  const wrapper = document.getElementById('page-wrapper');

  wrapper.classList.add('modal-overlay');
  basketView.classList.add('basket-is-visible');
}

function closeBasket() {
  if(isVisible) {
    hideBasket();
  }

  isVisible = !isVisible;
}

function toggleBasket(e) {
  if (isVisible) {
    hideBasket();
  } else {
    showBasket();
  }

  e.stopPropagation();
  isVisible = !isVisible;
}

document.getElementById('basket-logo').addEventListener('click', toggleBasket);
document.body.addEventListener('click', closeBasket);