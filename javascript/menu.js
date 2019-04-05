(function(){
    var menu = document.querySelector('ul'),
        menulink = document.querySelector('i');
    menulink.addEventListener('click', function(e){
         menu.classList.toggle('active');
         e.preventDefault();
    });
})();

function toggleMenu(){
    console.log("merge");
    document.querySelector('ul').classList.toggle('active');
}