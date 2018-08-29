document.writeln('\nThis is a Closure Example.');

        var addTo = function(passed){
            
            var add = function(inner){
                return passed + inner;
            }

            return add;

        }

        var addThree = addTo(3);
        
        console.dir(addThree);
        document.writeln('addThree(1) result: '+ addThree(1));

        document.writeln('\nThis is an Apply Invocation Pattern Example');

        var add = function(a, b){
            return a + b;
        }
        var array = [3, 4];
        var sum = add.apply(null, array);

        document.writeln('sum = ' + sum);

        document.writeln('\nThis is an Arguement Example.');
        
        var hugeSum = function(){
            var i, sum = 0;
            for (i = 0; i < arguments.length; i += 1){
                sum += arguments[i];
            }
            return sum;
        }

        document.writeln('hugeSum(1, 2, 3, 4, 5) result: ' + hugeSum(1, 2, 3, 4, 5));

        document.writeln('\nThis is an Agumenting Types Example');

        Function.prototype.method = function(name , func){
            if(!this.prototype[name]){
                this.prototype[name] = func;
                return this;
            }
        }

        Number.method('integer', function() {
            return Math[this < 0 ? 'ceil' : 'floor'](this);
        });

        document.writeln('(-10 / 3).integer() result: ' + (-10 / 3).integer());

        document.writeln('\nThis is a Module Example');

        var serial_maker = function() {
            var prefix = '';
            var seq = 0;
            return {
                set_prefix: function(p){
                    prefix = String(p);
                },
                set_seq : function(s){
                    seq = s;
                },
                gensym: function(){
                    var result = prefix + seq;
                    seq++;
                    return result;
                }
            };
        };

        var seqer = serial_maker();
        seqer.set_prefix('Q');
        seqer.set_seq(1000);
        var unique1 = seqer.gensym();
        var unique2 = seqer.gensym();

        //Using Template Luterals

        document.writeln('unique1 result: ' + unique1};
        document.writeln('unique2 result: ' + unique2);