let addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", function(e) {

  let addTitle = document.getElementById("blog-title");
  let addTxt = document.getElementById("blog-text");
  let addPic = document.getElementById("blog-pic")

    if (addTitle.value == "" || addTxt.value == "") {
        return alert("Please enter the required fields")
    }

  let blogs = localStorage.getItem("blogs");
  if (blogs == null) {
    blogsObj = [];
  } else {
    blogsObj = JSON.parse(blogs);
  }
  let myObj = {
    title: addTitle.value,
    text: addTxt.value,
    picture: addPic.value
  }
  blogsObj.push(myObj);
  localStorage.setItem("blogs", JSON.stringify(blogsObj));
  addTxt.value = "";
  addTitle.value = "";
  addPic.value =""
  showBlogs();
});

// Function to show elements from localStorage
function showBlogs() {
  let blogs = localStorage.getItem("blogs");
  if (blogs == null) {
    blogsObj = [];
  } else {
    blogsObj = JSON.parse(blogs);
  }
  let html = "";
  blogsObj.forEach(function(element, index) {
    html += `
    <div class="col-md-2 col-md-2 col-md-8">
            <div class="blog">
                <p class="blog-counter">Blog ${index + 1}</p>
                <img src="img_mountains.jpg" ${element.picture} alt=""/>
                <h3 class="blog-title"> ${element.title} </h3>
                <p class="blog-text"> ${element.text}</p>
                
                <button id="${index}"onclick="deleteNote(this.id)" class="note-btn">Delete Note</button>
                
            </div>
        </div>
        </div>
`



  //  html += `
  //    <div class="blog">
  //          <p class="blog-counter">Blog ${index + 1}</p>
  //  <h3 class="blog-title"> ${element.title} </h3>
  //     <p class="blog-text"> ${element.text}</p>
  //    <p class="blog-pic"> ${element.picture}</p>
  //   <button id="${index}"onclick="deleteNote(this.id)" class="note-btn">Delete Note</button>
  
  // </div>
  //            `
  });
  let blogsElm = document.getElementById("blogs");
  if (blogsObj.length != 0) {
    blogsElm.innerHTML = html;
  } else {
    blogsElm.innerHTML = `No Blogs Yet! Add a blog using the form above.`;
  }
}

// Function to delete a blog
function deleteNote(index) {

    let confirmDel = confirm("Delete this blog?");
    if (confirmDel == true) {
        let blogs = localStorage.getItem("blogs");
        if (blogs == null) {
            blogsObj = [];
        } else {
            blogssObj = JSON.parse(blogs);
        }

        blogsObj.splice(index, 1);
        localStorage.setItem("blogs", JSON.stringify(blogsObj));
        showBlogs();
    }
  
}
showBlogs();