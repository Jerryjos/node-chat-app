var generateMessage=(from,text)=>{
  return{
  from,
  text,
  completed:new Date().getTime()
};
};
module.exports={generateMessage};
