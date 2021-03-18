var accordions = document.getElementsByClassName("accordion_state_U");

for (var i = 0; i < accordions.length; i++) {
    accordions[i].onclick = function () {
        this.classList.toggle('is-open');

        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            // accordion is currently open, so close it
            content.style.maxHeight = null;
        } else {
            // accordion is currently closed, so open it
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
}

// JONATHAN'S CODE STARTS
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

// accessible tabs -----------------------------------------------
$("li[role='tab']").click(function () {
    $("li[role='tab']").attr("aria-selected", "false"); //deselect all the tabs 
    $(this).attr("aria-selected", "true");  // select this tab
    var tabpanid = $(this).attr("aria-controls"); //find out what tab panel this tab controls  
    var tabpan = $("#" + tabpanid);
    $("div[role='tabpanel']").attr("aria-hidden", "true"); //hide all the panels 
    $("div[role='tabpanel']").addClass("hidden");
    tabpan.attr("aria-hidden", "false");
    tabpan.removeClass("hidden");  // show our panel
});
​
$("li[role='tab']").keydown(function (ev) {
    if (ev.which == 13) {
        $(this).click()
    }
});
​
//This adds keyboard function that pressing an arrow left or arrow right from the tabs toggle the tabs. 
// $("li[role='tab']").keydown(function (ev) {
//     if ((ev.which == 39) || (ev.which == 37)) {
//         var selected = $(this).attr("aria-selected");
//         if (selected == "true") {
//             $("li[aria-selected='false']").attr("aria-selected", "true").focus();
//             $(this).attr("aria-selected", "false");
//             var tabpanid = $("li[aria-selected='true']").attr("aria-controls");
//             var tabpan = $("#" + tabpanid);
//             $("div[role='tabpanel']").attr("aria-hidden", "true");
//             tabpan.attr("aria-hidden", "false");
//         }
//     }
// });
​
if (document.getElementById("tab1")) {
    document.getElementById("tab1").tabIndex = 0;
}
​
if (document.getElementById("tab2")) {
    document.getElementById("tab2").tabIndex = 0;
}
​
if (document.getElementById("tab3")) {
    document.getElementById("tab3").tabIndex = 0;
}
​
if (document.getElementById("tab4")) {
    document.getElementById("tab4").tabIndex = 0;
}
​
if (document.getElementById("tab5")) {
    document.getElementById("tab5").tabIndex = 0;
}
​
if (document.getElementById("tab6")) {
    document.getElementById("tab6").tabIndex = 0;
}
​
if (document.getElementById("tab7")) {
    document.getElementById("tab7").tabIndex = 0;
}
​

// JONATHAN'S CODE ENDS ------------------------------
