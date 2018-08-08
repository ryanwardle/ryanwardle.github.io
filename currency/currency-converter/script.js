
//SETTING UP CLICK EVENT
const BUTTON = document.getElementById('convert-button');

BUTTON.addEventListener('click', function(){

  //ASYNC/AWAIT TO GET JSON

  async function getData() {

    const response = await fetch('http://data.fixer.io/api/latest?access_key=6dbe6e42afe0aed845647ba509edc054&symbols=AUD,CAD,CNY,GBP,JPY,USD&format=1');

    const data = await response.json();

    let amount = document.getElementById('amount-converted').value;



    //CHECKING IF INPUT IS A NUMBER
    if (isNaN(amount) || amount === '') {
      alert("You must input a number");
    }else if (!isNaN(amount)) {

      //GETTING DATE AND FORMATTING, INSERTING INTO DOM
      const MONTH_ARRAY = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      let timestamp = new Date(data.timestamp * 1000);
      let hours = timestamp.getHours();
      let minutes = timestamp.getMinutes();
      let date = timestamp.getDate();
      let month = MONTH_ARRAY[timestamp.getMonth()];

      if (minutes < 10) {
        minutes = `0${minutes}`;
      }

      if (hours === 12) {
        document.getElementById('timestamp').innerText = `Conversion Information is Accurate as of ${month} ${date} at ${hours}:${minutes}PM`;
      }else if (hours > 12) {
        hours = hours - 12;
        document.getElementById('timestamp').innerText = `Conversion Information is Accurate as of ${month} ${date} at ${hours}:${minutes}PM`;
      }else {
        document.getElementById('timestamp').innerText = `Conversion Information is Accurate as of ${month} ${date} at ${hours}:${minutes}AM`;
      }


      //GETTING VALUES AND CREATING ARRAYS
      let currency = document.getElementById('base-currency').value;
      let rates = Object.values(data.rates);
      let currencyType = Object.keys(data.rates);

      if (currency === 'Euro (EUR)') {
        for (let i = 0; i <= 5; i++) {
          document.getElementById(`currency${i}`).style.display = 'block';
          document.getElementById(`currency${i}`).classList.add('fadeIn');
          document.getElementById(`currency${i}`).classList.remove('fadeOut');
          document.getElementById('timestamp').classList.add('fadeIn');
          document.getElementById('timestamp').classList.remove('fadeOut');

          let amountCurrencyEuro = Math.round(rates[i] * amount * 100) / 100;

          document.getElementById(`display-amount${i}`).innerText = '$' + amountCurrencyEuro.toFixed(2);
          document.getElementById(`display-currency-type${i}`).innerText = currencyType[i];

        }
      }else if (currency !== 'Euro (EUR)') {

        //CREATING NEW currencyType ARRAY, WITH BASE CURRENCY REMOVED AND EURO INSERTED
        let firstIndex = currency.indexOf('(');
        let abbreviation = currency.slice(firstIndex + 1, firstIndex + 4);

        //SHOULD BE ABLE TO USE THIS INDEX TO RREPLACE RATE IN ARRAY ALSO***********
        let arrayIndex = currencyType.indexOf(abbreviation);
        currencyType.splice(arrayIndex, 1, 'EUR');

        currencyType.sort();

        //CREATING NEW rates ARRAY
        let newBaseAmount = rates[arrayIndex];
        let newRates = [];
        rates.splice(arrayIndex, 1, 1);

        //DOING MATH AND PUSHING TO NEW ARRAY
        rates.forEach(cur => newRates.push(cur / newBaseAmount));

        //SORTING RATES TO MATCH ORDER OF currencyType ARRAY

        let sortedIndex = currencyType.indexOf('EUR');

        let euroRate = newRates[arrayIndex];
        newRates.splice(arrayIndex, 1);

        newRates.splice(sortedIndex, 0, euroRate);

        for (let i = 0; i <= 5; i++) {
          document.getElementById(`currency${i}`).style.display = 'block';
          document.getElementById(`currency${i}`).classList.add('fadeIn');
          document.getElementById(`currency${i}`).classList.remove('fadeOut');
          document.getElementById('timestamp').classList.add('fadeIn');
          document.getElementById('timestamp').classList.remove('fadeOut');

          let amountCurrency = Math.round(newRates[i] * amount * 100) / 100;

          document.getElementById(`display-amount${i}`).innerText = '$' + amountCurrency.toFixed(2);
          document.getElementById(`display-currency-type${i}`).innerText = currencyType[i];
        }
      }
    }
}

  getData();

});


//ADDING ENTER KEYPRESS EVENT
 const INPUT = document.getElementById('amount-converted');

INPUT.addEventListener('keypress', function(event){
  if (event.keyCode === 13) {
    event.preventDefault();
    BUTTON.click();
  }
});



//RESET BUTTON

let buttonReset = document.getElementById('reset-button');

buttonReset.addEventListener('click', function(){

  for (let i = 0; i <= 5; i++) {
    //document.getElementById('currency' + [i]).style.display = 'none';
    document.getElementById('currency' + [i]).classList.remove('fadeIn');
    document.getElementById('currency' + [i]).classList.add('fadeOut');
    document.getElementById('timestamp').classList.remove('fadeIn');
    document.getElementById('timestamp').classList.add('fadeOut');
    document.getElementById('amount-converted').value = '';
  }


});
