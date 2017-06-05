//GLOBAL VARIABLES
var name = 'No name';
var ckPurchases = 0;    //CALVIN KLEIN
var phPurchases = 0;    //PIZZA HUT
var wmPurchases = 0;    //WALMART
var apPurchases = 0;    //APPLE

var isBroke = false;   //WALMART'S REGRIGERATOR

function showModalRegister() {
    let element = '';
    element += ''; 
    element += '<form action="javascript:register();" id="register">';
    element +=     '<div class="form-group">';
    element +=          '<label for="name">Plase enter your name: </label>';
    element +=          '<input type="text" class="form-control" id="name" autofocus>';
    element +=      '</div>';
    element +=      '<div class="form-group">';
    element +=          '<button class="btn btn-md btn-primary" type="submit">Register</button>';
    element +=      '</div>';
    element += '</form>';
    showModal('myModal', 'Register', element);
}

function register() {
    name = $('#name').val();
    let element = '<div class="row welcome">';
    element += '<h2>Welcome, ' + name + ' </h2>';
    element += '</div>';
    changeMsgModal('myModal', 'Hello', element);
    setTimeout( () => hideModal('myModal'), 1300 );
}

function showModalFingerPrint() {
    let element = '';
    element += '<div>';
    element += ' <div style="display: inline-block; vertical-align:top; margin-right: 70px">';
    element += '<br><br><h2> Fingerprint: </h2>';
    element += '<div><img id="fingerprint" class="img-responsive" src="images/fingerprint1.jpg" draggable="true" ondragstart="drag(event)" width="180" height="150" style="float:left"></div>';
    element += '</div>';
    element += '<div style="display: inline-block; vertical-align:top; margin-left: 65px">';
    element += ' <br><br><br><br><br>';
    element += '<center>';
    element += '<h3>Fingerprint:<img id="Ifingerprint"  class="img-responsive" src="images/fingerprint1.jpg" width="60" height="60"></h3>';
    element += '<h4>Please, pass your finger over the fingerprint reader...</h4>';
    element += '<div id="divCheck" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';
    element += '  <button id="btnSucc" class="btn btn-default" type="button" style="display:none;" onclick="showModalOffers()"> OK </button>';
    element += ' </center>';
    element += '</div>';
    element += '  </div>';
    showModal('firstModal', 'FINGERPRINT PROCESS!', element);
}

var steps = 1;

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var imag = document.getElementById(data);
    var btn = document.getElementById("btnSucc");
    var text = document.getElementsByTagName("h4")[1];
    if (steps == 1 && data == "fingerprint") {
        ev.target.appendChild(imag);
        steps++;
        document.getElementById("Ifingerprint").src = "../images/fingerprintIconC.png";
        ev.target.removeChild(imag);
    }
    if (steps == 2) {
        text.innerText = "Successful, come on!";
        var check = document.createElement("img");
        check.src = "../images/personCheck.png";
        check.width = "180";
        check.height = "180";
        ev.target.appendChild(check);
        btn.style.display = "block";
    }
}

function showModalOffers() {
    let element = '';
    element += '<div class="container-fluid">';
    element += '<div class="row">';
    element += '<h3 class="text-center">WE CHECKED YOUR PROFILE AND THESE OFFERS MAY INTEREST YOU! CHECK THEM OUT!</h3>';
    element += '</div>';
    element += '<br>';
    element += '<div class="row">';
    element += '<div class="col-sm-3">';
    element += '<a class="hvr-grow">';
    element += '<img class="logo img-responsive " src="images/calvin-klein.svg" alt="" onClick="showOfferCalvinKlein();">';
    element += '</a>';
    element += '</div>';
    element += '<div class="col-sm-3">';
    element += '<a class="hvr-grow">';
    element += '<img class="logo img-responsive " src="images/supermarket.jpg" alt="" onClick="showOfferSupermarket();">';
    element += '</a>';
    element += '</div>';
    element += '<div class="col-sm-3">';
    element += '<a class="hvr-grow">';
    element += ' <img class="logo img-responsive " src="images/apple.png" alt="" onClick="showOfferApple();">';
    element += '</a>';
    element += '</div>';
    element += '<div class="col-sm-3">';
    element += '<a class="hvr-grow">';
    element += '<img class="logo img-responsive " src="images/pizzaHut.png" alt="" onClick="showOfferPizzaHut();">';
    element += '</a>';
    element += '</div>';
    element += '</div>';
    element += '</div>';
    showModal('firstModal', 'WELCOME '+ name +'!', element);
}

