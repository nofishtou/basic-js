class VigenereCipheringMachine {
    constructor(type = true) {
        this.direct = type;	
    }
    encrypt(m, k) {
      m = m.toUpperCase()
      k = k.toUpperCase()
      if(m !== undefined && k !== undefined){
        let result = '';
        let counter = 0;
        let r = '';	
        let text = ''

        for(let i = 0; i < m.length;i++) {
          if( 65 <= m[i].charCodeAt() && m[i].charCodeAt() <= 90){
            text +=m[i]
          }
        }
 
        for(let i = 0; i < text.length; i++  ){	
          let mi = text[i].charCodeAt();
          let ki_s = k[ ( (i>=k.length) ?(i%k.length) : i ) ];
          let ki = ki_s.charCodeAt()
          let c = String.fromCodePoint( (( 26 +  (mi + ki )) % 26) + 65  )		
          r += c;	
        }

        for(let i=0; i < m.length; i++) {
          if(65 <= m[i].charCodeAt() && m[i].charCodeAt() <= 90) {
            result += r[i - counter]
          } else {
            counter++
            result +=m[i]
          }
        }

        if(this.direct) {
          return result
        } else {
          return result.split('').reverse().join('')
        }
        
      } else {
        throw 'Not implemented';
      }
    }
  
    decrypt(m, k) {
      m = m.toUpperCase()
      k = k.toUpperCase()
      if(m !== undefined && k !== undefined) {      
        let r = '';	
        let text = ''
        let result = '';
        let counter = 0;

        for(let i = 0; i < m.length;i++){
          if( 65 <= m[i].charCodeAt() && m[i].charCodeAt() <= 90) {
            text +=m[i]
          }
        }
 
        for(let i = 0; i < text.length; i++  ){	
          let mi = text[i].charCodeAt();
          let ki_s = k[ ( (i >= k.length) ?(i % k.length) : i ) ];
          let ki = ki_s.charCodeAt()
          let c = String.fromCodePoint( ((26 + (mi - ki)) % 26) + 65 )		
          r += c;	
        }

        for(let i=0; i < m.length; i++) {
          if(65 <= m[i].charCodeAt() && m[i].charCodeAt() <= 90) {
            result += r[i - counter]

          } else {
            counter++
            result +=m[i]
          }
        }

        if(this.direct) {
          return result
        } else {
          return result.split('').reverse().join('')
        }
        } else {
            throw 'Not implemented';
        }
    }
}

module.exports = VigenereCipheringMachine;
