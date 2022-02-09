const makeResultCard = (newConfirmedCase, newDeathCase, totalConfirmed, totalDeath) => {
    return `<div data-aos="fade-up" data-aos-duration="500" class="card m-sm-2 rounded-3 p-3 bg-primary d-flex flex-column align-items-center">
    <h6 class="text-white" style="font-size: 24px;">Kasus Terkonfirmasi</h6>
    <p class="result-number mt-3" style="color: #05FF87;">+${newConfirmedCase}</p>
    <p class="result-total text-white">total : ${totalConfirmed}</p>
</div>
<div data-aos="fade-up" data-aos-duration="500" class="card m-sm-2 rounded-3 p-3 bg-primary d-flex flex-column align-items-center">
    <h6 class="text-white" style="font-size: 24px;">Kasus Meninggal</h6>
    <p class="result-number mt-3" style="color: #D63908;">+${newDeathCase}</p>
    <p class="result-total text-white">total : ${totalDeath}</p>
</div>`
}

module.exports = makeResultCard;