window.addEventListener("load", (event) => {
    // Get the modal
    var modal = document.getElementById("myModal");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // on button click, open the modal
    document.getElementById("myBTN2").addEventListener("click",() => {
      modal.style.display = "block";
    });
    
    // When the user clicks, close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When click off-modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });
