# shop-script
Copy-paste shop for your existing website

## demo
https://ejunkie-shop-script.glitch.me/examples/shop/

## usage

* to get raw json

* shop view
      
      var ej = new EJ_Shop({
          client_id:your_ejunkie_client_id,
          filters:[category],
          hidden:[item_number],
          pinned:[item_number],
          pinned_down:[item_number],
          offset:8,
          lazy_loading:true,
          lazy_loading_eff:400,
          container: "name_of_container_div"
       }, callback_function);
    
   > callback returns
      
* product view

      var ej = new EJ_Product({
          client_id:your_ejunkie_client_id,
          item_number:item_number,
          custom_thumbnail:{'item_number':'image_url'},
          show_related:true,
          show_tags:true,
          show_related_max:4,
          container: "name_of_container_div"
      }, ej_product_callback); 

  > callback returns
  
<!-- 


## template literals

## template

## examples

-->
