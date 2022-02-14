function setFooter() {
    document.getElementById("footer").innerHTML =
        `<footer class="bg-dark text-center text-white">
            <div class="container p-4 pb-0">
                <section class="mb-4">
                    <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/yaroslavskyba" role="button">
                        <em class="fab fa-linkedin-in"></em>
                    </a>
        
                    <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/yaroslavskybadev" role="button">
                        <em class="fab fa-github"></em>
                    </a>
        
                    <a class="btn btn-outline-light btn-floating m-1" href="https://gitlab.com/yaroslavskyba" role="button">
                        <em class="fab fa-gitlab"></em>
                    </a>
                </section>
            </div>
            
            <div class="text-center p-3" style="background-color: #00000033">
                © 2022 Copyright:
                <a class="text-white" href="https://thispersondoesnotexist.com/">Rozetka</a>
            </div>
        </footer>`;
}