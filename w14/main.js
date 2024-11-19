function renderPosts(posts) {
    posts.forEach((img) => {
        const imgEl = document.createElement("img");
        imgEl.setAttribute("src", img.thumbnailUrl);
        document.getElementById("output").appendChild(imgEl);
    });
};

const getPosts = async () => {
    try {
      const response = await fetch(" https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      if (data.length) {
        console.log("Success", data);
      } else {
        onSuccess(data);
      }
    } catch (error) {
      console.log(`Error`, error);
    }
  }

const start = async () => {
    getPosts()
}

const onSuccess = async (Posts) => {
    renderPosts(Posts)
}

const onError = async (error) => {
    console.log("Error", error)
}

start();