class NavbarDetails extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-white fw-bold">
        <div class="container">
            <a class="navbar-brand text-primary fw-bold" href="#">
                InfoCovid
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <input type="checkbox">
                <div class="spans">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">

                <ul class="navbar-nav ms-auto">
                    <li class="nav-item" style="margin-left: 20px;">
                        <a class="nav-a text-decoration-none text-primary" aria-current="page" href="#">Covid
                            19 Info</a>
                    </li>
                    <li class="nav-item" style="margin-left: 20px;">
                        <a class="nav-a text-decoration-none text-primary" href="#">Vaccine Center</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>`
    }
}

customElements.define('navbar-details', NavbarDetails);