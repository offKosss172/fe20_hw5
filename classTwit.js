class Card {
  constructor(title, body, userName, userEmail, postId) {
    this.title = title;
    this.body = body;
    this.userName = userName;
    this.userEmail = userEmail;
    this.postId = postId;
    }
  
    render() {
  
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      cardElement.setAttribute('data-post-id', this.postId);
  
      const titleElement = document.createElement('h2');
      titleElement.textContent = this.title;
  
      const nameElement = document.createElement('h4');
      nameElement.textContent = this.userName + '     (' + this.userEmail + ')';
  
      const bodyElement = document.createElement('p');
      bodyElement.textContent = this.body;

      const deleteTwit = document.createElement('span');
      deleteTwit.classList.add('btn-delete-twit');
  
      cardElement.appendChild(titleElement);
      cardElement.appendChild(nameElement);
      cardElement.appendChild(bodyElement);
      cardElement.appendChild(deleteTwit);
  
      return cardElement;
    }
  }
  