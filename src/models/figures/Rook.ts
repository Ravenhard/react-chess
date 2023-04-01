import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from "../../assets/b_rook_png_shadow_128px.png";
import whiteLogo from "../../assets/w_rook_png_shadow_128px.png";

export class Rook extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(cell, color);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.ROOK
    }
    canMove(target:Cell) : boolean {
        if(!super.canMove(target))
            return false;
        if(this.cell.isEmptyVertical(target))
            return true;
        if(this.cell.isEmptyHorizontal(target))
            return true;
        return false
    }
}