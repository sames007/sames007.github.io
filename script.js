const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
const projectRows = Array.from(document.querySelectorAll("[data-tags]"));
const projectSearch = document.querySelector("#project-search");
const projectCount = document.querySelector(".project-count");
const emptyState = document.querySelector(".empty-state");

let activeFilter = "all";

function normalize(value) {
    return String(value || "").trim().toLowerCase();
}

function tokenize(value) {
    return normalize(value).match(/[a-z0-9#+.]+/g) || [];
}

function updateProjects() {
    const query = normalize(projectSearch?.value);
    let visibleCount = 0;

    projectRows.forEach((row) => {
        const tagList = normalize(row.dataset.tags).split(/\s+/).filter(Boolean);
        const textTokens = tokenize(row.textContent);
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
        activeFilter = normalize(button.dataset.filter) || "all";

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
