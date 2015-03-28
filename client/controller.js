(function() {
    'use strict';

    angular
        .module( 'app' )
        .controller( 'MainController', MainController );

    MainController.$inject = [ '$scope','$log', '$resource', '$timeout' ];

    /* @ngInject */
    function MainController($scope, $log, $resource, $timeout) {

        /*jshint validthis: true */
        var vm = this;

        var Stats = $resource('/stats');

        function initialize() {
            vm.isLoaded = false;

            vm.totalChartTypes = [ 'PolarArea', 'Doughnut', 'Pie' ];
            vm.selectedTotalChartType = vm.totalChartTypes[0];

            vm.totalLabels      = [ 'total vowels', 'total consonants' ];
            vm.totalUpperLabels = [ 'upper vowels', 'upper consonants' ];
            vm.totalLowerLabels = [ 'lower vowels', 'lower consonants' ];

            vm.seriesChartTypes = [ 'Line', 'Bar', 'Radar' ];
            vm.selectedSeriesChartType = vm.seriesChartTypes[0];

            vm.series          = ['lower', 'upper'];
            vm.vowelLabels     = ['A', 'E', 'I', 'O', 'U'];
            vm.consonantLabels = ['B', 'C', 'D', 'F', 'G',
                'H', 'J', 'K', 'L', 'M',
                'N', 'P', 'Q', 'R', 'S',
                'T', 'V', 'W', 'X', 'Y',
                'Z'];

            Stats.get().$promise

                .then(function( data ){
                    
                    console.log(data);
                    updateView(data);

                }, function( err ) {
                    $log.error(err);

                    return null;
                })
        };

        function updateView(data) {
            $timeout(function () {
                vm.data = data;
                vm.isLoaded = true;
            }, 3000);
        };

        initialize();
    }
})();
