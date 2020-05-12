<?php  

    header('Content-Type: application/json');   
    require_once "database.php"; 

    // GRAFICO 1 - FATTURATO - 
    
    $typeFatturato = $graphs["fatturato"]['type'];
    $accessFatturato = $graphs["fatturato"]['access'];
    foreach ($graphs["fatturato"]['data'] as $datavalue) {
        $dataFatturato[] = $datavalue;
    };
//     echo $typeFatturato;
//    echo '<pre>',print_r ($dataFatturato),'</pre>';
//    echo "<br>-----------------<br>";
//    print_r ($dataFatturato[$datavalue]);


    // print_r ($graph["type"]. "<br>");
    $typeFatturatoAgenti = $graphs["fatturato_by_agent"]['type'];
    $accessFatturatoAgenti = $graphs["fatturato_by_agent"]['access'];
    // echo $typeFatturatoAgenti;
    foreach ($graphs["fatturato_by_agent"]['data'] as $key => $datavalue) {
        $agentiName[] = $key;
        // echo $agentiName;
        $dataFatturatoAgenti[] =  $datavalue;
    }
    // echo '<pre>',print_r ($dataFatturatoAgenti),'</pre>';


    $typeTeam = $graphs["team_efficiency"]['type'];
    $accessTeam = $graphs["team_efficiency"]['access'];
    foreach ($graphs["team_efficiency"]['data'] as $key => $datavalue) {
        $teamNumber[] = $key;
        // echo $agentiName;
        $dataTeam[] =  $datavalue;
    }
        
    
    $graphs = [
        "typeFatturato" => $typeFatturato,
        "dataFatturato" => $dataFatturato,
        "accessFatturato" => $accessFatturato,
        "typeFatturatoAgenti" => $typeFatturatoAgenti,
        "dataFatturatoAgenti" => $dataFatturatoAgenti,
        "accessFatturatoAgenti" => $accessFatturatoAgenti,
        "agentiName" => $agentiName,
        "typeTeam" => $typeTeam,
        "accessTeam" => $accessTeam,
        "teamNumber" => $teamNumber,
        "dataTeam" => $dataTeam,
        "level" => $_GET["level"]
    ];
    //  echo '<pre>',print_r ($dataTeam[1]),'</pre>';
    //  echo '<pre>',print_r ($teamNumber[0]),'</pre>';

    // echo '<pre>',print_r ($graphs),'</pre>';
    echo json_encode($graphs);
?>
