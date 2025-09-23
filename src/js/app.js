import "../scss/style.scss";
import burger from "./files/burger.js";
import headerScroll from "./files/headerScroll.js";
import headerServices from "./files/headerServices.js";
import inputmask from "./files/inputmask.min.js";
import purposeInput from "./files/purposeInput.js";
import select from "./files/select.js";
import sliders from "./files/sliders.js";
import spoller from "./files/spoller.js";
import map from "./files/map.js";
import anchors from "./files/anchors.js";

spoller();
burger();
headerServices();
inputmask();
sliders();
select();
purposeInput();
headerScroll();
map();
anchors();

Fancybox.bind("[data-fancybox]");
// Fancybox.show([{ src: "#modal-order", type: "inline" }]);
