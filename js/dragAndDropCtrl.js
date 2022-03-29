angular.module("dragAndDrop", ["ngMessages"]);
angular.module("dragAndDrop").controller("dragAndDropCtrl", function ($scope,) {
    $scope.app = "Drag and drop with AngularJS and Dragula";

    $scope.init = function () {
        dragula([
            document.querySelector('#dragparent'),
            document.querySelector('#dragparent1'),
            document.querySelector('#dragparent2'),
            document.querySelector('#dragparent3'),
        ]);
    };

    $scope.many = ['The', 'possibilities', 'are', 'endless!', 'Explore', 'them'];

    $scope.$on('dragparent3.drop', function (e, el, target, source) {
        console.log('done');

        if (target[0].id === "done" && source[0].id !== "done") {
            console.log('done');
        }
    });
});
