
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

function showMessage(idDiv, title, message, type) {
    $("#" + idDiv + "Title").html(title);
    $("#" + idDiv + "Message").html(message);
    if (type != undefined) {
        $("#" + idDiv).removeClass("alert-success");
        $("#" + idDiv).addClass("alert-" + type);
    }
    $("#" + idDiv).show();
}