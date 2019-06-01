function calc()
            {
                var t1 = parseFloat(document.getElementById('t1').value);
                var t2 = parseFloat(document.getElementById('t2').value);
                
                var oper = document.getElementById('operators').value;
                
                if(oper === '+')
                {
                    document.getElementById('result').value = t1+t2;
                }
                
                if(oper === '-')
                {
                    document.getElementById('result').value = t1-t2;
                }
                
                if(oper === '/')
                {
                    document.getElementById('result').value = t1/t2;
                }
                
                if(oper === '*')
                {
                    document.getElementById('result').value = t1*t2;
                }
            }
result;