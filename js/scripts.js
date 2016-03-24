$(document).ready(function(){

var imagePath;
var baseURL = 'https://api.themoviedb.org/3/';
var apiKey = '?api_key=9a8b1f8e37339a58294a5a6d4208514c';



var configURL = baseURL + 'configuration' + apiKey;

		$get.JSON(configURL, function(configData){

			imagePath = configData.images.base_url;

		});


var nowPlaying = baseURL + "movie/now_playing" + apiKey;

		$get.JSON(nowPlaying, function(movieData){
			var newHTML = '';

			for(i=0; i<movieData.results[i].length; i++){
				var currentPoster = imagePath + 'w300' + movieData.results[i].poster_path;
				newHTML += '<div class="col-sm-3">';
				newHTML += '<img src="' + currentPoster + '">';
				newHTML += '</div>';
			}
			
			$('#poster-grid').html(newHTML);

		});


		$('#movie-form').submit(function(){
			var userSearch = $('.typeahead').val();
			userSearch = $('#searchText').val();
			var searchFilter = $('#searchFilter').val();
			var movieSearch 
			

var searchURL = baseURL + 'search/' + searchFilter + apiKey + '&query=' + encodeURI(userSearch);

			$get.JSON(searchURL, function(movieData){
					var newHTML = '';

				for(i=0; i<movieData.results[i].length; i++){
					if((searchFilter == 'person') || ((searchFilter == 'multi') && (movieData.results[i].media_type== 'person'))){
						var currentPoster = imagePath + 'w300' + movieData.results[i].profile_path;
					} else{
						var currentPoster = imagePath + 'w300' + movieData.results[i].poster_path;
					}
						newHTML += '<div class="col-sm-3">';
						newHTML += '<img src="' + currentPoster + '">';
						newHTML += '</div>';
					}
				$('#poster-grid').html(newHTML);
			});
				
				event.preventDefault();

		});


		





});

 // ----------------------- search function ---------------------------------------

	// $("#searchInput").keyup(function(){
	// 		searchFor = $("#searchInput").val();
	// 		if(searchFor !== ""){
	// 		selected = $("select option:selected").attr("value");
	// 		$("#page-heading").html(selected);
	// 			searchURL = baseURL + "search/" + selected + apiKey + "&query=" + encodeURI(searchFor);
	// 			$.getJSON(searchURL, function(movieData){
	// 				$(movieData.results).each(function(){
	// 					if(selected === "movie"){
	// 						arrayToSearch.push(this.original_title);
	// 					}else{
	// 					arrayToSearch.push(this.name);
	// 					}
	// 				});			
	// 			});
	// 		}
	// 	});


















// --------------------------- typeahead code -----------------------------------

// var substringMatcher = function(strs) {
//   return function findMatches(q, cb) {
//     var matches, substringRegex;

//     // an array that will be populated with substring matches
//     matches = [];

//     // regex used to determine if a string contains the substring `q`
//     substrRegex = new RegExp(q, 'i');

//     // iterate through the pool of strings and for any string that
//     // contains the substring `q`, add it to the `matches` array
//     $.each(strs, function(i, str) {
//       if (substrRegex.test(str)) {
//         matches.push(str);
//       }
//     });

//     cb(matches);
//   };
// };

// var actors = [
// 	'Brad Pitt',
// 	'Michael Douglas',
// 	'Al Pacino'
// ];

// $('#movie-form .typeahead').typeahead({
//   hint: true,
//   highlight: true,
//   minLength: 1
// },
// {
//   name: 'actors',
//   source: substringMatcher(actors)
// });





// ----------------- Test code for using searchFilter -------------------------
// 	if(searchFilter == 'tv'){
// 				var endPoint = 'search/tv';
// 			} else if(searchFilter = 'movie'){
// 				var endPoint = 'search/movie';
// 			} else if(searchFilter = 'actor'){
// 				var endPoint = 'search/person';
// 			} else {
// 				var endPoint = 'search/multi';
// 			} 