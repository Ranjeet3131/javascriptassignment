    var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = alert('Good Morning');
    else if (hrs >= 12 && hrs <= 17)
        greet = alert('Good Afternoon');
    else if (hrs >= 17 && hrs <= 24)
        greet = alert('Good Evening');
  
