var layout_container = `
    &#x3C;div data-container-codeGenerator class=&#x22;layout-banner-container&#x22;&#x3E;
    &#x9;&#x3C;div class=&#x22;layout-banner-list&#x22;&#x3E;

    &#x9;&#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
`;

// var layouts = {
//     image_left: {
//         code: (counter=0) => {
//             return `
//             &#x3C;div class=&#x22;tab-content&#x22; id=&#x22;tab-materials&#x22;&#x3E;
//                 &#x3C;div class=&#x22;tab__divider&#x22;&#x3E;&#x3C;/div&#x3E;
//                 &#x3C;div class=&#x22;toggle-title&#x22;&#x3E;
//                     &#x3C;a class=&#x22;toggleLink&#x22; data-collapsible=&#x22;&#x22; href=&#x22;#tab-materials-mobile&#x22; aria-label=&#x22;Materials&#x22; aria-controls=&#x22;tab-materials-mobile&#x22; aria-expanded=&#x22;false&#x22;&#x3E;
//                         &#x3C;span class=&#x22;text&#x22;&#x3E;
//                             Materials
//                             &#x3C;/span&#x3E;
//                         &#x3C;span class=&#x22;icon-plus&#x22;&#x3E;&#x26;nbsp;&#x3C;/span&#x3E;
//                     &#x3C;/a&#x3E;
//                 &#x3C;/div&#x3E;
//                 &#x3C;div class=&#x22;toggle-content&#x22; id=&#x22;tab-materials-mobile&#x22; aria-hidden=&#x22;true&#x22;&#x3E;
//                     {{input_image${counter}}}
//                     {{input_image${counter}_1}}
//                 &#x3C;/div&#x3E;
//             &#x3C;/div&#x3E;
//             &#x3C;div class=&#x22;tab-content&#x22; id=&#x22;tab-availability&#x22;&#x3E;
//                 &#x3C;div class=&#x22;tab__divider&#x22;&#x3E;&#x3C;/div&#x3E;
//                 &#x3C;div class=&#x22;toggle-title&#x22;&#x3E;
//                     &#x3C;a class=&#x22;toggleLink&#x22; data-collapsible=&#x22;&#x22; href=&#x22;#tab-availability-mobile&#x22; aria-label=&#x22;Availability&#x22; aria-controls=&#x22;tab-availability-mobile&#x22; aria-expanded=&#x22;false&#x22;&#x3E;
//                         &#x3C;span class=&#x22;text&#x22;&#x3E;Availability&#x3C;/span&#x3E;
//                         &#x3C;span class=&#x22;icon-plus&#x22;&#x3E;&#x26;nbsp;&#x3C;/span&#x3E;
//                     &#x3C;/a&#x3E;
//                 &#x3C;/div&#x3E;
//                 &#x3C;div class=&#x22;toggle-content&#x22; id=&#x22;tab-availability-mobile&#x22; aria-hidden=&#x22;true&#x22;&#x3E;
//                     {{richtext_value${counter}}}
//                 &#x3C;/div&#x3E;
//             &#x3C;/div&#x3E;
//             &#x3C;div class=&#x22;tab-content&#x22; id=&#x22;tab-compatibility&#x22;&#x3E;
//                 &#x3C;div class=&#x22;tab__divider&#x22;&#x3E;&#x3C;/div&#x3E;
//                 &#x3C;div class=&#x22;toggle-title&#x22;&#x3E;
//                     &#x3C;a class=&#x22;toggleLink&#x22; data-collapsible=&#x22;&#x22; href=&#x22;#tab-compatibility-mobile&#x22; aria-label=&#x22;Compatibility&#x22; aria-controls=&#x22;tab-compatibility-mobile&#x22; aria-expanded=&#x22;false&#x22;&#x3E;
//                         &#x3C;span class=&#x22;text&#x22;&#x3E;Compatibility&#x3C;/span&#x3E;
//                         &#x3C;span class=&#x22;icon-plus&#x22;&#x3E;&#x26;nbsp;&#x3C;/span&#x3E;
//                     &#x3C;/a&#x3E;
//                 &#x3C;/div&#x3E;
//                 &#x3C;div class=&#x22;toggle-content&#x22; id=&#x22;tab-compatibility-mobile&#x22; aria-hidden=&#x22;true&#x22;&#x3E;
//                     &#x3C;ul data-rte-list=&#x22;default&#x22;&#x3E;&#x3C;li&#x3E;&#x3C;p class=&#x22;&#x22; style=&#x22;white-space:pre-wrap;&#x22;&#x3E;Aerobar Two is bike-specific&#x3C;/p&#x3E;&#x3C;/li&#x3E;&#x3C;li&#x3E;&#x3C;p class=&#x22;&#x22; style=&#x22;white-space:pre-wrap;&#x22;&#x3E;For more details,&#x3C;a href=&#x22;https://drive.google.com/file/d/1E_DsUNvBLLnkQB5SkeM2tTzUmbQkyv02/view&#x22;&#x3E;&#x3C;/a&#x3E;&#x3C;/p&#x3E;&#x3C;/li&#x3E;&#x3C;/ul&#x3E;
//                 &#x3C;/div&#x3E;
//             &#x3C;/div&#x3E;
//             &#x3C;div class=&#x22;tab-content&#x22; id=&#x22;tab-pricing&#x22;&#x3E;
//                 &#x3C;div class=&#x22;tab__divider&#x22;&#x3E;&#x3C;/div&#x3E;
//                 &#x3C;div class=&#x22;toggle-title&#x22;&#x3E;
//                     &#x3C;a class=&#x22;toggleLink&#x22; data-collapsible=&#x22;&#x22; href=&#x22;#tab-pricing-mobile&#x22; aria-label=&#x22;Pricing&#x22; aria-controls=&#x22;tab-pricing-mobile&#x22; aria-expanded=&#x22;false&#x22;&#x3E;
//                         &#x3C;span class=&#x22;text&#x22;&#x3E;Pricing&#x3C;/span&#x3E;
//                         &#x3C;span class=&#x22;icon-plus&#x22;&#x3E;&#x26;nbsp;&#x3C;/span&#x3E;
//                     &#x3C;/a&#x3E;
//                 &#x3C;/div&#x3E;
//                 &#x3C;div class=&#x22;toggle-content&#x22; id=&#x22;tab-pricing-mobile&#x22; aria-hidden=&#x22;true&#x22;&#x3E;
//                     &#x3C;ul data-rte-list=&#x22;default&#x22;&#x3E;&#x3C;li&#x3E;&#x3C;p class=&#x22;&#x22; style=&#x22;white-space:pre-wrap;&#x22;&#x3E;6061 T6 aluminium extensions, shot peened and black anodised finish&#x3C;/p&#x3E;&#x3C;/li&#x3E;&#x3C;li&#x3E;&#x3C;p class=&#x22;&#x22; style=&#x22;white-space:pre-wrap;&#x22;&#x3E;6061 T6 aluminium extension clamps, CNC machined with black anodised finish&#x3C;/p&#x3E;&#x3C;/li&#x3E;&#x3C;li&#x3E;&#x3C;p class=&#x22;&#x22; style=&#x22;white-space:pre-wrap;&#x22;&#x3E;Injection molded arm cups, with press molded EVA foam pads&#x3C;/p&#x3E;&#x3C;/li&#x3E;&#x3C;li&#x3E;&#x3C;p class=&#x22;&#x22; style=&#x22;white-space:pre-wrap;&#x22;&#x3E;6061 T6 aluminium mounting components (Fit Kit), CNC machined with black anodised finish&#x3C;/p&#x3E;&#x3C;/li&#x3E;&#x3C;/ul&#x3E;
//                 &#x3C;/div&#x3E;
//             &#x3C;/div&#x3E;
//             &#x3C;div class=&#x22;tab-content&#x22; id=&#x22;tab-delivery&#x22;&#x3E;
//                 &#x3C;div class=&#x22;tab__divider&#x22;&#x3E;&#x3C;/div&#x3E;
//                 &#x3C;div class=&#x22;toggle-title&#x22;&#x3E;
//                     &#x3C;a class=&#x22;toggleLink&#x22; data-collapsible=&#x22;&#x22; href=&#x22;#tab-delivery-mobile&#x22; aria-label=&#x22;Delivery&#x22; aria-controls=&#x22;tab-delivery-mobile&#x22; aria-expanded=&#x22;false&#x22;&#x3E;
//                         &#x3C;span class=&#x22;text&#x22;&#x3E;Delivery&#x3C;/span&#x3E;
//                         &#x3C;span class=&#x22;icon-plus&#x22;&#x3E;&#x26;nbsp;&#x3C;/span&#x3E;
//                     &#x3C;/a&#x3E;
//                 &#x3C;/div&#x3E;
//                 &#x3C;div class=&#x22;toggle-content&#x22; id=&#x22;tab-delivery-mobile&#x22; aria-hidden=&#x22;true&#x22;&#x3E;
//                     &#x3C;ul data-rte-list=&#x22;default&#x22;&#x3E;&#x3C;li&#x3E;&#x3C;p class=&#x22;&#x22; style=&#x22;white-space:pre-wrap;&#x22;&#x3E;6061 T6 aluminium extensions, shot peened and black anodised finish&#x3C;/p&#x3E;&#x3C;/li&#x3E;&#x3C;li&#x3E;&#x3C;p class=&#x22;&#x22; style=&#x22;white-space:pre-wrap;&#x22;&#x3E;6061 T6 aluminium extension clamps, CNC machined with black anodised finish&#x3C;/p&#x3E;&#x3C;/li&#x3E;&#x3C;li&#x3E;&#x3C;p class=&#x22;&#x22; style=&#x22;white-space:pre-wrap;&#x22;&#x3E;Injection molded arm cups, with press molded EVA foam pads&#x3C;/p&#x3E;&#x3C;/li&#x3E;&#x3C;li&#x3E;&#x3C;p class=&#x22;&#x22; style=&#x22;white-space:pre-wrap;&#x22;&#x3E;6061 T6 aluminium mounting components (Fit Kit), CNC machined with black anodised finish&#x3C;/p&#x3E;&#x3C;/li&#x3E;&#x3C;/ul&#x3E;
//                 &#x3C;/div&#x3E;
//                 &#x3C;div class=&#x22;tab__divider&#x22;&#x3E;&#x3C;/div&#x3E;
//             &#x3C;/div&#x3E;`;
//         },
//         form: (counter=0) => {
//             return `
//                 <div class="card">
//                     <div class="card-header" id="headingOne">
//                         <h2 class="mb-0">
//                             <button class="btn-link" type="button" data-toggle="collapse"
//                                 data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                                 Layout Image Left
//                             </button>
//                         </h2>
//                         <div class="delete-btns" data-delete="${counter}">Delete</div>
//                     </div>
//                     <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
//                         data-parent="#layoutImageBanner">
//                         <div class="card-body">
//                             <div class="form-group">
//                                 <label for="input_image${counter}">Image</label>
//                                 <input data-fields="${counter}" type="text" class="form-control form-genderator-code-img"
//                                     id="input_image${counter}" placeholder="Example: https://placehold.it/960x900"
//                                     oninput="genderator_code(this.value, 1)">
//                             </div>
//                             <div class="form-group">
//                                 <label for="input_image${counter}_1">Image</label>
//                                 <input data-fields="${counter}_1" type="text" class="form-control form-genderator-code-img"
//                                     id="input_image${counter}_1" placeholder="Example: https://placehold.it/960x900"
//                                     oninput="genderator_code(this.value, 1)">
//                             </div>
//                             <div class="form-group form-group-richtext" data-index-card="${counter}">
//                                 <label for="input_title${counter}_0">Content</label>
//                                 <div id="table-toolbar-${counter}_0" class="editor-table-toolbar">
//                                     <button class="insert-table">Insert Table</button>
//                                     <button class="insert-row-above">Insert Row Above</button>
//                                     <button class="insert-row-below">Insert Row Below</button>
//                                     <button class="insert-column-left">Insert Column Left</button>
//                                     <button class="insert-column-right">Insert Column Right</button>
//                                     <button class="delete-row">Delete Row</button>
//                                     <button class="delete-column">Delete Column</button>
//                                     <button class="delete-table">Delete Table</button>
//                                 </div>
//                                 <div id="editor${counter}_0"></div>
//                                 <div data-fields="richtext_value${counter}_0" id="richtext_value${counter}_0" class="richtext_value${counter}_0" data=""></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             `;
//         },
//     },
//     image_right: {
//         code: (counter) => {
//             return `&#x9;&#x9;&#x3C;div class=&#x22;layout-img layout-img-right&#x22; data-layout=&#x22;1&#x22;&#x3E;
// &#x9;&#x9;&#x9;&#x3C;div class=&#x22;img-wraper&#x22;&#x3E;
// &#x9;&#x9;&#x9;&#x9;&#x3C;img class=&#x22;img-tag lazyload&#x22; src=&#x22;{{image_${counter}}}&#x22; alt=&#x22;&#x22; title=&#x22;&#x22;/&#x3E;
// &#x9;&#x9;&#x9;&#x3C;/div&#x3E;
// &#x9;&#x9;&#x9;&#x3C;div class=&#x22;content&#x22;&#x3E;
// &#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;content-inner&#x22;&#x3E;
// &#x9;&#x9;&#x9;&#x9;&#x9{{richtext_value${counter}}}
// &#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
// &#x9;&#x9;&#x9;&#x3C;/div&#x3E;
// &#x9;&#x9;&#x3C;/div&#x3E;`;
//         },
//         form: (counter) => {
//             return `
//                 <div class="card">
//                     <div class="card-header" id="headingOne">
//                         <h2 class="mb-0">
//                             <button class="btn-link" type="button" data-toggle="collapse"
//                                 data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                                 Layout Image Right
//                             </button>
//                         </h2>
//                         <div class="delete-btns" data-delete="${counter}">Delete</div>
//                     </div>
//                     <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
//                         data-parent="#layoutImageBanner">
//                         <div class="card-body">
//                             <div class="form-group">
//                                 <label for="image_${counter}">Image</label>
//                                 <input type="text" class="form-control form-genderator-code-img" data-fields
//                                     id="image_${counter}" placeholder="Example: https://placehold.it/960x900"
//                                     oninput="genderator_code(this.value, 1)">
//                             </div>
//                             <div class="form-group">
//                                 <label for="input_title${counter}">Content</label>
//                                 <div id="editor${counter}"></div>
//                                 <div data-fields id="richtext_value${counter}" class="richtext_value${counter}" data=""></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             `;
//         },
//     },
//     image_full: {
//         code: (counter) => {
//             return `&#x9;&#x9;&#x3C;div class=&#x22;layout-img-full&#x22; data-layout=&#x22;1&#x22;&#x3E;
// &#x9;&#x9;&#x9;&#x3C;div class=&#x22;img-wraper&#x22;&#x3E;
// &#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;img class=&#x22;img-tag lazyload&#x22; src=&#x22;{{image_${counter}}}&#x22; alt=&#x22;&#x22; title=&#x22;&#x22;/&#x3E;
// &#x9;&#x9;&#x9;&#x3C;/div&#x3E;
// &#x9;&#x9;&#x3C;/div&#x3E;`;
//         },
//         form: (counter) => {
//             return `
//                 <div class="card">
//                     <div class="card-header" id="headingOne">
//                         <h2 class="mb-0">
//                             <button class="btn-link" type="button" data-toggle="collapse"
//                                 data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                                 Layout Image Full
//                             </button>
//                         </h2>
//                         <div class="delete-btns" data-delete="${counter}">Delete</div>
//                     </div>
//                     <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
//                         data-parent="#layoutImageBanner">
//                         <div class="card-body">
//                             <div class="form-group">
//                                 <label for="image_${counter}">Image</label>
//                                 <input type="text" class="form-control form-genderator-code-img" data-fields
//                                     id="image_${counter}" placeholder="Example: https://placehold.it/960x900"
//                                     oninput="genderator_code(this.value, 1)">
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             `;
//         },
//     },
//     text_full: {
//         code: (counter) => {
//             return `&#x9;&#x9;&#x3C;div class=&#x22;layout-text-full&#x22; data-layout=&#x22;1&#x22;&#x3E;
// &#x9;&#x9;&#x9;&#x3C;div class=&#x22;text-wraper&#x22;&#x3E;
// &#x9;&#x9;&#x9;&#x9{{richtext_value${counter}}}
// &#x9;&#x9;&#x9;&#x3C;/div&#x3E;
// &#x9;&#x9;&#x3C;/div&#x3E;`;
//         },
//         form: (counter) => {
//             return `
//                 <div class="card">
//                     <div class="card-header" id="headingOne">
//                         <h2 class="mb-0">
//                             <button class="btn-link" type="button" data-toggle="collapse"
//                                 data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                                 Layout Text Full
//                             </button>
//                         </h2>
//                         <div class="delete-btns" data-delete="${counter}">Delete</div>
//                     </div>
//                     <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
//                         data-parent="#layoutImageBanner">
//                         <div class="card-body">
//                             <div class="form-group">
//                                 <label for="input_title${counter}">Content</label>
//                                 <div id="editor${counter}"></div>
//                                 <div data-fields id="richtext_value${counter}" class="richtext_value${counter}" data=""></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             `;
//         },
//     },
// };

