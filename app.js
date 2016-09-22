$(document).ready(function(){
  $(".cart").click(function(){
    $(".cart .dropdown-menu").toggle();
    $(".account .dropdown-menu").hide();
    $(".help .dropdwon-menu").hide();
  });
  $(".account").click(function(){
    $(".account .dropdown-menu").toggle();
    $(".cart .dropdown-menu").hide();
    $(".help .dropdwon-menu").hide();
  });
  $(".help").click(function(){
    $(".help .dropdown-menu").toggle();
    $(".account .dropdown-menu").hide();
    $(".cart .dropdown-menu").hide();
  });
});
