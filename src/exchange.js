export function money(currency, country, unit) {
  if (currency === "CNY"){
    country = "China";
    unit = "Renminbis";
  } else if  (currency === "JPY") {
    country = "Japan";
    unit = "Yen";
  } else if (currency === "RUB") {
    country = "Russia";
    unit = "Rubles";
  } else if (currency === "MXN") {
    country = "Mexico";
    unit = "Pesos";
  } else if (currency === "TRY") {
    country = "Turkey";
    unit = "Lira";
  } else { (currency === "GGG");
    country = "not a real country";
    unit = "Gill";
  }
  return unit, country;
}

export class ExchangeRate {
  async getMoneybyCurrency(amount, currency){
    try {
      let response = await fetch( `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      let jsonifiedResponse;
      if (response.ok && response.status === 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }
}