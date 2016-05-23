/**
 * Created by vasil on 22.05.16.
 */
angular.module('demo', ['bsDateimepicker'])
    .controller('DemoController', function ($scope) {
        $scope.data = {
            datetime: '2014-05-22 13:30'
        }
    });