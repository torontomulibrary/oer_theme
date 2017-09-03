/* jshint latedef:nofunc */
//needed for function hoisting for build 

(function($) {
        
    $(document).ready(function() {
                  
      var discovery = new ECommonsOntarioDiscovery
        ({
          dbURI:        'dsweb.semiprodint.ryerson.ca/rest',
          dbmethod:     'http'
        });
      
      discovery.init();
      
    });
  
})(jQuery);
