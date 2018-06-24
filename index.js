function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;
  var commentTemplate = document.getElementById("comment-template").innerHTML;
 
  //create template function
  var templateFn = _.template(commentTemplate);
 
  var commentsDiv = document.getElementById("comments");
 
  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
  commentsDiv.innerHTML += templateHTML;
}

function createPost() {
  var author = document.getElementById("authorName").value;
  var title = document.getElementById("postTitle").value;
  var body = document.getElementById("postBody").value;
  var postTemplate = document.getElementById("post-template").innerHTML;
 
  //create template function
  var templateFn = _.template(postTemplate);
 
  var postDiv = document.getElementById("post");
 
  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'title':title, 'post': body, 'author': author });
  postDiv.innerHTML += templateHTML;
}