'use strict';var _typeof=typeof Symbol==='function'&&typeof Symbol.iterator==='symbol'?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==='function'&&obj.constructor===Symbol&&obj!==Symbol.prototype?'symbol':typeof obj};var _get=function get(object,property,receiver){if(object===null)object=Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===undefined){var parent=Object.getPrototypeOf(object);if(parent===null){return undefined}else{return get(parent,property,receiver)}}else if('value'in desc){return desc.value}else{var getter=desc.get;if(getter===undefined){return undefined}return getter.call(receiver)}};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}(function($){var DiscoveryController=function(){function DiscoveryController(discoveryObj){_classCallCheck(this,DiscoveryController);this.discoveryObj=discoveryObj;this.controller=null;this.queue=[]}_createClass(DiscoveryController,[{key:'enqueue',value:function enqueue(){}},{key:'submit',value:function submit(){}}]);return DiscoveryController}();var CriteriaSelectionController=function(_DiscoveryController){_inherits(CriteriaSelectionController,_DiscoveryController);function CriteriaSelectionController(discoveryObj){_classCallCheck(this,CriteriaSelectionController);var _this=_possibleConstructorReturn(this,(CriteriaSelectionController.__proto__||Object.getPrototypeOf(CriteriaSelectionController)).call(this,discoveryObj));_this.facets=null;return _this}_createClass(CriteriaSelectionController,[{key:'enqueue',value:function enqueue(){_get(CriteriaSelectionController.prototype.__proto__||Object.getPrototypeOf(CriteriaSelectionController.prototype),'enqueue',this).call(this)}}]);return CriteriaSelectionController}(DiscoveryController);var PaginationController=function(_DiscoveryController2){_inherits(PaginationController,_DiscoveryController2);function PaginationController(discoveryObj){_classCallCheck(this,PaginationController);return _possibleConstructorReturn(this,(PaginationController.__proto__||Object.getPrototypeOf(PaginationController)).call(this,discoveryObj))}_createClass(PaginationController,[{key:'initUI',value:function initUI(){}}]);return PaginationController}(DiscoveryController);var HTMLPaginationController=function(_PaginationController){_inherits(HTMLPaginationController,_PaginationController);function HTMLPaginationController(discoveryObj){_classCallCheck(this,HTMLPaginationController);var _this3=_possibleConstructorReturn(this,(HTMLPaginationController.__proto__||Object.getPrototypeOf(HTMLPaginationController)).call(this,discoveryObj));_this3.paginator=$('[data-controller-paginator]');_this3.nextbtn=_this3.paginator.find('[data-controller-next]');_this3.prevbtn=_this3.paginator.find('[data-controller-previous]');_this3.pagebtns=_this3.paginator.find('[data-controller-pagebtns]');_this3.pageIndicator=_this3.pagebtns.html();_this3.itemLimit=_this3.paginator.data('controller-item-limit');_this3.currentPage=_this3.paginator.data('controller-current-page');console.log('paginator');console.log(_this3);_this3.pagebtns.html('');discoveryObj.setItemLimit(_this3.itemLimit,_this3.currentPage);_this3.initUI();return _this3}_createClass(HTMLPaginationController,[{key:'initUI',value:function initUI(){_get(HTMLPaginationController.prototype.__proto__||Object.getPrototypeOf(HTMLPaginationController.prototype),'initUI',this).call(this);var self=this}}]);return HTMLPaginationController}(PaginationController);var HTMLSearchBox=function(_CriteriaSelectionCon){_inherits(HTMLSearchBox,_CriteriaSelectionCon);function HTMLSearchBox(discoveryObj){_classCallCheck(this,HTMLSearchBox);return _possibleConstructorReturn(this,(HTMLSearchBox.__proto__||Object.getPrototypeOf(HTMLSearchBox)).call(this,discoveryObj))}return HTMLSearchBox}(CriteriaSelectionController);var HTMLCriteriaController=function(_CriteriaSelectionCon2){_inherits(HTMLCriteriaController,_CriteriaSelectionCon2);function HTMLCriteriaController(discoveryObj){_classCallCheck(this,HTMLCriteriaController);var _this5=_possibleConstructorReturn(this,(HTMLCriteriaController.__proto__||Object.getPrototypeOf(HTMLCriteriaController)).call(this,discoveryObj));_this5.controller=$('[data-widget=\'discovery-controller\']');_this5.facets=_this5.controller.find('[data-facet]');_this5.initUI();return _this5}_createClass(HTMLCriteriaController,[{key:'initUI',value:function initUI(){var self=this;this.facets.each(function(){var facet=$(this);if(_typeof(facet.data('ui-type'))===undefined){return}var initfnc='init'+facet.data('ui-type').ucfirst();if(typeof self[initfnc]!=='function'){return}self[initfnc](facet)})}},{key:'initList',value:function initList(facet){var self=this;facet.find('[data-user-input-wrapper]').find('li').each(function(){$(this).bind('click',function(event){event.preventDefault();var item=$(this);item.toggleClass('selected');if(item.data('value')==='*'){facet.removeAttr('data-enqueue');item.siblings('li').removeAttr('data-selected')}else{facet[0].setAttribute('data-enqueue','');item[0].setAttribute('data-selected','')}self.submit()})})}},{key:'initTextfield',value:function initTextfield(facet){var self=this;facet.find('[data-user-input]').each(function(){$(this).bind('keypress',function(event){var input=$(this);if(input.val().length>2){facet[0].setAttribute('data-enqueue','');input[0].setAttribute('data-selected','');input.attr('data-value',input.val());self.submit()}else{facet.removeAttr('data-enqueue');input.removeAttr('data-selected')}}).bind('keypress',function(event){if((event.keyCode?event.keyCode:event.which)===13){self.submit();return false}else{return true}})})}},{key:'enqueue',value:function enqueue(){var self=this;this.queue=[];this.controller.find('[data-enqueue]').each(function(){var facet=$(this);var values=[];facet.find('[data-selected]').each(function(){self.queue.push({op:facet.data('op'),values:facet.data('param').replace('%%',$(this).attr('data-value')).split('|')})})})}},{key:'submit',value:function submit(){_get(HTMLCriteriaController.prototype.__proto__||Object.getPrototypeOf(HTMLCriteriaController.prototype),'submit',this).call(this);this.enqueue();this.discoveryObj.controllerStateChange()}}]);return HTMLCriteriaController}(CriteriaSelectionController);var DiscoveryView=function(){function DiscoveryView(){_classCallCheck(this,DiscoveryView)}_createClass(DiscoveryView,[{key:'contructor',value:function contructor(discoveryObj){this.items=[]}},{key:'setItems',value:function setItems(items){this.items=items;return this}},{key:'displayQueryResults',value:function displayQueryResults(){}}]);return DiscoveryView}();var HTMLView=function(_DiscoveryView){_inherits(HTMLView,_DiscoveryView);function HTMLView(discoveryObj){_classCallCheck(this,HTMLView);var _this6=_possibleConstructorReturn(this,(HTMLView.__proto__||Object.getPrototypeOf(HTMLView)).call(this,discoveryObj));_this6.view=$('[data-view-results]');_this6.stage=_this6.view.find('[data-view-stage]');_this6.titleStage=_this6.view.find('[data-view-title-stage]');_this6.templates={};_this6.parseTemplates();return _this6}_createClass(HTMLView,[{key:'parseTemplates',value:function parseTemplates(){var self=this;var templates=this.view.find('[data-view-templates]');templates.find('[data-view-template-wrapper]').each(function(){var twrapper=$(this);self.templates[twrapper.data('view-template-name')]=twrapper.html()}).remove()}},{key:'processTokens',value:function processTokens(template,item){var processed=template;template.match(/\%\%[^\%]*\%\%/g).forEach(function(token){var key=token.replaceAll('%%','');processed=processed.replaceAll(token,item.values[key])});return processed}},{key:'displayQueryResults',value:function displayQueryResults(){var self=this;self.stage.html('');this.items.forEach(function(item){self.stage.append(self.processTokens(self.templates.book_capsule,item))})}}]);return HTMLView}(DiscoveryView);var ECommonsOntarioCriteriaController=function(_HTMLCriteriaControll){_inherits(ECommonsOntarioCriteriaController,_HTMLCriteriaControll);function ECommonsOntarioCriteriaController(discoveryObj){_classCallCheck(this,ECommonsOntarioCriteriaController);return _possibleConstructorReturn(this,(ECommonsOntarioCriteriaController.__proto__||Object.getPrototypeOf(ECommonsOntarioCriteriaController)).call(this,discoveryObj))}return ECommonsOntarioCriteriaController}(HTMLCriteriaController);var ECommonsOntarioHTMLView=function(_HTMLView){_inherits(ECommonsOntarioHTMLView,_HTMLView);function ECommonsOntarioHTMLView(discoveryObject){_classCallCheck(this,ECommonsOntarioHTMLView);return _possibleConstructorReturn(this,(ECommonsOntarioHTMLView.__proto__||Object.getPrototypeOf(ECommonsOntarioHTMLView)).call(this,discoveryObject))}return ECommonsOntarioHTMLView}(HTMLView);var DiscoveryDataHandler=function(){function DiscoveryDataHandler(dbURI,dbmethod){_classCallCheck(this,DiscoveryDataHandler);this.dburl=dbmethod+'://'+dbURI;this.paths=this.build_paths();this.query={};this.resultsComplete=null;this.XHROpts=this.resetXHROpts();this.results={}}_createClass(DiscoveryDataHandler,[{key:'resetQueryParameters',value:function resetQueryParameters(){this.query={}}},{key:'setQueryParameter',value:function setQueryParameter(parameter,value){var operator=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'like';this.query[Parameter]=value;return this}},{key:'setSearchTerm',value:function setSearchTerm(term){var operator=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'matches';return this}},{key:'setDateIssed',value:function setDateIssed(value){var operator=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'<';return this}},{key:'setItemLimit',value:function setItemLimit(limit,page){var offset=limit*(page-1);return this}},{key:'getQuery',value:function getQuery(){return this.query}},{key:'resetXHROpts',value:function resetXHROpts(){this.XHROpts={async:true,method:'GET',error:this.xhrError};this.resultsComplete=$.Deferred()}},{key:'setXHROpt',value:function setXHROpt(opt,value){this.XHROpts[opt]=value;return this}},{key:'getXHROpts',value:function getXHROpts(){return this.XHROpts}},{key:'executeQuery',value:function executeQuery(){this.resetXHROpts();this.prepareQuery();this.setXHROpt('url',this.makeURL(this.paths.query.filtered_items.path)).setXHROpt('method',this.paths.query.filtered_items.method).setXHROpt('data',this.query);this.retrieve();return this}},{key:'processResults',value:function processResults(){var self=this;$.when(this.resultsComplete).done(function(){})}},{key:'getResults',value:function getResults(){return this.results}},{key:'makeURL',value:function makeURL(path){return this.dburl+'/'+path}},{key:'retrieve',value:function retrieve(){var self=this;$.ajax($.extend(this.XHROpts,{success:function success(data,textStatus,jqXHR){self.results=data;self.xhrResultsHandler(data,textStatus,jqXHR,self);self.processResults();self.resultsComplete.resolve()}}))}},{key:'xhrError',value:function xhrError(xhr,ajaxOptions,thrownError){console.log('error');console.log(xhr);console.log(thrownError)}},{key:'xhrResultsHandler',value:function xhrResultsHandler(data,textStatus,jqXHR,self){}},{key:'build_paths',value:function build_paths(){return{items:{list:{method:'GET',path:'[path]'},item:{method:'GET',path:'[path]/%%'},item_metadata:{method:'GET',path:'[path]/%%/[key]'},find_by_metadata:{method:'POST',path:'[path]'}},query:{filtered_items:{method:'GET',path:'[path]'},filtered_collections:{method:'GET',path:'[path]'},collection:{method:'GET',path:'[path]/%%'}}}}}]);return DiscoveryDataHandler}();var DSpaceDataHandler=function(_DiscoveryDataHandler){_inherits(DSpaceDataHandler,_DiscoveryDataHandler);function DSpaceDataHandler(dbURI,dbmethod){_classCallCheck(this,DSpaceDataHandler);var _this9=_possibleConstructorReturn(this,(DSpaceDataHandler.__proto__||Object.getPrototypeOf(DSpaceDataHandler)).call(this,dbURI,dbmethod));_this9.resetQueryParameters();return _this9}_createClass(DSpaceDataHandler,[{key:'resetQueryParameters',value:function resetQueryParameters(){this.query=[];this.expansion=[];this.filters=[];this.fields=[]}},{key:'setQueryParameter',value:function setQueryParameter(parameter,value){var operator=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'like';this.query.push({name:'query_field[]',value:parameter});this.query.push({name:'query_op[]',value:operator});this.query.push({name:'query_val[]',value:value});return this}},{key:'prepareQuery',value:function prepareQuery(){}},{key:'setSearchTerm',value:function setSearchTerm(value){var operator=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'matches';this.setQueryParameter('*','(?i).*'+value+'*',operator);return this}},{key:'xhrResultsHandler',value:function xhrResultsHandler(data,textStatus,jqXHR){_get(DSpaceDataHandler.prototype.__proto__||Object.getPrototypeOf(DSpaceDataHandler.prototype),'xhrResultsHandler',this).call(this,data,textStatus,jqXHR);if(typeof this.results.items==='undefined'){this.results.items=[]}}},{key:'processResults',value:function processResults(){_get(DSpaceDataHandler.prototype.__proto__||Object.getPrototypeOf(DSpaceDataHandler.prototype),'processResults',this).call(this);var self=this;for(var i=0;i<self.results.items.length;i++){var item=self.results.items[i];var values={uuid:item.uuid,subject:'',byline:'',title:''};if(typeof item.metadata!=='undefined'){for(var j=0;j<item.metadata.length;j++){var md=item.metadata[j];var key=md.key;if(typeof values[key]==='undefined'){values[key]=[]}values[key].push(md.value)}}for(var prop in values){if(values[prop]==='undefined'||_typeof(values[prop])!=='object'){values[prop]=''}else{values[prop]=values[prop].join('%%')}}values.byline=self.serializeDisplayString(values,'dc.contributor.author');values.subjects=self.serializeDisplayString(values,'dc.subject');self.results.items[i].values=values}}},{key:'serializeDisplayString',value:function serializeDisplayString(values,key){var output='';if(typeof values[key]!=='undefined'){output=values[key].replaceAll('%%',', ');output=output.replaceLast(',',' and')}return output}},{key:'setAdditionalParameter',value:function setAdditionalParameter(parameter,value){this.query.push({name:parameter,value:value});return this}},{key:'setDateIssed',value:function setDateIssed(term){var operator=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'<';return this}},{key:'setItemLimit',value:function setItemLimit(){var limit=arguments.length>0&&arguments[0]!==undefined?arguments[0]:6;var page=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1;var offset=limit*(page-1);this.setAdditionalParameter('limit',limit).setAdditionalParameter('offset',offset);return this}},{key:'setCollection',value:function setCollection(collectionID){this.setAdditionalParameter('collSel[]',collectionID);return this}},{key:'expandQuery',value:function expandQuery(expansionValue){if(this.expansion.includes(expansionValue)===false){this.expansion.push(expansionValue);this.setAdditionalParameter('expand',this.expansion.join(','))}return this}},{key:'filterQuery',value:function filterQuery(filter){this.filters.push(filter);this.setAdditionalParameter('expand',this.filters.join(','));return this}},{key:'includeMetaData',value:function includeMetaData(){this.expandQuery('metadata');return this}},{key:'includeBitstreams',value:function includeBitstreams(){this.expandQuery('bitstreams');return this}},{key:'build_paths',value:function build_paths(){return{items:{list:{method:'GET',path:'items'},item:{method:'GET',path:'items/%%'},item_metadata:{method:'GET',path:'items/%%/metadata'},item_bitstreams:{method:'GET',path:'items/%%/bitstreams'},find_by_metadata:{method:'POST',path:'items/find-by-metadata-field'}},query:{filtered_items:{method:'GET',path:'filtered-items'},filtered_collections:{method:'GET',path:'filtered-collections'},collection:{method:'GET',path:'filtered-collections/%%'}},bitstreams:{list:{method:'GET',path:'bitsreams'},item:{method:'GET',path:'bitstreams/{%%}'},item_policy:{method:'GET',path:'bitstreams/%%/policy'},content:{method:'GET',path:'bitstreams/%%/retrieve'}},schemas:{list:{method:'GET',path:'registries/schema'},item:{method:'GET',path:'registries/schema/%%'},field:{method:'GET',path:'registries/metadata-fields/%%'}}}}}]);return DSpaceDataHandler}(DiscoveryDataHandler);var Discovery=function(){function Discovery(){_classCallCheck(this,Discovery);this.dataOpQueue=[];this.results={};this.items=[];this.view={};this.itemLimit=6;this.page=1}_createClass(Discovery,[{key:'inboundState',value:function inboundState(){}},{key:'controllerStateChange',value:function controllerStateChange(){this.dataOpQueue=this.criteriaController.queue;this.execute()}},{key:'setItemLimit',value:function setItemLimit(limit,page){this.itemLimit=limit;this.page=page;this.data.setItemLimit(this.itemLimit,this.page)}},{key:'setDataOp',value:function setDataOp(op,values){values=values.map(function(val){val=val.trim();return val});this.dataOpQueue.push({op:op,values:values})}},{key:'quickSearch',value:function quickSearch(term){this.dataOpQueue=[];this.setDataOp('setSearchTerm',[term]);this.execute()}},{key:'resetDataParameters',value:function resetDataParameters(){this.data.resetQueryParameters();if(this.itemLimit!==0){this.data.setItemLimit(this.itemLimit,this.page)}}},{key:'execute',value:function execute(){var self=this;self.retrieveData();$.when(this.data.resultsComplete).done(function(){self.results=self.data.getResults();self.items=typeof self.results.items!=='undefined'?self.results.items:[];self.displayResults()})}},{key:'newQuery',value:function newQuery(){this.resetDataParameters()}},{key:'retrieveData',value:function retrieveData(){var self=this;this.dataOpQueue.forEach(function(item){self.data[item.op].apply(self.data,item.values)});self.data.executeQuery();return this}},{key:'displayResults',value:function displayResults(){this.view.setItems(this.items).displayQueryResults()}}]);return Discovery}();var ECommonsOntarioDiscovery=function(_Discovery){_inherits(ECommonsOntarioDiscovery,_Discovery);function ECommonsOntarioDiscovery(vars){_classCallCheck(this,ECommonsOntarioDiscovery);var _this10=_possibleConstructorReturn(this,(ECommonsOntarioDiscovery.__proto__||Object.getPrototypeOf(ECommonsOntarioDiscovery)).call(this));_this10.data=new DSpaceDataHandler(vars.dbURI,vars.dbmethod);_this10.criteriaController=new ECommonsOntarioCriteriaController(_this10);_this10.paginationController=new HTMLPaginationController(_this10);_this10.view=new ECommonsOntarioHTMLView(_this10);console.log('eco');console.log(_this10);_this10.inboundState();return _this10}_createClass(ECommonsOntarioDiscovery,[{key:'inboundState',value:function inboundState(){var op=getUrlParameter('op');var value=decodeURIComponent(getUrlParameter('value'));this.newQuery();if(op==='setSearchTerm'){this.quickSearch(value);$('#search-value').val(value)}else{this.setDataOp('setQueryParameter',['dc:language','en']);this.execute()}}},{key:'setItemLimit',value:function setItemLimit(limit,page){_get(ECommonsOntarioDiscovery.prototype.__proto__||Object.getPrototypeOf(ECommonsOntarioDiscovery.prototype),'setItemLimit',this).call(this,limit,page)}},{key:'resetDataParameters',value:function resetDataParameters(){_get(ECommonsOntarioDiscovery.prototype.__proto__||Object.getPrototypeOf(ECommonsOntarioDiscovery.prototype),'resetDataParameters',this).call(this);this.data.includeMetaData()}}]);return ECommonsOntarioDiscovery}(Discovery);$(document).ready(function(){var discovery=new ECommonsOntarioDiscovery({dbURI:'books.spi.ryerson.ca/rest',dbmethod:'https'})})})(jQuery);String.prototype.ucfirst=function(){return this.charAt(0).toUpperCase()+this.slice(1)};String.prototype.replaceAll=function(search,replacement){var target=this;return target.replace(new RegExp(search,'g'),replacement)};String.prototype.replaceLast=function(find,replace){var index=this.lastIndexOf(find);if(index>=0){return this.substring(0,index)+replace+this.substring(index+find.length)}return this.toString()};function getUrlParameter(sParam){var sPageURL=decodeURIComponent(window.location.search.substring(1)),sURLVariables=sPageURL.split('&'),sParameterName,i;for(i=0;i<sURLVariables.length;i++){sParameterName=sURLVariables[i].split('=');if(sParameterName[0]===sParam){return sParameterName[1]===undefined?true:sParameterName[1]}}}
//# sourceMappingURL=find.js.map
