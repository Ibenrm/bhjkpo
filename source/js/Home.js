AOS.init();

function percentPl(number){
  var percentToGet = 87;
  var percentAsDecimal = (percentToGet / 100);
  var percent = percentAsDecimal * number;
  return percent;
}

let http = new XMLHttpRequest;
http.open('get', 'source/database/JSON/Total.json');
http.send();
http.onload = function() {
  if(this.readyState == 4 && this.status == 200){
    let total = JSON.parse(this.responseText);
    const labels = [
      'PASLON-1',
      'PASLON-2',
      'PASLON-3',
    ];
    const data = {
    labels: labels,
    datasets: [{
      axis: 'y',
      label: 'VOTE',
      data: [total.paslon1, total.paslon2, total.paslon3],
      fill: false,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
      ],
      borderWidth: 1
    }]
    };
    const config = {
      type: 'bar',
      data: data,
      options: {
        indexAxis: 'y',
        maintainAspectRatio: false,
      }
    };
    const dataPie = {
      labels: labels,
      datasets: [{
        label: 'VOTE',
        data: [total.paslon1, total.paslon2, total.paslon3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 210, 90, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
        ],
        borderWidth: 1
      }]
    };
    const configPie = {
        type: 'pie',
        data: dataPie,
        options: {
          maintainAspectRatio: false,
        }
    };
    var myChart = new Chart(document.getElementById('myCharts'), config);
    var pieChart = new Chart(document.getElementById('pieCharts'), configPie);
    
    document.getElementById('psln1').innerHTML = percentPl(total.paslon1) + ' %';
    document.getElementById('psln2').innerHTML = percentPl(total.paslon2) + ' %';
    document.getElementById('psln3').innerHTML = percentPl(total.paslon3) + ' %';
  }
}

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 'auto',
  spaceBetween: 30,
  slidesPerGroup: 1,
  centeredSlides: true,
  loop: true,
  paginationClickable: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});
