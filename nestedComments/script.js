


let comments = [
    {
      id: 1,
      text: "This is the first comment",
      parentId: null,
      replies: [
        {
          id: 2,
          text: "This is a reply to the first comment",
          parentId: 1,
          replies: [
            {
              id: 3,
              text: "This is a nested reply",
              parentId: 2,
              replies: [] // Further nesting possible
            }
          ]
        }
      ]
    },
    {
      id: 4,
      text: "This is an independent comment",
      parentId: null,
      replies: []
    },
    // Additional comment objects...
];


let commentsContainer = document.getElementById("commentsContainer");


function randomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}


function displayComments(comments, container) {

    for (let i = 0; i < comments.length; ++i) {
        const comment = document.createElement("div");
        comment.className = "comment";
        const commentContent = document.createElement("p");
        commentContent.innerText = comments[i].text; 
        comment.append(commentContent);

        if (comments[i].replies.length > 0) {
            displayComments(comments[i].replies, comment);
        }

        console.log(randomColor());
        comment.style.backgroundColor = `#${randomColor()}`;
        container.append(comment);
    }
}


displayComments(comments, commentsContainer);

