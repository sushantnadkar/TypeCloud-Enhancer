// ==UserScript==
// @name         TypeCloud Enhancer
// @namespace    https://cdp.packtpub.com/
// @version      1.0
// @description  Add keyboard shortcuts, image border button, and document map to CDP i.e. TyprCloud
// @author       sushantnadkar
// @downloadURL  https://gist.github.com/sushantn-packt/c7cc7316b51a81fd3ce8706bcf0a8736.js
// @updateURL    https://gist.github.com/sushantn-packt/c7cc7316b51a81fd3ce8706bcf0a8736.js
// @match        https://cdp.packtpub.com/*/wp-admin/post.php?post=*&action=edit
// @grant        none
// ==/UserScript==

setTimeout(function() {

    triggerMouseEvent (document.querySelector ("#mceu_0"), "click");
    var text51 = $("span#mceu_51-text").text();
    var text52 = $("span#mceu_52-text").text();
    var text53 = $("span#mceu_53-text").text();
    var h1, h2, h3, h4, para, cb, frb, bq, t, ib;
	
    if(text51 == "Heading 1") {
        h1 = "#mceu_51";
        h2 = "#mceu_52";
        h3 = "#mceu_53";
        h4 = "#mceu_54";
        para = "#mceu_55";
        cb = "#mceu_56";
        frb = "#mceu_57";
        bq = "#mceu_58";
        t = "#mceu_59";
        ib = "#mceu_60";
    } else if(text52 == "Heading 1") {
        h1 = "#mceu_52";
        h2 = "#mceu_53";
        h3 = "#mceu_54";
        h4 = "#mceu_55";
        para = "#mceu_56";
        cb = "#mceu_57";
        frb = "#mceu_58";
        bq = "#mceu_59";
        t = "#mceu_60";
        ib = "#mceu_61";
    } else if (text53 == "Heading 1") {
        h1 = "#mceu_53";
        h2 = "#mceu_54";
        h3 = "#mceu_55";
        h4 = "#mceu_56";
        para = "#mceu_57";
        cb = "#mceu_58";
        frb = "#mceu_59";
        bq = "#mceu_60";
        t = "#mceu_61";
        ib = "#mceu_62";
    }
    triggerMouseEvent (document.querySelector ("#mceu_0"), "click");
    //event listner
    tinymce.activeEditor.on('keydown', function(e) {
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
                triggerMouseEvent (document.querySelector ("#mceu_22"), "click");
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
            triggerMouseEvent (document.querySelector ("#mceu_14"), "click");
        }
        if(e.altKey && e.keyCode == 38) { //Alt + up arrow   superscript
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_7"), "click");
        }
        if(e.altKey && e.keyCode == 40) { //Alt + down arrow   subscript
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_8"), "click");
        }
        if(e.altKey && e.keyCode == 39) { //Alt + right arrow   increase indent
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_9"), "click");
        }
        if(e.altKey && e.keyCode == 37) { //Alt + left arrow   decrease indent
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_10"), "click");
        }
        if(e.altKey && e.keyCode == 45) { //Alt + Insert   align left
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_21"), "click");
        }
        if(e.altKey && e.keyCode == 36) { //Alt + Home   align center
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_22"), "click");
        }
        if(e.altKey && e.keyCode == 33) { //Alt + Page Up   align right
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_23"), "click");
        }
        if(e.altKey && e.keyCode == 82) { //Alt + R   Page Break
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_19"), "click");
        }
        if(e.altKey && e.keyCode == 66) { //Alt + B   Bullet List
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_11"), "click");
        }
        if(e.altKey && e.keyCode == 78) { //Alt + N   Numbered List
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_12"), "click");
        }
        if(e.altKey && e.keyCode == 77) { //Alt + M   Set start of numbered list
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_24"), "click");
        }
        if(e.altKey && e.keyCode == 85) { //Alt + U   Insert/Edit Link/URL
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_13"), "click");
	    triggerMouseEvent (document.querySelector ("#mceu_43"), "click");
        }
        if(e.altKey && e.keyCode == 67) { //Alt + C   Code
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_17"), "click");
        }
        if(e.altKey && e.keyCode == 83) { //Alt + S   Screen Text
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_18"), "click");
        }
        if(e.altKey && e.keyCode == 89) { //Alt + Y   Inline Quote
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_20"), "click");
        }
        if(e.altKey && e.keyCode == 189) { //Alt + -   subscript
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_8"), "click");
        }
        if(e.ctrlKey && e.keyCode == 83) { //Ctrl + S   save
            e.preventDefault();
            triggerMouseEvent (document.evaluate("//input[@type='submit' and @value='Save']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue, "click");
        }
        if(e.altKey && e.keyCode == 68) { //Alt + D   Add Image Border
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#imgbrdbtn"), "click");
        }
        if(e.ctrlKey && e.keyCode == 69) { //Alt + E   Command line
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_0"), "click");
            setTimeout(function(){
                triggerMouseEvent (document.querySelector ("#mceu_58"), "click");
                setTimeout(function(){triggerMouseEvent (document.querySelector ("#mceu_4"), "click");}, 200);
            }, 200);
        }
	if(e.ctrlKey && e.keyCode == 77) { //Ctrl + M   Add Book Comment
            e.preventDefault();
            triggerMouseEvent (document.querySelector ("#mceu_26"), "click");
        }
    });

    // add link in tool bar to cdp shortcut list on github
    var btn = document.createElement('div');
    btn.setAttribute('id', 'srtlstbtn');
    btn.setAttribute('class', 'mce-widget mce-btn mce-last');
    btn.setAttribute('role', 'button');
    btn.innerHTML = "<button role='presentation' type='button' tabindex='-1'>"    +
                         "<i class='mce-ico mce-i-none' style='background-image: url(\"https://sushantn-packt.github.io/TypeCloud-Enhancer/icons/keyboard-shortcut-list.png\")'></i>"    +
                         "<div id='srtlst' class='mce-tooltip mce-tooltip-n' role='presentation' style='position: absolute; top: 25px; left: -25px; display: none;'>"+
                             "<div class='mce-tooltip-arrow'></div>"+
                             "<div class='mce-tooltip-inner'>Keyboard Shortcuts List</div>"+
                         "</div>"+
                     "</button>";
    btn.setAttribute( 'onclick', "window.open('https://github.com/sushantn-packt/TypeCloud-Enhancer')" );
    btn.onmouseover = function(){document.getElementById('srtlst').style.display = 'block';};
    btn.onmouseout = function(){document.getElementById('srtlst').style.display = 'none';};
    document.getElementById("mceu_31-body").appendChild(btn);

    // add Add Border button in tool bar
    btn = document.createElement('div');
    btn.setAttribute('id', 'imgbrdbtn');
    btn.setAttribute('class', 'mce-widget mce-btn mce-last');
    btn.setAttribute('role', 'button');
    btn.innerHTML = "<button role='presentation' type='button' tabindex='-1'>"+
                        "<i class='mce-ico mce-i-none' style='background-image: url(\"https://sushantn-packt.github.io/TypeCloud-Enhancer/icons/image-border.png\")'></i>"+
                         "<div id='imgbrd' class='mce-tooltip mce-tooltip-n' role='presentation' style='position: absolute; top: 25px; left: -25px; display: none;'>"+
                             "<div class='mce-tooltip-arrow'></div>"+
                             "<div class='mce-tooltip-inner'>Add Image Border</div>"+
                         "</div>"+
                    "</button>";
    btn.onclick = function(){addBorder();};
    btn.onmouseover = function(){document.getElementById('imgbrd').style.display = 'block';};
    btn.onmouseout = function(){document.getElementById('imgbrd').style.display = 'none';};
    document.getElementById("mceu_31-body").appendChild(btn);

    // add link in tool bar to keyword list list on github
    btn = document.createElement('div');
    btn.setAttribute('id', 'keywrdbtn');
    btn.setAttribute('class', 'mce-widget mce-btn mce-last');
    btn.setAttribute('role', 'button');
    btn.innerHTML = "<button role='presentation' type='button' tabindex='-1'>"    +
                         "<i class='mce-ico mce-i-none' style='background-image: url(\"https://sushantn-packt.github.io/TypeCloud-Enhancer/icons/keyword-list.png\")'></i>"    +
                         "<div id='keywrd' class='mce-tooltip mce-tooltip-n' role='presentation' style='position: absolute; top: 25px; left: -25px; display: none;'>"+
                             "<div class='mce-tooltip-arrow'></div>"+
                             "<div class='mce-tooltip-inner'>Keyword List</div>"+
                         "</div>"+
                     "</button>";
    btn.setAttribute( 'onclick', "window.open('https://sushantn-packt.github.io/TypeCloud-Enhancer/keyword_list/keyword_list.htm')" );
    btn.onmouseover = function(){document.getElementById('keywrd').style.display = 'block';};
    btn.onmouseout = function(){document.getElementById('keywrd').style.display = 'none';};
    document.getElementById("mceu_31-body").appendChild(btn);

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

        var li = document.getElementById('docmap').getElementsByTagName('li');
            for (var i = 0; i < li.length; i++) {
                li[i].setAttribute('idno', i);
                li[i].addEventListener('click', function(e) {
                    $(tinymce.activeEditor.getBody()).find("h1, h2, h3, h4").get($(this).attr("idno")).scrollIntoViewIfNeeded(true);
                });
            }
	}

    //function to add image border
    function addBorder(){
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
        }
    }

    //keyboead listner for ctlr + S on webpage
    document.addEventListener('keydown', function(e) {
        if (e.keyCode == 83 && e.ctrlKey) {
            e.preventDefault();
            triggerMouseEvent (document.evaluate("//input[@type='submit' and @value='Save']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue, "click");
        }
    }, false);

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
