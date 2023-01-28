function updateTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;
    var time = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementsByClassName("hours")[0].innerHTML = hours;
    document.getElementsByClassName("minutes")[0].innerHTML = minutes;
    document.getElementsByClassName("seconds")[0].innerHTML = seconds;
    document.getElementsByClassName("ampm")[0].innerHTML = ampm;
}
setInterval(updateTime, 1000);
