
//THIS IS ALL FOR THE MODAL
function showModal(idDiv, titulo, mensaje) {
    $("#" + idDiv + "Title").html(titulo);
    $("#" + idDiv + "Message").html(mensaje);
    $("#" + idDiv).modal();
}

function hideModal(idDiv) {
    $("#" + idDiv).modal("hide");
}

function changeMsgModal(idDiv, titulo, mensaje) {
    $("#" + idDiv + "Title").html(titulo);
    $("#" + idDiv + "Message").html(mensaje);
}
