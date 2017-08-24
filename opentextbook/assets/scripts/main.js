(function($) {
/***Pressbooks Default***/	
	$('.catalog').each(function() {
		$(this).children('.book').matchHeight();
	});
	
/** TEMP: Search Widget */

var qs = $('#quick-search');

if (qs.length > 0) {
  var qsbox = qs.find('#quick-search-term');
  var qsbtn = qs.find('#browse-btn');
  
  qsbox.attr('placeholder','Search for textbooks by author, title or keyword');
  qsbtn.bind('click',function(event) {
    event.preventDefault();
    if (qsbox.val() !== '') {
      window.location.href = "catalogue?op=setSearchTerm&value=" + encodeURIComponent(qsbox.val());
    } else {
      window.location.href = "catalogue";
    }
  });
}

/***Opentextbook Preview.js***/
	var opentextbookxhr = null;

	function opentextbookpreview(id){
		id=id||false;
		if(id){
			opentextbookxhr = jQuery.getJSON( "/single_item.json",{uuid:id}, function(data){
				jQuery('#textbook-title').text(data.name+'---');
				var author='';
				var subjects=[];
				jQuery.each(data.metadata,function(k,v){
					if(v.key==='dc.contributor.author'){
						var authorelement='<div class="author-info"><h4 class="author-name">'+v.value+'</h4><p class="author-bio">';
						if(v.image_url){
							authorelement=authorelement+'<img class="author-portrait" src="'+v.image_url+'" class="author-portrait">';
						}
						if(v.bio){
							authorelement=authorelement+v.bio;
						}
						authorelement=authorelement+'</p></div>';
						jQuery('#authors').append(authorelement);
						jQuery('#textbook-title-authors').text(v.value+'---');
					}
					if(v.key==='dc.subject'){
						subjects.push(v.value);
					}
					if(v.key==='dc.description.abstract'){
						jQuery('#textbook-description-info').html('<p>'+v.value+'</p>');
					}
					if(v.key==='LRMI.EducationalAudience'){
						jQuery('#level').text(v.value);
					}
					if(v.key==='dc.date.created'){
						jQuery('#date-published').text(v.value);
					}
					if(v.key==='dc.type'){
						jQuery('#type').text(v.value);
					}
				});
				var subj=subjects.join(",");
				jQuery('#subjects').text(subj);
				jQuery('#preview-bookcover').attr('src',data.cover_url);
				
				jQuery('#textbook-table-of-contents-info').html();
				jQuery('#adapted-from').text();
				jQuery('#adoption-count').text();
				jQuery('#peerreview-count').text();
			});
		}
	}
	
	jQuery('#site-header-menu-mobile-btn').click(function(){
		jQuery('#site-header-menu-mobile-btn').toggle();
		jQuery('#site-navigation').toggle();
	});
	jQuery('#site-header-menu-mobile-btn').click(function(){
		jQuery('#quick-search').submit();
	});
})(jQuery);