function confirmPurchase(callback, qty, name) {
    let element = '';
    element += '<div class="row welcome">';
        element += '<div class="btn-group">';
            element += '<button type="button" class="btn btn-primary" id="purchase"> Purchase </button>';
            element += '<button type="button" class="btn btn-danger" id="cancel"> Cancel </button>';
        element += '</div>';
    element += '</div><hr>';
    if(qty != undefined) {
        element += '<div class="row welcome">';
            element += '<h3>There are only ' + qty + ' left!</h3>'
        element += '</div>';
    }
    let title = 'Purchase Confirmation ';
    if(name != undefined) title += 'of ' + name;
    showModal('myModal', title, element);
    $('#purchase').click( () => {
        callback();
        hideModal('myModal');
    } );
    $('#cancel').click( () => {
        hideModal('myModal');
    } );
}

function showOfferCalvinKlein() {
    let element = '';
    element += '<div class="container-fluid">';
    element += '<div class="row">';
    element += '<h2 class="text-center">WHAT DO YOU WANT TO BUY?</h2>';
    element += '</div>';
    element += '<br>';
    element += '<div class="row">';
    element += '<div class="col-sm-4">';
    element += '<a class="hvr-grow">';
    element += '<figure class="figure">';
    element += ' <img class="product figure-img img-fluid img-responsive rounded" src="images/ck01.jpg" id="ck01-img">';
    element += ' <figcaption class="figure-caption text-center caption" id="ck01-cap">20% OFF-$200</figcaption>';
    element += ' </figure>';
    element += ' </a>';
    element += ' </div>';
    element += ' <div class="col-sm-4">';
    element += '<a class="hvr-grow">';
    element += ' <figure class="figure">';
    element += '<img class="product figure-img img-fluid img-responsive rounded" src="images/ck04.jpg" id="ck04-img">';
    element += '<figcaption class="figure-caption text-center caption" id="ck04-cap">35% OFF-$350</figcaption>';
    element += '</figure>';
    element += '  </a>';
    element += '  </div>';
    element += ' <div class="col-sm-4">';
    element += '<a class="hvr-grow" >';
    element += '<figure class="figure">';
    element += '    <img class="product figure-img img-fluid img-responsive rounded" src="images/ck02.jpg" id="ck02-img">';
    element += '<figcaption class="figure-caption text-center caption" id="ck02-cap">25% OFF-$100</figcaption>';
    element += ' </figure>';
    element += '  </a>';
    element += ' </div>';
    element += '</div>';
    element += '<div class="form-group height25" >';
    element += '<div class="alert alert-success hiddenDiv" id="messageResult">';
    element += '<strong id="messageResultTitle">Info!... </strong>  ';
    element += '  <span id="messageResultMessage">This alert box could indicate a neutral informative change or action.</span>';
    element += '</div>';
    element += '</div>';
    element += '</div>';
    showModal('secondModal', 'CALVIN KLEIN OFFERS', element);
    $('#ck01-img').on('click', (event) => {
        confirmPurchase( () => {
            ckPurchases++;
            showMessage('messageResult', 'PURCHASED...', 'ARTICLE PURCHASED PLEASE GO TO CALVIN KLEIN TO RETIRE IT');
        });       
    });
    $('#ck02-img').on('click', (event) => {
        confirmPurchase( () => {
            ckPurchases++;
            showMessage('messageResult', 'PURCHASED...', 'ARTICLE PURCHASED PLEASE GO TO CALVIN KLEIN TO RETIRE IT');
        });
    });
    $('#ck04-img').on('click', (event) => {
        confirmPurchase( () => {
            ckPurchases++;
            showMessage('messageResult', 'PURCHASED...', 'ARTICLE PURCHASED PLEASE GO TO CALVIN KLEIN TO RETIRE IT');
        });
    });
}

