<?php
    // $data = file_get_contents('pizza.json');
    // $menu = json_decode($data, true);

    // // echo $menu;
    // $menu = $menu["menu"];
?>
<!doctype html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Bootstrap CSS -->
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossorigin="anonymous">

        <title>WPU-RestAPI-5</title>
    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <div class="row">
                    <a class="navbar-brand" href="#"></a>
                    <!-- <img src="img/logo.png" width="200px"> -->
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <div class="navbar-nav">
                            <a class="nav-item nav-link active" href="#">All Menu</a>
                            <a class="nav-item nav-link" href="#">Search Movie</a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div class="container mt-4">
            <h2 class="text-center">Search Movie</h2>
            <div class="row justify-content-center mt-4">
                <div class="col-md-8">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" id="search-input" placeholder="Search Movie">
                        <div class="input-group-append">
                            <button class="btn btn-dark" id="search-button" type="button">Button</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
        </div>
        <div class="container">
            <div class="row" id="movie-list">
            <div class="input-group mb-3">
            </div>
            </div>
        </div>

        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script
            src="https://code.jquery.com/jquery-3.4.1.js"
            integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
            crossorigin="anonymous"></script>
        <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossorigin="anonymous"></script>
        <script
            src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
            integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
            crossorigin="anonymous"></script>
        <script src="script.js">
        </script>
    </body>
</html>