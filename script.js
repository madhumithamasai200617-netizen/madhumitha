function openProposal() {
  window.open("proposal.html", "_blank");
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}
// Notes appear one by one
const notes = document.querySelectorAll(".note");

notes.forEach((note, index) => {
  note.style.animationDelay = `${index * 0.6}s`;
});

// Heart burst on click
notes.forEach(note => {
  note.addEventListener("click", (e) => {
    for (let i = 0; i < 10; i++) {
      const heart = document.createElement("span");
      heart.classList.add("burst-heart");
      heart.innerHTML = "❤️";

      const x = (Math.random() - 0.5) * 100 + "px";
      const y = (Math.random() - 0.5) * 100 + "px";

      heart.style.setProperty("--x", x);
      heart.style.setProperty("--y", y);

      heart.style.left = e.pageX + "px";
      heart.style.top = e.pageY + "px";

      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 1000);
    }
  });
});
<script>
  const images = document.querySelectorAll('.gallery-grid img');
  const lightbox = document.getElementById('valentineLightbox');
  const lightboxImg = document.getElementById('valentineImg');
  const closeBtn = document.querySelector('.valentine-lightbox .close');

  images.forEach(image => {
    image.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = image.src;
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
</script>



setInterval(createHeart, 300);
