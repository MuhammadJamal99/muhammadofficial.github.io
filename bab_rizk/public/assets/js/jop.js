// $(function(){
//     'use strict';
//     $('form#new_jop').on('submit',function(e){
//         e.preventDefault();
//         let jop_name = $('#jop_name').val();
//         $.ajax({
//             url:"{{route('add_jop')}}",
//             type:"POST",
//             data:{
//                 name:jop_name
//             },
//             success:function(response){
//                 if(response){
//                     $('#jops-table tbody').prepend('<tr><td></td><td>'+response.name+'</td></tr>');
//                     $('form#new_jop')[0].reset();

//                 }

//             }
//         });
//     });
// });