'use strict';var _typeof=typeof Symbol==='function'&&typeof Symbol.iterator==='symbol'?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==='function'&&obj.constructor===Symbol&&obj!==Symbol.prototype?'symbol':typeof obj};var _get=function get(object,property,receiver){if(object===null)object=Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===undefined){var parent=Object.getPrototypeOf(object);if(parent===null){return undefined}else{return get(parent,property,receiver)}}else if('value'in desc){return desc.value}else{var getter=desc.get;if(getter===undefined){return undefined}return getter.call(receiver)}};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}var $=jQuery;var DiscoveryController=function(){function DiscoveryController(discoveryObj){_classCallCheck(this,DiscoveryController);this.discoveryObj=discoveryObj;this.controller=null;this.queue=[];this.labels={before:[],after:[]}}_createClass(DiscoveryController,[{key:'updateController',value:function updateController(){}},{key:'enqueue',value:function enqueue(){}},{key:'buildLabels',value:function buildLabels(){this.labels={before:[],after:[]}}},{key:'addLabel',value:function addLabel(){}},{key:'reset',value:function reset(){}},{key:'submit',value:function submit(){this.enqueue();this.discoveryObj.controllerStateChange()}}]);return DiscoveryController}();var CriteriaSelectionController=function(_DiscoveryController){_inherits(CriteriaSelectionController,_DiscoveryController);function CriteriaSelectionController(discoveryObj){_classCallCheck(this,CriteriaSelectionController);var _this=_possibleConstructorReturn(this,(CriteriaSelectionController.__proto__||Object.getPrototypeOf(CriteriaSelectionController)).call(this,discoveryObj));_this.facets=null;return _this}_createClass(CriteriaSelectionController,[{key:'buildLabels',value:function buildLabels(){_get(CriteriaSelectionController.prototype.__proto__||Object.getPrototypeOf(CriteriaSelectionController.prototype),'buildLabels',this).call(this)}},{key:'updateController',value:function updateController(){_get(CriteriaSelectionController.prototype.__proto__||Object.getPrototypeOf(CriteriaSelectionController.prototype),'updateController',this).call(this)}},{key:'enqueue',value:function enqueue(){_get(CriteriaSelectionController.prototype.__proto__||Object.getPrototypeOf(CriteriaSelectionController.prototype),'enqueue',this).call(this)}},{key:'submit',value:function submit(){_get(CriteriaSelectionController.prototype.__proto__||Object.getPrototypeOf(CriteriaSelectionController.prototype),'submit',this).call(this)}}]);return CriteriaSelectionController}(DiscoveryController);var PaginationController=function(_DiscoveryController2){_inherits(PaginationController,_DiscoveryController2);function PaginationController(discoveryObj){_classCallCheck(this,PaginationController);return _possibleConstructorReturn(this,(PaginationController.__proto__||Object.getPrototypeOf(PaginationController)).call(this,discoveryObj))}_createClass(PaginationController,[{key:'updateController',value:function updateController(){_get(PaginationController.prototype.__proto__||Object.getPrototypeOf(PaginationController.prototype),'updateController',this).call(this)}},{key:'initUI',value:function initUI(){}},{key:'enqueue',value:function enqueue(){_get(PaginationController.prototype.__proto__||Object.getPrototypeOf(PaginationController.prototype),'enqueue',this).call(this)}},{key:'submit',value:function submit(){_get(PaginationController.prototype.__proto__||Object.getPrototypeOf(PaginationController.prototype),'submit',this).call(this)}}]);return PaginationController}(DiscoveryController);var HTMLPaginationController=function(_PaginationController){_inherits(HTMLPaginationController,_PaginationController);function HTMLPaginationController(discoveryObj){_classCallCheck(this,HTMLPaginationController);var _this3=_possibleConstructorReturn(this,(HTMLPaginationController.__proto__||Object.getPrototypeOf(HTMLPaginationController)).call(this,discoveryObj));_this3.discoveryObj=discoveryObj;_this3.paginator=$('[data-controller-paginator]');_this3.nextbtn=_this3.paginator.find('[data-controller-next]');_this3.prevbtn=_this3.paginator.find('[data-controller-previous]');_this3.pagebtns=_this3.paginator.find('[data-controller-pagebtns]');_this3.pageIndicator=_this3.pagebtns.html();_this3.currentPageIndicator=_this3.paginator.find('[data-controller-current-page]');_this3.totalResultsIndicator=_this3.paginator.find('[data-controller-total-results]');_this3.currentRangeIndicator=_this3.paginator.find('[data-controller-current-range]');_this3.itemLimit=_this3.paginator.data('controller-item-limit');_this3.currentPage=_this3.paginator.data('controller-current-page');_this3.initUI();return _this3}_createClass(HTMLPaginationController,[{key:'nextPage',value:function nextPage(){var resultsInfo=this.discoveryObj.data.getResultInfo();var nextPage=resultsInfo.currentPage+1>resultsInfo.totalPages?1:resultsInfo.currentPage+1;this.viewPage(nextPage)}},{key:'previousPage',value:function previousPage(){var resultsInfo=this.discoveryObj.data.getResultInfo();var prevPage=resultsInfo.currentPage-1===0?resultsInfo.totalPages:resultsInfo.currentPage-1;this.viewPage(prevPage)}},{key:'viewPage',value:function viewPage(page){var resultsInfo=this.discoveryObj.data.getResultInfo();this.paginator.attr('data-controller-current-page',page)}},{key:'updateController',value:function updateController(){this.initUI()}},{key:'initUI',value:function initUI(){_get(HTMLPaginationController.prototype.__proto__||Object.getPrototypeOf(HTMLPaginationController.prototype),'initUI',this).call(this);var self=this;var resultsInfo=this.discoveryObj.data.getResultInfo();this.paginator.hide();if(this.nextbtn.length>0){this.nextbtn.unbind('click').hide();this.nextbtn.bind('click',function(event){event.preventDefault();self.nextPage();self.submit()});if(resultsInfo.currentPage<resultsInfo.totalPages){this.nextbtn.show()}}if(this.prevbtn.length>0){this.prevbtn.unbind('click').hide();this.prevbtn.bind('click',function(event){event.preventDefault();self.previousPage();self.submit()});if(resultsInfo.currentPage>1){this.prevbtn.show()}}this.pagebtns.hide();this.pagebtns.html('');if(this.paginator.length>0){if(resultsInfo.totalPages>0){for(var i=1;i<resultsInfo.totalPages+1;i++){this.pagebtns.append(this.pageIndicator.replaceAll('%%',i))}this.pagebtns.find('[data-controller-pagebtn]').each(function(){$(this).bind('click',function(event){event.preventDefault();self.viewPage($(this).attr('data-pageref'));self.submit()});if(parseInt($(this).attr('data-pageref'))===resultsInfo.currentPage){$(this).addClass('selected')}else{$(this).removeClass('selected')}});this.pagebtns.show();if(this.currentPageIndicator.length>0){this.currentPageIndicator.html(resultsInfo.currentPage)}if(this.totalResultsIndicator.length>0){this.totalResultsIndicator.html(resultsInfo.totalResults)}if(this.currentRangeIndicator.length>0){var start=(resultsInfo.currentPage-1)*resultsInfo.itemLimit+1;var end=(resultsInfo.currentPage-1)*resultsInfo.itemLimit+resultsInfo.itemLimit;end=end>resultsInfo.totalResults?resultsInfo.totalResults:end;this.currentRangeIndicator.html(start+' \u2013 '+end)}if(resultsInfo.totalResults!==0){this.paginator.show()}}}}},{key:'enqueue',value:function enqueue(){this.queue=[];this.queue.push({op:'setItemLimit',values:[this.paginator.attr('data-controller-item-limit'),this.paginator.attr('data-controller-current-page')]})}}]);return HTMLPaginationController}(PaginationController);var HTMLSearchBox=function(_CriteriaSelectionCon){_inherits(HTMLSearchBox,_CriteriaSelectionCon);function HTMLSearchBox(discoveryObj){_classCallCheck(this,HTMLSearchBox);return _possibleConstructorReturn(this,(HTMLSearchBox.__proto__||Object.getPrototypeOf(HTMLSearchBox)).call(this,discoveryObj))}return HTMLSearchBox}(CriteriaSelectionController);var HTMLCriteriaController=function(_CriteriaSelectionCon2){_inherits(HTMLCriteriaController,_CriteriaSelectionCon2);function HTMLCriteriaController(discoveryObj){_classCallCheck(this,HTMLCriteriaController);var _this5=_possibleConstructorReturn(this,(HTMLCriteriaController.__proto__||Object.getPrototypeOf(HTMLCriteriaController)).call(this,discoveryObj));_this5.controller=$('[data-widget=\'discovery-controller\']');_this5.facets=_this5.controller.find('[data-facet]');_this5.maxlistitems=10;_this5.setDefaultState();_this5.initUI();return _this5}_createClass(HTMLCriteriaController,[{key:'setDefaultState',value:function setDefaultState(){var self=this;this.controller.find('.selected').removeClass('selected');this.controller.find('[data-default-value]').each(function(){self.markControlForInclusion($(this))});this.facets.find('li').each(function(){var item=$(this);if(item.data('value')==='*'&&item.siblings('[data-selected]').length===0){item.addClass('selected')}});this.facets.find('[data-user-input]').val('')}},{key:'markControlForInclusion',value:function markControlForInclusion(element){element[0].setAttribute('data-selected','');element.closest('[data-facet]')[0].setAttribute('data-enqueue','');element.addClass('selected')}},{key:'initUI',value:function initUI(){var self=this;this.controller.find('[data-submit]').bind('click',function(event){event.preventDefault();self.submit()});this.controller.find('[data-reset]').bind('click',function(event){event.preventDefault();self.discoveryObj.resetControllers();self.submit()});this.facets.each(function(){var facet=$(this);if(_typeof(facet.data('ui-type'))===undefined){return}var initfnc='init'+facet.data('ui-type').ucfirst();if(typeof self[initfnc]!=='function'){return}self[initfnc](facet,self)})}},{key:'initList',value:function initList(facet,self){var itemcnt=0;var showmore=false;facet.find('[data-user-input-wrapper]').find('li > a').each(function(){var item=$(this).closest('li');$(this).bind('click',function(event){event.preventDefault();item.toggleClass('selected');if(item.data('value')==='*'){facet.removeAttr('data-enqueue');item.siblings('li').removeAttr('data-selected').removeClass('selected')}else if(item[0].hasAttribute('data-selected')&&item.data('value')!=='*'){item.removeAttr('data-selected');if(item.siblings('[data-selected]').length===0){facet.removeAttr('data-enqueue');item.siblings().each(function(){if($(this).data('value')==='*'){$(this).addClass('selected')}})}}else{facet[0].setAttribute('data-enqueue','');item[0].setAttribute('data-selected','');if(item.data('value')!=='*'){item.siblings().each(function(){if($(this).data('value')==='*'){$(this).removeClass('selected')}})}}if(typeof facet.data('ui-restriction')!=='undefined'&&facet.data('ui-restriction')==='single'){item.siblings('li').each(function(){$(this).removeAttr('data-selected');if($(this).data('value')!=='*'){$(this).removeClass('selected')}})}self.submit()});if(itemcnt++>self.maxlistitems){$(this).closest('li').hide();showmore=true}});if(showmore===true){var morebtn=$('<p data-controller-ui-showmore><a title=\'Show all items\'>Show all items</a><p>');var fewerbtn=$('<p data-controller-ui-showfewer><a title=\'Show fewer items\'>Show fewer items</a><p>');morebtn.css('cursor','pointer').addClass('showmore').bind('click',function(event){event.preventDefault();facet.find('li:hidden').each(function(){$(this).fadeIn(200)});$(this).hide();facet.find('[data-controller-ui-showfewer]').fadeIn(200)});fewerbtn.css('cursor','pointer').css('display','none').addClass('showmore').bind('click',function(event){event.preventDefault();var i=0;facet.find('li').each(function(){if(i++>self.maxlistitems){$(this).fadeOut(200)}});$(this).hide();facet.find('[data-controller-ui-showmore]').fadeIn(200);$('html, body').animate({scrollTop:self.controller.offset().top},800)});facet.append([morebtn,fewerbtn])}}},{key:'initTextfield',value:function initTextfield(facet,self){facet.find('[data-user-input]').each(function(){$(this).bind('keyup',function(event){var input=$(this);if(input.val().length>2){facet[0].setAttribute('data-enqueue','');input[0].setAttribute('data-selected','');input.attr('data-value',input.val());self.submit()}else{facet.removeAttr('data-enqueue');input.removeAttr('data-selected')}}).bind('keypress',function(event){if((event.keyCode?event.keyCode:event.which)===13){self.submit();return false}else{return true}})})}},{key:'buildLabels',value:function buildLabels(){_get(HTMLCriteriaController.prototype.__proto__||Object.getPrototypeOf(HTMLCriteriaController.prototype),'buildLabels',this).call(this);var self=this;this.controller.find('[data-enqueue]').each(function(){var facet=$(this);var data=facet.data();var values=[];switch(data.uiType){case'list':facet.find('[data-selected] > a').each(function(){values.push($(this).html())});break;case'textfield':facet.find('[data-user-input]').each(function(){values.push($(this).val())});break;}self.labels[data.labelPosition].push({label:typeof data.label!=='undefined'?data.label:'',plural:typeof data.labelPlural!=='undefined'?data.labelPlural:'',values:values})})}},{key:'reset',value:function reset(){this.controller.find('[data-enqueue]').each(function(){$(this).removeAttr('data-enqueue')});this.controller.find('[data-selected]').each(function(){$(this).removeAttr('data-selected')});this.setDefaultState()}},{key:'enqueue',value:function enqueue(){var self=this;this.queue=[];this.controller.find('[data-enqueue]').each(function(){var facet=$(this);var values=[];facet.find('[data-selected]').each(function(){self.queue.push({op:facet.data('op'),values:facet.data('param').replace('%%',$(this).attr('data-value')).split('|')})})});this.buildLabels()}},{key:'submit',value:function submit(){_get(HTMLCriteriaController.prototype.__proto__||Object.getPrototypeOf(HTMLCriteriaController.prototype),'submit',this).call(this)}}]);return HTMLCriteriaController}(CriteriaSelectionController);var DiscoveryView=function(){function DiscoveryView(){_classCallCheck(this,DiscoveryView)}_createClass(DiscoveryView,[{key:'contructor',value:function contructor(discoveryObj){this.items=[]}},{key:'setItems',value:function setItems(items){this.items=items;return this}},{key:'displayQueryResults',value:function displayQueryResults(){}}]);return DiscoveryView}();var HTMLView=function(_DiscoveryView){_inherits(HTMLView,_DiscoveryView);function HTMLView(discoveryObj){_classCallCheck(this,HTMLView);var _this6=_possibleConstructorReturn(this,(HTMLView.__proto__||Object.getPrototypeOf(HTMLView)).call(this,discoveryObj));_this6.view=$('[data-view-results]');_this6.stage=_this6.view.find('[data-view-stage]');_this6.titleStage=_this6.view.find('[data-view-title-stage]');_this6.templates={};_this6.parseTemplates();_this6.titleLabels={before:[],after:[]};_this6.heartbeat=500;_this6.animationComplete=$.Deferred();_this6.paginator=$('[data-controller-paginator]');var self=_this6;$.when(_this6.animationComplete).done(function(){self.postAnimation()});return _this6}_createClass(HTMLView,[{key:'postAnimation',value:function postAnimation(){var self=this;if(self.paginator.length>0){}}},{key:'parseTemplates',value:function parseTemplates(){var self=this;var templates=this.view.find('[data-view-templates]');templates.find('[data-view-template-wrapper]').each(function(){var twrapper=$(this);self.templates[twrapper.data('view-template-name')]=twrapper.html()}).remove()}},{key:'processTokens',value:function processTokens(template,item){var processed=template;template.match(/\%\%[^\%]*\%\%/g).forEach(function(token){var key=token.replaceAll('%%','');processed=processed.replaceAll(token,item.values[key])});return processed}},{key:'setTitleLabels',value:function setTitleLabels(labels){this.titleLabels=labels;return this}},{key:'displayQueryResults',value:function displayQueryResults(){var self=this;if(self.paginator.length>0){}self.stage.fadeOut(self.heartbeat,function(){self.stage.html('');self.items.forEach(function(item){self.stage.append(self.processTokens(self.templates.book_capsule,item))});self.displayTitle();self.stage.fadeIn(self.heartbeat);self.animationComplete.resolve();self.animationComplete=$.Deferred()})}},{key:'displayTitle',value:function displayTitle(){var titleStageData=this.titleStage.data();var labels={before:[],after:[]};for(var position in this.titleLabels){for(var i=0;i<this.titleLabels[position].length;i++){var item=this.titleLabels[position][i];var type=item.values.length>1?'plural':'label';for(var j=0;j<item.values.length;j++){var span='<span class=\''+titleStageData.viewTitleTermClass+'\'>'+item.values[j]+'</span>';item.values[j]=span}labels[position].push(item[type].replaceAll('%%',item.values.concatToSentence()))}}var title=this.items.length>0?titleStageData.viewTitlePrefix+' '+labels.before.concatToSentence()+' '+titleStageData.viewTitleLabel+' '+labels.after.concatToSentence():titleStageData.viewTitleNone;this.titleStage.html(title.trim())}}]);return HTMLView}(DiscoveryView);var ECommonsOntarioCriteriaController=function(_HTMLCriteriaControll){_inherits(ECommonsOntarioCriteriaController,_HTMLCriteriaControll);function ECommonsOntarioCriteriaController(discoveryObj){_classCallCheck(this,ECommonsOntarioCriteriaController);return _possibleConstructorReturn(this,(ECommonsOntarioCriteriaController.__proto__||Object.getPrototypeOf(ECommonsOntarioCriteriaController)).call(this,discoveryObj))}return ECommonsOntarioCriteriaController}(HTMLCriteriaController);var ECommonsOntarioHTMLView=function(_HTMLView){_inherits(ECommonsOntarioHTMLView,_HTMLView);function ECommonsOntarioHTMLView(discoveryObject){_classCallCheck(this,ECommonsOntarioHTMLView);return _possibleConstructorReturn(this,(ECommonsOntarioHTMLView.__proto__||Object.getPrototypeOf(ECommonsOntarioHTMLView)).call(this,discoveryObject))}return ECommonsOntarioHTMLView}(HTMLView);var DiscoveryDataHandler=function(){function DiscoveryDataHandler(dbURI,dbPath,dbMethod){_classCallCheck(this,DiscoveryDataHandler);this.dburl=dbMethod+'://'+dbURI+dbPath;this.dbURI=dbURI;this.dbPath=dbPath;this.dbMethod=dbMethod;this.paths=this.build_paths();this.query={};this.resultsComplete=null;this.itemComplete=null;this.XHROpts=this.resetXHROpts();this.results={};this.itemLimit=6;this.currentPage=0;this.totalResults=0;this.totalPages=0;this.resultItem={};this.resultItemError={};this.expandedResults={}}_createClass(DiscoveryDataHandler,[{key:'resetQueryParameters',value:function resetQueryParameters(){this.query={}}},{key:'setQueryParameter',value:function setQueryParameter(parameter,value){var operator=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'like';this.query[Parameter]=value;return this}},{key:'setSearchTerm',value:function setSearchTerm(term){var operator=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'matches';return this}},{key:'setDateIssed',value:function setDateIssed(value){var operator=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'<';return this}},{key:'setItemLimit',value:function setItemLimit(limit,page){var offset=limit*(page-1);this.itemLimit=limit;this.currentPage=page;return this}},{key:'getQuery',value:function getQuery(){return this.query}},{key:'resetXHROpts',value:function resetXHROpts(){this.XHROpts={async:true,method:'GET',error:this.xhrError};this.resultsComplete=$.Deferred()}},{key:'setXHROpt',value:function setXHROpt(opt,value){this.XHROpts[opt]=value;return this}},{key:'getXHROpts',value:function getXHROpts(){return this.XHROpts}},{key:'executeQuery',value:function executeQuery(){this.resetXHROpts();this.prepareQuery();this.setXHROpt('url',this.makeURL(this.paths.query.filtered_items.path)).setXHROpt('method',this.paths.query.filtered_items.method).setXHROpt('data',this.query);this.retrieve();return this}},{key:'processResults',value:function processResults(){var self=this;$.when(this.resultsComplete).done(function(){})}},{key:'updateResultsInfo',value:function updateResultsInfo(totalResults){this.totalResults=totalResults;this.totalPages=Math.ceil(this.totalResults/this.itemLimit)}},{key:'getResultInfo',value:function getResultInfo(){return{itemLimit:parseInt(this.itemLimit),totalResults:parseInt(this.totalResults),currentPage:parseInt(this.currentPage),totalPages:parseInt(this.totalPages)}}},{key:'getResults',value:function getResults(){return this.results}},{key:'getItem',value:function getItem(){return this.resultItem}},{key:'retrieveItem',value:function retrieveItem(id){}},{key:'makeURL',value:function makeURL(path){return this.dburl+'/'+path}},{key:'retrieve',value:function retrieve(){var self=this;$.ajax($.extend(this.XHROpts,{success:function success(data,textStatus,jqXHR){self.results=data;self.xhrResultsHandler(data,textStatus,jqXHR,self);self.processResults();self.resultsComplete.resolve()}}))}},{key:'xhrError',value:function xhrError(xhr,ajaxOptions,thrownError){console.log('error');console.log(xhr);console.log(thrownError)}},{key:'xhrResultsHandler',value:function xhrResultsHandler(data,textStatus,jqXHR,self){}},{key:'build_paths',value:function build_paths(){return{items:{list:{method:'GET',path:'[path]'},item:{method:'GET',path:'[path]/%%'},item_metadata:{method:'GET',path:'[path]/%%/[key]'},find_by_metadata:{method:'POST',path:'[path]'}},query:{filtered_items:{method:'GET',path:'[path]'},filtered_collections:{method:'GET',path:'[path]'},collection:{method:'GET',path:'[path]/%%'}}}}}]);return DiscoveryDataHandler}();var DSpaceDataHandler=function(_DiscoveryDataHandler){_inherits(DSpaceDataHandler,_DiscoveryDataHandler);function DSpaceDataHandler(dbURI,dbPath,dbmethod){_classCallCheck(this,DSpaceDataHandler);var _this9=_possibleConstructorReturn(this,(DSpaceDataHandler.__proto__||Object.getPrototypeOf(DSpaceDataHandler)).call(this,dbURI,dbPath,dbmethod));_this9.resetQueryParameters();return _this9}_createClass(DSpaceDataHandler,[{key:'resetQueryParameters',value:function resetQueryParameters(){this.query=[];this.expansion=[];this.filters=[];this.fields=[]}},{key:'setQueryParameter',value:function setQueryParameter(parameter,value){var operator=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'like';this.query.push({name:'query_field[]',value:parameter});this.query.push({name:'query_op[]',value:operator});this.query.push({name:'query_val[]',value:value});return this}},{key:'prepareQuery',value:function prepareQuery(){}},{key:'setSearchTerm',value:function setSearchTerm(value){var operator=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'matches';this.setQueryParameter('*','(?i).*'+value+'*',operator);return this}},{key:'xhrResultsHandler',value:function xhrResultsHandler(data,textStatus,jqXHR){_get(DSpaceDataHandler.prototype.__proto__||Object.getPrototypeOf(DSpaceDataHandler.prototype),'xhrResultsHandler',this).call(this,data,textStatus,jqXHR);if(typeof this.results.items==='undefined'){this.results.items=[]}}},{key:'processResults',value:function processResults(){_get(DSpaceDataHandler.prototype.__proto__||Object.getPrototypeOf(DSpaceDataHandler.prototype),'processResults',this).call(this);var self=this;if(typeof self.expandedResults['unfiltered-item-count']!=='undefined'){self.updateResultsInfo(self.expandedResults['unfiltered-item-count'])}for(var i=0;i<self.results.items.length;i++){var item=self.results.items[i];var values={subject:'',byline:'',title:''};if(typeof item.metadata!=='undefined'){for(var j=0;j<item.metadata.length;j++){var md=item.metadata[j];var key=md.key;if(typeof values[key]==='undefined'){values[key]=[]}values[key].push(md.value)}}for(var prop in values){if(values[prop]==='undefined'||_typeof(values[prop])!=='object'){values[prop]=''}else{values[prop]=values[prop].join('%%')}}values.uuid=item.uuid.trim();values.byline=self.serializeDisplayString(values,'dc.contributor.author');values.subjects=self.serializeDisplayString(values,'dc.subject');self.results.items[i].values=values}}},{key:'serializeDisplayString',value:function serializeDisplayString(values,key){var output='';if(typeof values[key]!=='undefined'){output=values[key].replaceAll('%%',', ');output=output.replaceLast(',',' and')}return output}},{key:'setAdditionalParameter',value:function setAdditionalParameter(parameter,value){this.query.push({name:parameter,value:value});return this}},{key:'setDateIssed',value:function setDateIssed(date){var operator=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'<';return this}},{key:'setDateUpdated',value:function setDateUpdated(timestamp){var now=new Date(Date.now()).toUTCString();var from=new Date(timestamp*1000).toUTCString();this.setQueryParameter('dc.date.updated','['+from+' TO '+now+']','equals')}},{key:'setItemLimit',value:function setItemLimit(){var limit=arguments.length>0&&arguments[0]!==undefined?arguments[0]:8;var page=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1;_get(DSpaceDataHandler.prototype.__proto__||Object.getPrototypeOf(DSpaceDataHandler.prototype),'setItemLimit',this).call(this,limit,page);var offset=limit*(page-1);this.setAdditionalParameter('limit',limit).setAdditionalParameter('offset',offset);return this}},{key:'setCollection',value:function setCollection(collectionID){this.setAdditionalParameter('collSel[]',collectionID);return this}},{key:'expandQuery',value:function expandQuery(expansionValue){if(this.expansion.includes(expansionValue)===false){this.expansion.push(expansionValue);this.setAdditionalParameter('expand',this.expansion.join(','))}return this}},{key:'filterQuery',value:function filterQuery(filter){this.filters.push(filter);this.setAdditionalParameter('expand',this.filters.join(','));return this}},{key:'includeMetaData',value:function includeMetaData(){this.expandQuery('metadata');return this}},{key:'includeBitstreams',value:function includeBitstreams(){this.expandQuery('bitstreams');return this}},{key:'retrieve',value:function retrieve(){var self=this;$.ajax($.extend(this.XHROpts,{success:function success(data,textStatus,jqXHR){self.results=data;self.xhrResultsHandler(data,textStatus,jqXHR,self);self.retrieveExpandedResults()}}))}},{key:'retrieveExpandedResults',value:function retrieveExpandedResults(){var self=this;$.ajax({method:'GET',async:true,url:this.makeURL(this.paths.query.filtered_items.path),data:this.query.filter(function(item){return(item.name==='limit'||item.name==='offset')!==true}),success:function success(data,textStatus,jqXHR){self.expandedResults=data;self.processResults();self.resultsComplete.resolve()}})}},{key:'retrieveItem',value:function retrieveItem(id){var self=this;var item={};this.prepareItemQuery();this.itemComplete=$.Deferred();var opts={url:this.makeURL(this.paths.items.item.path.replace('%%',id)),method:this.paths.items.item.method,data:{expand:'metadata,bitstreams'}};$.ajax($.extend(opts,{success:function success(data,textStatus,jqXHR){item=data;item.networkInfo={textStatus:textStatus,xhr:jqXHR,error:false,errorData:{}};self.resultItem=item;self.itemComplete.resolve()},error:function error(xhr,ajaxOptions,thrownError){item.networkInfo={textStatus:'error',xhr:xhr,error:true,errorData:{thrownError:thrownError,options:ajaxOptions}};self.itemComplete.resolve()}}))}},{key:'prepareItemQuery',value:function prepareItemQuery(){}},{key:'build_paths',value:function build_paths(){return{items:{list:{method:'GET',path:'items'},item:{method:'GET',path:'items/%%'},item_metadata:{method:'GET',path:'items/%%/metadata'},item_bitstreams:{method:'GET',path:'items/%%/bitstreams'},find_by_metadata:{method:'POST',path:'items/find-by-metadata-field'}},query:{filtered_items:{method:'GET',path:'filtered-items'},filtered_collections:{method:'GET',path:'filtered-collections'},collection:{method:'GET',path:'filtered-collections/%%'}},bitstreams:{list:{method:'GET',path:'bitsreams'},item:{method:'GET',path:'bitstreams/{%%}'},item_policy:{method:'GET',path:'bitstreams/%%/policy'},content:{method:'GET',path:'bitstreams/%%/retrieve'}},schemas:{list:{method:'GET',path:'registries/schema'},item:{method:'GET',path:'registries/schema/%%'},field:{method:'GET',path:'registries/metadata-fields/%%'}}}}}]);return DSpaceDataHandler}(DiscoveryDataHandler);var Discovery=function(){function Discovery(){_classCallCheck(this,Discovery);this.dataOpQueue=[];this.results={};this.items=[];this.view={};this.controllers={};this.titleLabels={before:[],after:[]}}_createClass(Discovery,[{key:'init',value:function init(){this.inboundState()}},{key:'registerController',value:function registerController(label,controller){this.controllers[label]=controller}},{key:'inboundState',value:function inboundState(){}},{key:'controllerStateChange',value:function controllerStateChange(){this.resetDataOps();for(var controller in this.controllers){if(this.controllers[controller].queue.length>0){this.dataOpQueue=this.dataOpQueue.concat(this.controllers[controller].queue)}}this.execute()}},{key:'setItemLimit',value:function setItemLimit(limit,page){this.data.setItemLimit(limit,page)}},{key:'resetDataOps',value:function resetDataOps(){this.dataOpQueue=[]}},{key:'setDataOp',value:function setDataOp(op,values){values=values.map(function(val){val=val.trim();return val});this.dataOpQueue.push({op:op,values:values})}},{key:'quickSearch',value:function quickSearch(term){this.dataOpQueue=[];this.setDataOp('setSearchTerm',[term]);this.execute()}},{key:'resetDataParameters',value:function resetDataParameters(){this.data.resetQueryParameters()}},{key:'execute',value:function execute(){var self=this;self.retrieveData();$.when(this.data.resultsComplete).done(function(){self.results=self.data.getResults();self.items=typeof self.results.items!=='undefined'?self.results.items:[];self.updateTitleLabels().displayResults().updateControllers()})}},{key:'updateTitleLabels',value:function updateTitleLabels(){this.titleLabels={before:[],after:[]};for(var controller in this.controllers){this.titleLabels.before=this.titleLabels.before.concat(this.controllers[controller].labels.before);this.titleLabels.after=this.titleLabels.after.concat(this.controllers[controller].labels.after)}return this}},{key:'updateControllers',value:function updateControllers(){for(var controller in this.controllers){this.controllers[controller].updateController()}}},{key:'resetControllers',value:function resetControllers(){for(var controller in this.controllers){this.controllers[controller].reset()}}},{key:'newQuery',value:function newQuery(){this.resetDataParameters()}},{key:'retrieveData',value:function retrieveData(){var self=this;this.resetDataParameters();this.dataOpQueue.forEach(function(item){self.data[item.op].apply(self.data,item.values)});self.data.executeQuery();return this}},{key:'displayResults',value:function displayResults(){this.view.setItems(this.items).setTitleLabels(this.titleLabels).displayQueryResults();return this}}]);return Discovery}();var ECommonsOntarioDiscovery=function(_Discovery){_inherits(ECommonsOntarioDiscovery,_Discovery);function ECommonsOntarioDiscovery(vars){_classCallCheck(this,ECommonsOntarioDiscovery);var _this10=_possibleConstructorReturn(this,(ECommonsOntarioDiscovery.__proto__||Object.getPrototypeOf(ECommonsOntarioDiscovery)).call(this));_this10.data=new DSpaceDataHandler(vars.dbURI,vars.dbPath,vars.dbmethod);_this10.view=new ECommonsOntarioHTMLView(_this10);_this10.registerController('criteriaController',new ECommonsOntarioCriteriaController(_this10));_this10.registerController('paginationController',new HTMLPaginationController(_this10));return _this10}_createClass(ECommonsOntarioDiscovery,[{key:'inboundState',value:function inboundState(){var op=getUrlParameter('op');var value=decodeURIComponent(getUrlParameter('value'));if(op==='setSearchTerm'){this.controllers.criteriaController.reset();var searchElement=$('#search-value');searchElement.val(value);searchElement.attr('data-value',value);this.controllers.criteriaController.markControlForInclusion(searchElement)}for(var controller in this.controllers){this.controllers[controller].enqueue()}this.controllerStateChange()}},{key:'setItemLimit',value:function setItemLimit(limit,page){_get(ECommonsOntarioDiscovery.prototype.__proto__||Object.getPrototypeOf(ECommonsOntarioDiscovery.prototype),'setItemLimit',this).call(this,limit,page)}},{key:'resetDataParameters',value:function resetDataParameters(){_get(ECommonsOntarioDiscovery.prototype.__proto__||Object.getPrototypeOf(ECommonsOntarioDiscovery.prototype),'resetDataParameters',this).call(this);this.data.includeMetaData()}}]);return ECommonsOntarioDiscovery}(Discovery);var CatalogueItemView=function(){function CatalogueItemView(discoveryObj,itemObj){_classCallCheck(this,CatalogueItemView);this.discoveryObj=discoveryObj;this.itemObj=itemObj;this.item={}}_createClass(CatalogueItemView,[{key:'displayItemResults',value:function displayItemResults(){var self=this;this.item=this.itemObj.item}},{key:'processTokens',value:function processTokens(){}}]);return CatalogueItemView}();var HTMLItemView=function(_CatalogueItemView){_inherits(HTMLItemView,_CatalogueItemView);function HTMLItemView(discoveryObj,itemObj){_classCallCheck(this,HTMLItemView);var _this11=_possibleConstructorReturn(this,(HTMLItemView.__proto__||Object.getPrototypeOf(HTMLItemView)).call(this,discoveryObj,itemObj));_this11.initDisplay();return _this11}_createClass(HTMLItemView,[{key:'displayItemResults',value:function displayItemResults(){_get(HTMLItemView.prototype.__proto__||Object.getPrototypeOf(HTMLItemView.prototype),'displayItemResults',this).call(this);this.processTokens()}},{key:'initDisplay',value:function initDisplay(){$('#available-versions').hide()}},{key:'processTokens',value:function processTokens(){var data=this.item;var self=this;$('#textbook-title').text(data.name);var author='';var subjects=[];var secondaryBtn=$('#print-btn');var downloadMimeTypes=['application/pdf','application/epub+zip','application/epub','text/html','video/mpeg','audio/mp3','audio/ogg','audio/m4a'];var cover={bitstream:null,link:null};$.each(data.metadata,function(k,v){if(v.key==='dc.contributor.author'){var authorelement='<div class="author-info"><h4 class="author-name">'+v.value+'</h4><p class="author-bio">';if(v.image_url){authorelement=authorelement+'<img class="author-portrait" src="'+v.image_url+'" class="author-portrait">'}if(v.bio){authorelement=authorelement+v.bio}authorelement=authorelement+'</p></div>';$('#authors').append(authorelement);$('#textbook-title-authors').text(v.value)}if(v.key==='dc.subject'){subjects.push(v.value)}if(v.key==='dc.description.abstract'){$('#textbook-description-info').html('<p>'+v.value+'</p>')}if(v.key==='LRMI.EducationalAudience'){$('#level').text(v.value)}if(v.key==='dc.date.created'){$('#date-published').text(v.value)}if(v.key==='dc.type'){$('#type').text(v.value)}});var subj=subjects.join(',');$('#subjects').text(subj);$('#preview-bookcover').attr('src',data.cover_url);if(data.bitstreams!==null){$.each(data.bitstreams,function(k,v){if(downloadMimeTypes.indexOf(v.mimeType)!==-1){$('#available-versions ul').append('<li><a mime-type="'+v.mimeType+'" href="'+self.discoveryObj.data.dbMethod+'://'+self.discoveryObj.data.dbURI+v.retrieveLink+'" title="Download" download>'+v.format+'</a></li>')}if((v.format==='image/png'||v.format==='image/jpeg')&&v.name.indexOf('cover')>-1){cover.bitstream=self.discoveryObj.data.dbMethod+'://'+self.discoveryObj.data.dbURI+v.retrieveLink;cover.link='<img id=\'preview-bookcover\' alt=\'cover\' src=\''+cover.bitstream+'\' />'}});if(cover.link!==null){$('#preview-info').prepend(cover.link)}}else{$('#read-versions').hide()}var haslink=false;$.each(data.metadata,function(){if(this.key==='dc.relation.isformatof'){var urlRegex=/(https?:\/\/[^\s]+)/g;var link=null;this.value.replace(urlRegex,function(url){link=url});if(link!==null){secondaryBtn.attr('href',link).show();haslink=true}}});if(haslink===false){secondaryBtn.text('Order print version').attr('href','#').show()}$('#download-btn').click(function(){$('#download-btn').toggleClass('noradiusbtn');$('#available-versions').toggle()});$('.metadata-item').each(function(){var item=$(this);if(item.find('p').text()===''){item.hide()}});$('#textbook-social-media').hide()}}]);return HTMLItemView}(CatalogueItemView);var CatalogueItem=function(){function CatalogueItem(discoveryObj){_classCallCheck(this,CatalogueItem);this.discoveryObj=discoveryObj;this.id=null;this.item={}}_createClass(CatalogueItem,[{key:'displayResults',value:function displayResults(){this.view.displayItemResults()}}]);return CatalogueItem}();var ECommonsOntarioCatalogueItem=function(_CatalogueItem){_inherits(ECommonsOntarioCatalogueItem,_CatalogueItem);function ECommonsOntarioCatalogueItem(discoveryObj){_classCallCheck(this,ECommonsOntarioCatalogueItem);var _this12=_possibleConstructorReturn(this,(ECommonsOntarioCatalogueItem.__proto__||Object.getPrototypeOf(ECommonsOntarioCatalogueItem)).call(this,discoveryObj));_this12.view=new HTMLItemView(discoveryObj,_this12);var self=_this12;_this12.id=decodeURIComponent(getUrlParameter('id'));_this12.discoveryObj.data.retrieveItem(_this12.id);$.when(discoveryObj.data.itemComplete).done(function(){self.item=self.discoveryObj.data.getItem();self.displayResults()});return _this12}_createClass(ECommonsOntarioCatalogueItem,[{key:'displayResults',value:function displayResults(){_get(ECommonsOntarioCatalogueItem.prototype.__proto__||Object.getPrototypeOf(ECommonsOntarioCatalogueItem.prototype),'displayResults',this).call(this)}}]);return ECommonsOntarioCatalogueItem}(CatalogueItem);String.prototype.ucfirst=function(){return this.charAt(0).toUpperCase()+this.slice(1)};String.prototype.replaceAll=function(search,replacement){var target=this;return target.replace(new RegExp(search,'g'),replacement)};String.prototype.replaceLast=function(find,replace){var index=this.lastIndexOf(find);if(index>=0){return this.substring(0,index)+replace+this.substring(index+find.length)}return this.toString()};Array.prototype.concatToSentence=function(){var conjunction=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'and';var sentence=this.join(', ');return sentence.replaceLast(',',' '+conjunction)};function getUrlParameter(sParam){var sPageURL=decodeURIComponent(window.location.search.substring(1)),sURLVariables=sPageURL.split('&'),sParameterName,i;for(i=0;i<sURLVariables.length;i++){sParameterName=sURLVariables[i].split('=');if(sParameterName[0]===sParam){return sParameterName[1]===undefined?true:sParameterName[1]}}}
//# sourceMappingURL=discovery.js.map
