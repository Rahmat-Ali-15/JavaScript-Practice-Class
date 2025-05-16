let pages = 1;
let flag = null;
let totalPages = null;

// fetching data
async function getData() {
    const url = `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pages}`
    try {
        let res = await fetch(url);
        // Adjust limit if needed(making limit dynamically)
         if (!totalPages) {
            const totalCount = res.headers.get("X-Total-Count");
            totalPages = Math.ceil(totalCount / 5);
        }

        let data = await res.json();
        appendData(data)
    } catch (error) {
        console.log(error);
    }
}

// apending data
function appendData(value) {
    let main = document.querySelector(".main");
    const pageData = document.querySelector(".No_of_pages");

    if (flag || !flag) {
        main.innerHTML = "";
        pageData.innerText = "";
    }

    value.forEach((el) => {
        let container = document.createElement("div");
        let Id = document.createElement("span");
        let Title = document.createElement("span");

        Id.innerText = `${el.id}`;
        Title.innerText = `${el.title}`;
        container.append(Id, Title);
        main.append(container)

    });
    pageData.append(pages);
}

// button logic
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

const prevBtnInvocation = () => {
    if (pages === 1) {
        prevBtn.disabled = true;
        nextBtn.disabled = false;
        return;
    }
    flag = false;
    pages--;
    getData();
};

const nextBtnInvocation = () => {
    if (pages === totalPages) {
        nextBtn.disabled = true;
        prevBtn.disabled = false;
        return;
    }
    flag = false;
    pages++;
    getData()
}
