var App = angular.module('main-App', ['ang-drag-drop', 'gridshore.c3js.chart']);

App.controller('indexController', function ($scope, $timeout) {

     $scope.menu = [
      { 'title': 'Group1',  'imagePath': '../Images/Chart.jpg', 'drag': true,'divid':'1',
      'list':[
      { 'title': 'Chart', 'imagePath': '../Images/Chart.jpg', 'drag': true },
      { 'title': 'Pivot', 'imagePath': '../Images/pivot.png', 'drag': true }
        ]
       },
      { 'title': 'Group2', 'imagePath': '../Images/text.gif', 'drag': true ,'divid':'2',
      'list':[
      { 'title': 'Text', 'imagePath': '../Images/text.gif', 'drag': true },
      { 'title': 'DonutChart', 'imagePath': '../Images/donutChart.gif', 'drag': true },
      { 'title': 'Grid', 'imagePath': '../Images/grid.png', 'drag': true }
        ]
      },
      { 'title': 'Group3', 'imagePath': '../Images/donutChart.gif', 'drag': true ,'divid':'3',
      'list':[
      { 'title': 'Text', 'imagePath': '../Images/text.gif', 'drag': true },
      { 'title': 'DonutChart', 'imagePath': '../Images/donutChart.gif', 'drag': true },
      { 'title': 'Grid', 'imagePath': '../Images/grid.png', 'drag': true }
    ]}
    ];

  $scope.chart = null;
     
    $scope.showGraph = function(id) {
        $scope.chart = c3.generate({
                bindto: '#'+id,
                data: {
                  columns: [
                    ['data1', 30, 200, 100, 400, 150, 250]
                  ]
                }
            });     
    }
    $scope.Date = new Date().toDateString();

    $scope.quad1 = [];
    $scope.quad2 = [];
    $scope.quad3 = [];
    $scope.quad4 = [];

    $scope.dropSuccessHandler = function ($event, index, array) {
        if (array.length > 0) {
            array = [];
        }
    };

    $scope.onDrop = function ($event, $data, array) {

        if (array.length > 0) 
                return;
        if ($data.title == 'Chart') {
            $event.preventDefault()
            array.push(null);
           $scope.showGraph($event.currentTarget.id);
            }
        array.push($data);
           
    };

});