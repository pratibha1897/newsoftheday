$(document).ready(function(){
    var url='http://hn.algolia.com/api/v1/search?query=javascript';

    $.getJSON(url,function(data){
        
        var quotes= data.hits;
        console.log(quotes[0].title);

        var currentQuotes='';

            $('.read').on('click', function(){
                currentQuotes=quotes[Math.floor(Math.random()*quotes.length)];
                console.log(currentQuotes);
               $('.quoteBody').hide();
               $('.quoteBodyLink').html(currentQuotes.title).attr('href',currentQuotes.url).attr('target','_blank');
               $('.quoteAuthor').html(currentQuotes.author);
               $('.tweetQuote')
               .attr(
                'href','https://twitter.com/intent/tweet?text= ' + currentQuotes.title + ' - '+ currentQuotes.author
               )
               .attr('target','_blank').removeClass('disabled');
               //$('a').removeClass('disabled');
               $('.read').html('Show me one more');
            });
 
         

        console.log(data);
    });

});