<?php  

    header('Content-Type: application/json');   
    require_once "database.php"; 

    // GRAFICO 1 - FATTURATO - 
    foreach ($graphs as $k => $graph) {
        if ($k == "fatturato") {
           $typeFatturato = $graph["type"];
           $accessFatturato = $graph["access"];
           foreach ($graph["data"] as $datavalue) {
               $dataFatturato[] = $datavalue;
            };
        //     echo $typeFatturato;
        //    echo '<pre>',print_r ($dataFatturato),'</pre>';
        //    echo "<br>-----------------<br>";
        //    print_r ($dataFatturato[$datavalue]);
        }
        if ($k == "fatturato_by_agent"){
            // print_r ($graph["type"]. "<br>");
            $typeFatturatoAgenti = $graph["type"];
            $accessFatturatoAgenti = $graph["access"];
            // echo $typeFatturatoAgenti;
            foreach ($graph["data"] as $key => $datavalue) {
                $agentiName[] = $key;
                // echo $agentiName;
                $dataFatturatoAgenti[] =  $datavalue;
            }
            // echo '<pre>',print_r ($dataFatturatoAgenti),'</pre>';
        }
        if ($k == 'team_efficiency') {
            $typeTeam = $graph["type"];
            $accessTeam = $graph["access"];
            foreach ($graph["data"] as $key => $datavalue) {
                $teamNumber[] = $key;
                // echo $agentiName;
                $dataTeam[] =  $datavalue;
            }
        }
    };
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
