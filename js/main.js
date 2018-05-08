window.onload = () => {
    (() => {
        let str = "饸 饹 面, 让 你 秒 变 吃 货";

        let titleChange = document.querySelector("#titleChange");

        let m = 0;

        const timerFirst = () => {
            let timer = window.setInterval(() => {
                titleChange.innerHTML = str.substring(0, m);

                m++;

                if (titleChange.innerHTML == str) {
                    clearInterval(timer);

                    window.setTimeout(timerLast, 900);
                };
            }, 70);
        };

        const timerLast = () => {
            let timer = window.setInterval(() => {
                titleChange.innerHTML = str.substring(0, m);

                m--;

                if (titleChange.innerHTML == "") {
                    clearInterval(timer);

                    window.setTimeout(timerFirst, 500);
                };
            }, 20)
        };

        window.setTimeout(timerFirst, 700);
    })();

    (() => {
        let titleList = document.querySelectorAll(".lister ul li");
        let buttoner = document.querySelector(".buttoner");

        let downer = document.querySelector("#downer");
        let mainChange = document.querySelector("#mainChange");

        let liList = document.querySelectorAll(".asider ul li");

        let i = 0;

        titleList.forEach((li, key) => {
            li.addEventListener("click", function () {
                titleList.forEach((li) => {
                    li.style.color = "black";
                });

                this.style.color = "#61b0ff";

                i = key;

                mainChange.style.transform = `translate(0, ${-370 * i}px)`;

                liList.forEach((li, key) => {
                    li.className = "";

                    if (key == i) {
                        li.className = "liActive";
                    };
                });
            });
        });

        buttoner.addEventListener("click", () => {
            i = 5;

            titleList.forEach((li) => {
                li.style.color = "black";
            });

            mainChange.style.transform = `translate(0, ${-370 * i}px)`;

            liList.forEach((li, key) => {
                li.className = "";

                if (key == i) {
                    li.className = "liActive";
                };
            });
        });

        downer.addEventListener("click", () => {
            if (i == 5) {
                i = -1;
            };

            i++;

            titleList.forEach((li, key) => {
                li.style.color = "black";

                if (key == i) {
                    li.style.color = "#61b0ff";
                }
            });

            mainChange.style.transform = `translate(0, ${ -370 * i }px)`;

            liList.forEach((li, key) => {
                li.className = "";

                if (key == i) {
                    li.className = "liActive";
                };
            });
        });

        liList.forEach((li, key) => {
            li.addEventListener("click", function () {
                titleList.forEach((li, item) => {
                    li.style.color = "black";

                    if (item == key) {
                        li.style.color = "#61b0ff";
                    }
                });

                liList.forEach((li) => {
                    li.className = "";
                });

                this.className = "liActive";

                i = key;

                mainChange.style.transform = `translate(0, ${-370 * i}px)`;
            });
        });
    })();
};