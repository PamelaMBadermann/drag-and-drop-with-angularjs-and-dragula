
angular.module("dragAndDrop", [angularDragula(angular)]);
angular.module("dragAndDrop").controller("exampleCtrl", function ($scope,) {
    $scope.app = "Drag and drop examples from Dragula";
    $scope.items = ['oi', 'ola', 'aloha', 'oie', 'hello']

    $scope.init = function () {
        // dragula([document.querySelector('#second-bag')])
    };

    // https://bevacqua.github.io/angularjs-dragula/
    // $scope.$on('second-bag.drag', function (e, el) {
    //     console.log('drag');
    // });

    // https://bevacqua.github.io/dragula/
    // var elem = document.querySelector('#second-bag');
    // dragula([elem]).on('drop', function (el) {
    //     console.log('drop');
    // });

    dragula([document.querySelector('#second-bag')]).on('drop-model', function (el) {
        console.log(el, 'done');
    });

    // $scope
    //     .$on('my-bag.drag', function (e, el) {
    //         console.log(el, 'done drag');
    //     })
    // $scope
    //     .$on('my-bag.drop-model', function (e, el) {
    //         console.log(el, 'done drop');
    //     });
});
