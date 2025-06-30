/* enum Direction {
     North = 1,
     South,
     West,
     East
}
Se eu quizer definir a enumeração e não usar a que o vscode informa.     
*/

enum Direction {
    North, South,West,East
}

const pos = {
    x: 100,
    y: 230,
    direction: Direction.East
}

enum ClothingSize {
    ExtraSmall = "PP",
    Small = "P",
    Medum = "M",
    Large = "G",
    ExtraLarge = "GG",
}

const cloth = {
    color: "green",
    size: ClothingSize.Large
}


enum ButtonStyle {
    Green,
    Blue,
    Red,
    Gray
}

interface Button {
    label: string;
    emoji: string;
    style: ButtonStyle
}

const button: Button = {
    label: "Clique aqui",
    emoji: "",
    style:ButtonStyle.Green
}



