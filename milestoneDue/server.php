<?php  

    header('Content-Type: application/json');   
    require_once "database.php"; 
    foreach ($graphs as $k => $graph) {
        if ($k == "fatturato") {
           $typeFatturato = $graph["type"];
           
           foreach ($graph["data"] as $datavalue) {
               $dataFatturato[] = $datavalue;
            };
        //     echo $typeFatturato;
        //    echo '<pre>',print_r ($dataFatturato),'</pre>';
        //    echo "<br>-----------------<br>";
        //    print_r ($dataFatturato[$datavalue]);
        }else{
            // print_r ($graph["type"]. "<br>");
            $typeFatturatoAgenti = $graph["type"];
            // echo $typeFatturatoAgenti;
            foreach ($graph["data"] as $key => $datavalue) {
                $agentiName[] = $key;
                // echo $agentiName;
                $dataFatturatoAgenti[] =  $datavalue;
            }
            // echo '<pre>',print_r ($dataFatturatoAgenti),'</pre>';
        }
    };
    $graphs = [
        "typeFatturato" => $typeFatturato,
        "dataFatturato" => $dataFatturato,
        "typeFatturatoAgenti" => $typeFatturatoAgenti,
        "dataFatturatoAgenti" => $dataFatturatoAgenti,
        "agentiName" => $agentiName
    ];
    echo json_encode($graphs);
?>
