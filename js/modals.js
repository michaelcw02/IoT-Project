function showModalFingerPrint() {
  let element = '';
  element += '<iframe src="testModals.html" height=100% width=100%>';
  element += '</iframe>';
  showModal('firstModal', 'FINGERPRINT PROCESS!', element);
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