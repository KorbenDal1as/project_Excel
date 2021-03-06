const CODES = {
    A: 65,
    Z: 90
}

function toCell() {
    return `<div class="cell" contenteditable></div>`
}

function toColumn(el) {
    return `<div class="column">${el}</div>`
}

function createRow(rowData, rowInfo='') {
    return `<div class="row">
        <div class="row-info">${rowInfo}</div>
        <div class="row-data">${rowData}</div>
        </div>`
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15) {
    const colsCount = CODES.Z-CODES.A + 1
    const rows = []
    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(el=>toColumn(el))
        .join('')
    rows.push(createRow(cols))
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('')
    for (let i=0; i<rowsCount; i++) {
        rows.push(createRow(cells, i+1))
    }
    return rows.join('')
}
