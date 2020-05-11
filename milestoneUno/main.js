$(document).ready(function (){
    var months = [];
    for (var i = 0; i < moment.months().length; i++) {
        months.push(moment.months()[i]);
        // console.log(months);
    };
    // console.log(months);
    
    var ctx = $('#salesChart');
    $.ajax({
        url: "server.php",
        data: "data",
        success: function (data) {
            var salesChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: months,
                    datasets: [{
                        label: 'Numero Vendite',
                        data: data,
                        backgroundColor: [
                            'rgba(150, 33, 146, 1)',
                            'rgba(82, 40, 204, 1)',
                            'rgba(4, 51, 255, 1)',
                            'rgba(0, 146, 146, 1)',
                            'rgba(0, 249, 0, 1)',
                            'rgba(202, 250, 0, 1)',
                            'rgba(255, 251, 0, 1)',
                            'rgba(255, 199, 0, 1)',
                            'rgba(255, 147, 0, 1)',
                            'rgba(255, 80, 0, 1)',
                            'rgba(255, 38, 0, 1)',
                            'rgba(216, 34, 83, 1)'
                        ],
                        pointRadius: 5,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        pointBorderColor:[
                            'rgba(150, 33, 146, 1)',
                            'rgba(82, 40, 204, 1)',
                            'rgba(4, 51, 255, 1)',
                            'rgba(0, 146, 146, 1)',
                            'rgba(0, 249, 0, 1)',
                            'rgba(202, 250, 0, 1)',
                            'rgba(255, 251, 0, 1)',
                            'rgba(255, 199, 0, 1)',
                            'rgba(255, 147, 0, 1)',
                            'rgba(255, 80, 0, 1)',
                            'rgba(255, 38, 0, 1)',
                            'rgba(216, 34, 83, 1)'

                        ],
                        pointBackgroundColor: [
                            'rgba(150, 33, 146, 1)',
                            'rgba(82, 40, 204, 1)',
                            'rgba(4, 51, 255, 1)',
                            'rgba(0, 146, 146, 1)',
                            'rgba(0, 249, 0, 1)',
                            'rgba(202, 250, 0, 1)',
                            'rgba(255, 251, 0, 1)',
                            'rgba(255, 199, 0, 1)',
                            'rgba(255, 147, 0, 1)',
                            'rgba(255, 80, 0, 1)',
                            'rgba(255, 38, 0, 1)',
                            'rgba(216, 34, 83, 1)'

                        ],
                        borderColor: 'red',
                        borderWidth: 2
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
           console.log(data);
        },
        error: function (error){
            console.log(error);
        }
    });
});
