var layout_container = `
    &#x3C;div data-container-codeGenerator class=&#x22;layout-banner-container&#x22;&#x3E;
    &#x9;&#x3C;div class=&#x22;layout-banner-list&#x22;&#x3E;

    &#x9;&#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
`;
var layoutArr = [
    {
        "layout": "Image Left",
        "code": "assets/templates_code/codes/img_left.html"
    },
    {
        "layout": "Image Right",
        "code": "assets/templates_code/codes/img_right.html"
    },
    {
        "layout": "Image Full",
        "code": ""
    },
    {
        "layout": "Text Full",
        "code": ""
    }
]

function encode(string) {
    if (string !== undefined) {
        var encodeRes = he.encode(string, {
            'encodeEverything': false,
            'useNamedReferences': false
        });
        return encodeRes;
    } else {
        return "";
    }
}

function getTemplate(file) {
    return new Promise((resolve, reject) => {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", file, true);
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4) {
                if (xmlhttp.status === 200 || xmlhttp.status == 0) {
                    resolve(xmlhttp.responseText);
                } else {
                    reject(xmlhttp.statusText);
                }
            }
        }
        xmlhttp.onerror = function () {
            reject(xmlhttp.statusText);
        };
        xmlhttp.send(null);
    });
}

function genderator_click() {
    
}

function genderator_code(value, position) {
    var html = layout_container;
    $(".card").each(function (i) {
        const dataFields = $(".form-group [data-fields]", this);

        dataFields.each(function (index, field) {
            const fieldId = $(field).attr("id");
        
            if (fieldId.includes('richtext')) {
                html = html.split(`{{${fieldId}}}`).join(
                    $(this).attr("data")
                );
            } else {
                html = html.split(`{{${fieldId}}}`).join(
                    $(this).val()
                );
            }
        })
    });
    $("code.html").html(html);
}

function getLocationURL() {
    var locationURL = window.location.pathname;
    var locationArr = locationURL.split("/");
    locationArr.pop();
    var location = locationArr.join("/");

    return location;
}

function handleChangeTemplate(layoutsTemplate, containerId) {
    const formCode = layoutsTemplate.form();
    const layoutCode = layoutsTemplate.code();
    $(`#${containerId}`).html(formCode);

    let layout_container_array = [layoutCode];
    
    $("code.html").html(layout_container_array.join("\n"));
    layout_container = layout_container_array.join("\n");

    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        ['link', 'image', 'video', 'formula'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean']                                         // remove formatting button
    ];
    // Get data from richtext quill

    const formOptionRichtextEles = $(`#${containerId} .form-group-richtext`);

    formOptionRichtextEles.each((i, item) => {
        const dataIndexCard = $(item).data("index-card");
        if ($(`#editor${dataIndexCard}_${i}`).length) {
            // var quill = new Quill(`#editor${dataIndexCard}_${i}`, {
            //     modules: {
            //         table: true,
            //         toolbar: toolbarOptions
            //     },
            //     theme: "snow",
            // });
            // quill.on("text-change", function () {
            //     let content = quill.root.innerHTML
            //         .replaceAll("<", "&#x3C;")
            //         .replaceAll(">", "&#x3E;")
            //         .replaceAll("   ", "&#x9;")
            //         .replaceAll('"', "&#x22;");

            //     $(`.richtext_value${dataIndexCard}_${i}`).attr("data", content);
            //     genderator_code();
            // });

            $(`#editor${dataIndexCard}_${i}`).summernote({
                placeholder: 'Enter Your Content Here',
                tabsize: 2,
                height: 200
            });

            $(`#editor${dataIndexCard}_${i}`).on('summernote.change', function (we, contents, $editable) {
                let content = contents.replaceAll("<", "&#x3C;")
                        .replaceAll(">", "&#x3E;")
                        .replaceAll("   ", "&#x9;")
                        .replaceAll('"', "&#x22;");

                $(`.richtext_value${dataIndexCard}_${i}`).attr("data", content);
                genderator_code();
            });
        }

    })


    // Handle delete card
    if ($(".delete-btns").length > 1) {
        $(".delete-btns").each((i, item) => {
            $(item).on("click", function (e) {
                const dataDelete = $(this).attr("data-delete");
                let newLayoutContainer = layout_container;
                newLayoutContainer = newLayoutContainer.replace(
                    `${layoutsTemplate.code(dataDelete)}\n`,
                    ""
                );
                layout_container = newLayoutContainer;
                $(
                    `.card:has(.delete-btns[data-delete="${dataDelete}"])`
                ).remove();
                $("code.html").html(newLayoutContainer);

                // Clear
                $(`#${containerId} input`).val("");
                $(`.ql-editor`).html("");
                $("code.html").html("Your code will be rendered here");
            });
        });
    } else {
        $(".delete-btns").on("click", function (e) {
            const dataDelete = $(this).attr("data-delete");
            let newLayoutContainer = layout_container;
            newLayoutContainer = newLayoutContainer
                .split(`${layoutsTemplate.code(dataDelete)}\n`)
                .join("");
            layout_container = newLayoutContainer;
            $("code.html").html(newLayoutContainer);
            $(
                `.card:has(.delete-btns[data-delete="${dataDelete}"])`
            ).remove();

            // Clear
            $("#layout-selector").val("").trigger("change");
            $(`#${containerId} input`).val("");
            $(`.ql-editor`).html("");
            $("code.html").html("Your code will be rendered here");
        });
    }
}

