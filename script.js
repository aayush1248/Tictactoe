const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let board = Array(9).fill(null);
let gameActive = true;

cells.forEach(cell => {
    cell.addEventListener('click', () => handleCellClick(cell));
});

function handleCellClick(cell) {
    const index = cell.dataset.index;
    if (board[index] || !gameActive) return;
    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    if (checkWin()) {
        alert(`Player ${currentPlayer} Wins!`);
        gameActive = false;
        return;
    }
    if (board.every(cell => cell)) {
        alert("It's a Draw!");
        gameActive = false;
        return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    return winPatterns.some(pattern =>
        pattern.every(index => board[index] === currentPlayer)
    );
}