function showOfferSupermarket() {
    let element = '';
    element += '<div class="container-fluid">';
    element += '<div class="row">';
    element += '<h2 class="text-center">WHAT DO YOU WANT TO BUY?</h2>';
    element += '</div>';
    element += '<br>';
    element += '<div class="row">';
    element += '<div class="col-sm-4">';
    element += '<a class="hvr-grow">';
    element += '<figure class="figure">';
    element += '<img class="product figure-img img-fluid img-responsive rounded" src="images/w01.jpg" id="w01-img">';
    element += '<figcaption class="figure-caption text-center caption" id="ck01-cap">10% OFF-$6</figcaption>';
    element += '</figure>';
    element += '</a>';
    element += '</div>';
    element += '<div class="col-sm-4">';
    element += '<a class="hvr-grow">';
    element += '<figure class="figure">';
    element += '<img class="product figure-img img-fluid img-responsive rounded" src="images/w02.jpg" id="w02-img">';
    element += '<figcaption class="figure-caption text-center caption" id="ck04-cap">25% OFF-$9</figcaption>';
    element += '</figure>';
    element += '</a>';
    element += '</div>';
    element += '<div class="col-sm-4">';
    element += '<a class="hvr-grow" >';
    element += '<figure class="figure">';
    element += '<img class="product figure-img img-fluid img-responsive rounded" src="images/w03.jpg" id="w03-img">';
    element += '<figcaption class="figure-caption text-center caption" id="ck02-cap">15% OFF-$6</figcaption>';
    element += '</figure>';
    element += '</a>';
    element += '</div>';
    element += '</div>';
    element += '<div class="form-group height25" >';
    element += '<div class="alert alert-success hiddenDiv" id="messageResult">';
    element += '<strong id="messageResultTitle">Info!... </strong>';
    element += '<span id="messageResultMessage">This alert box could indicate a neutral informative change or action.</span>';
    element += '</div>';
    element += '</div>';
    element += '</div>';
    showModal('secondModal', 'WALMART OFFERS', element);
    $('#w01-img').on('click', (event) => {
        confirmPurchase( () => {
            wmPurchases++;
            showMessage('messageResult', 'PURCHASED...', 'ARTICLE PURCHASED PLEASE GO TO WALMART TO RETIRE IT');
        });   
    });
    $('#w02-img').on('click', (event) => {
        confirmPurchase( () => {
            wmPurchases++;
            showMessage('messageResult', 'PURCHASED...', 'ARTICLE PURCHASED PLEASE GO TO WALMART TO RETIRE IT');
        });   
    });
    $('#w03-img').on('click', (event) => {
        confirmPurchase( () => {
            wmPurchases++;
            showMessage('messageResult', 'PURCHASED...', 'ARTICLE PURCHASED PLEASE GO TO WALMART TO RETIRE IT');
        });   
    });
}

