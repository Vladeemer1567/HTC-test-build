function timer(){
    var date = new Date(),
           hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),          //get Hours() - возвращает час суток
           minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),  //getMinutes() - возвращает минуты как число от 0 до 59
           seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();  //getSeconds() - возвращает число секунд от 0 до 59
    document.getElementById('timer').innerHTML = hours + ':' + minutes + ':' + seconds;       //Возвращает ссылку на элемент, который имеет атрибут id с указанным значением
  }
  setInterval(timer, 1000);                                                                   //Выполняет код много раз через равные промежутки времени, setInterval(функция, время)
  timer();

