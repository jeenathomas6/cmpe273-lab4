
$(":button").click(function() {

    var isbn = this.id;

    alert(isbn);
    
    $.ajax({
    	url:"http://localhost:8001/library/v1/books/"+isbn+"?status=lost",
    	type: "PUT",
    	success: function(){
    		alert("success");
    		$('#stat').html("lost");
    		$('#'+isbn).prop("disabled",true);
    	}
    	
    });
    

});