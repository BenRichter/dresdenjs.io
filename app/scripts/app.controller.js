'use strict';

/**
 * @ngdoc overview
 * @name dresdenjsApp
 * @description
 * # dresdenjsApp
 *
 * Main controller of the application.
 */
angular
    .module('dresdenjsApp')
    .controller('MainCtrl', function ($rootScope, $scope, $mdMedia, $timeout, $anchorScroll, $log, config, smoothScroll) {

        var _setStyle = function (el, prop, val, force) {
            el.style.setProperty(prop, val, force ? 'important' : null);
        };

        var _tintInkBarTo = function (background, force) {
            var el = document.querySelector('md-tabs md-ink-bar');
            _setStyle(el, 'background-color', config.colors[background], force);
        };

        var _scrollToSection = function (name, background) {
            // get section by name
            var target = document.querySelector('section > [ui-view="' + name + '"]');

            // set global var to pass by scroll directive
            $rootScope.scrolledByClick = true;

            // set section color to ink bar
            _tintInkBarTo(background, true);

            // initialize scroll animation
            smoothScroll(target, {
                offset: 70,
                duration: 375,
                easing: 'easeInOutQuart',
                callbackAfter: function () {
                    $timeout(function () {
                        $rootScope.scrolledByClick = false;
                    });
                }
            });
        };

        var _init = function () {
            $scope.$mdMedia = $mdMedia;
            $scope.colors = config.colors;
            $scope.site = config.content;
            $scope.tabs = {};
            $scope.views = config.views;
            $scope.tintInkBarTo = _tintInkBarTo;
            $scope.scrollToSection = _scrollToSection;

            // set tabs
            for (var name in config.views) {
                if (!config.views[name].title) {
                    continue;
                }
                $scope.tabs[name] = config.views[name];
            }

            // set first section color
            _tintInkBarTo($scope.tabs[Object.keys($scope.tabs)[0]].background, true);
        };

        _init();
    });
