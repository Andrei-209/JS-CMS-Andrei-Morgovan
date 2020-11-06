function createDeleteButton() {
    const $deleteButton = document.createElement('button');
    $deleteButton.textContent = 'Delete';
    $deleteButton.classList.add('delete-button');
    return $deleteButton;
}

function fetchPost() {
    return fetch('/admin/api/posts')
        .then(response => response.json())
        .then(posts => posts)
        .catch(error => console.error('Promise error, ', error));
}

function renderPost(posts) {
    const $posts = document.querySelector('#posts-list');
    posts.forEach(post => {
        const $post = document.createElement('li');
        $post.textContent = post.title;
        $post.dataset.postId = post.id;
        $post.appendChild(createDeleteButton());
        $posts.appendChild($post);
    });
}

function handleDelete() {
    const $posts = document.querySelector('#posts-list');
    $posts.addEventListener('click', event => {
        if (event.target.classList.contains('delete-button')) {
            console.log('remove post whit id: ', event.target.parentNode.dataset.postId);
            $posts.removeChild(event.target.parentNode);
        }
    });
}

function init() {
    fetchPost().then(renderPost);
    handleDelete();
}

init();