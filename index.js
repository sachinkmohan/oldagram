const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const userNameEl = document.getElementById("user-name");
const postLocationEl = document.getElementById("post-location");
const likesEl = document.getElementById("likes");

userNameEl.textContent = posts[0].name;
postLocationEl.textContent = posts[0].location;
likesEl.textContent = posts[0].likes + " likes";

const userCommentNameEl = document.getElementById("user-comment-name");
const commentEl = document.getElementById("comment");
userCommentNameEl.textContent = posts[0].username;
commentEl.textContent = posts[0].comment;
