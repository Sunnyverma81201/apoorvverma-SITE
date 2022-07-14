window.onresize(()=>{
        var width = screen.width;
        var height = screen.height;
        var hwDisplay = document.querySelector('#height-width');
        hwDisplay.innerHTML = height + " x " + width;
    }
);