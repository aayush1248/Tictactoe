class TicTacToe {
    constructor() {
        this.board = Array(9).fill(null);
        this.currentPlayer = 'X';
        this.gameActive = true;
        this.scores = { X: 0, O: 0 };
        this.cells = document.querySelectorAll('.cell');
        this.status = document.querySelector('#status');
        this.resetButton = document.querySelector('#reset');
        this.scoreboard = document.querySelector('#scoreboard');
        this.init();
    }

    init() {
        this.cells.forEach(cell => cell.addEventListener('click', () => this.handleCellClick(cell)));
        this.resetButton.addEventListener('click', () => this.resetGame());
        this.updateScoreboard();
    }

    handleCellClick(cell) {
        const index = cell.dataset.index;
        if (this.board[index] || !this.gameActive) return;
        this.board[index] = this.currentPlayer;
        cell.textContent = this.currentPlayer;
        if (this.checkWin()) {
            this.status.textContent = `Player ${this.currentPlayer} Wins!`;
            this.scores[this.currentPlayer]++;
            this.updateScoreboard();
            this.gameActive = false;
            return;
        }
        if (this.board.every(cell => cell)) {
            this.status.textContent = "It's a Draw!";
            this.gameActive = false;
            return;
        }
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        this.status.textContent = `Player ${this.currentPlayer}'s Turn`;
    }

    checkWin() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        return winPatterns.some(pattern =>
            pattern.every(index => this.board[index] === this.currentPlayer)
        );
    }

    resetGame() {
        this.board = Array(9).fill(null);
        this.currentPlayer = 'X';
        this.gameActive = true;
        this.status.textContent = `Player ${this.currentPlayer}'s Turn`;
        this.cells.forEach(cell => cell.textContent = '');
    }

    updateScoreboard() {
        this.scoreboard.textContent = `Player X: ${this.scores.X} | Player O: ${this.scores.O}`;
    }
}

const game = new TicTacToe();