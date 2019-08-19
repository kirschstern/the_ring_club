<?php include 'library/init.php'; ?><!DOCTYPE html>
<html>

<head>
    <title>Preise</title>
    <meta name="description" content="Preise">
    <?php fetch_file('head.html') ?>
</head>

<body>

<?php fetch_file("navbar.php"); ?>

<?php include("components/header.html"); ?>

    <div class="row">
        <div class="col-md-2">
            
        </div>
        <div class="m-5 col-md-8">

            <h1>Preise</h1>
            <table class="table table-bordered table-dark mt-5">
                <tr>
                    <td>12 Monate Laufzeit</td>
                    <td>149,- € mtl.</td>
                </tr>
                <tr>
                    <td>6 Monate Laufzeit</td>
                    <td>189,- € mtl.</td>
                </tr>
            </table>
            <p>Aufnahmegebühr 150,- €</p>
            
        </div>
        <div class="col-md-2">
            
        </div>
    </div>




    <?php include("components/footer.html"); ?>

    <?php include("components/bootstrap_scripts.html"); ?>

</body>

</html>