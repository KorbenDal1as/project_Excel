import {ExcelComponent} from '@core/ExcelComponent';

export class Toolbar extends ExcelComponent {
    static className = 'excel_toolbar'

    constructor($root) {
        super($root, {
            name: 'Toolbar',
            listeners: ['click']
        })
    }

    toHTML() {
        return '<div class="button">\n' +
            '<span class="material-icons" ' +
            'title = "Выравнить по левому краю">format_align_left</span>\n' +
            '</div>\n' +
            '\n' +
            '<div class="button">\n' +
            '<span class="material-icons" ' +
            'title = "Выравнить по центру">format_align_center</span>\n' +
            '</div>\n' +
            '\n' +
            '            <div class="button">\n' +
            '                <span class="material-icons" ' +
            'title = "Выравнить по правому краю">format_align_right</span>\n' +
            '            </div>\n' +
            '\n' +
            '            <div class="button">\n' +
            '                <span class="material-icons"' +
            ' title = "Жирный">format_bold</span>\n' +
            '            </div>\n' +
            '\n' +
            '            <div class="button">\n' +
            '                <span class="material-icons" ' +
            'title = "Курсив">format_italic</span>\n' +
            '            </div>\n' +
            '\n' +
            '            <div class="button">\n' +
            '                <span class="material-icons" ' +
            'title = "Подчеркнутый">format_underlined</span>\n' +
            '            </div>';
    }

    onClick(event) {
        console.log(event.target)
    }
}
