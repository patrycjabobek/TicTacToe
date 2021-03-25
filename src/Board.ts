import { Cell } from './Cell';
export class Board{
    cells: Cell[];

    constructor(size: number) {
        this.cells = new Array(size);

        let table =
        <HTMLTableElement>document.querySelector('#tictactoe');
        let i = 0;
        for (let r = 0; r < size; r++) {
            let row = table.insertRow(r);
            for (let c = 0; c < size; c++) {
                let cell = <HTMLTableDataCellElement>row.insertCell(c);
                cell.className = 'cell';
                const newCell = newCell(cell);
                this.cells(i) = newCell;
                cell.addEventListener('click', () => 
                this.makeMove(newCell), false);
                i++;                
            }
        }
    }
    makeMove(cell: Cell): void {
        cell.setCellValue(this.currentSymbol);
        };
       
}

