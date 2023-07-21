// Wait DOM
document.addEventListener("DOMContentLoaded", function() {
  /*
    Toggle Class
    Usage:
    1. Add className="js-toggle-class"
    2. Add data-target="some-id-without-hash-#"
  */
  const togglers = document.querySelectorAll('.js-toggle-class');
  // If togglers exist on page
  if(Boolean(togglers)) {
    for (const toggler of togglers) {
      toggler.addEventListener('click', function() {
        const element = this;
        element.classList.toggle('active'); // Toggle class for element
        const id = element.getAttribute('data-target'); // Get id from this element attribute
        const target = document.getElementById(id); // Get target
        target.classList.toggle('active'); // Toggle class for target
      });
    };
  };

  // Mobile functions
  if(window.screen.width <= 767) {
    // Hide Page Nav
    const pageNav = document.getElementById('page-nav');
    // If exist on this page - hide
    Boolean(pageNav) && pageNav.classList.remove('active');
  };

  // Date Picker
  // https://flatpickr.js.org/options/
  (function() {
    // Common options for all Date Time Pickers
    const optionsCommon = {
      static: true, // !! Important !! Without this option datepicker stays on the same place during scroll. Position the calendar inside the wrapper and next to the input element
      disableMobile: true, // In mobile show Flatpickr, not native iOS/Android
      shorthandCurrentMonth: true, // Show the month using the shorthand version (ie, Sep instead of September).
    };

    // Date Picker
    flatpickr('.js-date-picker', Object.assign({ // Concat options
      dateFormat: 'M-d-Y', // https://flatpickr.js.org/formatting/#date-formatting-tokens
      locale: { firstDayOfWeek: 1 }, // First day Monday
    }, optionsCommon));

    // Time Picker
    flatpickr('.js-time-picker', Object.assign({ // Concat options
      dateFormat: 'h:i K', // https://flatpickr.js.org/formatting/#time-formatting-tokens
      noCalendar: true,
      enableTime: true,
    }, optionsCommon));

    // Date Time Picker
    flatpickr('.js-date-time-picker', Object.assign({ // Concat options
      dateFormat: 'M-d-Y h:i K', // https://flatpickr.js.org/formatting/#time-formatting-tokens
      enableTime: true,
    }, optionsCommon));
  })();
});
