$(function(){
    // let x = true
    // $('.button').click( function(e){
    //    if(x){
    //     $('.float').addClass('active')
        
    //    }else{
    //     $('.float').removeClass('active')
    //    }
    //    x=!x
    //   })
    $('.button').on('click', () => {
        let flag= true
        if (flag) {
            $('.float').addClass('active')
            flag = false
        } else {
            $('.float').removeClass('active')
            flag = true
        }
    })

      $('.wrap').on('click',function(e){
        e.stopPropagation()
       })

      $(document).on('click',function(){
        $('.float').removeClass('active')
        flag=true
      })
})
