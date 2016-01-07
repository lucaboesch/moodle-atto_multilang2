if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/moodle-atto_multilang2-button/moodle-atto_multilang2-button.js']) {
   __coverage__['build/moodle-atto_multilang2-button/moodle-atto_multilang2-button.js'] = {"path":"build/moodle-atto_multilang2-button/moodle-atto_multilang2-button.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},"b":{},"f":{"1":0,"2":0,"3":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":41},"end":{"line":1,"column":60}}},"2":{"name":"(anonymous_2)","line":60,"loc":{"start":{"line":60,"column":17},"end":{"line":60,"column":28}}},"3":{"name":"(anonymous_3)","line":80,"loc":{"start":{"line":80,"column":14},"end":{"line":80,"column":36}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":98,"column":61}},"2":{"start":{"line":28,"column":0},"end":{"line":49,"column":87}},"3":{"start":{"line":59,"column":0},"end":{"line":95,"column":3}},"4":{"start":{"line":61,"column":8},"end":{"line":63,"column":21}},"5":{"start":{"line":65,"column":8},"end":{"line":70,"column":9}},"6":{"start":{"line":66,"column":12},"end":{"line":69,"column":15}},"7":{"start":{"line":72,"column":8},"end":{"line":77,"column":11}},"8":{"start":{"line":81,"column":8},"end":{"line":82,"column":31}},"9":{"start":{"line":84,"column":8},"end":{"line":84,"column":59}},"10":{"start":{"line":85,"column":8},"end":{"line":85,"column":73}},"11":{"start":{"line":87,"column":8},"end":{"line":87,"column":48}},"12":{"start":{"line":89,"column":8},"end":{"line":89,"column":27}}},"branchMap":{},"code":["(function () { YUI.add('moodle-atto_multilang2-button', function (Y, NAME) {","","// This file is part of Moodle - http://moodle.org/\r","//\r","// Moodle is free software: you can redistribute it and/or modify\r","// it under the terms of the GNU General Public License as published by\r","// the Free Software Foundation, either version 3 of the License, or\r","// (at your option) any later version.\r","//\r","// Moodle is distributed in the hope that it will be useful,\r","// but WITHOUT ANY WARRANTY; without even the implied warranty of\r","// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\r","// GNU General Public License for more details.\r","//\r","// You should have received a copy of the GNU General Public License\r","// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.\r","\r","/**\r"," * @package    atto_multilang2\r"," * @copyright  2015 onwards Julen Pardo & Mondragon Unibertsitatea\r"," * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later\r"," */\r","\r","/**\r"," * @module moodle-atto_multilang2-button\r"," */\r","\r","var CLASSES = {\r","        BEGIN: 'multilang_tag multilang_begin',\r","        END: 'multilang_tag multilang_end',\r","        CONTENT: 'multilang_content'\r","    },\r","\r","    STYLE = 'outline: 1px dotted;' +\r","            'padding: 0.1em;' +\r","            'margin: 0em 0.1em;' +\r","            'background-color: #ffffaa;',\r","\r","    LANG_WILDCARD = '%lang',\r","    CONTENT_WILDCARD = '%content',\r","    ATTR_LANGUAGES = 'languages',\r","    DEFAULT_LANGUAGE = '{\"en\":\"English (en)\"}',\r","    START_TAG = '{mlang ' + LANG_WILDCARD + '}',\r","    END_TAG = '{mlang}',\r","\r","    TEMPLATE = '' +\r","        '&nbsp;<span class=\"' + CLASSES.BEGIN + '\" style=\"' + STYLE + '\">{mlang ' + LANG_WILDCARD + '}</span>' +\r","        '<span class=\"' + CLASSES.CONTENT + '\">' + CONTENT_WILDCARD + '</span>' +\r","        '<span class=\"' + CLASSES.END + '\" style=\"' + STYLE + '\">{mlang}</span>&nbsp;';\r","\r","/**\r"," * Atto text editor multilanguage plugin.\r"," *\r"," * @namespace M.atto_multilang2\r"," * @class button\r"," * @extends M.editor_atto.EditorPlugin\r"," */\r","\r","Y.namespace('M.atto_multilang2').Button = Y.Base.create('button', Y.M.editor_atto.EditorPlugin, [], {\r","    initializer: function() {\r","        var toolbarItems = [],\r","            languages = JSON.parse(this.get(ATTR_LANGUAGES)),\r","            langCode;\r","\r","        for (langCode in languages) {\r","            toolbarItems.push({\r","                text: languages[langCode],\r","                callbackArgs: langCode\r","            });\r","        }\r","\r","        this.addToolbarMenu({\r","            globalItemConfig: {\r","                callback: this._addTags\r","            },\r","            items: toolbarItems\r","        });\r","    },\r","\r","    _addTags: function(e, langCode) {\r","        var host = this.get('host'),\r","            content = TEMPLATE;\r","\r","        content = content.replace(LANG_WILDCARD, langCode);\r","        content = content.replace(CONTENT_WILDCARD, host.getSelection());\r","\r","        host.insertContentAtFocusPoint(content);\r","\r","        this.markUpdated();\r","    }\r","}, {\r","    ATTRS: {\r","        languages: DEFAULT_LANGUAGE\r","    }\r","});\r","","","}, '@VERSION@', {\"requires\": [\"moodle-editor_atto-plugin\"]});","","}());"]};
}
var __cov_xlcucJyua6odXhLRctX6xg = __coverage__['build/moodle-atto_multilang2-button/moodle-atto_multilang2-button.js'];
__cov_xlcucJyua6odXhLRctX6xg.s['1']++;YUI.add('moodle-atto_multilang2-button',function(Y,NAME){__cov_xlcucJyua6odXhLRctX6xg.f['1']++;__cov_xlcucJyua6odXhLRctX6xg.s['2']++;var CLASSES={BEGIN:'multilang_tag multilang_begin',END:'multilang_tag multilang_end',CONTENT:'multilang_content'},STYLE='outline: 1px dotted;'+'padding: 0.1em;'+'margin: 0em 0.1em;'+'background-color: #ffffaa;',LANG_WILDCARD='%lang',CONTENT_WILDCARD='%content',ATTR_LANGUAGES='languages',DEFAULT_LANGUAGE='{"en":"English (en)"}',START_TAG='{mlang '+LANG_WILDCARD+'}',END_TAG='{mlang}',TEMPLATE=''+'&nbsp;<span class="'+CLASSES.BEGIN+'" style="'+STYLE+'">{mlang '+LANG_WILDCARD+'}</span>'+'<span class="'+CLASSES.CONTENT+'">'+CONTENT_WILDCARD+'</span>'+'<span class="'+CLASSES.END+'" style="'+STYLE+'">{mlang}</span>&nbsp;';__cov_xlcucJyua6odXhLRctX6xg.s['3']++;Y.namespace('M.atto_multilang2').Button=Y.Base.create('button',Y.M.editor_atto.EditorPlugin,[],{initializer:function(){__cov_xlcucJyua6odXhLRctX6xg.f['2']++;__cov_xlcucJyua6odXhLRctX6xg.s['4']++;var toolbarItems=[],languages=JSON.parse(this.get(ATTR_LANGUAGES)),langCode;__cov_xlcucJyua6odXhLRctX6xg.s['5']++;for(langCode in languages){__cov_xlcucJyua6odXhLRctX6xg.s['6']++;toolbarItems.push({text:languages[langCode],callbackArgs:langCode});}__cov_xlcucJyua6odXhLRctX6xg.s['7']++;this.addToolbarMenu({globalItemConfig:{callback:this._addTags},items:toolbarItems});},_addTags:function(e,langCode){__cov_xlcucJyua6odXhLRctX6xg.f['3']++;__cov_xlcucJyua6odXhLRctX6xg.s['8']++;var host=this.get('host'),content=TEMPLATE;__cov_xlcucJyua6odXhLRctX6xg.s['9']++;content=content.replace(LANG_WILDCARD,langCode);__cov_xlcucJyua6odXhLRctX6xg.s['10']++;content=content.replace(CONTENT_WILDCARD,host.getSelection());__cov_xlcucJyua6odXhLRctX6xg.s['11']++;host.insertContentAtFocusPoint(content);__cov_xlcucJyua6odXhLRctX6xg.s['12']++;this.markUpdated();}},{ATTRS:{languages:DEFAULT_LANGUAGE}});},'@VERSION@',{'requires':['moodle-editor_atto-plugin']});