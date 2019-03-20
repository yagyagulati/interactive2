let clockEl = document.querySelector('#clock')
let secondHand = document.querySelector('#secondHand')


function getTimesForPlace(city){


  if(city === 'sf'){



      var date = new Date();
      var coordinates = new adhan.Coordinates(37.773972, -122.431297);
      var params = adhan.CalculationMethod.NorthAmerica();
      params.madhab = adhan.Madhab.Hanafi;
      var prayerTimes = new adhan.PrayerTimes(coordinates, date, params);
      var formattedTime = adhan.Date.formattedTime;
      console.log(prayerTimes)

      let utcSfOffset = -7

      let prayerNum = prayerTimes.nextPrayer()

      if(prayerNum === 1 ){
        let Maghrib = formattedTime(prayerTimes.maghrib, utcSfOffset)
        console.log(Maghrib)
        clockEl.innerText = 'Maghrib '+Maghrib
      } else if(prayerNum === 1 ){
        document.write('Fajr: ' + formattedTime(prayerTimes.fajr, utcSfOffset));
        document.write('Dhuhr: ' + formattedTime(prayerTimes.dhuhr, utcSfOffset));
        document.write('Asr: ' + formattedTime(prayerTimes.asr, utcSfOffset));
        document.write('Isha: ' + formattedTime(prayerTimes.isha, utcSfOffset));
}

        if(prayerNum === 2 ){
        let Fajr = formattedTime(prayerTimes.fajr, utcSfOffset);
        console.log(Fajr)
        clockEl.innerText = 'Fajr '+Fajr
      } else if(prayerNum === 2 ){
        document.write('Maghrib: ' + formattedTime(prayerTimes.Maghrib, utcSfOffset));
        document.write('Dhuhr: ' + formattedTime(prayerTimes.dhuhr, utcSfOffset));
        document.write('Asr: ' + formattedTime(prayerTimes.asr, utcSfOffset));
        document.write('Isha: ' + formattedTime(prayerTimes.isha, utcSfOffset));
      }


        if(prayerNum === 3 ){
        let Dhuhr = formattedTime(prayerTimes.Dhuhr, utcSfOffset)
        console.log(Dhuhr)
        clockEl.innerText = 'Dhuhr '+Dhuhr
      } else if(prayerNum === 3 ){
        document.write('Maghrib: ' + formattedTime(prayerTimes.Maghrib, utcSfOffset));
        document.write('Fajr: ' + formattedTime(prayerTimes.fajr, utcSfOffset));
        document.write('Asr: ' + formattedTime(prayerTimes.asr, utcSfOffset));
        document.write('Isha: ' + formattedTime(prayerTimes.isha, utcSfOffset));
      }



        if(prayerNum === 4 ){
        let Asr = formattedTime(prayerTimes.Asr, utcSfOffset)
        console.log(Asr)
        clockEl.innerText = 'Asr '+Asr
      } else if(prayerNum === 4 ){
        document.write('Maghrib: ' + formattedTime(prayerTimes.Maghrib, utcSfOffset));
        document.write('Fajr: ' + formattedTime(prayerTimes.fajr, utcSfOffset));
        document.write('Dhuhr: ' + formattedTime(prayerTimes.dhuhr, utcSfOffset));
        document.write('Isha: ' + formattedTime(prayerTimes.isha, utcSfOffset));
      }

        if(prayerNum === 5 ){
        let Isha = formattedTime(prayerTimes.Isha, utcSfOffset)
        console.log(Isha)
        clockEl.innerText = 'Isha '+Isha
      } else if(prayerNum === 5 ){
        document.write('Maghrib: ' + formattedTime(prayerTimes.Maghrib, utcSfOffset));
        document.write('Fajr: ' + formattedTime(prayerTimes.fajr, utcSfOffset));
        document.write('Dhuhr: ' + formattedTime(prayerTimes.dhuhr, utcSfOffset));
        document.write('Asr: ' + formattedTime(prayerTimes.asr, utcSfOffset));
      }

        

  }

}

