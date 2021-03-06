angular.module("risevision.widget.common")
  .service("i18nLoader", ["$window", "$q", function ($window, $q) {
    var deferred = $q.defer();

    $window.i18n.init({ fallbackLng: "en" }, function () {
      deferred.resolve($window.i18n);
    });

    this.get = function () {
      return deferred.promise;
    };
  }]);
