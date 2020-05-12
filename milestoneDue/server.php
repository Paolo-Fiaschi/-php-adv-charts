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
    $graphs = [
        "typeFatturato" => $typeFatturato,
        "dataFatturato" => $dataFatturato,
        "typeFatturatoAgenti" => $typeFatturatoAgenti,
        "dataFatturatoAgenti" => $dataFatturatoAgenti,
        "agentiName" => $agentiName
    ];
    echo json_encode($graphs);
?>
