/*
                .:+*#%@@@@:                                               =++:
           .+#@@@@@%*+=::                                                +@@@%
        =#@@@@#+.                     +***
      +@@@@+                        :@@@@:                     ...      +##*                   ...               ......*@@%
      @@@@%=.                +*###%%@@@@@@@@@@@+ .@@@@@@#.:*%@@@@@.    %@@@@        .@@@@+*%@@@@@@@@.       =#@@@@@@@@@@@@%
       =*%@@@@@@@@@%*+=.    .##**=+@@@@:             *@@@@@@@#=.      =@@@@        .@@@@@@@@+  *@@@%     :%@@@@#=.    %@@@.
                ..=*@@@@@         @@@@=              @@@@@%:         .@@@@.        @@@@@@*    :@@@@     @@@@%:        @@@#
                    #@@@@        %@@@#              %@@@@=           %@@@+        @@@@@*      @@@@+    @@@@#        =@@@@
                .+%@@@@+        =@@@@              #@@@@            =@@@%        +@@@@.      +@@@@     @@@@*    .+%@@@@@=
          :=*%@@@@@*=          .@@@@+             %@@@@             @@@@         @@@@.       @@@@*      *@@@@@@@@%+%@@@%
  :**#@@@@@@%*=:                #@@@%            +@@@#             .###:         ===.        =++:                 =@@@@
  .++=:.                                                                                                         +@@@@
                                                                                                        ***==:..#@@@@
                                                                                                        +*#@@@@@@@@#
*/
/**
 * {숫자} 중괄호의 숫자를 넘어온 인수로 변환시킨다
 * @param1, @param2, @param3, ...
 * @return {String}
 */
String.prototype.format = function(){
    var theString = this;
    
    for(var i=0; i<arguments.length; i++){
        var regExp = new RegExp('\\{'+i+'\\}', 'gm');
        theString = theString.replace(regExp, arguments[i]);
    }

    return theString;
}


/*
        .@@@@#          %@@+                                                  .@@@=
       =@@@@@@=       *@@#                                                    @@@=
      +@@@ .@@@     :@@@=        :++.       :==      :==. :++++   :++++:     @@@: .:::.           .=+*##**:   :===.    :++*.
     *@@@   *@@%   *@@@         +@@@.     =@@@+     #@@@@@@+%@@@@@%=@@@@    @@@@@@@##@@@%      =%@@%+: =@@@*  :=*@@@#@@@%*=
    +@@@     @@@: %@@#         =@@@.     #@@@*     *@@@@*  :@@@@=  :@@@    #@@@#:     @@@+   :@@@= :+#@@@%+      @@@@#.
   :@@@.     *@@%%@@*         :@@@:   =%@@@@@     =@@@*   :@@@+    @@@+   =@@@      =@@@+ =%@@@@#%%#+=.         @@@@
   @@@*      .@@@@@*          @@@@=#@@@#=@@@=    :@@@+   :@@@=    *@@@    @@@: :=*@@@%=     .@@@=   .:+#@@%    @@@%
  +%%#        *@@@+           :*###*=   .%%*     +*++    =**=     :++=    =*##%#*+=.          +#%@@@%#*=.     @@@#
  
*/
/**
 * 숫자값 123456789를 123,456,789로 바꿔준다
 * @return {String}
 */
Number.prototype.money = function(){
    var txtNumber = '' + this;
    if (isNaN(txtNumber) || txtNumber == "") { return ""; }
    else {
        var rxSplit = new RegExp('([0-9])([0-9][0-9][0-9][,.])');
        var arrNumber = txtNumber.split('.');
        arrNumber[0] += '.';
        do {
            arrNumber[0] = arrNumber[0].replace(rxSplit, '$1,$2');
        } while (rxSplit.test(arrNumber[0]));
        if (arrNumber.length > 1) {
            return arrNumber.join('');
        } else {
            return arrNumber[0].split('.')[0];
        }
    }
}


/*
                       =#@@@@@@#
                    :%@@@@@@@@@.
                  *@@@@@= @@@@%
               .%@@@@%.  *@@@@.   .::::.       .:==+.  .::.:        .====            .===+==.:+**:
             :%@@@@#    .@@@@#    #%@@@@@@+:*%@@@@@@=  %%@@@@@@==*@@@@@@%:       +%@@@@@@%@@@@@@@:      :@@@@%         =%%%+
           .%@@@@+      #@@@@.        #@@@@@@@@*:          @@@@@@@@%*:        =@@@@@%=     +@@@@:      :@@@@#        :@@@@@:
          #@@@@@@@@@@@@@@@@@#        .@@@@@@*             :@@@@@@+          +@@@@@+       .@@@@*      .@@@@*       .%@@@@%
        +@@@@%:: ...   +@@@@=        @@@@@%              .@@@@@*           #@@@@*        +@@@@@       @@@@#      =%@@@@@%
      :@@@@@:          @@@@@        @@@@@+              .@@@@@:           .@@@@%       *@@@@@@#      #@@@%    :*@@@@@@@%
     #@@@@+           :@@@@#       @@@@@:              :@@@@@.            .@@@@@*:.:+@@@@%@@@@*     .@@@@%=*%@@@@#@@@@@.
   +@@@@%             +@@@@+     .@@@@@=              =@@@@@.               +#@@@@@@@%*:  %@@@*      .*%%%@@#*+. =@@@@+
  :@@@@=               ....       .:..                 .::.                                                      @@@@@
                                                                                                                *@@@@+
                                                                                                                @@@@@
                                                                                                               =@@@@*
*/
/**
 * 배열값중 최대값을 반환한다
 * @param {Array} numArray
 * @return {Number}
 */
