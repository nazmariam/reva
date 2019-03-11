window.onload = () => {
    document.querySelector('.video-row').addEventListener('click', function(e){
        console.log(e.target);
        document.querySelector('.popup-wrapper').classList.add('visible');

    });
    document.querySelector('.mask').addEventListener('click',function(){
        document.querySelector('.popup-wrapper').classList.toggle('visible');
    });
};

