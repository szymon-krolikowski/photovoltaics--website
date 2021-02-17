// {
//     let swiper = new Swiper('.swiper-container', {
//         slidesPerView: 1,
//         spaceBetween: 30,
//         loop: true,
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//     }); 
// }

{
    let inputRange = document.querySelector(".calculator__input");
    let spanInstallationSize = document.querySelector(".js-installationSize");
    let spanAnnualProduction = document.querySelector(".js-annualProduction");
    let spanInstallationCost = document.querySelector(".js-installationCost");
    let spanInstallationCostWithDotation = document.querySelector(".js-installationCostWithDotation");
    let spanAnnualBill = document.querySelector(".js-annualBill");
    let spanAnnualBillWithInstallation = document.querySelector(".js-annualBillWithInstallation");
    let spanYouSave = document.querySelector(".js-youSave");

    const getValueRangeInput = () => {
        inputRange.oninput = () => {
            let valueRangeInput = inputRange.value;
            let annualProduction = ((valueRangeInput / 0.61) * 12).toFixed(0);
            let installationSize = ((annualProduction / 1000) * 1.3).toFixed(2);
            let installationCost = (installationSize * 3000).toFixed(0);
            let installationCostWithDotation = installationCost - 5000;
            let annualBill = valueRangeInput * 12;
            let annualBillWithInstallation = (valueRangeInput * 0.52).toFixed(2);
            let youSave = (annualBill * 25) - installationCost - (annualBillWithInstallation * 25);

            spanInstallationSize.innerText = installationSize + " kWp";
            spanAnnualProduction.innerText = annualProduction + " kWh";
            spanInstallationCost.innerText = installationCost + " zł";
            spanInstallationCostWithDotation.innerText = installationCostWithDotation + " zł";
            spanAnnualBill.innerText = annualBill + " zł";
            spanAnnualBillWithInstallation.innerText = annualBillWithInstallation + " zł";
            spanYouSave.innerText = youSave + " zł";
        };
    };

    getValueRangeInput();
}

