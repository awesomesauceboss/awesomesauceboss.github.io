if (document.querySelector('.project-preview')) {
  var projectPreviews = [].slice.call(document.querySelectorAll('.project-preview'));

  projectPreviews.forEach(function(project) {
    var linkLocation = project.children[0].href;

    project.addEventListener('click', function(e) {
      e.preventDefault();
      document.body.classList.add('is-animating-out');

      window.setTimeout(function() {
        window.location = linkLocation;
      }, 400);
    });
  });
}

if (document.querySelector('.gradient-static')) {
  window.setTimeout(function() {
    document.body.classList.add('is-animating-in');
  }, 400);
}

function scrollTo(element, target, duration) {
  if (duration < 0) {
    return;
  }

  var difference = target - element.scrollTop,
    perTick = difference / duration * 10;

  setTimeout(function() {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === target) {
      return;
    }

    scrollTo(element, target, duration - 10);
  }, 10);
}

if (document.getElementById('projects')) {
  function runScroll() {
    var doc = document.documentElement,
      projects = document.getElementById('projects');

    if (doc.scrollTop <= 0) {
      doc = document.body;
    }

    scrollTo(doc, projects.offsetTop, 300);
  }

  var scrollButton = document.getElementById('scroll-button');

  scrollButton.addEventListener('click', runScroll);
}
