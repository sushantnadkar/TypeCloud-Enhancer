setTimeout(function() {

    triggerMouseEvent (document.querySelector ("#mceu_0"), "click");
    var text55 = $("span#mceu_59-text").text();
    var text56 = $("span#mceu_60-text").text();
    var text57 = $("span#mceu_61-text").text();
    var text58 = $("span#mceu_61-text").text();
    var text59 = $("span#mceu_63-text").text();
    var h1, h2, h3, h4, para, cb, frb, bq, t, ib;

    if(text55 == "Heading 1") {
        h1 = "#mceu_55";
        h2 = "#mceu_56";
        h3 = "#mceu_57";
        h4 = "#mceu_58";
        para = "#mceu_59";
        cb = "#mceu_60";
        frb = "#mceu_61";
        bq = "#mceu_62";
        t = "#mceu_63";
        ib = "#mceu_64";
    } else if(text56 == "Heading 1") {
        h1 = "#mceu_56";
        h2 = "#mceu_57";
        h3 = "#mceu_58";
        h4 = "#mceu_59";
        para = "#mceu_60";
        cb = "#mceu_61";
        frb = "#mceu_62";
        bq = "#mceu_63";
        t = "#mceu_64";
        ib = "#mceu_65";
    } else if (text57 == "Heading 1") {
        h1 = "#mceu_57";
        h2 = "#mceu_58";
        h3 = "#mceu_59";
        h4 = "#mceu_60";
        para = "#mceu_61";
        cb = "#mceu_62";
        frb = "#mceu_63";
        bq = "#mceu_64";
        t = "#mceu_65";
        ib = "#mceu_66";
    } else if (text58 == "Heading 1") {
        h1 = "#mceu_58";
        h2 = "#mceu_59";
        h3 = "#mceu_60";
        h4 = "#mceu_61";
        para = "#mceu_62";
        cb = "#mceu_63";
        frb = "#mceu_64";
        bq = "#mceu_65";
        t = "#mceu_66";
        ib = "#mceu_67";
    } else if (text59 == "Heading 1") {
        h1 = "#mceu_59";
        h2 = "#mceu_60";
        h3 = "#mceu_61";
        h4 = "#mceu_62";
        para = "#mceu_63";
        cb = "#mceu_64";
        frb = "#mceu_65";
        bq = "#mceu_66";
        t = "#mceu_67";
        ib = "#mceu_68";
    }
    triggerMouseEvent (document.querySelector ("#mceu_0"), "click");
    //event listner
    tinyMCE.activeEditor.on('keydown', function(e) {
        if(e.altKey && e.keyCode === 49) { //Alt + 1   heading level 1
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_0"), "click");
            setTimeout(function(){
                triggerMouseEvent (document.querySelector (h1), "click");
            }, 200);
            $("div").remove('#docmap');
            setTimeout(function(){drawDocMap();}, 200);
        }
        if(e.altKey && e.keyCode === 50) { //Alt + 2   heading level 2
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_0"), "click");
            setTimeout(function(){
                triggerMouseEvent (document.querySelector (h2), "click");
            }, 200);
            $("div").remove('#docmap');
            setTimeout(function(){drawDocMap();}, 200);
        }
        if(e.altKey && e.keyCode === 51) { //Alt + 3   heading level 3
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_0"), "click");
            setTimeout(function(){
                triggerMouseEvent (document.querySelector (h3), "click");
            }, 200);
            $("div").remove('#docmap');
            setTimeout(function(){drawDocMap();}, 200);
        }
        if(e.altKey && e.keyCode === 52) { //Alt + 4   heading level 4
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_0"), "click");
            setTimeout(function(){
                triggerMouseEvent (document.querySelector (h4), "click");
            }, 200);
            $("div").remove('#docmap');
            setTimeout(function(){drawDocMap();}, 200);
        }
        if(e.altKey && e.keyCode == 80) { //Alt + P   Paragraph
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_0"), "click");
            setTimeout(function(){
                triggerMouseEvent (document.querySelector (para), "click");
            }, 200);$("div").remove('#docmap');
            setTimeout(function(){drawDocMap();}, 200);
        }
        if(e.altKey && e.keyCode == 87) { //Alt + W   Code Block
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_0"), "click");
            setTimeout(function(){
                triggerMouseEvent (document.querySelector (cb), "click");
            }, 200);
        }
        if(e.altKey && e.keyCode == 70) { //Alt + F   Figure Ref Block
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_0"), "click");
            setTimeout(function(){
                triggerMouseEvent (document.querySelector (frb), "click");
                triggerMouseEvent (document.querySelector ("#mceu_16"), "click");
            }, 200);
        }
        if(e.altKey && e.keyCode == 81) { //Alt + Q   Blockquote
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_0"), "click");
            setTimeout(function(){
                triggerMouseEvent (document.querySelector (bq), "click");
            }, 200);
        }
        if(e.altKey && e.keyCode == 84) { //Alt + T   Tip
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_0"), "click");
            setTimeout(function(){
                triggerMouseEvent (document.querySelector (t), "click");
            }, 200);
        }
        if(e.altKey && e.keyCode == 73) { //Alt + I   Information Box
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_0"), "click");
            setTimeout(function(){
                triggerMouseEvent (document.querySelector (ib), "click");
            }, 200);
        }
        if(e.altKey && e.keyCode == 88) { //Alt + X   Clear format/Remove link
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_3"), "click");
            triggerMouseEvent (document.querySelector ("#mceu_16"), "click");
        }
        if(e.altKey && e.keyCode == 38) { //Alt + up arrow   superscript
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_13"), "click");
        }
        if(e.altKey && e.keyCode == 40) { //Alt + down arrow   subscript
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_14"), "click");
        }
        if(e.altKey && e.keyCode == 39) { //Alt + right arrow   increase indent
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_21"), "click");
        }
        if(e.altKey && e.keyCode == 37) { //Alt + left arrow   decrease indent
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_22"), "click");
        }
        if(e.altKey && e.keyCode == 45) { //Alt + Insert   align left
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_18"), "click");
        }
        if(e.altKey && e.keyCode == 36) { //Alt + Home   align center
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_19"), "click");
        }
        if(e.altKey && e.keyCode == 33) { //Alt + Page Up   align right
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_20"), "click");
        }
        if(e.altKey && e.keyCode == 82) { //Alt + R   Page Break
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_30"), "click");
        }
        if(e.altKey && e.keyCode == 66) { //Alt + B   Bullet List
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_27"), "click");
        }
        if(e.altKey && e.keyCode == 78) { //Alt + N   Numbered List
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_28"), "click");
        }
        if(e.altKey && e.keyCode == 77) { //Alt + M   Set start of numbered list
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_29"), "click");
        }
        if(e.altKey && e.keyCode == 85) { //Alt + U   Insert/Edit Link/URL
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_15"), "click");
	        triggerMouseEvent (document.querySelector ("#mceu_51"), "click");//////////////////////////////
        }
        if(e.altKey && e.keyCode == 67) { //Alt + C   Code
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_24"), "click");
        }
        if(e.altKey && e.keyCode == 83) { //Alt + S   Screen Text
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_25"), "click");
        }
        if(e.altKey && e.keyCode == 89) { //Alt + Y   Inline Quote
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_26"), "click");
        }
        if(e.altKey && e.keyCode == 68) { //Alt + D   Add Image Border
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#imgbrdbtn"), "click");
        }
        if(e.altKey && e.keyCode == 69) { //Alt + E   Command line
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#iconbtn"), "click");
        }
	    if(e.ctrlKey && e.keyCode == 77) { //Ctrl + M   Add Book Comment
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_9"), "click");
        }
    });
    var btngrp = document.createElement('div');
    btngrp.setAttribute('id', 'custom-btn-group');
    btngrp.setAttribute('class', 'mce-container mce-flow-layout-item mce-btn-group');
    btngrp.setAttribute('style', 'width: 440px;');
    var btngrpbdy = document.createElement('div');
    btngrpbdy.setAttribute('id', 'custom-btn-group-body');
    btngrp.appendChild(btngrpbdy);
    $('#mceu_32-body').append(btngrp);

    // add link in tool bar to cdp shortcut list on github
    var btn = document.createElement('div');
    btn.setAttribute('id', 'srtlstbtn');
    btn.setAttribute('class', 'mce-widget mce-btn mce-last');
    btn.setAttribute('role', 'button');
    btn.setAttribute('style', 'float: right;');
    btn.innerHTML = "<button role='presentation' type='button' tabindex='-1'>"    +
                         "<i class='mce-ico mce-i-none' style='background-image: url(\"https://sushantnadkar.github.io/TypeCloud-Enhancer/icons/keyboard-shortcut-list.png\")'></i>"    +
                         "<div id='srtlst' class='mce-tooltip mce-tooltip-n' role='presentation' style='position: absolute; top: 25px; left: -25px; display: none;'>"+
                             "<div class='mce-tooltip-arrow'></div>"+
                             "<div class='mce-tooltip-inner'>Keyboard Shortcuts List</div>"+
                         "</div>"+
                     "</button>";
    btn.setAttribute( 'onclick', "window.open('https://github.com/sushantnadkar/TypeCloud-Enhancer')" );
    btn.onmouseover = function(){document.getElementById('srtlst').style.display = 'block';};
    btn.onmouseout = function(){document.getElementById('srtlst').style.display = 'none';};
    document.getElementById("custom-btn-group-body").appendChild(btn);

    // add Add Border button in tool bar
    btn = document.createElement('div');
    btn.setAttribute('id', 'imgbrdbtn');
    btn.setAttribute('class', 'mce-widget mce-btn mce-last');
    btn.setAttribute('role', 'button');
    btn.innerHTML = "<button role='presentation' type='button' tabindex='-1'>"+
                        "<i class='mce-ico mce-i-none' style='background-image: url(\"https://sushantnadkar.github.io/TypeCloud-Enhancer/icons/image-border.png\")'></i>"+
                         "<div id='imgbrd' class='mce-tooltip mce-tooltip-n' role='presentation' style='position: absolute; top: 25px; left: -25px; display: none;'>"+
                             "<div class='mce-tooltip-arrow'></div>"+
                             "<div class='mce-tooltip-inner'>Add Image Border</div>"+
                         "</div>"+
                    "</button>";
    btn.onclick = function(){addBorder("one");};
    btn.onmouseover = function(){document.getElementById('imgbrd').style.display = 'block';};
    btn.onmouseout = function(){document.getElementById('imgbrd').style.display = 'none';};
    //document.getElementById("custom-btn-group-body").appendChild(btn);

    // add link in tool bar to keyword list list on github
    btn = document.createElement('div');
    btn.setAttribute('id', 'keywrdbtn');
    btn.setAttribute('class', 'mce-widget mce-btn mce-last');
    btn.setAttribute('role', 'button');
    btn.setAttribute('style', 'float: right;');
    btn.innerHTML = "<button role='presentation' type='button' tabindex='-1'>"    +
                         "<i class='mce-ico mce-i-none' style='background-image: url(\"https://sushantnadkar.github.io/TypeCloud-Enhancer/icons/keyword-list.png\")'></i>"    +
                         "<div id='keywrd' class='mce-tooltip mce-tooltip-n' role='presentation' style='position: absolute; top: 25px; left: -25px; display: none;'>"+
                             "<div class='mce-tooltip-arrow'></div>"+
                             "<div class='mce-tooltip-inner'>Keyword List</div>"+
                         "</div>"+
                     "</button>";
    btn.setAttribute( 'onclick', "window.open('https://sushantnadkar.github.io/TypeCloud-Enhancer/keyword_list/keyword_list.htm')" );
    btn.onmouseover = function(){document.getElementById('keywrd').style.display = 'block';};
    btn.onmouseout = function(){document.getElementById('keywrd').style.display = 'none';};
    document.getElementById("custom-btn-group-body").appendChild(btn);

    // add emoji/icon formatting button in tool bar
    btn = document.createElement('div');
    btn.setAttribute('id', 'iconbtn');
    btn.setAttribute('class', 'mce-widget mce-btn mce-last');
    btn.setAttribute('role', 'button');
    btn.innerHTML = "<button role='presentation' type='button' tabindex='-1'>"+
                        "<i class='mce-ico mce-i-none' style='background-image: url(\"https://sushantnadkar.github.io/TypeCloud-Enhancer/icons/emoji-icon.png\")'></i>"+
                         "<div id='ico' class='mce-tooltip mce-tooltip-n' role='presentation' style='position: absolute; top: 25px; left: -25px; display: none;'>"+
                             "<div class='mce-tooltip-arrow'></div>"+
                             "<div class='mce-tooltip-inner'>Icon/Emoji</div>"+
                         "</div>"+
                    "</button>";
    btn.onclick = function(){addIcon();};
    btn.onmouseover = function(){document.getElementById('ico').style.display = 'block';};
    btn.onmouseout = function(){document.getElementById('ico').style.display = 'none';};
    document.getElementById("custom-btn-group-body").appendChild(btn);

    // add graphic bundle download button in tool bar
    btn = document.createElement('div');
    btn.setAttribute('id', 'gbbtn');
    btn.setAttribute('class', 'mce-widget mce-btn mce-last');
    btn.setAttribute('role', 'button');
    btn.setAttribute('style', 'float: right;');
    btn.innerHTML = "<button role='presentation' type='button' tabindex='-1'>"+
                       "<i class='mce-ico mce-i-none' style='background-image: url(\"https://sushantnadkar.github.io/TypeCloud-Enhancer/icons/graphic-bundle.png\")'>"+"</i></a>"+
                         "<div id='gb' class='mce-tooltip mce-tooltip-n' role='presentation' style='position: absolute; top: 25px; left: -25px; display: none;'>"+
                             "<div class='mce-tooltip-arrow'></div>"+
                             "<div class='mce-tooltip-inner'>Graphic Bundle</div>"+
                         "</div>"+
                    "</button>";
    btn.onclick = function(){drawGbDiv();};
    btn.onmouseover = function(){document.getElementById('gb').style.display = 'block';};
    btn.onmouseout = function(){document.getElementById('gb').style.display = 'none';};
    document.getElementById("custom-btn-group-body").appendChild(btn);

    // add link in tool bar to PDF preview list on github
    btn = document.createElement('div');
    btn.setAttribute('id', 'pdfprvbtn');
    btn.setAttribute('class', 'mce-widget mce-btn mce-last');
    btn.setAttribute('role', 'button');
    btn.setAttribute('style', 'float: right;');
    btn.innerHTML = "<button role='presentation' type='button' tabindex='-1'>"    +
                         "<i class='mce-ico mce-i-none' style='background-image: url(\"https://sushantnadkar.github.io/TypeCloud-Enhancer/icons/pdf-preview.png\")'></i>"    +
                         "<div id='pdfprv' class='mce-tooltip mce-tooltip-n' role='presentation' style='position: absolute; top: 25px; left: -25px; display: none;'>"+
                             "<div class='mce-tooltip-arrow'></div>"+
                             "<div class='mce-tooltip-inner'>PDF Preview</div>"+
                         "</div>"+
                     "</button>";
    btn.setAttribute( 'onclick', "window.open('"+ $('#cdp-editor-tabs > a').attr('href') +"')" );
    btn.onmouseover = function(){document.getElementById('pdfprv').style.display = 'block';};
    btn.onmouseout = function(){document.getElementById('pdfprv').style.display = 'none';};
    document.getElementById("custom-btn-group-body").appendChild(btn);

    // add button in tool bar to add border to all images
    btn = document.createElement('div');
    btn.setAttribute('id', 'imgbrdallbtn');
    btn.setAttribute('class', 'mce-widget mce-btn mce-last');
    btn.setAttribute('role', 'button');
    btn.setAttribute('style', 'float: right;');
    btn.innerHTML = "<button role='presentation' type='button' tabindex='-1'>"    +
                         "<i class='mce-ico mce-i-none' style='background-image: url(\"https://sushantnadkar.github.io/TypeCloud-Enhancer/icons/image-border.png\")'></i>"    +
                         "<div id='imgbrdall' class='mce-tooltip mce-tooltip-n' role='presentation' style='position: absolute; top: 25px; left: -25px; display: none;'>"+
                             "<div class='mce-tooltip-arrow'></div>"+
                             "<div class='mce-tooltip-inner'>Add Border to all Images (BE CAREFUL)</div>"+
                         "</div>"+
                     "</button>";
    btn.onclick = function(){addBorder("all");};
    btn.onmouseover = function(){document.getElementById('imgbrdall').style.display = 'block';};
    btn.onmouseout = function(){document.getElementById('imgbrdall').style.display = 'none';};
    document.getElementById("custom-btn-group-body").appendChild(btn);
    
    btn = document.createElement('div');
    btn.setAttribute('id', 'delcmtsbtn');
    btn.setAttribute('class', 'mce-widget mce-btn mce-last');
    btn.setAttribute('role', 'button');
    btn.setAttribute('style', 'float: right;');
    btn.innerHTML = "<button role='presentation' type='button' tabindex='-1'>"    +
                         "<i class='mce-ico mce-i-none' style='background-image: url(\"https://sushantnadkar.github.io/TypeCloud-Enhancer/icons/pdf-preview.png\")'></i>"    +
                         "<div id='delcmts' class='mce-tooltip mce-tooltip-n' role='presentation' style='position: absolute; top: 25px; left: -25px; display: none;'>"+
                             "<div class='mce-tooltip-arrow'></div>"+
                             "<div class='mce-tooltip-inner'>Delete all Comments (BE CAREFUL)</div>"+
                         "</div>"+
                     "</button>";
    btn.onclick = function(){deleteComments();};
    btn.onmouseover = function(){document.getElementById('delcmts').style.display = 'block';};
    btn.onmouseout = function(){document.getElementById('delcmts').style.display = 'none';};
    document.getElementById("custom-btn-group-body").appendChild(btn);

    //function to trigger mouse event
    function triggerMouseEvent (node, eventType) {
        var clickEvent = document.createEvent ('MouseEvents');
        clickEvent.initEvent (eventType, true, true);
        node.dispatchEvent (clickEvent);
    }

    //add chapter name in top tool bar
    var chli = document.createElement('li');
    var chnm = $('input#title').val();
    var div = '<div class="ab-item ab-empty-item">' + chnm + '</div>';
    chli.innerHTML = div;
    var ul = document.getElementById("wp-admin-bar-root-default");
    ul.insertBefore(chli, document.getElementById("wp-admin-bar-comments"));

    //add indicator in top tool bar
    var chli1 = document.createElement('li');
    var chnm1 = "TypeCloud Enhancer activated";
    var div1 = '<div class="ab-item ab-empty-item">' + chnm1 + '</div>';
    chli1.innerHTML = div1;
    var ul1 = document.getElementById("wp-admin-bar-root-default");
    ul1.insertBefore(chli1, document.getElementById("wp-admin-bar-comments"));

	drawDocMap();

	//function to display document map
	function drawDocMap(e) {
        if(document.getElementById('docmap')){
            $("div").remove('#docmap');
        }

        var c = tinyMCE.activeEditor.getContent({format : 'raw'});
		var parser       = new DOMParser(),
		doc          = parser.parseFromString(c, "text/html"),
		element      = doc.querySelectorAll("h1, h2, h3, h4");
		var newdiv = document.createElement("div");
		var jrpar = document.createElement("div");
		jrpar.className += 'postbox';
        jrpar.id = 'docmap';
		newdiv.className += 'inside';
        var but = document.createElement("button");
        but.type = 'button';
        but.className = 'handlediv button-link';
        but.setAttribute('aria-hidden', 'true');

        var sp2 = document.createElement("span");
        sp2.className += 'screen-reader-text';
        sp2.append(document.createTextNode("Toggle pannel: Keyword List"));
        but.appendChild(sp2);
        var sp3 = document.createElement("span");
        sp3.className += 'toggle-indicator';
        sp3.setAttribute('aria-hidden', 'true');

        jrpar.appendChild(but);
        var ul = document.createElement("ul");
		newdiv.appendChild(ul);
		var sp = document.createElement("span");
		sp.append(document.createTextNode("Document Map"));
		var h2 = document.createElement("h2");
		h2.className += 'hndle ';
		h2.className += 'ui-sortable-handle';
		h2.appendChild(sp);
		for (var i = 0; i < element.length; i++) {
			var elementss = element[i];
			var li = document.createElement("li");
			if(elementss.tagName == "H1"){
				li.appendChild(document.createTextNode(elementss.textContent));
                li.setAttribute('style', 'font-weight: bold; color: red; cursor: pointer;');
                li.id = 'h1';
                li.setAttribute('onmouseover', 'this.style.textDecoration="underline"');
                li.setAttribute('onmouseout', 'this.style.textDecoration="none"');
                ul.appendChild(li);
			} else if(elementss.tagName == "H2"){
				li.appendChild(document.createTextNode(elementss.textContent));
			    li.setAttribute('style', ' color: green; padding-left: 15px; cursor: pointer;');
				li.id = 'h2';
                li.setAttribute('onmouseover', 'this.style.textDecoration="underline"');
                li.setAttribute('onmouseout', 'this.style.textDecoration="none"');
                ul.appendChild(li);
			} else if(elementss.tagName == "H3"){
				li.appendChild(document.createTextNode(elementss.textContent));
			    li.setAttribute('style', ' color: blue; padding-left: 30px; cursor: pointer;');
				li.id = 'h3';
                li.setAttribute('onmouseover', 'this.style.textDecoration="underline"');
                li.setAttribute('onmouseout', 'this.style.textDecoration="none"');
                ul.appendChild(li);
			} else if(elementss.tagName == "H4"){
				li.appendChild(document.createTextNode(elementss.textContent));
			    li.setAttribute('style', ' color: orange; padding-left: 45px; cursor: pointer;');
				li.id = 'h4';
                li.setAttribute('onmouseover', 'this.style.textDecoration="underline"');
                li.setAttribute('onmouseout', 'this.style.textDecoration="none"');
                ul.appendChild(li);
			}
		}
		var par = document.getElementById("side-sortables");
        but.appendChild(sp3);
		jrpar.appendChild(h2);
		jrpar.appendChild(newdiv);
		par.appendChild(jrpar);
        but.onclick = function() {
            if(jrpar.className == 'postbox') {
                jrpar.className = 'postbox closed';
                sp3.setAttribute('aria-hidden', 'false');
            } else {
                jrpar.className = 'postbox';
                sp3.setAttribute('aria-hidden', 'true');
            }
        };

        var li2 = document.getElementById('docmap').getElementsByTagName('li');
            for (var k = 0; k < li2.length; k++) {
                li2[k].setAttribute('idno', k);
                li2[k].addEventListener('click', function(e) {
                    $(tinymce.activeEditor.getBody()).find("h1, h2, h3, h4").get($(this).attr("idno")).scrollIntoView(true);window.scrollBy(0, -120);
                });
            }
	}

    //function to create graphic bundle
    function graphicBundle() {
        var c = tinyMCE.activeEditor.getContent({format : 'raw'});
        var parser       = new DOMParser(),
            doc          = parser.parseFromString(c, "text/html");
        var arr = Array.prototype.slice.call(doc.querySelectorAll("img"));
        for (var j = 0; j < arr.length; j++) {
            arr[j].className = "image-border";
        }
        var arr1 = "<h1>" + $('input#title').val() + "</h1><div class='CDPAlignCenter'>";
        for(var i = 0; i < arr.length; i++) {
            arr1 += arr[i].outerHTML;
            arr1 += "<br/><br/>";
        }
        arr1 += "</div><pagebreak></pagebreak>";
        return arr1.replace( / /g, "&nbsp;" );
    }
    function drawGbDiv(){
        var gbdiv = document.createElement('div');
        gbdiv.id = 'gbdiv';
        gbdiv.setAttribute('class', 'mce-container mce-panel mce-floatpanel mce-window mce-in');
        gbdiv.setAttribute('hidefocus', '1');
        gbdiv.setAttribute('role', 'dialog');
        gbdiv.setAttribute('aria-labelledby', 'mceu_80');
        gbdiv.setAttribute('aria-describedby', 'mceu_80-none');
        gbdiv.setAttribute('aria-label', 'Graphic Bundle');
        gbdiv.setAttribute('style', 'border-width: 1px; z-index: 100101; left: 179px; top: 0px; width: 920px; height: 822px;');
        gbdiv.innerHTML = '<div class="mce-reset" role="application">' +
		'<div id="mceu_80-head" class="mce-window-head">' +
			'<div id="mceu_80-title" class="mce-title">Graphic Bundle</div>' +
			'<div id="mceu_80-dragh" class="mce-dragh"></div>' +
			'<button id="close" type="button" class="mce-close" aria-hidden="true">' +
				'<i class="mce-ico mce-i-remove"></i>' +
			'</button>' +
		'</div>' +
		'<div id="mceu_80-body" class="mce-container-body mce-window-body mce-abs-layout" style="width: 920px; height: 734px;">' +
			'<div id="mceu_80-absend" class="mce-abs-end"></div>' +
			'<div id="mceu_81" class="mce-container mce-form mce-abs-layout-item mce-first mce-last" style="left: 0px; top: 0px; width: 920px; height: 734px;">' +
				'<div id="mceu_81-body" class="mce-container-body mce-abs-layout" style="width: 920px; height: 734px;">' +
					'<div id="mceu_81-absend" class="mce-abs-end"></div>' +
					'<textarea id="mceu_82" hidefocus="1" spellcheck="false" class="mce-textbox mce-multiline mce-abs-layout-item mce-first mce-last" style="direction: ltr; text-align: left; left: 20px; top: 20px; width: 870px; height: 684px;">'+ graphicBundle() +'</textarea>' +
				'</div>' +
			'</div>' +
		'</div>' +
		'<div id="mceu_83" class="mce-container mce-panel mce-foot" hidefocus="1" tabindex="-1" role="group" style="border-width: 1px 0px 0px; left: 0px; top: 0px; width: 920px; height: 50px;">' +
			'<div id="mceu_83-body" class="mce-container-body mce-abs-layout" style="width: 920px; height: 50px;">' +
				'<div id="mceu_83-absend" class="mce-abs-end"></div>' +
				'<div id="mceu_84" class="mce-widget mce-btn mce-primary mce-abs-layout-item mce-first mce-btn-has-text" tabindex="-1" aria-labelledby="mceu_84" role="button" style="left: 793px; top: 10px; width: 50px; height: 28px;">' +
					'<button id="ok" role="presentation" type="button" class="mce-copy" tabindex="-1" style="height: 100%; width: 100%;">' +
						'<span class="mce-txt">Copy</span>' +
					'</button>' +
				'</div>' +
				'<div id="mceu_85" class="mce-widget mce-btn mce-abs-layout-item mce-last mce-btn-has-text" tabindex="-1" aria-labelledby="mceu_85" role="button" style="left: 848px; top: 10px; width: 60px; height: 28px;">' +
					'<button id="cancel" role="presentation" type="button" class="mce-close" tabindex="-1" style="height: 100%; width: 100%;">' +
						'<span class="mce-txt">Cancel</span>' +
					'</button>' +
				'</div>' +
			'</div>' +
		'</div>' +
	'</div>';
        var btn = gbdiv.getElementsByClassName('mce-close');
        for(var i = 0; i < btn.length; i++) {
            btn[i].onclick = function() {
                $("div").remove('#gbdiv');
                tinyMCE.execCommand('mceFocus', true, "tinymce");
            };
        }
        var btn2 = gbdiv.getElementsByClassName('mce-copy');
        btn2[0].onclick = function() {
            var copyTextarea = gbdiv.getElementsByTagName('textarea');
            copyTextarea[0].select();

            try {
                var successful = document.execCommand('copy');
                var msg = successful ? 'successful' : 'unsuccessful';
                console.log('Copying text command was ' + msg);
            } catch (err) {
                console.log('Oops, unable to copy');
            }
        };
        $(document.body).append(gbdiv);
        var copyTextarea = gbdiv.getElementsByTagName('textarea');
        copyTextarea[0].select();
    }
    function closeGBdiv(){
        $("div").remove('#gbdiv');
        tinyMCE.execCommand('mceFocus', true, "tinymce");
        tinyMCE.activeEditor.selection.moveToBookmark(myBookmark);
    }

    //function to add image border
    function addBorder(param){
        if (param == "all") {
            tinyMCE.activeEditor.dom.addClass(tinyMCE.activeEditor.dom.select('IMG'), 'image-border');
            var ingg = tinyMCE.activeEditor.dom.select('IMG');
            for (i = 0; i < ingg.length; i++) {
                var og = ingg[i].outerHTML;
                var nw = "<div class='CDPAlignCenter CDPAlign'>"+og+"</div>";
                ingg[i].outerHTML = nw;
            }
        } else if (param == "one") {
        var img = tinyMCE.activeEditor.selection.getContent();
        if(tinyMCE.activeEditor.selection.getNode().nodeName == 'IMG') {
            var img1 = tinyMCE.activeEditor.selection.getNode();
            if($(img1).attr("class") == 'image-border'){
                $(img1).removeClass('image-border');
            } else {
                tinyMCE.activeEditor.dom.addClass(tinyMCE.activeEditor.selection.getNode(), 'image-border');
            }
        } else {
            var myBookmark = tinyMCE.activeEditor.selection.getBookmark();
            var div = document.createElement('div');
            div.id = 'infobox';
            div.className = 'vex vex-theme-plain';
            var div1 = document.createElement('div');
            div1.className = 'vex-overlay';
            div.appendChild(div1);
            var div2 = document.createElement('div');
            div2.className = 'vex-content';
            var form = document.createElement('div');
            form.className = 'vex-dialog-form';
            var div3 = document.createElement('div');
            div3.className = 'vex-dialog-message';
            div3.append(document.createTextNode("This is not an image"));
            var div4 = document.createElement('div');
            div4.className = 'vex-dialog-buttons';
            var btn = document.createElement('button');
            btn.className = 'vex-dialog-button-primary vex-dialog-button vex-first vex-last';
            btn.append(document.createTextNode("OK"));
            btn.onclick = function() {
                $("div").remove('#infobox');
                tinyMCE.execCommand('mceFocus', true, "tinymce");
                tinyMCE.activeEditor.selection.moveToBookmark(myBookmark);
            };
            div4.appendChild(btn);
            form.appendChild(div3);
            form.appendChild(div4);
            div2.appendChild(form);
            div.appendChild(div1);
            div.appendChild(div2);
            $(document.body).append(div);
            btn.focus();
        }}
    }

    //function to add icon
    function addIcon(){
        var img = tinyMCE.activeEditor.selection.getContent();
        if(tinyMCE.activeEditor.selection.getNode().nodeName == 'IMG') {
                var img1 = tinyMCE.activeEditor.selection.getNode();
                $(img1).removeClass('image-border');
                tinyMCE.activeEditor.dom.setAttrib(tinyMCE.activeEditor.selection.getNode(), 'width', '12');
                tinyMCE.activeEditor.dom.setAttrib(tinyMCE.activeEditor.selection.getNode(), 'height', '12');
        } else {
            var myBookmark = tinyMCE.activeEditor.selection.getBookmark();
            var div = document.createElement('div');
            div.id = 'infobox';
            div.className = 'vex vex-theme-plain';
            var div1 = document.createElement('div');
            div1.className = 'vex-overlay';
            div.appendChild(div1);
            var div2 = document.createElement('div');
            div2.className = 'vex-content';
            var form = document.createElement('div');
            form.className = 'vex-dialog-form';
            var div3 = document.createElement('div');
            div3.className = 'vex-dialog-message';
            div3.append(document.createTextNode("This is not an image"));
            var div4 = document.createElement('div');
            div4.className = 'vex-dialog-buttons';
            var btn = document.createElement('button');
            btn.className = 'vex-dialog-button-primary vex-dialog-button vex-first vex-last';
            btn.append(document.createTextNode("OK"));
            btn.onclick = function() {
                $("div").remove('#infobox');
                tinyMCE.execCommand('mceFocus', true, "tinymce");
                tinyMCE.activeEditor.selection.moveToBookmark(myBookmark);
            };
            div4.appendChild(btn);
            form.appendChild(div3);
            form.appendChild(div4);
            div2.appendChild(form);
            div.appendChild(div1);
            div.appendChild(div2);
            $(document.body).append(div);
            btn.focus();
        }
    }

    //function to delete all comments
    function deleteComments() {
            //var myBookmark = tinyMCE.activeEditor.selection.getBookmark();
            var div = document.createElement('div');
            div.id = 'infobox';
            div.className = 'vex vex-theme-plain';
            var div1 = document.createElement('div');
            div1.className = 'vex-overlay';
            div.appendChild(div1);
            var div2 = document.createElement('div');
            div2.className = 'vex-content';
            var form = document.createElement('div');
            form.className = 'vex-dialog-form';
            var div3 = document.createElement('div');
            div3.className = 'vex-dialog-message';
            div3.append(document.createTextNode("This action will delete all the comments and this action is NON-RECOVERABLE !!!!!\nAre you sure you want to delete all the comments?"));
            var div4 = document.createElement('div');
            div4.className = 'vex-dialog-buttons';
            var btn = document.createElement('button');
            btn.className = 'vex-dialog-button-primary vex-dialog-button vex-first vex-last';
            btn.append(document.createTextNode("YES"));
            btn.onclick = function() {
                $("div").remove('#infobox');
                tinyMCE.execCommand('mceFocus', true, "tinymce");
                //tinyMCE.activeEditor.selection.moveToBookmark(myBookmark);
                $(tinyMCE.activeEditor.dom.select('mark')).contents().unwrap();
            };
            var btn1 = document.createElement('button');
            btn1.className = 'vex-dialog-button-primary vex-dialog-button vex-first vex-last';
            btn1.append(document.createTextNode("NO"));
            btn1.setAttribute('style', 'margin-right:50px;');
            btn1.onclick = function() {
                $("div").remove('#infobox');
                tinyMCE.execCommand('mceFocus', true, "tinymce");
                //tinyMCE.activeEditor.selection.moveToBookmark(myBookmark);
            };
            div4.appendChild(btn);
            div4.appendChild(btn1);
            form.appendChild(div3);
            form.appendChild(div4);
            div2.appendChild(form);
            div.appendChild(div1);
            div.appendChild(div2);
            $(document.body).append(div);
            btn1.focus();
        //$(tinyMCE.activeEditor.dom.select('mark')).contents().unwrap();
    }

    //refresh docmap on change to heading level formatting using mouse
    var test = document.getElementById("mceu_51");
    test.addEventListener("click", drawDocMap, false);

    //Bug report
    var a = document.getElementsByClassName("cdp-editor-bottom-bar");
    a[0].setAttribute('style', 'margin-right: 76px;');

    //add event listener and refresh docmap on keydown
    tinymce.activeEditor.on('keydown', drawDocMap);
    tinymce.activeEditor.on('keyup', drawDocMap);
}, 5000);
