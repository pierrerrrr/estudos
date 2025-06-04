(() => {
  const openNav = document.querySelector(".open-menu"),
    closeNav = document.querySelector(".close-menu"),
    navMenu = document.querySelector(".nav-links-container");

  const mediaQuery = window.matchMedia("(max-width: 992px)");

  function isMobile() {
    return mediaQuery.matches;
  }

  openNav.addEventListener("click", toggleMenu);
  closeNav.addEventListener("click", toggleMenu);

  function toggleMenu() {
    navMenu.classList.toggle("open");
  }

  navMenu.addEventListener("click", (event) => {
    if (
      event.target.hasAttribute("data-toggle") &&
      isMobile()
    ) {
      event.preventDefault();
      const dropdownMenuBranch = event.target.parentElement;

      if (dropdownMenuBranch.classList.contains("active")) {
        collapseDropdownMenu(dropdownMenuBranch);
      } else {
        const activeBranch = navMenu.querySelector(".dropdown-menu-branch.active");
        if (activeBranch) {
          collapseDropdownMenu(activeBranch);
        }
        expandDropdownMenu(dropdownMenuBranch);
      }
    }
  });

  function collapseDropdownMenu(branch) {
    const dropdownMenu = branch.querySelector(".dropdown-menu");
    if (dropdownMenu) {
      dropdownMenu.removeAttribute("style");
    }
    branch.classList.remove("active");
  }

  function expandDropdownMenu(branch) {
    branch.classList.add("active");
    const dropdownMenu = branch.querySelector(".dropdown-menu");
    if (dropdownMenu) {
      dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + "px";
    }
  }
})();
