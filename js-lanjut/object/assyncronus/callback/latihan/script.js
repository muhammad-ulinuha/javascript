$('.search-button').on('click', function () {
    
    $.ajax({
        url: 'https://imdb-api.com/en/API/Search/k_y60lquvt/' + $('.input-keyword').val(),
        success: results => {
            const movies = results.results;
            let cards = '';
            movies.forEach(m => {
                cards += `<div class="col-md-4 my-2">
                            <div class="card">
                                <img src="${m.image}" class="card-img-top">
                                <div class="card-body">
                                    <h5 class="card-title">${m.title}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">${m.description}</h6>
                                    <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#detailModel" data-id="${m.id}">Show detail</a>
                                </div>
                            </div>
                        </div>`
            });
            $('.movie-container').html(cards);
    
            // ketika tombol detail di klik
            $('.modal-detail-button').on('click', function () {
                $.ajax({
                    url: 'https://imdb-api.com/en/API/Title/k_y60lquvt/' + $(this).data('id') + '/FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia,',
                    success: m => {
                        const movieDetail = `<div class="container-fluid">
                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <img src="${m.image}" class="img-fluid">
                                                    </div>
                                                    <div class="col-md">
                                                        <ul class="list-group">
                                                            <li class="list-group-item">Judul : ${m.title}</li>
                                                            <li class="list-group-item">Tahun : ${m.year}</li>
                                                            <li class="list-group-item">Release : ${m.releaseDate}</li>
                                                            <li class="list-group-item">Awards : ${m.awards}</li>
                                                            <li class="list-group-item">Plot : ${m.plot}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>`;
                        $('.modal-body').html(movieDetail);
                    },
                    error: (e) => {
                        console.log(e.responseText);
                    }
                });
            });
        },
        error: (e) => {
            console.log(e.responseText);
        }
    });
    
});

