function calculateProlabore() {
    const inss = document.getElementById('inss');
    const irrf = document.getElementById('irrf');
    
    let prolabore = document.getElementById('pro-labore').value;
    let inssValue = prolabore * 0.11;
    let irrfBase = prolabore - inssValue;
    
    var irrfRanges = [1903.98, 2826.65, 3751.05, 4664.68];
    var irrfTaxRanges = [7.5, 15, 22.5, 27.5];
    var irrfReduction = [142.80, 354.80, 636.13, 869.36];
    
    inss.innerHTML = `Valor do INSS: ${inssValue.toFixed(2)}`;
    if(irrfBase > irrfRanges[3]){
      irrf.innerHTML = `Valor do IRRF: ${(irrfBase * irrfTaxRanges[3] / 100 - irrfReduction[3]).toFixed(2)}`;
    }else if(irrfBase > irrfRanges[2]){
      irrf.innerHTML = `Valor do IRRF: ${(irrfBase * irrfTaxRanges[2] / 100 - irrfReduction[2]).toFixed(2)}`;
    }else if(irrfBase > irrfRanges[1]){
      irrf.innerHTML = `Valor do IRRF: ${(irrfBase * irrfTaxRanges[1] / 100 - irrfReduction[1]).toFixed(2)}`;
    }else if(irrfBase > irrfRanges[0]){
      irrf.innerHTML = `Valor do IRRF: ${(irrfBase * irrfTaxRanges[0] / 100 - irrfReduction[0]).toFixed(2)}`;
    }
  }