var layouts = {};

function read_file() {
    return new Promise((resolve, reject) => {
        const location = getLocationURL();
        var file = `${location}/assets/templates_code/tool_config.json`;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", file, true);
        xmlhttp.onreadystatechange = function ()
        {
            if(xmlhttp.readyState === 4)
            {
                if(xmlhttp.status === 200 || xmlhttp.status == 0)
                {
                    const layoutArr = JSON.parse(xmlhttp.responseText);
                    layoutArr.forEach((ele, index) => {
                        const layoutCode = ele.layout.toLowerCase().replace(/\s+/g, '_');
                        const location = getLocationURL();
                        const codeTemplateURL = `${location}/${ele.code}`;
                        
                        if (ele.code !== "") {
                            $("#layout-selector").append(`<option value="${layoutCode}">${ele.layout}</option>`);
                            getTemplate(codeTemplateURL)
                                .then(function (response) {
                                    const codeTemplate = $(".code-template", $(`<div>${response}</div>`)).html();
                                    const formTemplate = $(".form-template", $(`<div>${response}</div>`)).html();
                                    const codeTemplateEncoded = encode(codeTemplate);
                                    layouts[layoutCode] = {
                                        code: (counter = 0) => {
                                            return codeTemplateEncoded.replaceAll("${counter}", counter);
                                        },
                                        form: (counter=0) => {
                                            return formTemplate.replaceAll("${counter}", counter);;
                                        },
                                    }
                                })
                                .catch(function (error) {
                                    reject("Failed to get template code");
                                    console.error('Error:', error);
                                });
                        }
                    });
                    resolve("Done")
                }
            }
        }
        xmlhttp.send(null);
    });
}

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

