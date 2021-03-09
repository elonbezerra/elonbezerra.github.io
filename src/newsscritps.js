const pagesNews = document.querySelectorAll(".pagesnews")

for (let page of pagesNews) {
    page.addEventListener("click", ()=>{
        const pageId = page.getAttribute("id")
        document.querySelector("iframe").src = pageId
    })
}
