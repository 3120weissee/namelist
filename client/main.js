$(document).ready(()=>{
	$("form").submit((event)=>{
		event.preventDefault();
		const dataForServer = $(this).serialize();
		$.get({
			url:"/name",
			method:"post",
			data: dataForServer,
			success: (res)=>{
				
			}
		});
	});
});