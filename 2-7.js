function vremya(){
    let nowDate = new Date();
    console.log(nowDate);
    nowDate.setUTCHours(100*24);
    console.log(nowDate);
}
vremya();