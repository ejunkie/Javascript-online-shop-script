// helper function
	
  /* copied from
    http://stackoverflow.com/questions/11582512/how-to-get-url-parameters-with-javascript/11582513#11582513	
  */

function getURLParameter(name,searchstring) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(searchstring)||[,""])[1].replace(/\+/g, '%20'))||null
}

//callback function for product page custom rendering
    function ej_product_callback(product)  { 
        if(product.custom_thumbnail[product.itemNumber]) 
          $('#thumbnail_element').remove(); 
        else 
          $('#custom_thumbnail_element').remove(); 
    }; 

//callback function for product index custom rendering
    function ej_shop_callback(shop){ 
      var category = getURLParameter("cat",window.location.search); 
      if (!category) {
        console.log(category);
        category="";
      }
         
      if (shop.filters.length>0) {
        category=shop.filters[0];
      }
      
   
      shop.products.forEach(
        function(y){ 
          if(
              (y.needs_options == "true" || y.needs_advance_options == "true") 
              && 
              document.getElementById("button_element_"+y.id)
            ) { 
               document.getElementById("button_element_"+y.id).innerHTML = "View Options"; 
               document.getElementById("button_element_"+y.id).setAttribute('onclick',''); 
               $("#button_element_"+y.id).click(
                function() { 
                  document.getElementById("modal_div_"+y.id).click(); 
                  }
               );  
            } 
        }
      ); 
      
      var tmp = "<option value=''>All</option>"; 
      if (shop.available_filters != null) {
        shop.available_filters.forEach(
          function(y){ 
            tmp += "<option value='"+y+"' "+(category.toLowerCase()==y.toLowerCase()?'selected':'')+">"+y+"</option>" 
          }
        );
      }  
      document.getElementById("ej_filter_handler").innerHTML = tmp;  
    }
