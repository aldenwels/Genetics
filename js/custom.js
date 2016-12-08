$(function(){

    var parentOneAlleleA, parentOneAlleleB, parentTwoAlleleA, parentTwoAlleleB;
    var dominantTraits = ["Brown Eyes","Brown Hair","No Cleft","Dimples"];
    var recessiveTraits = ["Blue Eyes","Blonde hair","Cleft Chin","No Dimples"];
    var dominantImg = ["http://www.eyedoctorguide.com/images/brown-eyed.jpg","http://pix.iemoji.com/sbemojix2/0499.png","https://www.atlantafacialplasticsurgeon.com/wp-content/uploads/2011/10/Chin-Surgery-Atlanta-GA-300x217.jpg","https://i.ytimg.com/vi/vi4VqgEDa-4/maxresdefault.jpg"];
    var recessiveImg = ["http://www.eyedoctorguide.com/images/blue-eye.jpg","http://pix.iemoji.com/images/emoji/apple/ios-9/256/light-brown-person-with-blond-hair.png","http://1.bp.blogspot.com/-oM0NEozIt_E/Tk3pmwLbbBI/AAAAAAAAAYE/Mh8E47t9qFI/s1600/brazil.jpg","http://www.lovemysmiledental.com/wp-content/uploads/2012/05/Botox-4.jpg"];
    var traitIndex = 0;


    initAlleles();
    initChildren();
    setDominantSelectors();
    setRecessiveSelectors();

    function initAlleles(){
      parentOneAlleleA = $('#parent1a option:selected').val();
      parentOneAlleleB = $("#parent1b option:selected").val();
      parentTwoAlleleA = $("#parent2a option:selected").val();
      parentTwoAlleleB = $("#parent2b option:selected").val();
    }
    //initialize children
    function initChildren(){
      if(parentOneAlleleA == dominantTraits[traitIndex] || parentTwoAlleleA == dominantTraits[traitIndex])
          $("#posChild1 > img").attr("src",dominantImg[traitIndex]);
      else
          $("#posChild1 > img").attr("src",recessiveImg[traitIndex]);
      
      if(parentOneAlleleB == dominantTraits[traitIndex] || parentTwoAlleleA == dominantTraits[traitIndex])
          $("#posChild2 > img").attr("src",dominantImg[traitIndex]);
      else
          $("#posChild2 > img").attr("src",recessiveImg[traitIndex]);
      
      if(parentOneAlleleA == dominantTraits[traitIndex] || parentTwoAlleleB == dominantTraits[traitIndex])
          $("#posChild3 > img").attr("src",dominantImg[traitIndex]);
      else
          $("#posChild3 > img").attr("src",recessiveImg[traitIndex]);
      
      if(parentOneAlleleB == dominantTraits[traitIndex] || parentTwoAlleleB == dominantTraits[traitIndex])
        $("#posChild4 > img").attr("src",dominantImg[traitIndex]);
      else
        $("#posChild4 > img").attr("src",recessiveImg[traitIndex]);
    }

  $('#parent1a').change(function() {
      parentOneAlleleA = $('#parent1a option:selected').val();
      initChildren();
  });
  $('#parent1b').change(function() {
      parentOneAlleleB = $('#parent1b option:selected').val();
      initChildren();
  });
   $('#parent2a').change(function() {
      parentTwoAlleleA = $('#parent2a option:selected').val();
      initChildren();
  });
   $('#parent2b').change(function() {
      parentTwoAlleleB = $('#parent2b option:selected').val();
      initChildren();
  });

  $('.traitSelector').change(function() {
      traitIndex = $('.traitSelector option:selected').val();
      setDominantSelectors();
      setRecessiveSelectors();
  });   

   function setDominantSelectors(){
    console.log(traitIndex);
      $(".dominant").each(function(){
        $(this).val(dominantTraits[traitIndex]);
        $(this).text(dominantTraits[traitIndex]);
      });
      initAlleles();
      initChildren();
   }

    function setRecessiveSelectors(){
      $(".recessive").each(function(){
        $(this).val(recessiveTraits[traitIndex]);
        $(this).text(recessiveTraits[traitIndex]);
      });
      initAlleles();
      initChildren(); 
   }

});
