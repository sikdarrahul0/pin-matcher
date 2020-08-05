let count = 3;

       if(document.getElementById('pin-field').value == ''){
            document.getElementById('submit-button').disabled = true;
        }
        
        function numberClick(id){
            const number = document.getElementById(id).innerHTML;
            const pinField = document.getElementById('pin-field').value;
            const presentPin = pinField + number;
            document.getElementById('pin-field').value = presentPin;
            if(document.getElementById('pin-field').value != ''){
                document.getElementById('submit-button').disabled = false;
            }
        }
        function notifyChecker(visible,hidden,alertMsg){
            document.getElementById(visible).style.display = 'block';
            document.getElementById(hidden).style.display = 'none';
            alert(alertMsg);
        }
        // random number generate button code
        document.getElementById('generate-button').addEventListener('click',function(){
            const randomPin = Math.floor(1000 + Math.random() * 9000);
            document.getElementById('random-pin').value = randomPin;
            document.getElementById('succeed').style.display = 'none';
            document.getElementById('failed').style.display = 'none'; 
            count = 3;
            document.getElementById('left-count').innerHTML = count + ' try left'
            // document.getElementById('submit-button').disabled = false;   
        })
        // submit button code
        document.getElementById('submit-button').addEventListener('click',function(){
            const randomPin = document.getElementById('random-pin').value;
            const presentPin = document.getElementById('pin-field').value;
            if(randomPin == '' && presentPin == ''){
                document.getElementById('succeed').style.display = 'none';
                document.getElementById('failed').style.display = 'none'; 
            }
            else if(randomPin == presentPin){
                notifyChecker('succeed','failed','successful')
            }
            else{
                notifyChecker('failed','succeed','failure')
                if(count > 1){
                document.getElementById('left-count').innerHTML = count - 1 + ' try left'
                }
                else{
                    document.getElementById('left-count').innerHTML = 'No try left'
                    document.getElementById('submit-button').disabled = true;
                }
                count--;
            }
        })
        // clear button js code
        document.getElementById('clear-all').addEventListener('click',function(){
            document.getElementById('pin-field').value = '';
            if(document.getElementById('pin-field').value == ''){
                document.getElementById('submit-button').disabled = true;
            }
        })
        // single value delete button js code
        document.getElementById('dlt-last-number').addEventListener('click',function(){
            const pinField = document.getElementById('pin-field').value;
            const length = pinField.length;
            document.getElementById('pin-field').value = pinField.slice(0,(length-1));
            if(document.getElementById('pin-field').value == ''){
                document.getElementById('submit-button').disabled = true;
            }    
        })
