/***  Open and close the sidebar with open button   ***/
$('#open').click(function(){
    let position= $('.home-side').offset().left;
    let boxWidth = $('.home-side').outerWidth();
    if(position===0){
        $('.home-side').css({left:`-${boxWidth}px`,transition:'all 1s'})
        $('#open').css({left:`0px`,transition:'all 1s'})
        console.log(position,boxWidth);
    }else{
        $('.home-side').css({left:'0px',transition:'all 1s'})
        $('#open').css({left:`${boxWidth}px`,transition:'all 1s'})
    }
})

/***  Close sidebar the sidebar with X button    ***/
$('.close').click(function(){
    let boxWidth = $('.home-side').outerWidth();
    $('.home-side').css({left:`-${boxWidth}px`,transition:'all 1s'});
    $('#open').css({left:`0px`,transition:'all 1s'})
})

/***  Scrolling smoothing**** */
$('.nav').click(function(e){
   let navLinkAttr= $(this).attr('href');
   let topOfsection =$(navLinkAttr).offset().top;
   $('body,html').animate({
    scrollTop:topOfsection
   },3000)
})

/**  Section 2 of toggle sections *** */
$('.label').click((e)=>{
        let labelForAttr= $(e.target).attr('for'); 
        let  paragraphOfLabel = $(`#${labelForAttr}`);
            paragraphOfLabel.slideToggle("slow");
});


/** count down time*** */
/****
 * date now
 * date after few days
 * the difference bet. them
 */
setInterval(function() { 
    let one_day = 1000 * 60 * 60 * 24;
    let today= new Date();

    // 0-11 is Month in JavaScript
    let theEventDay =  new Date(today.getFullYear(), 3, 1,10,0,0);
    /** Thu Apr 25 2024 10:00:00 GMT+0200 (Eastern European Standard Time) */
    // To Calculate next year's the event if passed already.
        if (today.getMonth() == 
        3 && today.getDate() > 25) {
            theEventDay.setFullYear(theEventDay.getFullYear() + 1);
    }
    // To Calculate the result in milliseconds and 
    // then converting into days
    let Result = Math.round((theEventDay.getTime() - 
        today.getTime()) / one_day);
        
    // To remove the decimals from the (Result) 
    // resulting days value
    let Final_ResultOfDays = Result.toFixed(0);

    // To display the final_result value
    $('.daysBox span.data').text(Final_ResultOfDays);

    let differenceInMin=60-today.getMinutes();
    // To display the differenceInMin value
    $('.minBox span.data').text(differenceInMin);
    let differenceInHours  =theEventDay.getHours()-today.getHours();
    // To display the differenceInHours value
    $('.hoursBox span.data').text(Math.abs(differenceInHours));
    let differenceInSeconds =60-today.getSeconds();
    // To display the differenceInSeconds value
    $('.secondsBox span.data').text(differenceInSeconds)   
},1000)

/*********** */

/**** Start Count text in textarea********* */


$('#countChar').text(100)
$("#message").attr('maxlength','100');
$( "#message" ).on( "keypress", function() {
    // let x = $("#message").val().replace(/ /g,'').length;
    // if(x >=100){
    //     $("#message").attr('disabled','true');
    //     $('#countChar').text('your available character finished')
    // }else{
    //     $('#countChar').text(100-x)
    // }
    let dontDelete=true;
    var totalchar = 100;
         $('textarea').keydown(function (event) {
            var leftchars = totalchar - $(this).val().length;            
            $('#countChar').text(leftchars);
            if (leftchars == 0){              
                $('#countChar').text('your available character finished')
                var key = event.keyCode || event.charCode;
                if (key == 8 || key == 46) {                   
                    if (dontDelete) {
                        event.stopPropagation();
                    }
                }
            }                           
        })
        
  } );

/**** End Count text in textarea********* */



