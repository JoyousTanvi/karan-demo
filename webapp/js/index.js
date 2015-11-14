webApp.controller('indexController', ['$scope', '$location', '$window', '$http',
	function($scope, $location, $window, $http) {

    $scope.indexCtr = {
      
    };


		angular.element(document).ready(function () {
        	$("#owl-landing").owlCarousel({
		        slideSpeed : 300,
		        autoPlay : true,
		        navigation : false,
		        pagination : false,
		        singleItem:true
           	});
        	$('.modal-trigger').leanModal({
        		dismissible: true,
      			opacity: .5,
            href : 'mdGettingStarted'
        	});
    	});

 		$scope.open = function ( path ) {
  			//$location.path( '/' + path );
  			$window.location.href = '/dashboard';

		};

		$scope.setDashboard = function(){

			$http.get("setDashboard", {params: {op: 'get'}})
				.success(function(data, status, headers, config) {
              //data obj has the resp JSON
              var myEl = angular.element( document.querySelector( 'header' ) );
              myEl.removeClass('hide');  
              $('#mdGettingStarted').closeModal();
              $location.path( '/dashboard' );
        		})
      			.error(function(data, status, headers, config) {
          			alert("failure");
        		});
		};

	}
]);