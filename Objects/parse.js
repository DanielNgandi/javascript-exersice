//Write a JavaScript function to parse an URL.

function parseURL(url) {
    var parsedURL = new URL(url);
    var result = {
      protocol: parsedURL.protocol,
      hostname: parsedURL.hostname,
      port: parsedURL.port,
      pathname: parsedURL.pathname,
      search: parsedURL.search,
      hash: parsedURL.hash
    };
    return result;
  }
  var url = "https://www.example.com:8080/path/to/page?param1=value1&param2=value2#section1";
  var parsed = parseURL(url);
  console.log(parsed);
  
  