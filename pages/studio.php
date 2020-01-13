<?php
$website_title = 'Studio';
$website_description = 'Studio';
include '../components/html_top.php';
?>

<!-- <div class="row">
    <div class="col-md-2">

    </div>
    <div class="m-5 col-md-8">

        <h1>Studio</h1>
        <?php include '../components/slideshow.html' ?>
    </div>
    <div class="col-md-2">

    </div>
</div> -->

<h1>Studio</h1>
<!-- Desktop -->
<div class="container d-none d-md-block">
    <div class="col-md-12">
        <?php include '../components/slideshow.html' ?>
    </div>
</div>
<!-- Mobile -->
<div class="container d-md-none d-sm-block">
    <?php include '../components/slideshow_mobile.html' ?>
</div>

<!-- 
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <img src="assets/images/thering-img-01.jpg" alt="The Ring Boxing Club Studio" width="960" />
        </div>
    </div>
    <div class="row">
        <div class="col-md-4 p-0">
            <img src="assets/images/thering-img-02.jpg" alt="The Ring Boxing Club Studio" width="320" />      
        </div>
        <div class="col-md-4 p-0">
            <img src="assets/images/thering-img-03.jpg" alt="The Ring Boxing Club Studio" width="320" />
        </div>
        <div class="col-md-4 p-0">
            <img src="assets/images/thering-img-04.jpg" alt="The Ring Boxing Club Studio" width="320" />      
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 p-0">
            <img src="assets/images/thering-img-05.jpg" alt="The Ring Boxing Club Studio" width="480" />      
        </div>     
        <div class="col-md-6 p-0">
            <img src="assets/images/thering-img-06.jpg" alt="The Ring Boxing Club Studio" width="480" />
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <img src="assets/images/thering-img-07.jpg" alt="The Ring Boxing Club Studio" width="960" />      
        </div>
    </div>
</div> -->

<?php include ROOT . "components/html_bottom.php"; ?>