$(document).ready(function () {
    getLocationURL();
    // genderator_code();
    read_file().then(function (response) {
        // Get container ID
        const containerArr = layout_container.split("data-container-");
        const [containerId, ...rest] = containerArr[1].split(" ");
        var clipboard = new ClipboardJS('.btn-clone-html');
        
        $("code.html").html("Your code will be rendered here");
        $("#layout-selector").on("change", function (e) {
            const selectedLayout = this.value;
            const formCode = layouts[selectedLayout].form();
            const layoutCode = layouts[selectedLayout].code();
            $(`#${containerId}`).append(formCode);
    
            let layout_container_array = [layoutCode];
            // for (let i = 0; i < layout_container.length; i++) {
            //     if (layout_container_array[i] === "") {
            //         layout_container_array.splice(i, 0, layoutCode);
            //         break;
            //     }
            // }
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
                    var quill = new Quill(`#editor${dataIndexCard}_${i}`, {
                        modules: {
                            table: true,
                            toolbar: toolbarOptions
                        },
                        theme: "snow",
                    });
                    quill.on("text-change", function () {
                        let content = quill.root.innerHTML
                            .replaceAll("<", "&#x3C;")
                            .replaceAll(">", "&#x3E;")
                            .replaceAll("   ", "&#x9;")
                            .replaceAll('"', "&#x22;");
        
                        $(`.richtext_value${dataIndexCard}_${i}`).attr("data", content);
                        genderator_code();
                    });
                }
        
                const table = quill.getModule('table');
    
                $('.insert-table', $(item)).on('click', function (e) {
                    e.preventDefault();
                    $(`#editor${dataIndexCard}_${i} .ql-editor`).trigger('focus');
                    table.insertTable(2, 2);
                });
                $('.insert-row-above', $(item)).on('click', function (e) {
                    e.preventDefault();
                    table.insertRowAbove();
                });
                $('.insert-row-below', $(item)).on('click', function (e) {
                    e.preventDefault();
                    table.insertRowBelow();
                });
                $('.insert-column-left', $(item)).on('click', function (e) {
                    e.preventDefault();
                    table.insertColumnLeft();
                });
                $('.insert-column-right', $(item)).on('click', function (e) {
                    e.preventDefault();
                    table.insertColumnRight();
                });
                $('.delete-row', $(item)).on('click', function (e) {
                    e.preventDefault();
                    table.deleteRow();
                });
                $('.delete-column', $(item)).on('click', function (e) {
                    e.preventDefault();
                    table.deleteColumn();
                });
                $('.delete-table', $(item)).on('click', function (e) {
                    e.preventDefault();
                    table.deleteTable();
                });
    
            })
    
    
            // Handle delete card
            if ($(".delete-btns").length > 1) {
                $(".delete-btns").each((i, item) => {
                    $(item).on("click", function (e) {
                        const dataDelete = $(this).attr("data-delete");
                        let newLayoutContainer = layout_container;
                        newLayoutContainer = newLayoutContainer.replace(
                            `${layouts[selectedLayout].code(dataDelete)}\n`,
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
                        .split(`${layouts[selectedLayout].code(dataDelete)}\n`)
                        .join("");
                    layout_container = newLayoutContainer;
                    $("code.html").html(newLayoutContainer);
                    $(
                        `.card:has(.delete-btns[data-delete="${dataDelete}"])`
                    ).remove();
    
                    // Clear
                    $(`#${containerId} input`).val("");
                    $(`.ql-editor`).html("");
                    $("code.html").html("Your code will be rendered here");
                });
            }
    
            // Reset value when select new layout
            $("#layout-selector").val("");
            $(`#${containerId} input`).val("");
            $(`.ql-editor`).html("");
        });
    }).catch(function (error) {
        reject("Failed to get template code");
        console.error('Error:', error);
    });

});
