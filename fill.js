Bitmap.prototype.fill = function (row, col, new_color) {
    const old_color = this.grid[row][col];
    if (old_color === new_color) return;
    this.setColor(row, col, new_color);

    var queue = [];

    let neighborLeft;
    let neighborRight;
    let neighborTop;
    let neighborBottom;
    let coords;

    // The rest of the flood fill algorithm is given in pseudo-code below.
    // Convert the following pseudo-code comments into javascript
    // to complete the implementation of this method.
    //
    queue.push([row, col])

    // Push the coordinates [row, col] onto the queue.
    // While the queue is not empty:
    while (queue.length > 0) {
        let [r, c] = queue.shift();

        if (this.grid[r][c - 1] === old_color) {
            this.setColor(r, c - 1, new_color);
            queue.push([r, c - 1]);
        }
        if (this.grid[r][c + 1] === old_color) {
            this.setColor(r, c + 1, new_color);
            queue.push([r, c + 1]);
        }
        if (this.grid[r - 1][c] === old_color) {
            this.setColor(r - 1, c, new_color);
            queue.push([r - 1, c]);
        }
        if (this.grid[r + 1][c] === old_color) {
            this.setColor(r + 1, c, new_color);
            queue.push([r + 1, c]);
            console.log(queue.length)

        }

    }
}
//    Shift a pair of coordinates [r,c] off the front of the queue.
//    The 4-connected neighbors are the cells above, below, left, and right.
//    Check each of those 4 neighbors:
//       If the neighbor is old_color:
//          Set the neighbor to new_color.
//          Add the neighbors coordinates to the queue
//          (to ensure we later check its neighbors as well).