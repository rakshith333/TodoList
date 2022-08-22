exports.getDate = function(){
  let today = new Date();
  let options = {
    weekday:"long",
    day:"numeric",
    month:"long",
  }
  let day =today.toDateString("en-US",options);
  return day;
};
exports.getDay = function(){
  let today = new Date();
  let options = {
    weekday:"long"
  }
  let day =today.toDateString("en-US",options);
  return day;
};
