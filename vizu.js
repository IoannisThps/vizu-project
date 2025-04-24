const bold = document.getElementById("bold");
const italic = document.getElementById("italic");
const underline = document.getElementById("underline");
const colortext = document.getElementById("colortext");
const colorPicker = document.getElementById("colorPicker");
const heading = document.getElementById("heading");
const fill = document.getElementById("fill");
const colorPicker2 = document.getElementById("colorPicker2");
const list = document.getElementById("list");
const undo = document.getElementById("undo");
const redo = document.getElementById("redo");
const left = document.getElementById("left");
const center = document.getElementById("center");
const right = document.getElementById("right");
const full = document.getElementById("full");
const save = document.getElementById("save");




// THE TOOLBAR ELEMENTS:

document.querySelectorAll('[data-cmd]:not([data-cmd="undo"]):not([data-cmd="redo"]):not([data-cmd="heading"])')
    .forEach(btn => {
        btn.addEventListener("click", () => {
            document.execCommand(btn.dataset.cmd);
            btn.classList.toggle("active");
        });
    });;


colortext.addEventListener("click", () => {
    colorPicker.click();
});
colorPicker.addEventListener("input", function () {
    document.execCommand("forecolor", false, this.value);
    forecolor, false, this.value.classList.toggle("active");
});

heading.addEventListener("click", function () {
    document.execCommand("fontSize", false, "7");
});

fill.addEventListener("click", function () {
    colorPicker2.click();
});
colorPicker2.addEventListener("input", function () {
    document.execCommand("backcolor", false, this.value);
    backcolor.classList.toggle("active");
});

list.addEventListener("click", function () {
    document.execCommand("insertUnorderedList");
    insertUnorderedList.classList.toggle("active");
});

undo.addEventListener("click", function () {
    document.execCommand("undo")
});

redo.addEventListener("click", function () {
    document.execCommand("redo")
});

const alignToggle = document.getElementById('align-toggle');
const alignDropdown = alignToggle.closest('.align-dropdown');
const alignOptions = alignDropdown.querySelectorAll('.align-options button');

alignToggle.addEventListener('click', () => {
    alignDropdown.classList.toggle('open');
    bold.classList.toggle("active");
});

alignOptions.forEach(btn => {
    btn.addEventListener('click', () => {
        const cmd = btn.getAttribute('data-cmd');
        document.execCommand(cmd);
        alignDropdown.classList.remove('open');
    });
});

document.addEventListener('click', (e) => {
    if (!alignDropdown.contains(e.target)) {
        alignDropdown.classList.remove('open');
    }
});

save.addEventListener('click', () => {
    const opt = {
        margin: 1,
        filename: 'document.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(paper).save();
});

const fontToggle = document.getElementById('font-toggle');
const fontDropdown = fontToggle.closest('.font-dropdown');
const fontOptions = fontDropdown.querySelectorAll('.font-options button');


fontToggle.addEventListener('click', () => {
    fontDropdown.classList.toggle('open');
});

fontOptions.forEach(btn => {
    btn.addEventListener('click', () => {
        const cmd = btn.getAttribute('data-cmd');
        const value = btn.getAttribute('data-value');
        document.execCommand(cmd, false, value);
        fontDropdown.classList.remove('open');
    });
});

document.addEventListener('click', (e) => {
    if (!fontDropdown.contains(e.target) && !fontToggle.contains(e.target)) {
        fontDropdown.classList.remove('open');
    }
});

// SAVE DOCUMENT:

const saveLocal = document.getElementById("saveLocal");

saveLocal.addEventListener("click", () => {
    const content = document.getElementById("paper").innerHTML;
    localStorage.setItem("vizuDoc", content);
    alert("Αποθηκεύτηκε στο browser!");
});
