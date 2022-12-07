function ToggleVisibility(elementToHide, elementToShow) {
    if ($(elementToShow).hasClass('hidden')) {
        $(elementToShow).removeClass('hidden');
    }

    $(elementToHide).addClass('hidden');
}

function MakeVisible(id) {
    if ($(id).hasClass('hidden')) {
        $(id).removeClass('hidden');
    }
}

function MakeHidden(id) {
    $(id).addClass('hidden');
}