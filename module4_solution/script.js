(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (name in names){
      var firstletter = names[name].charAt(0).toLowerCase();

      if(firstletter === "j"){
        byespeaker.speak(names[name])
      }else{
        hellospeaker.speak(names[name])
      }
  }
})();
