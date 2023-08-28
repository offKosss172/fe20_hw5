 

    function deleteCard(postId) {
        console.log('Deleting post with ID:', postId);
    
        fetch(`https://ajax.test-danit.com/api/json/posts/${postId}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                console.log('Response OK');
                
                // Удаление карточки из DOM
                const cardElement = document.querySelector(`[data-post-id="${postId}"]`);
                if (cardElement) {
                    cardElement.remove();
                } else {
                    console.warn('Card element not found in DOM');
                }
    
               
            } else {
                response.text().then(errorMessage => {
                    console.error('Error deleting card:', errorMessage);
                });
            }
        })
        .catch(error => console.error('Network error:', error));
    }
    
    
    
    
    