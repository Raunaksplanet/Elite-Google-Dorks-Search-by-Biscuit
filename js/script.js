function toggleDropdown(button) {
    var dropdown = button.nextElementSibling;
    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
    } else {
        dropdown.classList.add('show');
    }
}
