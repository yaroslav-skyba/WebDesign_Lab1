const jwtKey = "jwt";
const roleNameKey = "roleName";

function setNavigation(brandHref, brandImgSrc, aboutHref, loginHref, registrationHref, adminHref, userHref) {
    const main = document.getElementById("main");
    main.className = "min-vh-100";
    main.style.backgroundColor = "#201c24";

    new Promise(resolve => setTimeout(resolve, 100)).then(() => {
        setHeader(brandHref, brandImgSrc, aboutHref);
        setFooter();

        const navItem1 = document.getElementById("navItem1");
        const navItem2 = document.getElementById("navItem2");

        if (!localStorage.getItem(jwtKey)) {
            navItem1.innerHTML = "Login";
            navItem1.href = loginHref;

            navItem2.innerHTML = "Registration";
            navItem2.href = registrationHref;
        } else {
            navItem1.innerHTML = "Profile";

            const roleName = localStorage.getItem(roleNameKey);

            if (roleName === "admin") {
                navItem1.href = adminHref;
            } else if (roleName === "user") {
                navItem1.href = userHref;
            } else {
                alert("Some errors occurred");
            }

            navItem2.innerHTML = "Logout";
            navItem2.href = loginHref;
            navItem2.onclick = function () {
                localStorage.removeItem(jwtKey);
                localStorage.removeItem(roleNameKey);
            }
        }
    });
}