$(document).ready(function () {
    for (const [index, ele] of layoutArr.entries()) {
        const layoutCode = ele.layout.toLowerCase().replace(/\s+/g, '_');
        if (ele.code !== "") {
            $("#layout-selector").append(`<option ${index==0?'selected':''} value="${layoutCode}">${ele.layout}</option>`);
        }
    }
    const firstOptionSelected = $("#layout-selector").val();
    const itemLayoutSelected = layoutArr.find((item) => item.layout.toLowerCase().replace(/\s+/g, '_') === firstOptionSelected);
    const location = getLocationURL();
    const codeTemplateURL = `${location}/${itemLayoutSelected.code}`;
    const containerArr = layout_container.split("data-container-");
    const [containerId, ...rest] = containerArr[1].split(" ");
    var clipboard = new ClipboardJS('.btn-clone-html');
    var prevLayoutSelected = "";

    $("code.html").html("Your code will be rendered here");

    console.log("codeURL", codeTemplateURL);
    prevLayoutSelected = firstOptionSelected;

    getTemplate(codeTemplateURL)
        .then(function (response) {
            const codeTemplate = $(".code-template", $(`<div>${response}</div>`)).html();
            const formTemplate = $(".form-template", $(`<div>${response}</div>`)).html();
            const codeTemplateEncoded = encode(codeTemplate);
            const layoutsTemplate = {
                code: (counter = 0) => {
                    return codeTemplateEncoded.replaceAll("${counter}", counter);
                },
                form: (counter = 0) => {
                    return formTemplate.replaceAll("${counter}", counter);;
                },
            }
            handleChangeTemplate(layoutsTemplate, containerId);
        })
        .catch(function (error) {
            console.error('Error:', error);
        });

    $("#layout-selector").on("change", function (e) {
        const selectedLayout = this.value;
        if (selectedLayout == '') {
            prevLayoutSelected = "";
            return;
        };

        const itemLayoutSelected = layoutArr.find((item) => item.layout.toLowerCase().replace(/\s+/g, '_') === selectedLayout);
        const location = getLocationURL();
        const codeTemplateURL = `${location}/${itemLayoutSelected.code}`;

        if (prevLayoutSelected !== selectedLayout) {
            prevLayoutSelected = this.value;
            getTemplate(codeTemplateURL)
                .then(function (response) {
                    const codeTemplate = $(".code-template", $(`<div>${response}</div>`)).html();
                    const formTemplate = $(".form-template", $(`<div>${response}</div>`)).html();
                    const codeTemplateEncoded = encode(codeTemplate);
                    const layoutsTemplate = {
                        code: (counter = 0) => {
                            return codeTemplateEncoded.replaceAll("${counter}", counter);
                        },
                        form: (counter = 0) => {
                            return formTemplate.replaceAll("${counter}", counter);;
                        },
                    }

                    handleChangeTemplate(layoutsTemplate, containerId);
                })
                .catch(function (error) {
                    console.error('Error:', error);
                });
        }
    });
});

function activeFirstOption() {
    return new Promise((resolve, reject) => {
        $("#layout-selector").val("image_left").trigger("change");
    });
}
