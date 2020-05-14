$(document).ready(function (){

    moment.locale('it');
    // FUNZIONI
    function getMonths(){
        return moment.months();
    }
    var months = getMonths();
    $.urlParam = function (level){
        var results = new RegExp('[\?&]' + level + '=([^&#]*)').exec(window.location.href);
        return results[1] || 0;
    };
    var resultLevel = $.urlParam('level');
    function printLineChart(fullData){
        // var fullData = fullData['guest'];
        console.log(fullData);
        var access = fullData.accessFatturato;
        console.log(access);
        var typeGraph = fullData.typeFatturato;
        var data = fullData.dataFatturato;
        $(".venditeMensili").css("display", 'block');
        var salesChart = new Chart(ctx, {
            type: typeGraph,
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
                    backgroundColor: 'rgba(255, 99, 132, 0.1)',
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

    }
    function printPieChart(fullData) {
        // var fullData = fullData.employee;
        console.log(fullData)
        var access = fullData.accessFatturatoAgenti;
        var typeGraph = fullData.typeFatturatoAgenti;
        var data = fullData.dataFatturatoAgenti;
        var nameAgents = fullData.agentiName;
        $(".fatturatoAgenti").css("display", 'block');
        var salesChart = new Chart(fatturatoAgenti, {
            type: typeGraph,
            data: {
                labels: nameAgents,
                datasets: [{
                    label: 'Numero Vendite',
                    data: data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor: 'red',
                    borderWidth: 1
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

    }
    function printMultilineChart(fullData) {
        // var fullData = fullData.clevel;
        console.log(fullData);
        var typeGraph = fullData.typeTeam;
        var dataFirst = fullData.dataTeam[0];
        var dataSecond = fullData.dataTeam[1];
        var dataThird = fullData.dataTeam[2];
        var access = fullData.accessTeam;
        var firstTeam = fullData.teamNumber[0];
        var secondTeam = fullData.teamNumber[1];
        var thirdTeam = fullData.teamNumber[2];
        // console.log(dataFirst, dataSecond, dataThird);
        $(".fatturatoTeam").css("display", 'block');
        var salesChart = new Chart(fatturatoTeam, {
            type: typeGraph,
            data: {
                labels: months,
                datasets: [{
                    label: firstTeam,

                    data: dataFirst,
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
                    pointRadius: 2,
                    backgroundColor: 'rgba(255, 99, 132, 0.1)',
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
                },
                {
                    label: secondTeam,
                    data: dataSecond,
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
                    pointRadius: 2,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
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
                    borderColor: 'blue',
                    borderWidth: 2


                },
                {
                    label: thirdTeam,
                    data: dataThird,
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
                    pointRadius: 2,
                    backgroundColor: 'rgba(255, 159, 64, 0.2)',
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
                    borderColor: 'orange',
                    borderWidth: 2

                },]

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
    }
    var ctx = $('#salesChart');
    var fatturatoAgenti = $('#salesAgents');
    var fatturatoTeam = $('#salesTeam');

    $.ajax({
        url: "server.php",
        method: "GET",
        data: {
            level : resultLevel
        },
        success: function (fullData) {
            console.log("valore di success", fullData);

            // per la struttura dati che abbiamo attualmente possiamo fare così
            // so che se c'è i lgrafico 1 è presente la chiave accessFatturato
            // so che se c'è il grafico 2 è presente la chiave accessFatturatoAgenti
            // so che se c'è il grafico 3 è presente la chiave accessTeam

            // allora verifico se la chiave è presente, e nel caso faccio vedere il relativo grafico

            if ('accessFatturato' in fullData) {
                // console.log('stampa 1');
                printLineChart(fullData);
            }
            if ('accessFatturatoAgenti' in fullData) {
                // console.log('stampa 1');
                printPieChart(fullData);
            }
            if ('accessTeam' in fullData) {
                // console.log('stampa 1');
                printMultilineChart(fullData);
            }


            // if (Object.keys(fullData).includes('accessFatturatoAgenti')) {
            //     console.log('stampa 2');
            //     printPieChart(fullData);
            // }

            // if (fullData.accessTeam != undefined) {
            //     console.log('stampa 3');
            //     printMultilineChart(fullData);
            // }

            // for(var i = 0; i < fullData.length; i++) {

            //     var grafico = fulldata[i];

            //     if (grafico.type == 'line') {
            //         // stampagrafico line
            //     } else if (grafico.type == 'pie') {}
            // }

            /*
            // printFunction(fullData);
            if (fullData['level'] == fullData['accessFatturato']) {
                printLineChart(fullData);

            }else if (fullData['level'] == fullData['accessFatturatoAgenti']) {
                printPieChart(fullData);
                printLineChart(fullData);

            }else if (fullData['level'] == fullData['accessTeam']) {
                printMultilineChart(fullData);
                printPieChart(fullData);
                printLineChart(fullData);
            }
            */
        //    console.log(data);
        },
        error: function (error){
            console.log(error);
        }
    });


});
