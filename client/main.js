// $(document).ready( function(){
//     $('form').submit( function(event){
//         event.preventDefault();
//         const dataForServer = $(this).serialize();
//         console.log ($(this));
       
    
//     //     $.ajax({
//     //         url: '/name',
//     //         method: 'post',
//     //         data: dataForServer,
//     //         success: function(responseFromServer){
//     //             const htmlTags = `<p class=".${responseFromServer.name}">Name: ${responseFromServer.name} <img src='./Views/trashcan.png'class=".${responseFromServer.name}"></p>`;
//     //             $('#results').append(htmlTags);
//     //         }
//     //     })
       
//     // });
//     // $ ('img').click(function(){
//     //     var removeline = $(this).attr("class");
//     //     $ ("#") + removeline.remove();
//     })
// });

$(document).ready(()=>{
	$("form").submit((event)=>{
		event.preventDefault();
		const dataForServer = $(this).serialize();
		console.log($(this));
		// $.get({
		// 	url:"/name",
		// 	method:"post",
		// 	data: dataForServer,
		// 	success: (res)=>{
		// 		console.log(res);
		// 	}
		// });
	});
});