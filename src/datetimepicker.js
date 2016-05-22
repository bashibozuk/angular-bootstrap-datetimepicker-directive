/**
 * Created by vasil on 22.05.16.
 */
angular.module('bsDateimepicker', [])
    .directive('datetimepicker', function() {
        'use strict';

        return {
            link: function (scope, element, attrs, controller) {

                var options = {};

                if (attrs.format) {
                    options.format = attrs.format;
                }

                $(element).datetimepicker(options);

                $(element).on('dp.hide', function (e) {
                    var newDate = e.date ? e.date.format(options.format) : null;
                    var oldDate = e.oldDate ? e.oldDate.format(options.format) : null;
                    if (newDate != oldDate) {
                        scope.$emit('dt.changed', { value: newDate, model: attrs.ngModel });
                    }
                })
            }
        }
    })