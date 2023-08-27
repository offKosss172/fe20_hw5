document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM content loaded');

  const cardField = document.querySelector('.card-field');

  cardField.addEventListener('click', function(event) {
      const target = event.target;
      if (target.classList.contains('btn-delete-twit')) {
          const cardElement = target.closest('.card');
          if (cardElement) {
              const postId = cardElement.getAttribute('data-post-id');
              console.log('Button clicked for Post ID:', postId);
              deleteCard(postId);
          }
      }
  });

  fetch('https://ajax.test-danit.com/api/json/posts')
      .then(response => response.json())
      .then(posts => {
          fetch('https://ajax.test-danit.com/api/json/users')
              .then(response => response.json())
              .then(users => {
                  posts.forEach(post => {
                      const user = users.find(user => user.id === post.userId);
                      if (user) {
                          const card = new Card(post.title, post.body, user.name, user.email, post.id);
                          const cardElement = card.render();
                          cardField.appendChild(cardElement);
                      }
                  });
              })
              .catch(error => console.log('error', error));
      })
      .catch(error => console.log('error', error));
});
