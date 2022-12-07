function ShowAlert(alertId, secondAlertId) {
    if ($(secondAlertId).hasClass('show')) {
        $(secondAlertId).removeClass('show');
    }
    $(alertId).removeClass("hidden");
    $(alertId).addClass("show");

    setTimeout(function() {
        $(alertId).removeClass("show");
        $(alertId).addClass("hidden");
    }, 3000);
}

function CloseAlert(alertId) {
    $(alertId).removeClass("show");
    $(alertId).addClass("hide");
}