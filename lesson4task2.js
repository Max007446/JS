const settings = {
    rowsCount: 10
    , colsCount: 10
    , startPositionX: 0
    , startPositionY: 0
, };
const player = {
    x: null
    , y: null
    , init(startX, startY) {
        this.x = startX;
        this.y = startY;
    }
    , move(nextPoint) {
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    }
    , getNextPosition(direction) {
        const nextPosition = {
            x: this.x
            , y: this.y
        , };
        switch (direction) {
        case 1:
            nextPosition.x--;
            nextPosition.y++;
            break;
        case 2:
            nextPosition.y++;
            break;
        case 3:
            nextPosition.x++;
            nextPosition.y++;
            break;
        case 4:
            nextPosition.x--;
            break;
        case 6:
            nextPosition.x++;
            break;
        case 7:
            nextPosition.x--;
            nextPosition.y--;
            break;
        case 8:
            nextPosition.y--;
            break;
        case 9:
            nextPosition.x++;
            nextPosition.y--;
            break;
        }
        return nextPosition;
    }
, };
const game = {
    settings, player, run() {
        this.player.init(this.settings.startPositionX, this.settings.startPositionY);
        while (true) {
            this.render();
            const direction = this.getDirection();
            if (direction === -1) {
                alert('До свидания.');
                return;
            }
            const nextPoint = this.player.getNextPosition(direction);
            if (this.canPlayerMakeStep(nextPoint)) {
                this.player.move(nextPoint);
            }
        }
    }, render() {
        let map = "";
        for (let row = 0; row < this.settings.rowsCount; row++) {
            for (let col = 0; col < this.settings.colsCount; col++) {
                if (this.player.y === row && this.player.x === col) {
                    map += 'o ';
                }
                else {
                    map += 'x ';
                }
            }
            map += '\n';
        }
        console.clear();
        console.log(map);
    }, getDirection() {
        // Доступные значения ввода.
        const availableDirections = [-1, 1, 2, 3, 4, 6, 7, 8, 9];
        while (true) {
            // Получаем от пользователя направление.
            let direction = parseInt(prompt('Введите число, куда вы хотите переместиться, -1 для выхода.'));
            if (!availableDirections.includes(direction)) {
                alert(`Для перемещения необходимо ввести одно из чисел: ${availableDirections.join(', ')}.`);
                continue;
            }
            return direction;
        }
    }, canPlayerMakeStep(nextPoint) {
        return nextPoint.x >= 0 && nextPoint.x < this.settings.colsCount && nextPoint.y >= 0 && nextPoint.y < this.settings.rowsCount;
    }
, };
game.run();