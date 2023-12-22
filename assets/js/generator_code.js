var html_code = `
    <div class="themevale_homepage_banner_two_images_1 themevale_homepage_banner_two_images padding-top-50">
	<div class="banner-list two-column">
		<div class="banner-item">
			<div class="img">
				<div class="card-img-container">
					<img class="card-image lazyload" data-src="{{image_1}}" alt="" title=""/>
				</div>
			</div>
			<div class="content">
				<div class="content-inner">
					<h3 class="title">{{title_1}}</h3>
					<h5 class="sub-title">{{heading_title_1}}</h5>
					<a class="button button--banner" href="{{link_1}}">{{button_1}}</a>
					<a class="link animate-hvr" title="" href="{{link_1}}">Link</a>
				</div>
			</div>
		</div>
		<div class="banner-item">
			<div class="img">
				<div class="card-img-container">
					<img class="card-image lazyload" data-src="{{image_2}}" alt="" title=""/>
				</div>
			</div>
			<div class="content">
				<div class="content-inner">
					<h3 class="title">{{title_2}}</h3>
					<h5 class="sub-title">{{heading_title_2}}</h5>
					<a class="button button--banner" href="{{link_2}}">{{button_2}}</a>
					<a class="link animate-hvr" title="" href="{{link_2}}">Link</a>
				</div>
			</div>
		</div>
	</div>
</div>
`;
var layout_container = `
    &#x3C;div data-container-layoutImageBanner class=&#x22;layout-banner-container&#x22;&#x3E;
    &#x9;&#x3C;div class=&#x22;layout-banner-list&#x22;&#x3E;

    &#x9;&#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
`;

