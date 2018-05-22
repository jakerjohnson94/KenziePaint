Bitmap.prototype.fill = function (row, col, newColor) {
    const oldColor = this.grid[row][col];
    if (oldColor === newColor) return;
    this.setColor(row, col, newColor);
    let queue = [];
    
    queue.push([row, col])

    while (queue.length > 0) {
        let [r, c] = queue.shift();

        if (this.grid[r][c - 1] === oldColor) {
            this.setColor(r, c - 1, newColor);
            queue.push([r, c - 1]);
        }
        if (this.grid[r][c + 1] === oldColor) {
            this.setColor(r, c + 1, newColor);
            queue.push([r, c + 1]);
        }
        if (this.grid[r - 1][c] === oldColor) {
            this.setColor(r - 1, c, newColor);
            queue.push([r - 1, c]);
        }
        if (this.grid[r + 1][c] === oldColor) {
            this.setColor(r + 1, c, newColor);
            queue.push([r + 1, c]);
            console.log(queue.length)

        }
    }
}
