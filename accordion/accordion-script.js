// Keyboard Accessible Accordion ----------------------------------

// Buttons
var buttons = document.querySelectorAll('.construct-michigan-accessible-accordion-js-button');

var displayContent = function (button, content) {
    if (content.classList.contains('active')) {
        // Hide content
        content.classList.remove('active');
        button.setAttribute('aria-expanded', 'false');
        content.setAttribute('aria-hidden', 'true');
    } else {
        // Show content
        content.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
        content.setAttribute('aria-hidden', 'false');
    }
};

[].forEach.call(buttons, function (button, index) {
    // Content var    
    // -- this is the change here
    var contentParent = button.parentElement;
    var content = contentParent.nextElementSibling;

    // Set button attributes
    button.setAttribute('id', 'button-' + index);
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', 'content-' + index);

    // Set content attributes
    content.setAttribute('id', 'content-' + index);
    content.setAttribute('aria-hidden', 'true');
    content.setAttribute('aria-labelledby', 'button-' + index);

    button.addEventListener('click', function (event) {
        event.preventDefault();
        displayContent(this, content);
        return false;
    }, false);

    button.addEventListener('keydown', function (event) {
        // Handle 'space' key
        if (event.which === 32) {
            event.preventDefault();
            displayContent(this, content);
        }
    }, false);
});
