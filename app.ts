document.addEventListener("DOMContentLoaded", () => {
    const toggleButtons = document.querySelectorAll(".toggle-btn");

    toggleButtons.forEach(button => {
        button.addEventListener("click", () => {
            const sectionId = button.getAttribute("data-section");
            const section = document.getElementById(sectionId!);
            
            if (section) {
                const isVisible = section.querySelector('ul')!.style.display !== "none";

                // Toggle visibility
                section.querySelector('ul')!.style.display = isVisible ? "none" : "block";
                // Update button text
                button.innerHTML = isVisible ? `Show ${sectionId!.replace('-', ' ').toLowerCase()}` : `Hide ${sectionId!.replace('-', ' ').toLowerCase()}`;
            }
        });
    });
});
