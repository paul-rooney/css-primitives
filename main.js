import { copyToClipboard } from "./js/utils";
import "./style.css";

document.addEventListener("click", (event) => {
    if (event.target.dataset.action === "COPY") {
        const code = event.target.closest(".code-block").querySelector("pre code").textContent;
        copyToClipboard(code);
    }
});
