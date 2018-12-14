$(function(){
    let x = true
    $('.button').click( function(e){
       if(x){
        $('.float').addClass('active')
        
       }else{
        $('.float').removeClass('active')
       }
       x=!x
      })
      $('.wrap').on('click',function(e){
        e.stopPropagation()
       })

      $(document).on('click',function(){
        $('.float').removeClass('active')
        x=true
      })
})
