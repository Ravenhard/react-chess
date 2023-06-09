import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from '../../assets/b_bishop_png_shadow_128px.png'
import whiteLogo from '../../assets/w_bishop_png_shadow_128px.png'

export class Bishop extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(cell, color);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.BISHOP
    }
    canMove(target:Cell) : boolean {
        if(!super.canMove(target))
            return false;
        if(this.cell.isEmptyDiagonal(target))
            return true
        return false
    }

}