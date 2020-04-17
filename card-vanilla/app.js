document.querySelectorAll(".card__actions__buttons span").forEach((element) => {
    element.addEventListener("click", (event) => {
        const card = event.target.parentElement.parentElement.parentElement;
        card.querySelector(".card__content").classList.toggle("card__content--expand");
        card.querySelector(".card__actions__buttons span").classList.toggle("collapse");


        const content = card.querySelector(".card__content");
        if (content.classList.contains("card__content--expand")){
            // expanded
            content.style.maxHeight = `${content.scrollHeight}px`;
        } else {
            // collapse
            content.style.maxHeight = null;
        }
    });
});
