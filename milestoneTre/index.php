<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2/dist/Chart.min.js"></script>
    <?php 
        $getAccess = $_GET["level"];
    ?>

    <title>Charts</title>
</head>
<body>

    <section id="container">
    <section id="container">
        <div class="venditeMensili">
            <h1>Andamento mensile delle vendite</h1>
            <canvas id="salesChart">
            </canvas>
        </div>
        <div class="fatturatoAgenti">
            <h1>Fatturato Agenti</h1>
            <canvas id="salesAgents">
            </canvas>
        </div>
        <div class='fatturatoTeam'>
            <h1>Fatturato Team</h1>
            <canvas id='salesTeam'>
            </canvas>
        </div>        
    </section>
    <script src="lib/moment/moment.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="main.js" charset="utf-8"></script>
</body>
</html>