function showOfferApple() {
    let element = '';
    element += '<div class="container-fluid">';
    element += '<div class="row">';
    element += '<h2 class="text-center">WHAT DO YOU WANT TO BUY?</h2>';
    element += '</div>';
    element += '<br>';
    element += '<div class="row">';
    element += '<div class="col-sm-4">';
    element += '<a class="hvr-grow">';
    element += '<figure class="figure">';
    element += '<img class="product figure-img img-fluid img-responsive rounded" src="images/a01.jpg" id="a01-img">';
    element += '<figcaption class="figure-caption text-center caption" id="ck01-cap">20% OFF-$1500</figcaption>';
    element += '</figure>';
    element += '</a>';
    element += '</div>';
    element += '<div class="col-sm-4">';
    element += '<a class="hvr-grow">';
    element += '<figure class="figure">';
    element += '<img class="product figure-img img-fluid img-responsive rounded" src="images/a02.jpg" id="a02-img">';
    element += '<figcaption class="figure-caption text-center caption" id="ck04-cap">25% OFF-$2300</figcaption>';
    element += '</figure>';
    element += '</a>';
    element += '</div>';
    element += '<div class="col-sm-4">';
    element += '<a class="hvr-grow" >';
    element += '<figure class="figure">';
    element += '<img class="product figure-img img-fluid img-responsive rounded" src="images/a03.jpg" id="a03-img">';
    element += '<figcaption class="figure-caption text-center caption" id="ck02-cap">15% OFF-$20</figcaption>';
    element += '</figure>';
    element += '</a>';
    element += '</div>';
    element += '</div>';
    element += '<div class="form-group height25" >';
    element += '<div class="alert alert-success hiddenDiv" id="messageResult">';
    element += '<strong id="messageResultTitle">Info!... </strong>';
    element += '<span id="messageResultMessage">This alert box could indicate a neutral informative change or action.</span>';
    element += '</div>';
    element += '</div>';
    element += '</div>';
    showModal('secondModal', 'APPLE OFFERS', element);
    $('#a01-img').on('click', (event) => {
        confirmPurchase( () => {
            apPurchases++;
            showMessage('messageResult', 'PURCHASED...', 'ARTICLE PURCHASED PLEASE GO TO APPLE TO RETIRE IT');
        });   
    });
    $('#a02-img').on('click', (event) => {
        confirmPurchase( () => {
            apPurchases++;
            showMessage('messageResult', 'PURCHASED...', 'ARTICLE PURCHASED PLEASE GO TO APPLE TO RETIRE IT');
        });   
    });
    $('#a03-img').on('click', (event) => {
        confirmPurchase( () => {
            apPurchases++;
            showMessage('messageResult', 'PURCHASED...', 'ARTICLE PURCHASED PLEASE GO TO APPLE TO RETIRE IT');
        });   
    });
}

function showOfferPizzaHut() {
    let element = '';
    element += '<div class="container-fluid">';
    element += '<div class="row">';
    element += '<h2 class="text-center">WHAT DO YOU WANT TO BUY?</h2>';
    element += '</div>';
    element += '<br>';
    element += '<div class="row">';
    element += '<div class="col-sm-4">';
    element += '<a class="hvr-grow">';
    element += '<figure class="figure">';
    element += '<img class="product figure-img img-fluid img-responsive rounded" src="images/ph01.jpg" id="ph01-img">';
    element += '<figcaption class="figure-caption text-center caption" id="ck01-cap">20% OFF-$20</figcaption>';
    element += '</figure>';
    element += '</a>';
    element += '</div>';
    element += '<div class="col-sm-4">';
    element += '<a class="hvr-grow">';
    element += '<figure class="figure">';
    element += '<img class="product figure-img img-fluid img-responsive rounded" src="images/ph02.jpg" id="ph02-img">';
    element += '<figcaption class="figure-caption text-center caption" id="ck04-cap">15% OFF-$22</figcaption>';
    element += '</figure>';
    element += '</a>';
    element += '</div>';
    element += '<div class="col-sm-4">';
    element += '<a class="hvr-grow" >';
    element += '<figure class="figure">';
    element += '<img class="product figure-img img-fluid img-responsive rounded" src="images/ph03.jpg" id="ph03-img">';
    element += '<figcaption class="figure-caption text-center caption" id="ck02-cap">15% OFF-$40</figcaption>';
    element += '</figure>';
    element += '</a>';
    element += '</div>';
    element += '</div>';
    element += '<div class="form-group height25" >';
    element += '<div class="alert alert-success hiddenDiv" id="messageResult">';
    element += '<strong id="messageResultTitle">Info!... </strong>';
    element += '<span id="messageResultMessage">This alert box could indicate a neutral informative change or action.</span>';
    element += '</div>';
    element += '</div>';
    element += '</div>';
    showModal('secondModal', 'PIZZA HUT OFFERS', element);
    $('#ph01-img').on('click', (event) => {
        confirmPurchase( () => {
            phPurchases++;
            showMessage('messageResult', 'PURCHASED...', 'ARTICLE PURCHASED PLEASE GO TO APPLE TO RETIRE IT');
        });   
    });
    $('#ph02-img').on('click', (event) => {
        confirmPurchase( () => {
            phPurchases++;
            showMessage('messageResult', 'PURCHASED...', 'ARTICLE PURCHASED PLEASE GO TO APPLE TO RETIRE IT');
        });   
    });
    $('#ph03-img').on('click', (event) => {
        confirmPurchase( () => {
            phPurchases++;
            showMessage('messageResult', 'PURCHASED...', 'ARTICLE PURCHASED PLEASE GO TO APPLE TO RETIRE IT');
        });   
    });
}


