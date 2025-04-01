document.getElementById('formRegistration').addEventListener('submit', function(s) {
    s.preventDefault();
    const blogTitle = document.getElementById('name').value;
    const blogContent = document.getElementById('content').value;
    const blog = JSON.parse(localStorage.getItem('blog'));
    blog.push({ id: Date.now(), blogTitle, blogContent });
    localStorage.setItem('blog', JSON.stringify(blog));
    window.location.href = 'index.html';
});