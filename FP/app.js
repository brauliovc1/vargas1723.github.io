var miAppAngular = angular.module('myapp', ['ngRoute', 'satellizer'] );

miAppAngular.config(['$routeProvider', '$authProvider', function($routeProvider, $authProvider){
    $authProvider.loginUrl = "http://api.com/auth/login";
    $authProvider.signupUrl = "http://api.com/auth/signup";
    $authProvider.tokenName = "token";
    $authProvider.tokenPrefix = "myApp",

    $routeProvider.when('/', {
        templateUrl : 'Plantillas/Hospitals.html',
        controller : 'hospitales' 
    })
    .when('/Doctors', {
        templateUrl : 'Plantillas/Doctors.html',
        controller : 'doctors' 
    })
    .when('/singup', {
        templateUrl : 'Plantillas/Singup.html',
        controller : 'singup' 
    })
    .when('/login', {
        templateUrl : 'Plantillas/Login.html',
        controller : 'login' 
    })
    .when('/AgregarAdmin', {
        templateUrl : 'Plantillas/AgregarAdmi.html',
        controller : 'agregaradmin' 
    })
    .when('/AgregarDoctores', {
        templateUrl : 'Plantillas/AgregarDoctores.html',
        controller : 'agregardoctores' 
    })
    .when('/AgregarHospitales', {
        templateUrl : 'Plantillas/AgregarHospitales.html',
        controller : 'agregarhospitales' 
    })
    .when('/Peticion', {
        templateUrl : 'Plantillas/Peticion.html',
        controller : 'peticiones' 
    })
    .when('/Seguimiento', {
        templateUrl : 'Plantillas/Seguimiento.html',
        controller : 'seguimiento' 
    })
    .when('/AgregarFase', {
        templateUrl : 'Plantillas/AgregarFase.html',
        controller : 'agregarfase' 
    })
    .when('/Pendientes', {
        templateUrl : 'Plantillas/Pendientes.html',
        controller : 'pendientes' 
    })
    .when('/404', {
        templateUrl : 'plantillas/404.html',
        controller : 'inicio' 
    });
    
}]);

miAppAngular.filter('trustAsResourceUrl', ['$sce', function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
}]);

miAppAngular.directive('file', function() {
    return {
        restrict: 'E',
        template: '<input type="file" />',
        replace: true,
        require: 'ngModel',
        link: function(scope, element, attr, ctrl) {
            var listener = function() {
                scope.$apply(function() {
                    attr.multiple ? ctrl.$setViewValue(element[0].files) : ctrl.$setViewValue(element[0].files[0]);
                });
            }
            element.bind('change', listener);
        }
    }
});
