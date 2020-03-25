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
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            </div>
                         `
                    );
                });

                ('#search-input').val(''); //kosongkan form search movie setelah data didapatkan
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
    if(e.which === 13)
     searchMovie();
})