var layouts = {
    img_left: {
        code: (counter) => {
            return `
            &#x3C;div class=&#x22;tab-content&#x22; id=&#x22;tab-materials&#x22;&#x3E;
                &#x3C;div class=&#x22;tab__divider&#x22;&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;toggle-title&#x22;&#x3E;
                    &#x3C;a class=&#x22;toggleLink&#x22; data-collapsible=&#x22;&#x22; href=&#x22;#tab-materials-mobile&#x22; aria-label=&#x22;Materials&#x22; aria-controls=&#x22;tab-materials-mobile&#x22; aria-expanded=&#x22;false&#x22;&#x3E;
                        &#x3C;span class=&#x22;text&#x22;&#x3E;
                            Materials
                            &#x3C;/span&#x3E;
                        &#x3C;span class=&#x22;icon-plus&#x22;&#x3E;&#x26;nbsp;&#x3C;/span&#x3E;
                    &#x3C;/a&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;toggle-content&#x22; id=&#x22;tab-materials-mobile&#x22; aria-hidden=&#x22;true&#x22;&#x3E;
                    {{image_${counter}}}
                &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;tab-content&#x22; id=&#x22;tab-availability&#x22;&#x3E;
                &#x3C;div class=&#x22;tab__divider&#x22;&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;toggle-title&#x22;&#x3E;
                    &#x3C;a class=&#x22;toggleLink&#x22; data-collapsible=&#x22;&#x22; href=&#x22;#tab-availability-mobile&#x22; aria-label=&#x22;Availability&#x22; aria-controls=&#x22;tab-availability-mobile&#x22; aria-expanded=&#x22;false&#x22;&#x3E;
                        &#x3C;span class=&#x22;text&#x22;&#x3E;Availability&#x3C;/span&#x3E;
                        &#x3C;span class=&#x22;icon-plus&#x22;&#x3E;&#x26;nbsp;&#x3C;/span&#x3E;
                    &#x3C;/a&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;toggle-content&#x22; id=&#x22;tab-availability-mobile&#x22; aria-hidden=&#x22;true&#x22;&#x3E;
                    {{content_richtext_${counter}}}
                &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;tab-content&#x22; id=&#x22;tab-compatibility&#x22;&#x3E;
                &#x3C;div class=&#x22;tab__divider&#x22;&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;toggle-title&#x22;&#x3E;
                    &#x3C;a class=&#x22;toggleLink&#x22; data-collapsible=&#x22;&#x22; href=&#x22;#tab-compatibility-mobile&#x22; aria-label=&#x22;Compatibility&#x22; aria-controls=&#x22;tab-compatibility-mobile&#x22; aria-expanded=&#x22;false&#x22;&#x3E;
                        &#x3C;span class=&#x22;text&#x22;&#x3E;Compatibility&#x3C;/span&#x3E;
                        &#x3C;span class=&#x22;icon-plus&#x22;&#x3E;&#x26;nbsp;&#x3C;/span&#x3E;
                    &#x3C;/a&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;toggle-content&#x22; id=&#x22;tab-compatibility-mobile&#x22; aria-hidden=&#x22;true&#x22;&#x3E;
                    &#x3C;ul data-rte-list=&#x22;default&#x22;&#x3E;&#x3C;li&#x3E;&#x3C;p class=&#x22;&#x22; style=&#x22;white-space:pre-wrap;&#x22;&#x3E;Aerobar Two is bike-specific&#x3C;/p&#x3E;&#x3C;/li&#x3E;&#x3C;li&#x3E;&#x3C;p class=&#x22;&#x22; style=&#x22;white-space:pre-wrap;&#x22;&#x3E;For more details,&#x3C;a href=&#x22;https://drive.google.com/file/d/1E_DsUNvBLLnkQB5SkeM2tTzUmbQkyv02/view&#x22;&#x3E;&#x3C;/a&#x3E;&#x3C;/p&#x3E;&#x3C;/li&#x3E;&#x3C;/ul&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;tab-content&#x22; id=&#x22;tab-pricing&#x22;&#x3E;
                &#x3C;div class=&#x22;tab__divider&#x22;&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;toggle-title&#x22;&#x3E;
                    &#x3C;a class=&#x22;toggleLink&#x22; data-collapsible=&#x22;&#x22; href=&#x22;#tab-pricing-mobile&#x22; aria-label=&#x22;Pricing&#x22; aria-controls=&#x22;tab-pricing-mobile&#x22; aria-expanded=&#x22;false&#x22;&#x3E;
                        &#x3C;span class=&#x22;text&#x22;&#x3E;Pricing&#x3C;/span&#x3E;
                        &#x3C;span class=&#x22;icon-plus&#x22;&#x3E;&#x26;nbsp;&#x3C;/span&#x3E;
                    &#x3C;/a&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;toggle-content&#x22; id=&#x22;tab-pricing-mobile&#x22; aria-hidden=&#x22;true&#x22;&#x3E;
                    &#x3C;ul data-rte-list=&#x22;default&#x22;&#x3E;&#x3C;li&#x3E;&#x3C;p class=&#x22;&#x22; style=&#x22;white-space:pre-wrap;&#x22;&#x3E;6061 T6 aluminium extensions, shot peened and black anodised finish&#x3C;/p&#x3E;&#x3C;/li&#x3E;&#x3C;li&#x3E;&#x3C;p class=&#x22;&#x22; style=&#x22;white-space:pre-wrap;&#x22;&#x3E;6061 T6 aluminium extension clamps, CNC machined with black anodised finish&#x3C;/p&#x3E;&#x3C;/li&#x3E;&#x3C;li&#x3E;&#x3C;p class=&#x22;&#x22; style=&#x22;white-space:pre-wrap;&#x22;&#x3E;Injection molded arm cups, with press molded EVA foam pads&#x3C;/p&#x3E;&#x3C;/li&#x3E;&#x3C;li&#x3E;&#x3C;p class=&#x22;&#x22; style=&#x22;white-space:pre-wrap;&#x22;&#x3E;6061 T6 aluminium mounting components (Fit Kit), CNC machined with black anodised finish&#x3C;/p&#x3E;&#x3C;/li&#x3E;&#x3C;/ul&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;tab-content&#x22; id=&#x22;tab-delivery&#x22;&#x3E;
                &#x3C;div class=&#x22;tab__divider&#x22;&#x3E;&#x3C;/div&#x3E;
                &#x3C;div class=&#x22;toggle-title&#x22;&#x3E;
                    &#x3C;a class=&#x22;toggleLink&#x22; data-collapsible=&#x22;&#x22; href=&#x22;#tab-delivery-mobile&#x22; aria-label=&#x22;Delivery&#x22; aria-controls=&#x22;tab-delivery-mobile&#x22; aria-expanded=&#x22;false&#x22;&#x3E;
                        &#x3C;span class=&#x22;text&#x22;&#x3E;Delivery&#x3C;/span&#x3E;
                        &#x3C;span class=&#x22;icon-plus&#x22;&#x3E;&#x26;nbsp;&#x3C;/span&#x3E;
                    &#x3C;/a&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;toggle-content&#x22; id=&#x22;tab-delivery-mobile&#x22; aria-hidden=&#x22;true&#x22;&#x3E;
                    &#x3C;ul data-rte-list=&#x22;default&#x22;&#x3E;&#x3C;li&#x3E;&#x3C;p class=&#x22;&#x22; style=&#x22;white-space:pre-wrap;&#x22;&#x3E;6061 T6 aluminium extensions, shot peened and black anodised finish&#x3C;/p&#x3E;&#x3C;/li&#x3E;&#x3C;li&#x3E;&#x3C;p class=&#x22;&#x22; style=&#x22;white-space:pre-wrap;&#x22;&#x3E;6061 T6 aluminium extension clamps, CNC machined with black anodised finish&#x3C;/p&#x3E;&#x3C;/li&#x3E;&#x3C;li&#x3E;&#x3C;p class=&#x22;&#x22; style=&#x22;white-space:pre-wrap;&#x22;&#x3E;Injection molded arm cups, with press molded EVA foam pads&#x3C;/p&#x3E;&#x3C;/li&#x3E;&#x3C;li&#x3E;&#x3C;p class=&#x22;&#x22; style=&#x22;white-space:pre-wrap;&#x22;&#x3E;6061 T6 aluminium mounting components (Fit Kit), CNC machined with black anodised finish&#x3C;/p&#x3E;&#x3C;/li&#x3E;&#x3C;/ul&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;tab__divider&#x22;&#x3E;&#x3C;/div&#x3E;
            &#x3C;/div&#x3E;`;
        },
        form: (counter) => {
            return `
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn-link" type="button" data-toggle="collapse"
                                data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Layout Image Left
                            </button>
                        </h2>
                        <div class="delete-btns" data-delete="${counter}">Delete</div>
                    </div>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                        data-parent="#layoutImageBanner">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="input_image${counter}">Image</label>
                                <input type="text" class="form-control form-genderator-code-img"
                                    id="input_image${counter}" placeholder="Example: https://placehold.it/960x900"
                                    oninput="genderator_code(this.value, 1)">
                            </div>
                            <div class="form-group">
                                <label for="input_title${counter}">Content</label>
                                <div id="editor${counter}"></div>
                                <div class="richtext_value${counter}" data=""></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        },
    },
    img_right: {
        code: (counter) => {
            return `&#x9;&#x9;&#x3C;div class=&#x22;layout-img layout-img-right&#x22; data-layout=&#x22;1&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x3C;div class=&#x22;img-wraper&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;img class=&#x22;img-tag lazyload&#x22; src=&#x22;{{image_${counter}}}&#x22; alt=&#x22;&#x22; title=&#x22;&#x22;/&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;div class=&#x22;content&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x3C;div class=&#x22;content-inner&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9{{content_richtext_${counter}}}
&#x9;&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x3C;/div&#x3E;`;
        },
        form: (counter) => {
            return `
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn-link" type="button" data-toggle="collapse"
                                data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Layout Image Right
                            </button>
                        </h2>
                        <div class="delete-btns" data-delete="${counter}">Delete</div>
                    </div>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                        data-parent="#layoutImageBanner">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="input_image${counter}">Image</label>
                                <input type="text" class="form-control form-genderator-code-img"
                                    id="input_image${counter}" placeholder="Example: https://placehold.it/960x900"
                                    oninput="genderator_code(this.value, 1)">
                            </div>
                            <div class="form-group">
                                <label for="input_title${counter}">Content</label>
                                <div id="editor${counter}"></div>
                                <div class="richtext_value${counter}" data=""></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        },
    },
    img_full: {
        code: (counter) => {
            return `&#x9;&#x9;&#x3C;div class=&#x22;layout-img-full&#x22; data-layout=&#x22;1&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x3C;div class=&#x22;img-wraper&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9;&#x9;&#x3C;img class=&#x22;img-tag lazyload&#x22; src=&#x22;{{image_${counter}}}&#x22; alt=&#x22;&#x22; title=&#x22;&#x22;/&#x3E;
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x3C;/div&#x3E;`;
        },
        form: (counter) => {
            return `
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn-link" type="button" data-toggle="collapse"
                                data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Layout Image Full
                            </button>
                        </h2>
                        <div class="delete-btns" data-delete="${counter}">Delete</div>
                    </div>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                        data-parent="#layoutImageBanner">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="input_image${counter}">Image</label>
                                <input type="text" class="form-control form-genderator-code-img"
                                    id="input_image${counter}" placeholder="Example: https://placehold.it/960x900"
                                    oninput="genderator_code(this.value, 1)">
                            </div>
                        </div>
                    </div>
                </div>
            `;
        },
    },
    text_full: {
        code: (counter) => {
            return `&#x9;&#x9;&#x3C;div class=&#x22;layout-text-full&#x22; data-layout=&#x22;1&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x3C;div class=&#x22;text-wraper&#x22;&#x3E;
&#x9;&#x9;&#x9;&#x9{{content_richtext_${counter}}}
&#x9;&#x9;&#x9;&#x3C;/div&#x3E;
&#x9;&#x9;&#x3C;/div&#x3E;`;
        },
        form: (counter) => {
            return `
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn-link" type="button" data-toggle="collapse"
                                data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Layout Text Full
                            </button>
                        </h2>
                        <div class="delete-btns" data-delete="${counter}">Delete</div>
                    </div>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                        data-parent="#layoutImageBanner">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="input_title${counter}">Content</label>
                                <div id="editor${counter}"></div>
                                <div class="richtext_value${counter}" data=""></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        },
    },
};

function read_file() {
    // var file = $('.highlight-code').attr('include');
    // var xmlhttp = new XMLHttpRequest();
    // xmlhttp.open("GET", file, true);
    // xmlhttp.onreadystatechange = function ()
    // {
    //     if(xmlhttp.readyState === 4)
    //     {
    //         if(xmlhttp.status === 200 || xmlhttp.status == 0)
    //         {
    //             html_code = xmlhttp.responseText;
    //             $('code.html').html(html_code);
    //         }
    //     }
    // }
    // xmlhttp.send(null);
    $("code.html").html(layout_container);
}

function genderator_click() {
    read_file();
    console.log("genderator_click");
    $(".btn-generator").on("click", function () {
        $(this)
            .next()
            .find(".code_genderator")
            .attr("id", "code_genderator_start");
        read_file();
    });

    $(".modal .close").on("click", function () {
        $(".code_genderator").removeAttr("id");
    });

    $(".modal").on("hidden.bs.modal", function (e) {
        $(".code_genderator").removeAttr("id");
    });

    var clipboard = new ClipboardJS(".btn-clone-html");
}
function genderator_code(value, position) {
    var html = layout_container;
    $(".card").each(function (i) {
        html = html.split("{{link_" + (i + 1) + "}}").join(
            $(this)
                .find("#input_url" + (i + 1))
                .val()
        );
        html = html.split("{{link_image_" + (i + 1) + "}}").join(
            $(this)
                .find("#input_url_image" + (i + 1))
                .val()
        );
        html = html.split("{{image_" + (i + 1) + "}}").join(
            $(this)
                .find("#input_image" + (i + 1))
                .val()
        );
        html = html.split("{{option1_" + (i + 1) + "}}").join(
            $(this)
                .find("#input_option1" + (i + 1))
                .val()
        );
        html = html.split("{{option2_" + (i + 1) + "}}").join(
            $(this)
                .find("#input_option2" + (i + 1))
                .val()
        );
        html = html.split("{{option3_" + (i + 1) + "}}").join(
            $(this)
                .find("#input_option3" + (i + 1))
                .val()
        );
        html = html.split("{{option4_" + (i + 1) + "}}").join(
            $(this)
                .find("#input_option4" + (i + 1))
                .val()
        );
        html = html.split("{{id_" + (i + 1) + "}}").join(
            $(this)
                .find("#input_id" + (i + 1))
                .val()
        );

        html = html
            .split("{{content_richtext_" + (i + 1) + "}}")
            .join($(`.richtext_value${i + 1}`).attr("data"));
        html = html.split("{{title_" + (i + 1) + "}}").join(
            $(this)
                .find("#input_title" + (i + 1))
                .val()
        );
        html = html.split("{{heading_title_" + (i + 1) + "}}").join(
            $(this)
                .find("#input_heading_title" + (i + 1))
                .val()
        );

        html = html.replace(
            "{{link_text_" + (i + 1) + "}}",
            $(this)
                .find("#input_link_text" + (i + 1))
                .val()
        );

        html = html.replace(
            "{{image_star_" + (i + 1) + "}}",
            $(this)
                .find("#input_image_star" + (i + 1))
                .val()
        );
        html = html.replace(
            "{{label_" + (i + 1) + "}}",
            $(this)
                .find("#input_label" + (i + 1))
                .val()
        );

        html = html.replace(
            "{{button_" + (i + 1) + "}}",
            $(this)
                .find("#input_button" + (i + 1))
                .val()
        );
        html = html.replace(
            "{{countdown_" + (i + 1) + "}}",
            $(this)
                .find("#input_countdown" + (i + 1))
                .val()
        );
        html = html.replace(
            "{{description_" + (i + 1) + "}}",
            $(this)
                .find("#input_description" + (i + 1))
                .val()
        );

        html = html.replace(
            "{{button_view_all_" + (i + 1) + "}}",
            $(this)
                .find("#input_button_view_all" + (i + 1))
                .val()
        );
        html = html.replace(
            "{{button_view_all_link_" + (i + 1) + "}}",
            $(this)
                .find("#input_button_view_all_link" + (i + 1))
                .val()
        );
        html = html.replace(
            "{{id_product_" + (i + 1) + "}}",
            $(this)
                .find("#id_product" + (i + 1))
                .val()
        );
        html = html.replace(
            "{{id_product2_" + (i + 1) + "}}",
            $(this)
                .find("#id_product2" + (i + 1))
                .val()
        );
        html = html.replace(
            "{{id_product3_" + (i + 1) + "}}",
            $(this)
                .find("#id_product3" + (i + 1))
                .val()
        );
        html = html.replace(
            "{{position_top_" + (i + 1) + "}}",
            $(this)
                .find("#position_top" + (i + 1))
                .val()
        );
        html = html.replace(
            "{{position_left_" + (i + 1) + "}}",
            $(this)
                .find("#position_left" + (i + 1))
                .val()
        );
        html = html.replace(
            "{{position_top2_" + (i + 1) + "}}",
            $(this)
                .find("#position_top2" + (i + 1))
                .val()
        );
        html = html.replace(
            "{{position_left2_" + (i + 1) + "}}",
            $(this)
                .find("#position_left2" + (i + 1))
                .val()
        );
        html = html.replace(
            "{{position_top3_" + (i + 1) + "}}",
            $(this)
                .find("#position_top3" + (i + 1))
                .val()
        );
        html = html.replace(
            "{{position_left3_" + (i + 1) + "}}",
            $(this)
                .find("#position_left3" + (i + 1))
                .val()
        );
    });
    $("code.html").html(html);
}

$(document).ready(function () {
    // genderator_code();
    genderator_click();

    // Get container ID
    const containerArr = layout_container.split("data-container-");
    const [containerId, ...rest] = containerArr[1].split(" ");

    $("#layout-selector").on("change", function (e) {
        const selectedLayout = this.value;
        const lengthCard = $(`#${containerId} .card`).length;
        const formCode = layouts[selectedLayout].form(lengthCard + 1);
        const layoutCode = layouts[selectedLayout].code(lengthCard + 1);

        $(`#${containerId}`).html("");
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

        var toolbarOptions = [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'align': [] }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            ['clean']                                         // remove formatting button
          ];

        // Get data from richtext quill
        if ($(`#editor${lengthCard + 1}`).length) {
            var quill = new Quill(`#editor${lengthCard + 1}`, {
                modules: {
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

                $(`.richtext_value${lengthCard + 1}`).attr("data", content);
                genderator_code();
            });
        }

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
                console.log("card", $(".card")[dataDelete - 1]);
                $(
                    `.card:has(.delete-btns[data-delete="${dataDelete}"])`
                ).remove();

                // Clear
                $(`#${containerId} input`).val("");
                $(`.ql-editor`).html("");
            });
        }

        // Reset value when select new layout
        $("#layout-selector").val("");
        $(`#${containerId} input`).val("");
        $(`.ql-editor`).html("");
    });
});
