
//数字转换成时间
Date.prototype.toLocaleString = function() {
    let year = this.getFullYear();
    let Month = this.getMonth()+1;
    let Date = this.getDate();
    let Hours = this.getHours();
    let Minutes = this.getMinutes();
    let Seconds = this.getSeconds();
    if (Month<10){
        Month = "0"+Month;
    }
    if (Date<10){
        Date = "0"+Date;
    }
    if (Hours<10){
        Hours = "0"+Hours;
    }
    if (Minutes<10){
        Minutes = "0"+Minutes;
    }
    if (Seconds<10){
        Seconds = "0"+Seconds;
    }
    return year + "-" + Month + "-" + Date + " " + Hours + ":" + Minutes + ":" + Seconds;
};
function time(data) {
    let unixTimestamp = new Date( data ) ;
    let commonTime = unixTimestamp.toLocaleString();
    return commonTime;
}