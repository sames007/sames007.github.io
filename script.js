const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
const projectRows = Array.from(document.querySelectorAll("[data-tags]"));
const projectSearch = document.querySelector("#project-search");
const projectCount = document.querySelector(".project-count");
const emptyState = document.querySelector(".empty-state");

let activeFilter = "all";

function updateProjects() {
    const query = (projectSearch?.value || "").trim().toLowerCase();
    let visibleCount = 0;

    projectRows.forEach((row) => {
        const tagList = row.dataset.tags.toLowerCase().split(/\s+/);
        const text = row.textContent.toLowerCase();
        const textTokens = text.match(/[a-z0-9#+.]+/g) || [];
        const matchesFilter = activeFilter === "all" || tagList.includes(activeFilter);
        const matchesSearch = !query || tagList.includes(query) || textTokens.includes(query);
        const isVisible = matchesFilter && matchesSearch;

        row.hidden = !isVisible;
        if (isVisible) {
            visibleCount += 1;
        }
    });

    if (projectCount) {
        projectCount.textContent = `${visibleCount} shown`;
    }

    if (emptyState) {
        emptyState.hidden = visibleCount !== 0;
    }
}

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        activeFilter = button.dataset.filter;

        filterButtons.forEach((item) => {
            const isActive = item === button;
            item.classList.toggle("is-active", isActive);
            item.setAttribute("aria-pressed", String(isActive));
        });

        updateProjects();
    });
});

projectSearch?.addEventListener("input", updateProjects);
updateProjects();
