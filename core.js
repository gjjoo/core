/*
               .:+*#%@@@@:                                             =++:
          .+#@@@@@%*+=::                                              +@@@%
       =#@@@@#+.                    +***
     +@@@@+                       :@@@@:                     ...     +##*                ...              ......*@@%
     @@@@%=.               +*###%%@@@@@@@@@@@+ .@@@@@@#.:*%@@@@@.   %@@@@    .@@@@+*%@@@@@@@@.      =#@@@@@@@@@@@@%
      =*%@@@@@@@@@%*+=.   .##**=+@@@@:             *@@@@@@@#=.     =@@@@    .@@@@@@@@+  *@@@%    :%@@@@#=.    %@@@.
               ..=*@@@@@        @@@@=              @@@@@%:        .@@@@.    @@@@@@*    :@@@@    @@@@%:        @@@#
                   #@@@@       %@@@#              %@@@@=          %@@@+    @@@@@*      @@@@+   @@@@#        =@@@@
               .+%@@@@+       =@@@@              #@@@@           =@@@%    +@@@@.      +@@@@    @@@@*    .+%@@@@@=
         :=*%@@@@@*=         .@@@@+             %@@@@            @@@@     @@@@.       @@@@*     *@@@@@@@@%+%@@@%
 :**#@@@@@@%*=:               #@@@%            +@@@#            .###:     ===.        =++:                =@@@@
 .++=:.                                                                                                  +@@@@
                                                                                                ***==:..#@@@@
                                                                                                +*#@@@@@@@@#
*/
/**
 * {숫자} 중괄호의 숫자를 넘어온 인수로 변환시킨다
 * @param1, @param2, @param3, ...
 * @return {String}
 */
String.prototype.format = function() {
    var theString = this;
    
    for(var i=0; i<arguments.length; i++) {
        var regExp = new RegExp('\\{'+i+'\\}', 'gm');
        theString = theString.replace(regExp, arguments[i]);
    }

    return theString;
};

/**
 * 문자열의 바이트 길이를 반환한다
 * @return {String}
 */
String.prototype.getByte = function() {
    var valueByte = this.length;
    for (i = 0, l = this.length; i < l; i++) {
        if (this.charCodeAt(i) > 128) valueByte++;
    }
    return valueByte;
};

/**
 * 사용자가 정의한 포맷 형식인지 체크한다
 * @param {String}
 * @param {RegExp}
 * @return {Boolean}
 */
function isValidFormat(str, reg) {
    if (reg.test(str)) {
        return true;    
    }
    return false;
}

/**
 * 해당 문자열이 전화번호 형식(숫자-숫자-숫자)인지 체크한다
 * @param {String}
 * @return {Boolean}
 */
function isValidPhone(str) {
    var reg = /^(\d+)-(\d+)-(\d+)$/;
    return isValidFormat(str, reg);
}

/**
 * 해당 문자열이 이메일 형식인지 체크한다
 * @param {String}
 * @return {Boolean}
 */
function isValidEmail(str) {
    var reg = /^((\w|[\-\.])+)@((\w|[\-\.])+)\.([A-Za-z]+)$/;
    return isValidFormat(str, reg);
}

/**
 * 해당 문자열이 주민등록번호 형식인지 체크한다
 * @param {String}
 * @return {Boolean}
 */
function isValidPersonalNo(str) {
    var reg = /^(\d{6})-(\d{7})$/;
    return isValidFormat(str, reg);
}


/*
       .@@@@#          %@@+                                             .@@@=
      =@@@@@@=       *@@#                                               @@@=
     +@@@ .@@@     :@@@=   :++.       :==    :==. :++++   :++++:     @@@: .:::.           .=+*##**:   :===.    :++*.
    *@@@   *@@%   *@@@    +@@@.     =@@@+   #@@@@@@+%@@@@@%=@@@@    @@@@@@@##@@@%      =%@@%+: =@@@*  :=*@@@#@@@%*=
   +@@@     @@@: %@@#    =@@@.     #@@@*   *@@@@*  :@@@@=  :@@@    #@@@#:     @@@+   :@@@= :+#@@@%+      @@@@#.
  :@@@.     *@@%%@@*    :@@@:   =%@@@@@   =@@@*   :@@@+    @@@+   =@@@      =@@@+  %@@@@#%%#+=.         @@@@
  @@@*      .@@@@@*     @@@@=#@@@#=@@@=  :@@@+   :@@@=    *@@@    @@@: :=*@@@%=     .@@@=   .:+#@@%    @@@%
 +%%#        *@@@+      :*###*=   .%%*   +*++    =**=     :++=    =*##%#*+=.          +#%@@@%#*=.     @@@#
  
*/
/**
 * 숫자값을 Byte로 인식하여 값의 크기에 따라 KB,MB,GB의 형식으로 반환합니다
 * @return {String}
 */
Number.prototype.byte = function() { 
    var n_unit = "KB";
    var myByte = this / 1024;

    if (myByte / 1024 > 1) { 
        n_unit = "MB";
        myByte = myByte / 1024;
    }
    if (myByte / 1024 > 1) {
        n_unit = "GB";
        myByte = myByte / 1024;
    }

    return Math.round10(myByte,-1) + n_unit;
};

/**
 * 나누기 연산결과를 반환합니다. 단, 인수가 0인경우 연산결과는 오류 없이 0을 반환합니다.
 * @param {Number}
 * @return {Number}
 */
Number.prototype.div = function() {
    if (arguments[0] != 0) {
        return this / arguments[0];
    } else {
        return 0;
    }
};


