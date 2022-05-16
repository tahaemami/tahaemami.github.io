    $(function(){
                var array = ['paper', 'rock', 'scissor'];
                var yourscore = 0;
                var pcscore = 0;

                $(document).on('click', '.your span', function(){
                    var you = $(this).attr('class');

                    $('.your span').css('opacity', 0.3);
                    $(this).css('opacity', 1.0);

                    var pc = array[Math.floor(Math.random()*array.length)
                    ];
                    $('.pc span').attr("class", "");
                    $('.pc span').addClass(pc);
                   
                    if(you == pc){
                        yourscore += 0.5;
                        pcscore += 0.5;
                    } else if(you == "paper" && pc == "rock"){
                        yourscore++; 
                    } else if(you == "rock" && pc == "scissor"){
                        yourscore++; 
                    } else if(you == "scissor" && pc == "paper"){
                        yourscore++;
                    } else if(pc == "paper" && you == "rock"){
                        pcrscore++ ; 
                    } else if(pc == "rock" && you == "scissor"){
                        pcrscore++ ; 
                    } else if(pc == "scissor" && you == "paper"){
                        pcscore++;    
                    }

                    $('.yourscore').html(yourscore);
                    $('.pcscore').html(pcscore); 
                    $(document).foundation();
                });
            });

           