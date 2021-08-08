function previewFiles() {

    var preview = document.querySelector('#Conteiner-images');
    var files   = document.querySelector('input[type=file]').files;
  
    function readAndPreview(file) {
  

      if ( /\.(jpe?g|png)$/i.test(file.name) ) {
        var reader = new FileReader();
  
        reader.addEventListener("load", function () {
          var image = new Image();
          image.width = 800;
          image.title = file.name;
          image.src = this.result;
          image.classList.add()
          preview.appendChild( image );
        }, false);
  
        reader.readAsDataURL(file);
      }
  
    }
  
    if (files) {
      [].forEach.call(files, readAndPreview);
    }
  
  }