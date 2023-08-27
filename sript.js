fetch('https://ajax.test-danit.com/api/json/posts')
  .then(response => response.json())
  .then(posts => {
    fetch('https://ajax.test-danit.com/api/json/users')
      .then(response => response.json())
      .then(users => {
        const cardField = document.querySelector('.card-field');

        posts.forEach(post => {
          const user = users.find(user => user.id === post.userId);
          if (user) {
            const card = new Card(post.title, post.body, user.name, user.email);
            const cardElement = card.render();
            cardField.appendChild(cardElement);
          }
        });
      })
      .catch(error => console.log('error', error));
  })
  .catch(error => console.log('error', error));
