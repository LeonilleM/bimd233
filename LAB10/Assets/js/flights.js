var t1 = new Date('March, 20, 2017, 07:32:00')
var t2 = new Date('March, 20, 2017, 10:10:00')
const diff = t2.getTime() - t1.getTime()

const seconds = (diff / 1000);
const minutes = (seconds / 60);
const hour = (minutes / 60)
console.log(`${seconds} : ${minutes}: ${hour}`);
console.log(5);



