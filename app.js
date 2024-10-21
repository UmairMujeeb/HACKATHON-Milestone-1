document.addEventListener("DOMContentLoaded", function () {
    var toggleButtons = document.querySelectorAll(".toggle-btn");
    toggleButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var sectionId = button.getAttribute("data-section");
            var section = document.getElementById(sectionId);
            if (section) {
                var isVisible = section.querySelector('ul').style.display !== "none";
                // Toggle visibility
                section.querySelector('ul').style.display = isVisible ? "none" : "block";
                // Update button text
                button.innerHTML = isVisible ? "Show ".concat(sectionId.replace('-', ' ').toLowerCase()) : "Hide ".concat(sectionId.replace('-', ' ').toLowerCase());
            }
        });
    });
});
