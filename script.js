let count = 0;
let price = 0;
let grandTotal = 0;


function initialize() {
    let booksContainer = document.querySelector('.book-container');

    for (let i = 0; i < books.length; i++) {
        booksContainer.innerHTML += `<div class="card border-secondary mb-3">
            <div class="card-body">
                <div class="book-img" style="background-image: url('images/${books[i].imgURL}');"></div>
                <div class="book-details">
                    <h5 class="card-title">${books[i].bookTitle}</h5>
                    <p class="card-text text-info about-author"><small>by <strong>${books[i].author}</strong></small></p>
                    <p class="card-text text-info about-book">${books[i].aboutBook}</p>
                    <div class="price-and-cart">
                        <div class="price">
                            <p class="card-text text-info price">Price: <span class="text-success">$ ${books[i].price}</span></p>
                        </div>

                        <div class="form-group">
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <button type="button" class="btn btn-primary" onclick="decreaseItem(${i + 1}, '${books[i].price}')">-</button>
                                    </div>
                                    <input type="text" class="form-control input${i + 1}" aria-label="Amount (to the nearest dollar)" value="0">
                                    <div class="input-group-append">
                                        <button type="button" class="btn btn-primary" onclick="increaseItem(${i + 1}, '${books[i].price}')">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="alert alert-dismissible alert-primary">
                <p class="text-info">Total Amount of This Book: $ <span class="total-amount${i + 1}"> 0.00</span></p>
            </div>
        </div>

        `;
    }
}

function increaseItem(index, bookPrice) {
    count++;
    priceOfBook = parseFloat(bookPrice);
    price += priceOfBook;
    document.querySelector(`.input${index}`).value = count;
    document.querySelector(`.total-amount${index}`).innerHTML = `${price.toFixed(2)}`;

    book1 = parseFloat(document.querySelector(`.total-amount1`).innerHTML);
    book2 = parseFloat(document.querySelector(`.total-amount2`).innerHTML);
    book3 = parseFloat(document.querySelector(`.total-amount3`).innerHTML);

    grandTotal = book1 + book2 + book3;
    document.querySelector('.grand-total').innerHTML = grandTotal;
}

function decreaseItem(index, bookPrice) {
    let inputEl = parseInt(document.querySelector(`.input${index}`).value);

    if (inputEl > 0) {
        count--;
        priceOfBook = parseFloat(bookPrice);
        price -= priceOfBook;
        document.querySelector(`.input${index}`).value = count;
        document.querySelector(`.total-amount${index}`).innerHTML = `${price.toFixed(2)}`;

        book1 = parseFloat(document.querySelector(`.total-amount1`).innerHTML);
        book2 = parseFloat(document.querySelector(`.total-amount2`).innerHTML);
        book3 = parseFloat(document.querySelector(`.total-amount3`).innerHTML);

        grandTotal = book1 - book2 - book3;
        document.querySelector('.grand-total').innerHTML = Math.abs(grandTotal);
    }
}

// write your JS code here
