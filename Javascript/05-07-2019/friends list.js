var friends = [
    {
        name: "Rajarushil",
        email: "rajarushil@outlook.com",
        profilPic: "img/p1.jpg",
        isOnline: true
    },
    {
        name: "Teja",
        email: "teja@gmail.com",
        profilPic: "img/p2.jpg",
        isOnline: false
    },
    {
        name: "Sandeep",
        email: "sandeep@yahoo.com",
        profilPic: "img/p3.jpg",
        isOnline: false
    },
    {
        name: "Mani",
        email: "mani@outlook.com",
        profilPic: "img/p4.jpg",
        isOnline: false
    } 
    
    
    
]

friends.forEach(function(e){
    var li = "<li class='person";
    var personImgContainer = '<div class="person-img"><img src=' + e.profilPic + ' alt=""></div>';
    var personInfoContainer = '<div class="person-info">';
    
    
    var personName = "<h2>" + e.name + "</h2>";
    var personEmail = "<h3>" + e.email + "</h3>"
    if(e.isOnline){
        li += " is-online'>";
    }else{
        li += " is-offline'>";
    }
    personInfoContainer += personName;
    personInfoContainer += personEmail;
    personImgContainer += "<span></span>"
    personInfoContainer += "</div>"
    li += personImgContainer;
    li += personInfoContainer;
    li += "</li>";
    document.write(li);
})




