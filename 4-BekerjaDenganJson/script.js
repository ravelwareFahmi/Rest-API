function getAllMenu(){
    $.getJSON('pizza.json', function(data){
        // console.log(data);
        let menu = data.menu
        // looping jquery
        $.each(menu, function(i, data){
            // console.log(data)
            $('#menu').append(`
            <div class="col-md-4">
                <div class="card mt-4" style="width: 18rem;">
                    <img
                        class="card-img-top"
                        src="img/pizza/`+ data.gambar +`"
                        alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">`+ data.nama +`</h5>
                        <p class="card-text">`+ data.deskripsi +`</p>
                            <h6 class="card-text">Harga : Rp. `+ data.harga +`</h6>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            `);
        });
    })
}
getAllMenu();
// return

$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active'); //remove class active
    $(this).addClass('active') //add class active while click this elemen

    let kategori = $(this).html();
    $('h2').html(kategori);

    // jika all menu di klik
    if (kategori == "All Menu") {
        return getAllMenu();
    }

    $.getJSON('pizza.json', function(data){
        let menu = data.menu
        let content = ''; //create blank var

        $.each(menu, (i, data)=>{
            if (data.kategori == kategori.toLowerCase()){  
                // push to content 
                content += `
                <div class="col-md-4">
                    <div class="card mt-4" style="width: 18rem;">
                        <img
                            class="card-img-top"
                            src="img/pizza/`+ data.gambar +`"
                            alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">`+ data.nama +`</h5>
                            <p class="card-text">`+ data.deskripsi +`</p>
                                <h6 class="card-text">Harga : Rp. `+ data.harga +`</h6>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                `
            }
        });
        $('#menu').html(content) //add data from var content
    });
});