function welcomeCalvinKlein() {
    let element = '';
    element += '<div class="row welcome">'
        element += '<h3>Here, you only need to take the products that you want and leave</h3><br>';
        element += '<p>This is because our products are all tagged with RFIDs and let us keep track of where our products are ';
        element += 'by putting enough RFID sensors, it also let us know who took the product so we can charge it to that person</p> '
    element += '</div>'
    if(ckPurchases > 0) {
        element += '<hr>'
        element += '<div class="row bg-warning welcome">'
        let item = (ckPurchases == 1) ? 'item' : ckPurchases + ' items';
        let isAre = (ckPurchases == 1) ? 'is' : 'are';
            element += '<h3>The '+ item +  ' that you bought at the entrance '+ isAre +  ' ready for you to take away</h3>'
        element += '</div><br>'
    }
    element += '<div class="row text-center">';
        element += '<div class="btn-group">';
            element += '<button type="button" class="btn btn-success" id="ok"> OK </button>';
        element += '</div>';
    element += '</div>';
    ckPurchases = 0;
    showModal('firstModal', 'HELLO '+name+', WELCOME TO CALVIN KLEIN!', element);
    $('#ok').click( () => hideModal('firstModal') );
}
function addProductOnCK() {
    ckPurchases++;
}
function dressRoomCK() {
    let element = '';

    element += '<div id="myCarousel" class="carousel slide" data-ride="carousel">';
    element += '    <ol class="carousel-indicators">';
    element += '        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>';
    element += '        <li data-target="#myCarousel" data-slide-to="1"></li>';
    element += '        <li data-target="#myCarousel" data-slide-to="2"></li>';
    element += '        <li data-target="#myCarousel" data-slide-to="3"></li>';
    element += '    </ol>';
    element += '    <div class="carousel-inner">';
    element += '        <div class="item active">';
    element += '            <img src="images/model1.jpg" alt="Los Angeles">';
    element += '        </div>';
    element += '        <div class="item">';
    element += '            <img src="images/model2.jpg" alt="Chicago">';
    element += '        </div>';
    element += '        <div class="item">';
    element += '            <img src="images/model3.jpg" alt="New York">';
    element += '        </div>';
    element += '        <div class="item">';
    element += '            <img src="images/model4.jpg" alt="Boston">';
    element += '        </div>';
    element += '    </div>';
    element += '    <a class="left carousel-control" href="#myCarousel" data-slide="prev">';
    element += '        <span class="glyphicon glyphicon-chevron-left"></span>';
    element += '        <span class="sr-only">Previous</span>';
    element += '    </a>';
    element += '    <a class="right carousel-control" href="#myCarousel" data-slide="next">';
    element += '        <span class="glyphicon glyphicon-chevron-right"></span>';
    element += '        <span class="sr-only">Next</span>';
    element += '    </a>';
    element += '</div>';
    showModal('firstModal', 'Try It With Our new technology', element);
}
function intelligentMirror() {
    let element = '';
    element += '<div class="row welcome">'
    element += '    <h3>This new Technology let us measure the person that is standing in front of the mirror and let us decide '
    element += '        which clothes fit him/her better and what choices he/she has in order to buy our products, this technology '
    element += '        combines IoT \& Machine Learning</h3>'
    element += '</div>'
    element += '<div class="row text-center">';
        element += '<div class="btn-group">';
            element += '<button type="button" class="btn btn-success" id="ok"> OK </button>';
        element += '</div>';
    element += '</div>';
    wmPurchases = 0;
    showModal('secondModal', 'About the Intelligent Mirror', element);
    $('#ok').click( () => hideModal('secondModal') );
}

