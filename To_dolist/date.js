// for datetime
function datevalue()
{
let month = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];




hold = new Date()
mon = month[hold.getMonth()]
day = hold.getDate()
hr = hold.getHours()
min = hold.getMinutes()
sec = hold.getSeconds()
val = sec;
const period = hr >= 12 ? 'PM' : 'AM';
let datetime = `${day} ${mon} ${hr}:${min}:${sec} ${period.toLowerCase()}`

return datetime
}


