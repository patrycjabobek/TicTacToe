export class Cell {
    cellValue: number;
    htmlElement: HTMLElement;

    constructor(cell: HTMLElement) {
        this.htmlElement = cell;
    }

    setCellValue(value: number){
        switch (value) {
            case 0:
            console.log('puste pole');
            case 1:
            console.log('krzyżyk');
            case 2:
            console.log('kółko');
            
        }
    }
}