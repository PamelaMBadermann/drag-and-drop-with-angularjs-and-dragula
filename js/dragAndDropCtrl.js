angular.module("dragAndDrop", ["ngMessages"]);
angular.module("dragAndDrop").controller("dragAndDropCtrl", function ($scope,) {
    $scope.app = "Drag and drop with AngularJS and Dragula";

    $scope.init = function () {
        dragula([document.querySelector('#dragparent'), document.querySelector('#dragparent1'), document.querySelector('#dragparent2')]);
    };

    $scope.itemsToDrag = [{
        "Lorem Ipsum ": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod urna at nunc tincidunt, euismod eleifend purus feugiat. "
    }, {
        "Lorem Ipsum ": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod urna at nunc tincidunt, euismod eleifend purus feugiat. "
    }, {
        "Lorem Ipsum ": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod urna at nunc tincidunt, euismod eleifend purus feugiat. "
    }, {
        "Lorem Ipsum ": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod urna at nunc tincidunt, euismod eleifend purus feugiat. "
    }, {
        "Lorem Ipsum ": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod urna at nunc tincidunt, euismod eleifend purus feugiat. "
    }, {
        "Lorem Ipsum ": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod urna at nunc tincidunt, euismod eleifend purus feugiat. "
    }, {
        "Lorem Ipsum ": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod urna at nunc tincidunt, euismod eleifend purus feugiat. "
    }];
});
