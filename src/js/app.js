import "../scss/style.scss";
import burger from "./files/burger.js";
import headerServices from "./files/headerServices.js";
import inputmask from "./files/inputmask.min.js";
import purposeInput from "./files/purposeInput.js";
import select from "./files/select.js";
import sliders from "./files/sliders.js";
import spoller from "./files/spoller.js";

spoller();
burger();
headerServices();
inputmask();
sliders();
select();
purposeInput();

Fancybox.bind("[data-fancybox]");
// Fancybox.show([{ src: "#modal-order", type: "inline" }]);
