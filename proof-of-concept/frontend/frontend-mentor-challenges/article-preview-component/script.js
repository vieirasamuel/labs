const modal = document.getElementById('share-modal');
const link = document.getElementById('share');

link.addEventListener('mouseover', function (e) {
  modal.style.display = 'block';
});

link.addEventListener('mouseout', function (e) {
  modal.style.display = 'none';
});
