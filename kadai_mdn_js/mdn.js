const data = new Date();
const year = data.getFullYear();
const month = data.getMonth()+ 1;
const day = data.getDate();

const formattedDate = `${year}年${month}月${day}日`;
console.log(formattedDate);