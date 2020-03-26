function searchMovie() {
    $('#movie-list').html(''); //sebelum di data dapatkan, pastikan dalam keaadaan kosong
    $.ajax({
        type: "get",
        url: "http://www.omdbapi.com",
        data: {
            "apikey": "5ad1f444",
            "s": $('#search-input').val()
        },
        dataType: "json",
        success: function (result) {
            // console.log(response);
            if (result.Response == 'True') {
                let movie = result.Search;
                $.each(movie, function (i, data) {
                    $('#movie-list').append(
                        `
                            <div class="col-md-4 mb-3">
                            <div class="card" style="width: 18rem;">
                            <img src="` +
                        data.Poster +
                        `" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">` +
                        data.Title +
                        `</h5>
                                    <p class="card-text">` + data.Year +
                        `</p>
                                    <a href="#" class="btn btn-primary seeDetail" data-toggle="modal" data-id="`+data.imdbID+`" data-target="#exampleModal">See Detail</a>
                                </div>
                            </div>
                            </div>
                         `
                    );
                });

                $('#search-input').val(''); //kosongkan form search movie setelah data didapatkan
            } else {
                // jika search tidak ada
                $('#movie-list').html(
                    `<div class="col">
                            <h1 class="text-center">` +
                    result.Error +
                    `</h1>
                        </div>
                        `
                )
            }
        }
    });
}

$('#search-button').on('click', function(){
    searchMovie();
})

$('#search-input').on('keyup', function(e){
    if(e.which === 13) //13 merupakan keyCode dari enter
     searchMovie();
})

// Cari class .see detail dalam ID MOVIE LIST 
$('#movie-list').on('click','.seeDetail', function(){
    // console.log($(this).data('id'));
    $.ajax({
        type: "get",
        url: "http://www.omdbapi.com",
        dataType: "json",
        data: {
            "apikey": "5ad1f444",
            "i": $(this).data('id')
        },
        success: function (response) {
            if (response.Response == 'True') {
                $('.modal-body').html(`
                    <div class="container>
                        <div class="row">
                            <div class="col-md-4">
                            <img src="`+ response.Poster +`" class="img-fluid">
                            </div>
                            <div class="col-md-8>
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <h3>`+response.Title+`</h3>
                                    </li>
                                    <li class="list-group-item"> Released
                                        `+response.Released+`
                                    </li>
                                    <li class="list-group-item"> Genre
                                        `+response.Genre+`
                                    </li>
                                    <li class="list-group-item"> Language
                                        `+response.Language+`
                                    </li>
                                    <li class="list-group-item"> Country
                                        `+response.Country+`
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `)
            }
        }
    });
})