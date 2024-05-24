var modal = document.getElementById('modal');
var modalImg = document.getElementById("modal-image");
var thumbnails = document.querySelectorAll('.thumbnail img');
var myDrawings = document.querySelectorAll('.drawing img');
var myPhotoMontages = document.querySelectorAll('.photomontage img');
var currentGallery = null;

function toggleGallery(divId) {
    var gallery = document.getElementById(divId);
    if (currentGallery !== null) {
        currentGallery.style.display = "none";
    }
    if (currentGallery !== gallery) {
        gallery.style.display = "flex";
        gallery.style.zIndex = "1";
        currentGallery = gallery;
    } else {
        currentGallery = null;
    }
}

document.getElementById("openGalleryButton").addEventListener("click", function() {
    toggleGallery("gallery");
});

document.getElementById("openDrawingsButton").addEventListener("click", function() {
    toggleGallery("drawings");
});

document.getElementById("openMontagesButton").addEventListener("click", function() {
    toggleGallery("photomontages");
});

/** 
 * ------------------------------------------------------------------------------
 * ------------------------------------------------------------------------------
 * ------------------------------------------------------------------------------
 * P H O T O S
 * ------------------------------------------------------------------------------
 * ------------------------------------------------------------------------------
 * ------------------------------------------------------------------------------
*/

thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener('click', function() {

        modal.style.display = "block";
        modalImg.src = this.src;
        modalImg.style.width = '600px';
        modalImg.style.height = '600px';
        modalImg.style.objectFit = 'cover'; 
        modalImg.style.marginLeft = 'auto';
        modalImg.style.marginRight = 'auto';


    });
});



/** 
 * ------------------------------------------------------------------------------
 * ------------------------------------------------------------------------------
 * ------------------------------------------------------------------------------
 * D R A W I N G S
 * ------------------------------------------------------------------------------
 * ------------------------------------------------------------------------------
 * ------------------------------------------------------------------------------
*/

myDrawings.forEach(function(drawingImg) {
    drawingImg.addEventListener('click', function() {
        var drawingId = this.id;

        modal.style.display = "block";
        modalImg.src = this.src;
        modalImg.style.width = 'auto';
        modalImg.style.maxHeight = '800px';
        modalImg.style.objectFit = 'cover'; 
        modalImg.style.marginLeft = 'auto';
        modalImg.style.marginRight = 'auto';


    });
});

/** 
 * ------------------------------------------------------------------------------
 * ------------------------------------------------------------------------------
 * ------------------------------------------------------------------------------
 * P H O T O M O N T A G E S
 * ------------------------------------------------------------------------------
 * ------------------------------------------------------------------------------
 * ------------------------------------------------------------------------------
*/

myPhotoMontages.forEach(function(montageImg) {
    montageImg.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        modalImg.style.maxWidth = '1000px';
        modalImg.style.maxHeight = '800px';
        modalImg.style.objectFit = 'cover'; 
        modalImg.style.marginLeft = 'auto';
        modalImg.style.marginRight = 'auto';


    });
});

var closeBtn = document.getElementsByClassName("close")[0];

closeBtn.addEventListener('click', function() {
    modal.style.display = "none";
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
