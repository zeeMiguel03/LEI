class Naval {
    constructor(title, size) {
        this.title = title;
        this.size = size;
        this.moves = 0;
        this.map = [];

        for (let i = 0; i < size; i++) {

            this.map[i] = [];

            for (let j = 0; j < size; j++) {
                this.map[i][j] = 0;
            }
        }
    }

    addShip(x, y) {
        if (x > this.size - 1 || y > this.size - 1) {
            console.log("This postion don't exist!");
            return;
        }

        if (this.map[x][y] === 0) {
            this.map[x][y] = 1;
            console.log("Ship added!");
        } else {
            console.log("Already exist's a ship in this position!");
        }
    }

    shootShip(x, y) {
        if (x > this.size - 1 || y > this.size - 1) {
            console.log("This postion don't exist!");
            return;
        }

        if (this.map[x][y] === 1) {
            console.log("You sink the ship!");
            this.map[x][y] = 0;
        } else {
            console.log("You don't hit any ship")
        }
    }
}

const game = new Naval("Naval Game", 5);

game.addShip(0, 1);
game.addShip(2, 3);
game.addShip(5, 5);
game.addShip(6, 0);

game.shootShip(0, 1);
game.shootShip(4, 3);
