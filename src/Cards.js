class Cards extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `<div class="cards d-flex flex-wrap justify-content-center mt-4 px-4">
        <div class="card m-sm-1 p-4 border-0 d-flex flex-column align-items-center justify-content-center"
            style="width: 380px; border-radius: 20px;">
            <img src="./assets/jaga-jarak.png" height="145" alt="jaga jarak">
            <div class="card-body">
                <h6 class="text-white fw-bold text-center mt-3">Jaga jarak anda</h6>
                <p class="card-text text-center text-white mt-3">Selalu jaga jarak aman dari orang lain (minimal 1 meter) meskipun mereka tidak nampak sakit</p>
            </div>
        </div>
        <div class="card m-sm-1 p-3 border-0 d-flex flex-column align-items-center justify-content-center"
            style="width: 380px; border-radius: 20px;">
            <img src="./assets/hand-sanitizer.png" height="145" alt="hand sanitizer">
            <div class="card-body">
                <h6 class="text-white fw-bold text-center mt-3">Gunakan Hand Sanitizer</h6>
                <p class="card-text text-center text-white mt-3">Setidaknya, hand sanitizer membantu mensterilkan tangan anda, namun lebih baik gunakan sabun</p>
            </div>
        </div>
        
        <div class="card m-sm-1 p-3 border-0 d-flex flex-column align-items-center justify-content-center"
            style="width: 380px; border-radius: 20px;">
            <img src="./assets/orang-batuk.png" height="145" alt="orang batuk">
            <div class="card-body">
                <h6 class="text-white fw-bold text-center mt-3">Tutup Mulut Saat Batuk</h6>
                <p class="card-text text-center text-white mt-3">Batuk bisa menjadi langkah awal bagi seseorang menularkan penyakit kepada orang lain.</p>
            </div>
        </div>
    </div>`
    }
}

customElements.define("card-details", Cards);