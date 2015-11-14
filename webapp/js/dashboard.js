webApp.controller('dashboardController', ['$scope', '$location',
	function($scope, $location) {

		$scope.dashcards = [
    {
      id: 1,
      title: 'card 1',
      desc: 'I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively',
      imgSrc : './img/first.jpg',
      likes: 20
    },{
      id: 2,
      title: 'card 2',
      desc: 'I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively',
      imgSrc : './img/second.jpg',
      likes: 10
    },{
      id: 3,
      title: 'card 3',
      desc: 'I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively',
      imgSrc : './img/third.jpg',
      likes: 0
    },{
      id: 4,
      title: 'card 4',
      desc: 'I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively',
      imgSrc : './img/first.jpg',
      likes: 20
    },{
      id: 5,
      title: 'card 5',
      desc: 'I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively',
      imgSrc : './img/second.jpg',
      likes: 10
    },{
      id: 6,
      title: 'card 6',
      desc: 'I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively',
      imgSrc : './img/third.jpg',
      likes: 0
    }
  ];

		

	}
]);