function productsBoughtCK() {
    let element = '';
    if(ckPurchases > 0) {
        element += '<div class="row bg-warning welcome">'
        let item = (ckPurchases == 1) ? 'item' : ckPurchases + ' items';
            element += '<h3>You bought '+ item +  ' </h3>'
        element += '</div><br>'
    } 
    element += '<div class="row welcome">'
        element += '<h3>Thank you for your visit</h3>';
    element += '</div>';
    element += '<div class="row text-center">';
        element += '<div class="btn-group">';
            element += '<button type="button" class="btn btn-success" id="ok2"> OK </button>';
        element += '</div>';
    element += '</div>';
    ckPurchases = 0;
    showModal('myModal', 'Good bye '+name, element);
    $('#ok2').click( () => hideModal('myModal') );
}
function welcomeWalmart() {
    let element = '';
    element += '<div class="row welcome">'
        element += '<h3>Here, you only need to take the products that you want and leave</h3><br>';
        element += '<p>This is because our products are all tagged with RFIDs and let us keep track of where our products are ';
        element += 'by putting enough RFID sensors, it also let us know who took the product so we can charge it to that person</p> '
    element += '</div>'
    if(wmPurchases > 0) {
        element += '<hr>'
        element += '<div class="row bg-warning welcome">'
        let item = (wmPurchases == 1) ? 'item' : wmPurchases + ' items';
        let isAre = (wmPurchases == 1) ? 'is' : 'are';
            element += '<h3>The '+ item +  ' that you bought at the entrance '+ isAre +  ' ready for you to take away</h3>'
        element += '</div><br>'
    }
    element += '<div class="row text-center">';
        element += '<div class="btn-group">';
            element += '<button type="button" class="btn btn-success" id="ok"> OK </button>';
        element += '</div>';
    element += '</div>';
    wmPurchases = 0;
    showModal('firstModal', 'HELLO '+name+', WELCOME TO WALMART!', element);
    $('#ok').click( () => hideModal('firstModal') );
}
function addProductOnWalmart() {
    wmPurchases++;
    if(wmPurchases > 2) {
        if(!isBroke) {
            let element = '';
            element += '<div class="row welcome">';
                element += '<h3>The sensor in our refrigerators have detected that the temperature of one of them is incorrect, ';
                element += 'so it is notifying the technicians of WALMART to check it out.</h3>';
            element += '</div>';
            element += '<div class="row text-center">';
                element += '<div class="btn-group">';
                    element += '<button type="button" class="btn btn-success" id="ok"> OK </button>';
                element += '</div>';
            element += '</div>';
            showModal('firstModal', 'WARNING!...', element);
            $('#ok').click( () => hideModal('firstModal') );
            isBroke = true;
            return isBroke;
        }
    }
    return isBroke;
}
function productsBoughtWM() {
    let element = '';
    if(wmPurchases > 0) {
        element += '<div class="row bg-warning welcome">'
        let item = (wmPurchases == 1) ? 'item' : wmPurchases + ' items';
            element += '<h3>You bought '+ item +  ' </h3>'
        element += '</div><br>'
    } 
    element += '<div class="row welcome">'
        element += '<h3>Thank you for your visit</h3>';
    element += '</div>';
    element += '<div class="row text-center">';
        element += '<div class="btn-group">';
            element += '<button type="button" class="btn btn-success" id="ok2"> OK </button>';
        element += '</div>';
    element += '</div>';
    wmPurchases = 0;
    showModal('myModal', 'Good bye '+name, element);
    $('#ok2').click( () => hideModal('myModal') );
}
function welcomePizzaHut() {
    let element = '';
    element += '<div class="row welcome">'
        element += '<h3>Here, you only need to seat down and the menu will appear personalized for you</h3><br>';
        element += '<p>This is because we keep track of our costumer preferences, so we can have a better service</p>';
    element += '</div>'
    if(wmPurchases > 0) {
        element += '<hr>'
        element += '<div class="row bg-warning welcome">'
        let item = (wmPurchases == 1) ? 'item' : wmPurchases + ' items';
        let isAre = (wmPurchases == 1) ? 'is' : 'are';
            element += '<h3>The '+ item +  ' that you bought at the entrance '+ isAre +  ' already served in a table</h3>'
        element += '</div><br>';
        isSeated = true;
    }
    element += '<div class="row text-center">';
        element += '<div class="btn-group">';
            element += '<button type="button" class="btn btn-success" id="ok"> OK </button>';
        element += '</div>';
    element += '</div>';
    wmPurchases = 0;
    showModal('firstModal', 'HELLO '+name+', WELCOME TO PIZZA HUT!', element);
    $('#ok').click( () => hideModal('firstModal') );
}
function justSeatedPH() {
    let element = '';
    element += '<div class="row welcome">';
        element += '<h3>We detected that you have just sat down on one of our tables, and we are sending you the menu via bluetooth </h3>';
    element += '</div>';
    showModal('myModal', 'HERE IS OUR MENU, ' + name, element);
}
function productsBoughtPH() {
    let element = '';
    element += '<div class="row welcome">'
        element += '<h3>Thank you for your visit</h3>';
    element += '</div>';
    element += '<div class="row text-center">';
        element += '<div class="btn-group">';
            element += '<button type="button" class="btn btn-success" id="ok2"> OK </button>';
        element += '</div>';
    element += '</div>';
    phPurchases = 0;
    showModal('myModal', 'Good bye '+name, element);
    $('#ok2').click( () => hideModal('myModal') );
}
function lostKid() {
    let element = '';
    element += '<div class="row welcome">';
    element += '    <h3>Perhaps you have lost you kid! But do not worry, because of the bracelet we gave him/her in the entrance,';
    element += '        you are able to track him/her down with our celular application</h3>';
    element += '</div>';
    element += '<div class="row text-center">';
        element += '<div class="btn-group">';
            element += '<button type="button" class="btn btn-success" id="ok2"> OK </button>';
        element += '</div>';
    element += '</div>';
    phPurchases = 0;
    showModal('firstModal', 'Warning '+name, element);
    $('#ok2').click( () => hideModal('firstModal') );
}
function careKid() {
    let element = '';
    element += '<div class="row welcome">';
    element += '    <h3>Your kid is in a radio of 2 meters, take care of him!</h3>';
    element += '</div>';
    element += '<div class="row text-center">';
        element += '<div class="btn-group">';
            element += '<button type="button" class="btn btn-success" id="ok2"> OK </button>';
        element += '</div>';
    element += '</div>';
    phPurchases = 0;
    showModal('firstModal', 'Good news '+name, element);
    $('#ok2').click( () => hideModal('firstModal') );
}
function welcomeWarehouse() {
    let element = '';
    element += '<div class="row welcome">';
    element += '    <h3>By using RFID on our products, we are also able to track what products are being dispatched and how many are dispatched.';
    element += '    Meaning that there is no need to count manually how many products are in inventory.</h3>';
    element += '</div>';
    element += '<div class="row text-center">';
        element += '<div class="btn-group">';
            element += '<button type="button" class="btn btn-success" id="ok2"> OK </button>';
        element += '</div>';
    element += '</div>';
    phPurchases = 0;
    showModal('firstModal', 'Good news '+name, element);
    $('#ok2').click( () => hideModal('firstModal') );
}