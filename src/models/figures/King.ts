import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from "../../assets/b_king_png_shadow_128px.png";
import whiteLogo from "../../assets/w_king_png_shadow_128px.png";

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(cell, color);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.KING
    }
    canMove(target:Cell) : boolean {
        if(!super.canMove(target))
            return false;
        return true
    }
}