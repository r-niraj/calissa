$(document).ready(function (param) {
    getSizes();
 });

 window.addEventListener(
    "resize", getSizes, false);
  
 
function getSizes() {
    let zoom = ((window.outerWidth - 10)
        / window.innerWidth) * 100;
          
 let zoomLevel = Math.floor(zoom+1);

 if(zoomLevel<100){
    $('.tagline-wrapper').css({
        width:"max-content",
        margin:"0 auto"
    });
    $('.parentWrapperBoud').css({
        width:"1361px"
    });
 } else if(zoomLevel>95){
    $('.parentWrapperBoud').css({
        width:"100%"
    });
    $('.tagline-wrapper').css({
        width:"",
        marginLeft: "4%"
    });
 }
}