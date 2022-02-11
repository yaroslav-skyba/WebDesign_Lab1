function setHeaderFooter(brandHref, brandImgSrc, aboutHref, loginHref, registrationHref, userHref) {
    new Promise(resolve => setTimeout(resolve, 100)).then(() => {
        setHeader(brandHref, brandImgSrc, aboutHref);
        setFooter();

        const navItem1 = document.getElementById("navItem1");
        const navItem2 = document.getElementById("navItem2");

        if (localStorage.getItem("jwt") == null) {
            navItem1.innerHTML = "Login";
            navItem1.href = loginHref;

            navItem2.innerHTML = "Registration";
            navItem2.href = registrationHref;
        } else {
            navItem1.innerHTML = "Profile";

            const roleName = localStorage.getItem("roleName");

            if (roleName === "admin") {
                navItem1.href = "";
            } else if (roleName === "user") {
                navItem1.href = userHref;
            } else {
                alert("Some errors occurred");
            }

            navItem2.innerHTML = "Logout";
            navItem2.href = loginHref;
        }
    });
}