/*
                      =#@@@@@@#
                   :%@@@@@@@@@.
                 *@@@@@= @@@@%
              .%@@@@%.  *@@@@.  .::::.       .:==+.  .::.:        .====          .===+==.:+**:
            :%@@@@#    .@@@@#   #%@@@@@@+:*%@@@@@@=  %%@@@@@@==*@@@@@@%:     +%@@@@@@%@@@@@@@:    :@@@@%         =%%%+
          .%@@@@+      #@@@@.       #@@@@@@@@*:          @@@@@@@@%*:      =@@@@@%=     +@@@@:    :@@@@#        :@@@@@:
         #@@@@@@@@@@@@@@@@@#       .@@@@@@*             :@@@@@@+        +@@@@@+       .@@@@*    .@@@@*       .%@@@@%
       +@@@@%:: ...   +@@@@=       @@@@@%              .@@@@@*         #@@@@*        +@@@@@     @@@@#      =%@@@@@%
     :@@@@@:          @@@@@       @@@@@+              .@@@@@:         .@@@@%       *@@@@@@#    #@@@%    :*@@@@@@@%
    #@@@@+           :@@@@#      @@@@@:              :@@@@@.          .@@@@@*:.:+@@@@%@@@@*   .@@@@%=*%@@@@#@@@@@.
  +@@@@%             +@@@@+    .@@@@@=              =@@@@@.             +#@@@@@@@%*:  %@@@*    .*%%%@@#*+. =@@@@+
 :@@@@=               ....      .:..                 .::.                                                  @@@@@
                                                                                                          *@@@@+
                                                                                                          @@@@@
                                                                                                         =@@@@*
*/
/**
 * 배열값중 최대값을 반환한다
 * @param {Array} numArray
 * @return {Number}
 */
function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

/**
 * 배열값중 최소값을 반환한다
 * @param {Array} numArray
 * @return {Number}
 */
function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
}

/**
 * 배열안의 값을 지운다
 */
Array.prototype.clear = function () {
    this.length = 0;
    return this;
};

/**
 * 배열의 첫번값을 반환한다
 */
Array.prototype.first = function () {
	return this[0];
};

/**
 * 배열의 마지막값을 반환한다
 */
Array.prototype.last = function () {
	return this[this.length - 1];
};


/*
         :***=                      :#@@@@%                                                          .@@@@@=
        *@@@@@@.                  *@@@@@@@@                                                          @@@@@*
       :@@@@@@@@                *@@@@@@@@@:                                                         %@@@@#
       @@@@@@@@@+            .#@@@@%*@@@@*                                       +@@@@@            #@@@@%
      *@@@@:#@@@@.         .#@@@@%. %@@@@.            .:=====:.:+**=            #@@@@#    ...     #@@@@%   .:=====:
     .@@@@# :@@@@%       .#@@@@%:  =@@@@+         =#@@@@@@@@@@@@@@@=   =*#%%%@@@@@@@@@@@@@@@@*   +@@@@@+%@@@@@@@@@@@*
     %@@@@.  %@@@@=     *@@@@@:    @@@@@       =%@@@@@#:     %@@@@+    #%###++%@@@@#.           +@@@@@@@@%+:   %@@@@=
    =@@@@#   :@@@@@   +@@@@@=     =@@@@*     =@@@@@%:       :@@@@#           :@@@@%            =@@@@@@*.      =@@@@%
    @@@@@:    %@@@@:.@@@@@*       %@@@@.    %@@@@@.        +@@@@@.          :@@@@@            :@@@@@+         @@@@@=
   +@@@@#     =@@@@@@@@@@.       .@@@@%    +@@@@%        =@@@@@@%           @@@@@:           :@@@@@:         :@@@@@
  .@@@@@:      @@@@@@@@#         +@@@@=    #@@@@@     :*@@@@@@@@*          #@@@@+           .@@@@@:          *@@@@%
  #@@@@%       =@@@@@@=          #@@@@.     %@@@@@@@@@@@@#:=@@@@#         =@@@@@*          .@@@@@*           %@@@@#
 .%%%%%:        :===.            +%%#=        .====++:.     :**+.          *%%%%*           +***=             ....

 */
/**
 * 0 ~ 1사이의 숫자중 임의의 값을 반환한다
 * @return {Number}
 */
function getRandom() {
    return Math.random();
}

/**
 * 최소값과 최대값 사이의 숫자중 임의의 값을 반환한다
 * @param {Number} min 최소값
 * @param {Number} max 최대값
 * @return {Number}
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * 최소값과 최대값 사이의 정수형 숫자중 임의의 값을 반환한다
 * @param {Number} min 최소값
 * @param {Number} max 최대값
 * @return {Integer}
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/** 
 * 숫자의 진수를 조정한다
 * @param {String} type
 * @param {Number} value
 * @param {Integer} exp  1:10단위, -1:소숫점 첫번째, -2:소숫점 두번째, ...
 * @return {Number}
 */
(function(){
    function decimalAdjust(type, value, exp) {
        
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
    
    /**
     * 반올림 소숫점 제어
     */
    if (!Math.round10) {
        Math.round10 = function(value, exp) {
          return decimalAdjust('round', value, exp);
        };
    }
    /**
     * 내림 소숫점 제어
     */
    if (!Math.floor10) {
        Math.floor10 = function(value, exp) {
          return decimalAdjust('floor', value, exp);
        };
    }
    /**
     * 올림 소숫점 제어
     */
    if (!Math.ceil10) {
        Math.ceil10 = function(value, exp) {
          return decimalAdjust('ceil', value, exp);
        };
    }
    
})();