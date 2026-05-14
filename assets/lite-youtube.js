/**
 * lite-youtube.js
 * Lightweight YouTube embed: shows a thumbnail, loads the real iframe on click.
 * Self-hosted, no external dependencies.
 */
(function () {
  document.querySelectorAll('.lite-youtube').forEach(function (el) {
    var videoId = el.dataset.videoid;
    if (!videoId) return;

    el.querySelector('.lite-youtube-link').addEventListener('click', function (e) {
      e.preventDefault();
      var iframe = document.createElement('iframe');
      iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0');
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('title', el.dataset.title || 'YouTube video');
      el.classList.add('active');
      el.appendChild(iframe);
    });
  });
})();
