function started() {
    let son = document.getElementById('son').value.trim() - 0

    function start() {
        if(son>0){
            document.getElementById('sekund').innerHTML = son--
        }

        else{
            document.getElementById('sekund').innerHTML = 'time over'
        }
    }
    
    setInterval(start, 1000)
}
