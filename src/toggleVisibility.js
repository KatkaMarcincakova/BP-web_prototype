function ToggleVisibility(elementToHide, elementToShow) {
    if ($(elementToShow).hasClass('hidden')) {
        $(elementToShow).removeClass('hidden');
    }

    $(elementToHide).addClass('hidden');
}