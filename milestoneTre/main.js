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
        // var fullData = fullData.guest;
        console.log(fullData);
        var access = fullData.accessFatturato;
        console.log(access);
        var typeGraph = fullData.typeFatturato;
        var data = fullData.dataFatturato;
        if (resultLevel == access || resultLevel == fullData.accessFatturatoAgenti || resultLevel == fullData.accessTeam) {
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
            
        }else{
            $('.venditeMensili').hide();
        }
    }
    function printPieChart(fullData) {
        // var fullData = fullData.employee;
        console.log(fullData)
        var access = fullData.accessFatturatoAgenti;
        var typeGraph = fullData.typeFatturatoAgenti;
        var data = fullData.dataFatturatoAgenti;
        var nameAgents = fullData.agentiName;
        if (resultLevel == access || resultLevel == fullData.accessTeam) {
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
            
        }else{
            $('.fatturatoAgenti').hide();
        }
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
        if (resultLevel == access) {
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
        }else{
            $('.fatturatoTeam').hide();
        }
    }
    var ctx = $('#salesChart');
    var fatturatoAgenti = $('#salesAgents');
    var fatturatoTeam = $('#salesTeam');
 
        $.ajax({
            url: "server.php",
            data: {
                level : resultLevel
            },
            success: function (fullData) {
                console.log("valore di success", fullData);

                // printFunction(fullData);
                if (resultLevel == 'guest') {
                    printLineChart(fullData);
                    
                }else if (resultLevel == 'employee') {
                    printPieChart(fullData);
                    printLineChart(fullData);
            
                }else if (resultLevel == 'clevel') {
                    printMultilineChart(fullData);
                    printPieChart(fullData);
                    printLineChart(fullData);
                }
            //    console.log(data);
            },
            error: function (error){
                console.log(error);
            }
        });    
    
    
});
