function showModalFingerPrint() {
  let element = '';
  element += '<div id="modal" class="modal">';
  element += '<div class="modal-content">';
  element += ' <div class="modal-body">';
  element += '<div style="display: block">';
  element += ' <div style="display: inline-block; vertical-align:top; margin-right: 70px">';
  element += '<br><br><h2> Fingerprint: </h2>';
  element += '<div><img id="fingerprint" class="img-responsive" src="images/fingerprint1.jpg" raggable="true" ondragstart="drag(event)" width="180" height="150" style="float:left"></div>';
  element += '</div>';
  element += '<div style="display: inline-block; vertical-align:top; margin-left: 65px">';
  element += ' <br><br><br><br><br>';
  element += '<center>';
  element += '<h3>Fingerprint:<img id="Ifingerprint"  class="img-responsive" src="images/fingerprint1.jpg" width="60" height="60"></h3>';
  element += '<h4>Please, pass your finger over the fingerprint reader...</h4>';
  element += '<div id="divCheck" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';
  element += '  <button id="btnSucc" class="btn btn-default" type="button" style="display:none;"> OK </button>';
  element += ' </center>';
  element += '</div>';
  element += '</div>';
  element += '</div>';
  element += '</div>';
  element += '  </div>';
  showModal('firstModal', 'FINGERPRINT PROCESS!', element);
   $('#btnSucc').on('click', (event) => {
    /* se llama al modal de ofertas*/
  });
}

function showModalOffers() {
  let element = '';
  element += '<div class="container-fluid">';
  element += '<div class="row">';
  element += '<h2 class="text-center">WE CHECK YOUR PROFILE AND THESE OFFERS MAY INTEREST YOU, COME ON AN CHECK IT!</h2>';
  element += '</div>';
  element += '<br>';
  element += '<div class="row">';
  element += '<div class="col-sm-3">';
  element += '<a class="hvr-grow">';
  element += '<img class="logo img-responsive " src="images/calvin-klein.svg" alt="" onClick=" showOfferCalvinKlein();">';
  element += '</a>';
  element += '</div>';
  element += '<div class="col-sm-3">';
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
  showModal('firstModal', 'WELCOME MAJID!', element);
}
function showModalCalvinKlein() {
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
  element += '<strong id="messageResultTitle">Info!... </strong>';
  element += '<span id="messageResultMessage">This alert box could indicate a neutral informative change or action.</span>';
  element += '</div>';
  element += '</div>';
  element += '</div>';
  showModal('secondModal', 'CALVIN KLEIN OFFERS', element);
  $('#ck01-img').on('click', (event) => {
    showMessage('messageResult', 'BUYING...', 'ARTICLE PURCHASED PLEASE GO TO CALVIN KLEIN TO RETIRE IT');
  });
  $('#ck02-img').on('click', (event) => {
    showMessage('messageResult', 'BUYING...', 'ARTICLE PURCHASED PLEASE GO TO CALVIN KLEIN TO RETIRE IT');
  });
  $('#ck04-img').on('click', (event) => {
    showMessage('messageResult', 'BUYING...', 'ARTICLE PURCHASED PLEASE GO TO CALVIN KLEIN TO RETIRE IT');
  });

}
function showOfferSupermarket() {
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
    showMessage('messageResult', 'BUYING...', 'ARTICLE PURCHASED PLEASE GO TO WALMART TO RETIRE IT');
  });
  $('#w02-img').on('click', (event) => {
    showMessage('messageResult', 'BUYING...', 'ARTICLE PURCHASED PLEASE GO TO WALMART TO RETIRE IT');
  });
  $('#w03-img').on('click', (event) => {
    showMessage('messageResult', 'BUYING...', 'ARTICLE PURCHASED PLEASE GO TO WALMART TO RETIRE IT');
  });
}
function showOfferApple() {
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
    showMessage('messageResult', 'BUYING...', 'ARTICLE PURCHASED PLEASE GO TO APPLE TO RETIRE IT');
  });
  $('#a02-img').on('click', (event) => {
    showMessage('messageResult', 'BUYING...', 'ARTICLE PURCHASED PLEASE GO TO APPLE TO RETIRE IT');
  });
  $('#a03-img').on('click', (event) => {
    showMessage('messageResult', 'BUYING...', 'ARTICLE PURCHASED PLEASE GO TO APPLE TO RETIRE IT');
  });
}
function showOfferPizzaHut() {
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
    showMessage('messageResult', 'BUYING...', 'ARTICLE PURCHASED PLEASE GO TO PIZZA HUT TO RETIRE IT');
  });
  $('#ph02-img').on('click', (event) => {
    showMessage('messageResult', 'BUYING...', 'ARTICLE PURCHASED PLEASE GO TO PIZZA HUT TO RETIRE IT');
  });
  $('#ph03-img').on('click', (event) => {
    showMessage('messageResult', 'BUYING...', 'ARTICLE PURCHASED PLEASE GO TO PIZZA HUT TO RETIRE IT');
  });
}