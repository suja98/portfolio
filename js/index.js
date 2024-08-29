// LANG DROPDOWN

const dropdown = document.getElementById('language-dropdown');


// MENU DROPDOWN
document.addEventListener("DOMContentLoaded", function () {
  const dropbtn = document.querySelector('.dropbtn');
  const dropdownContent = document.querySelector('.dropdown-content');

  dropbtn.addEventListener('click', function () {
    dropdownContent.classList.toggle('show');
  });

  // Close the dropdown if the user clicks outside of it
  window.addEventListener('click', function (event) {
    if (!event.target.matches('.dropbtn')) {
      if (dropdownContent.classList.contains('show')) {
        dropdownContent.classList.remove('show');
      }
    }
  });

});

//  WORK SECTION

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let activeCell;

const updateFollower = (cell, follower, left, top) => {
  const cellRect = cell.getBoundingClientRect();
  const [cellLeft, cellTop] = [cellRect.left, cellRect.top];
  const [cellWidth, cellHeight] = [cellRect.width, cellRect.height];

  follower.style.left = `${Math.round(
    ((left - cellLeft) / cellWidth) * 100)}%`;
  follower.style.top = `${Math.round(
    ((top - cellTop) / cellHeight) * 100)}%`;
};

const createFollower = (cell, x, y) => {
  const f = document.createElement("aside");
  f.classList.add("follower");
  updateFollower(cell, f, x, y);
  cell.appendChild(f);
};

const handleFollower = (e, cell) => {
  const [initx, inity] = [e.clientX, e.clientY];
  activeCell = cell;
  createFollower(cell, initx, inity);
  const follower = $(".follower");

  const handleMouseMove = e => {
    updateFollower(cell, follower, e.clientX, e.clientY);

    if (cell !== activeCell || !follower) {
      if (follower) { follower.remove(); }
      activeCell = null;
      document.removeEventListener("mousemove", handleMouseMove);
      return;
    }
  };
  document.addEventListener("mousemove", handleMouseMove);
};

const handleMouseover = e => {
  const c = e.target.closest(".cell");
  handleFollower(e, c);
}

const handleMouseout = e => {
  const followers = $$(".follower");
  if (followers) {
    followers.forEach(follower => follower.remove());
  }
}

$$(".cell").forEach((cell) => {
  cell.onmouseover = handleMouseover;
  cell.onmouseout = handleMouseout;
})

// Contact form color

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('#contact-form input, #contact-form textarea');

  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      const label = document.querySelector(`label[for="${input.id}"]`);
      if (label) {
        label.classList.add('highlighted');
      }
    });

    input.addEventListener('blur', () => {
      const label = document.querySelector(`label[for="${input.id}"]`);
      if (label) {
        label.classList.remove('highlighted');
      }
    });
  });
});

// copy contact

document.addEventListener('DOMContentLoaded', () => {
  const copyElements = document.querySelectorAll('.contact-email, .phone-number');

  copyElements.forEach(element => {
    element.addEventListener('click', () => {
      const textToCopy = element.textContent.trim();
      const copyMessageElement = element.closest('.contact-card').querySelector('.successful-copy');

      navigator.clipboard.writeText(textToCopy).then(() => {
        copyMessageElement.textContent = 'Copied!';
        copyMessageElement.classList.remove('hide', 'error');
        copyMessageElement.classList.add('show');
      }).catch(err => {
        copyMessageElement.textContent = 'Whoops, not copied!';
        copyMessageElement.classList.remove('hide');
        copyMessageElement.classList.add('show', 'error');
        console.error('Failed to copy text: ', err);
      });

      // Hide the message after 1 second
      setTimeout(() => {
        copyMessageElement.classList.add('hide');
        copyMessageElement.classList.remove('show', 'error');
      }, 1000);
    });
  });
});


// FOOTER SECTION
