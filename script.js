document.getElementById("blog-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let blogTitle = document.getElementById("blog-title").value;
    let blogContent = document.getElementById("blog-content").value;

    let blogList = document.getElementById("blog-list");

    let blogItem = document.createElement("div");
    blogItem.classList.add("blog");
    blogItem.innerHTML = `<h3>${blogTitle}</h3><p>${blogContent}</p><div class="comment-box">
        <input type="text" class="comment-input" placeholder="Write a comment..." />
        <button class="comment-btn">Comment</button>
        <div class="comment-list"></div>
    </div>`;

    blogList.appendChild(blogItem);

    this.reset();

    // Add event listener for comment button
    blogItem.querySelector(".comment-btn").addEventListener("click", function() {
        let commentInput = blogItem.querySelector(".comment-input");
        let commentList = blogItem.querySelector(".comment-list");

        if (commentInput.value.trim() !== "") {
            let comment = document.createElement("p");
            comment.textContent = commentInput.value;
            commentList.appendChild(comment);
            commentInput.value = "";
        }
    });
});
