const cells_td = document.querySelectorAll('#field td');
const cells_td_1 = document.querySelectorAll('c1');
const cells_td_2 = document.querySelectorAll('c2');
const cells_td_3 = document.querySelectorAll('c3');

console.log(cells_td);

let isX_or_O = false;

function addX_or_O(cellsParam) {
    for (let el of cellsParam) {
        el.addEventListener('click', function step() {
            if (isX_or_O === false) {
                el.textContent = 'X';
                isX_or_O = !isX_or_O;
            } else if (isX_or_O === true) {
                el.textContent = 'O';
                isX_or_O = !isX_or_O;
            }
            el.removeEventListener('click', step);
            console.log(isWin(combinations))
        });
    }
}

let combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function isWin(combs) {
    for (comb of combs) {
        if (cells_td[comb[0]].textContent == cells_td[comb[1]].textContent &&
            cells_td[comb[1]].textContent == cells_td[comb[2]].textContent &&
            cells_td[comb[0]].textContent != '') {
            return true;
        }
    }
}

addX_or_O(cells_td);