function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click', clickAlert);
}

function clickAlert() {
    return alert('I was clicked hahah!');
  }

  function removeIdMain(){
    const removeMain = document.getElementById('main');
    removeMain.addEventListener('click', function(e){
        e.target.remove();
    })
  }

  removeIdMain()
  addingEventListener();