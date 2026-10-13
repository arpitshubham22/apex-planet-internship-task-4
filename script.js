/* =====================================================
   TO-DO LIST WITH LOCAL STORAGE
===================================================== */

let tasks =
    JSON.parse(localStorage.getItem("tasks")) || [];


function saveTasks() {

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

}


function displayTasks() {

    const taskList =
        document.getElementById("taskList");

    taskList.innerHTML = "";


    tasks.forEach((task, index) => {

        const li =
            document.createElement("li");


        const span =
            document.createElement("span");

        span.textContent =
            task.text;

        span.className =
            "task-text";


        if (task.completed) {

            span.classList.add("completed");

        }


        /* Complete task */

        span.onclick = function () {

            tasks[index].completed =
                !tasks[index].completed;

            saveTasks();

            displayTasks();

        };


        /* Delete task */

        const deleteButton =
            document.createElement("button");

        deleteButton.textContent =
            "Delete";

        deleteButton.className =
            "delete-task";


        deleteButton.onclick =
            function () {

                tasks.splice(index, 1);

                saveTasks();

                displayTasks();

            };


        li.appendChild(span);

        li.appendChild(deleteButton);

        taskList.appendChild(li);

    });

}


function addTask() {

    const input =
        document.getElementById("taskInput");

    const text =
        input.value.trim();


    if (text === "") {

        alert("Please enter a task.");

        return;

    }


    tasks.push({

        text: text,

        completed: false

    });


    saveTasks();

    displayTasks();


    input.value = "";

}


/* Display saved tasks when page loads */

displayTasks();



/* =====================================================
   PRODUCT LISTING
===================================================== */

const products = [

    {
        name: "Laptop Pro",
        category: "Laptop",
        price: 65000,
        rating: 4.8,
        image: "💻"
    },

    {
        name: "Student Laptop",
        category: "Laptop",
        price: 45000,
        rating: 4.4,
        image: "💻"
    },

    {
        name: "Smart Phone X",
        category: "Phone",
        price: 30000,
        rating: 4.6,
        image: "📱"
    },

    {
        name: "Budget Phone",
        category: "Phone",
        price: 15000,
        rating: 4.2,
        image: "📱"
    },

    {
        name: "Wireless Headphones",
        category: "Accessory",
        price: 3500,
        rating: 4.7,
        image: "🎧"
    },

    {
        name: "Wireless Mouse",
        category: "Accessory",
        price: 1200,
        rating: 4.3,
        image: "🖱️"
    }

];


function displayProducts() {

    const container =
        document.getElementById(
            "productContainer"
        );


    const category =
        document.getElementById(
            "categoryFilter"
        ).value;


    const sort =
        document.getElementById(
            "sortOption"
        ).value;


    /* Filter products */

    let filteredProducts =
        products.filter(function (product) {

            if (category === "all") {

                return true;

            }

            return product.category === category;

        });


    /* Sort products */

    if (sort === "priceLow") {

        filteredProducts.sort(
            (a, b) =>
                a.price - b.price
        );

    }


    if (sort === "priceHigh") {

        filteredProducts.sort(
            (a, b) =>
                b.price - a.price
        );

    }


    if (sort === "rating") {

        filteredProducts.sort(
            (a, b) =>
                b.rating - a.rating
        );

    }


    container.innerHTML = "";


    /* Display products */

    filteredProducts.forEach(
        function (product) {

            const card =
                document.createElement("div");

            card.className =
                "product-card";


            card.innerHTML = `

                <div class="product-image">
                    ${product.image}
                </div>

                <h3>
                    ${product.name}
                </h3>

                <p>
                    Category:
                    ${product.category}
                </p>

                <p class="price">
                    ₹${product.price.toLocaleString("en-IN")}
                </p>

                <p class="rating">
                    ⭐ ${product.rating}
                </p>

            `;


            container.appendChild(card);

        }
    );

}


/* Load products */

displayProducts();



/* =====================================================
   CONTACT FORM
===================================================== */

document
    .getElementById("contactForm")
    .addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "contactName"
                ).value.trim();


            const email =
                document.getElementById(
                    "contactEmail"
                ).value.trim();


            const message =
                document.getElementById(
                    "contactMessage"
                ).value.trim();


            if (
                name === "" ||
                email === "" ||
                message === ""
            ) {

                alert(
                    "Please fill all fields."
                );

                return;

            }


            alert(
                "Thank you, " +
                name +
                "! Your message has been submitted."
            );


            document
                .getElementById("contactForm")
                .reset();

        }
    );