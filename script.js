let isVisible = false;

function toggleBasket() {
  const basketView = document.getElementById('basket-view');

  if (isVisible) {
    basketView.classList.remove('basket-is-visible');
  } else {
    basketView.classList.add('basket-is-visible');
  }

  isVisible = !isVisible;
}

document.getElementById('basket-logo').addEventListener('click', toggleBasket);