/*Создание своего элемента*/
function composeEmail () {
	return {
		restrict: 'EA',
		replace: true,
		scope: true,
		controllerAs: 'compose',
		controller: function () {

		},
		link: function ($scope, $element, $attrs) {

		},
		template: [
				'<div class="compose-email">',
					'<input type="text" placeholder="To..." ng-model="compose.to">',
					'<input type="text" placeholder="Subject..." ng-model="compose.subject">',
					'<textarea placeholder="Message..." ng-model="compose.message"></textarea>',
				'</div>'
		].join('')
	};
}
angular
	.module('app').controller('composeEmail', composeEmail);