"use strict";
class Parsed_url {

  constructor(href,hash,port,host,protocol,hostname,pathname,origin) {
    this.href = href
    this.hash = hash
    this.port=port
    this.host=host
    this.protocol=protocol
    this.hostname=hostname
    this.pathname=pathname
    this.origin=origin
  }
  

}
function parseUrl(url){
    let hash=""
    let port=""
    let host=""
    let protocol=""
    let pathname=""
    let rest=url
    if(rest.includes('#')){
        hash='#'+rest.split('#')[1]
        rest= rest.split('#')[0] 
    }
    if(rest.includes('?')){
        rest= rest.split('?')[0]
    }
    protocol=rest.split('//')[0]
    rest=rest.split('//')[1]
    if(rest.includes('/')){
        pathname='/'+rest.split(/[/](.*)/s)[1]
        rest = rest.split(/[/](.*)/s)[0]   
    }
    host=rest
    if(rest.includes(':')){    
        port = rest.split(':')[1]
        rest = rest.split(':')[0]
    }
    let parsed= new Parsed_url(url,hash,port,host,protocol,rest,pathname,protocol+'//'+host)
    return parsed
}
let a = parseUrl('http://sys.it-co.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo')
console.log( a.href == "http://sys.it-co.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo" )
console.log( a.hash == "#foo" )
console.log( a.port == "8080" )
console.log( a.host == "sys.it-co.ru:8080" )
console.log( a.protocol == "http:" )
console.log( a.hostname == "sys.it-co.ru" )
console.log( a.pathname == "/do/any.php" )
console.log( a.origin == "http://sys.it-co.ru:8080" )