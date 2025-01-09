function toggleAll() {
    const collapse1 = document.getElementById("multiCollapseExample1");
    const collapse2 = document.getElementById("multiCollapseExample2");

    const bsCollapse1 = bootstrap.Collapse.getInstance(collapse1) || new bootstrap.Collapse(collapse1, { toggle: false });
    const bsCollapse2 = bootstrap.Collapse.getInstance(collapse2) || new bootstrap.Collapse(collapse2, { toggle: false });

    const allShow = collapse1.classList.contains('show') && collapse2.classList.contains('show');

    if (allShow) {
        bsCollapse1.hide();
        bsCollapse2.hide();
    } else {
        if (!collapse1.classList.contains('show')) {
            bsCollapse1.show();
        }
        if (!collapse2.classList.contains('show')) {
            bsCollapse2.show();
        }
    }
}