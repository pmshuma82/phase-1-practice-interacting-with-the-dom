document.addEventListener("DOMContentLoaded", () => {
    // Timer functionality
    let counterValue = 0;
    const counter = document.getElementById("counter");
    const plusButton = document.getElementById("plus");
    const minusButton = document.getElementById("minus");
    const likeButton = document.getElementById("like");
    const pauseButton = document.getElementById("pause");
    const commentInput = document.getElementById("comment-input");
    const commentSubmitButton = document.getElementById("comment-submit");
    let timer;
  
    function incrementCounter() {
      counterValue++;
      counter.textContent = counterValue;
    }
  
    function decrementCounter() {
      counterValue--;
      counter.textContent = counterValue;
    }
  
    function likeCounter() {
      const likeCount = document.createElement("li");
      likeCount.textContent = `${counterValue} has been liked`;
      document.querySelector(".likes").appendChild(likeCount);
    }
  
    function startTimer() {
      timer = setInterval(incrementCounter, 1000);
    }
  
    startTimer();
  
    plusButton.addEventListener("click", incrementCounter);
    minusButton.addEventListener("click", decrementCounter);
    likeButton.addEventListener("click", likeCounter);
    pauseButton.addEventListener("click", () => {
      if (pauseButton.textContent === "Pause") {
        clearInterval(timer);
        plusButton.disabled = true;
        minusButton.disabled = true;
        likeButton.disabled = true;
        pauseButton.textContent = "Resume";
      } else {
        startTimer();
        plusButton.disabled = false;
        minusButton.disabled = false;
        likeButton.disabled = false;
        pauseButton.textContent = "Pause";
      }
    });
  
    commentSubmitButton.addEventListener("click", () => {
      const commentText = commentInput.value;
      if (commentText) {
        const comment = document.createElement("li");
        comment.textContent = commentText;
        document.querySelector(".comments").appendChild(comment);
        commentInput.value = "";
      }
    });
  });
  