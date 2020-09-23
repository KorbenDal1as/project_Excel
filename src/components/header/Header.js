import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
    static className = 'excel_header'
    toHTML() {
        return '<input type="text" class="input" value="Новая таблица" />\n' +
            '\n' +
            '            <div>\n' +
            '                <div class="button">\n' +
            '                    <span class="material-icons" ' +
            'title = "Удалить">delete</span>\n' +
            '                </div>\n' +
            '\n' +
            '                <div class="button">\n' +
            '                    <span class="material-icons" ' +
            'title = "Выйти из приложения">exit_to_app</span>\n' +
            '                </div>\n' +
            '            </div>';
    }
}
