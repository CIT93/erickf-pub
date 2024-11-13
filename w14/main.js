function renderPosts(posts) {
    posts.forEach((img) => {
        const imgEl = document.createElement("img");
        imgEl.setAttribute("src", img.thumbnailUrl);
        document.getElementById("output").appendChild(imgEl);
    });
};

async function getPosts() {
    try {
      const response = await fetch(" https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      if (response.status === 200) {
        console.log("Success", data);
      } else {
        onSuccess(data);
      }
    } catch (error) {
      console.log(`Error`, error);
    }
  }

async function start() {
    getPosts()
}

function onSuccess(Posts) {
    renderPosts(Posts)
}

function onError(error) {
    console.log("Error", error)
}

start();