function getMaxOfArray(numArray){
    return Math.max.apply(null, numArray);
}

/**
 * 배열값중 최소값을 반환한다
 * @param {Array} numArray
 * @return {Number}
 */
function getMinOfArray(numArray){
    return Math.min.apply(null, numArray);
}

/**
 * 배열안의 값을 지운다
 */
Array.prototype.clear = function (){
    this.length = 0;
    return this;
};

/**
 * 배열의 첫번값을 반환한다
 */
Array.prototype.first = function (){
	return this[0];
};

/**
 * 배열의 마지막값을 반환한다
 */
Array.prototype.last = function (){
	return this[this.length - 1];
};


/*
          :***=                      :#@@@@%                                                                 .@@@@@=
         *@@@@@@.                  *@@@@@@@@                                                                 @@@@@*
        :@@@@@@@@                *@@@@@@@@@:                                                                %@@@@#
        @@@@@@@@@+            .#@@@@%*@@@@*                                          +@@@@@                #@@@@%
       *@@@@:#@@@@.         .#@@@@%. %@@@@.              .:=====:.:+**=             #@@@@#    ...         #@@@@%   .:=====:
      .@@@@# :@@@@%       .#@@@@%:  =@@@@+           =#@@@@@@@@@@@@@@@=    =*#%%%@@@@@@@@@@@@@@@@*       +@@@@@+%@@@@@@@@@@@*
      %@@@@.  %@@@@=     *@@@@@:    @@@@@         =%@@@@@#:     %@@@@+     #%###++%@@@@#.               +@@@@@@@@%+:   %@@@@=
     =@@@@#   :@@@@@   +@@@@@=     =@@@@*       =@@@@@%:       :@@@@#            :@@@@%                =@@@@@@*.      =@@@@%
     @@@@@:    %@@@@:.@@@@@*       %@@@@.      %@@@@@.        +@@@@@.           :@@@@@                :@@@@@+         @@@@@=
    +@@@@#     =@@@@@@@@@@.       .@@@@%      +@@@@%        =@@@@@@%            @@@@@:               :@@@@@:         :@@@@@
   .@@@@@:      @@@@@@@@#         +@@@@=      #@@@@@     :*@@@@@@@@*           #@@@@+               .@@@@@:          *@@@@%
   #@@@@%       =@@@@@@=          #@@@@.       %@@@@@@@@@@@@#:=@@@@#          =@@@@@*              .@@@@@*           %@@@@#
  .%%%%%:        :===.            +%%#=          .====++:.     :**+.           *%%%%*               +***=             ....

*/
/**
 * 0 ~ 1의 값을 반환한다
 * @return {Number}
 */
function getRandom(){
    return Math.random();
}

/**
 * 최소값과 최대값 사이의 숫자를 반환한다
 * @param {Number} min 최소값
 * @param {Number} max 최대값
 * @return {Number}
 */
function getRandomArbitrary(min, max){
    return Math.random() * (max - min) + min;
}

/**
 * 최소값과 최대값 사이의 정수형 숫자를 반환한다
 * @param {Number} min 최소값
 * @param {Number} max 최대값
 * @return {Integer}
 */
function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

/** 
 * 숫자의 진수를 조정한다
 * @param {String} type
 * @param {Number} value
 * @param {Integer} exp
 * @return {Number}
 */
(function(){
    function decimalAdjust(type, value, exp){
        
        if (typeof exp === 'undefined' || +exp === 0) {
          return Math[type](value);
        }
        value = +value;
        exp = +exp;
        
        if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
          return NaN;
        }
        
        // Shift
        value = value.toString().split('e');
        value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
        // Shift back
        value = value.toString().split('e');
        return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    }
    
    // Decimal round
    if (!Math.round10) {
        Math.round10 = function(value, exp) {
          return decimalAdjust('round', value, exp);
        };
    }
    // Decimal floor
    if (!Math.floor10) {
        Math.floor10 = function(value, exp) {
          return decimalAdjust('floor', value, exp);
        };
    }
    // Decimal ceil
    if (!Math.ceil10) {
        Math.ceil10 = function(value, exp) {
          return decimalAdjust('ceil', value, exp);
        };
    }
    
})();


